import { createHooks } from 'hookable';
import {
  IModuleBuilder,
  IParseResult,
  IProjectBuilder,
  IProjectPlugins,
  IProjectSchema,
  IProjectTemplate,
  ISchemaParser,
  LogHooks,
  PostProcessor,
  PrintUtilPrettier,
  PrintUtilProps,
  ResultDir,
  ResultFile,
} from '../types';
import { addDirectory, addFile, createResultDir } from '../utils/resultHelper';

import { PAGE_TYPES } from '../../constants';
import { isBuiltinSlotName } from '../const';
import {
  IContextData,
  ProjectPostProcessor,
  ProjectPreProcessor,
} from '../types/core';
import { CodeGeneratorError } from '../types/error';
import { LogTagsHash, printCmdList } from '../utils/debug';
import { createModuleBuilder } from './ModuleBuilder';

interface IModuleInfo {
  moduleName?: string;
  path: string[];
  files: ResultFile[];
}

export interface ProjectBuilderInitOptions {
  /** 项目模板 */
  template: IProjectTemplate;

  /** 项目插件 */
  plugins: IProjectPlugins;

  /** 模块后置处理器 */
  postProcessors: PostProcessor[];

  /** Schema 解析器 */
  schemaParser: ISchemaParser;

  /** 项目级别的前置处理器 */
  projectPreProcessors?: ProjectPreProcessor[];

  /** 项目级别的后置处理器 */
  projectPostProcessors?: ProjectPostProcessor[];

  /** 是否处于严格模式 */
  inStrictMode?: boolean;

  /** 一些额外的上下文数据 */
  extraContextData?: IContextData;

  /**
   * Hook which is used to customize original options, we can reorder/add/remove plugins/processors
   * of the existing solution.
   */
  customizeBuilderOptions?(
    originalOptions: ProjectBuilderInitOptions,
  ): ProjectBuilderInitOptions;

  printUtil?: PrintUtilProps;
}

export class ProjectBuilder implements IProjectBuilder {
  /** 项目模板 */
  private template: IProjectTemplate;

  /** 项目插件 */
  private plugins: IProjectPlugins;

  /** 模块后置处理器 */
  private postProcessors: PostProcessor[];

  /** Schema 解析器 */
  private schemaParser: ISchemaParser;

  /** 项目级别的前置处理器 */
  private projectPreProcessors: ProjectPreProcessor[];

  /** 项目级别的后置处理器 */
  private projectPostProcessors: ProjectPostProcessor[];

  /** 是否处于严格模式 */
  readonly inStrictMode: boolean;

  /** 一些额外的上下文数据 */
  readonly extraContextData: IContextData;

  readonly hooks: LogHooks;
  readonly printUtil: PrintUtilProps;

  constructor(builderOptions: ProjectBuilderInitOptions) {
    let customBuilderOptions = builderOptions;
    if (typeof builderOptions.customizeBuilderOptions === 'function') {
      customBuilderOptions =
        builderOptions.customizeBuilderOptions(builderOptions);
    }
    const {
      template,
      plugins,
      postProcessors,
      schemaParser,
      projectPreProcessors = [],
      projectPostProcessors = [],
      inStrictMode = false,
      extraContextData = {},
      printUtil = {} as PrintUtilProps,
    } = customBuilderOptions;
    this.template = template;
    this.plugins = plugins;
    this.postProcessors = postProcessors;
    this.schemaParser = schemaParser;
    this.projectPreProcessors = projectPreProcessors;
    this.projectPostProcessors = projectPostProcessors;
    this.inStrictMode = inStrictMode;
    this.extraContextData = extraContextData;

    const defaultPrettier: PrintUtilPrettier = ({
      tag,
      childTag = '',
      msg,
      progress,
      childProcess = '',
      end = '',
    }) => {
      if (end) {
        console.log(`${tag} ${msg} ${end}`);
      }
      return console.log(
        `${tag}${childTag} ${msg} ${childProcess} ${progress}`,
      );
    };
    // 允许用户不传 printUtil
    const { prettier = defaultPrettier, onOff = false } = printUtil;
    this.printUtil = {
      prettier,
    };
    // log
    const hooks = createHooks();

    // 这个和整体模块数相关
    // why -1? 最后一个 end log 不算进度
    const hooksLength = Object.keys(LogTagsHash).length - 1;
    hooks.afterEach((result) => {
      // 关闭不打印
      if (onOff) return;
      const { name = '', args = [] } = result;
      const { msg = '', childProcess = 0 } =
        (args[0] as { msg: string; childProcess?: number }) || {};
      const [type, childType] = name.split(':');
      let logTag = LogTagsHash[type];
      let childLogTag;

      let process = '0';
      if (logTag) {
        if (childType) {
          childLogTag = logTag?.childProcess?.[childType];
        }

        if (logTag.progress > hooksLength) {
          this.printUtil.prettier!({
            tag: `[${logTag.tag}]`,
            msg,
            end: '出码模块执行完毕，自动下载项目 zip，请关注浏览器【下载】',
          });
        } else if (childLogTag) {
          const childProcessLength = Object.keys(logTag?.childProcess).length;
          process = parseFloat(
            ((logTag?.progress - 1) / hooksLength) * 100 +
              ((childLogTag?.progress - 1) / childProcessLength) * 10 +
              // 子进程的子进程，只占1%
              childProcess +
              '',
          ).toFixed(2);
          this.printUtil.prettier!({
            tag: `[${logTag.tag}]`,
            childTag: `[${childLogTag?.tag}]`,
            progress: `(总进度: ${process}%)`,
            childProcess: `{ 进度：${childLogTag?.progress}/${childProcessLength} }`,
            msg,
          });
        } else {
          if (childProcess) {
            process = parseFloat(
              //  - childProcess / childProcess？存在子进程则减1
              ((logTag?.progress - 1) / hooksLength) * 100 +
                childProcess * 10 +
                '',
            ).toFixed(2);
          } else {
            process = parseFloat(
              (logTag?.progress / hooksLength) * 100 + childProcess * 10 + '',
            ).toFixed(2);
          }

          this.printUtil.prettier!({
            tag: `[${logTag.tag}]`,
            progress: `(总进度: ${process}%)`,
            msg,
          });
        }
      }
    });
    this.hooks = hooks;
  }

  async generateProject(
    originalSchema: IProjectSchema | string,
  ): Promise<ResultDir> {
    // Init
    const { schemaParser, hooks } = this;

    let schema: IProjectSchema =
      typeof originalSchema === 'string'
        ? JSON.parse(originalSchema)
        : originalSchema;
    // Parse / Format
    // Preprocess
    let preProcessorCount = 1;
    const projectPreProcessorsLength = this.projectPreProcessors.length;
    if (!projectPreProcessorsLength) {
      hooks.callHook('preProcessor', {
        msg: `无需执行前置处理器`,
      });
    }
    for (const preProcessor of this.projectPreProcessors) {
      // eslint-disable-next-line no-await-in-loop
      schema = await preProcessor(schema);
      hooks.callHook('preProcessor', {
        msg: `进度${preProcessorCount}/${projectPreProcessorsLength}`,
        childProcess: preProcessorCount / projectPreProcessorsLength,
      });
      preProcessorCount += 1;
    }

    // Validate
    if (!schemaParser.validate(schema)) {
      throw new CodeGeneratorError('Schema is invalid');
    }

    // Collect Deps
    // Parse JSExpression
    const parseResult: IParseResult = schemaParser.parse(
      schema,
      this.extraContextData?.options,
      {
        ...hooks,
        // 简化子进程，写法
        callHook: (name, ...args) => {
          return hooks.callHook(`schemaParser:${name}`, ...args);
        },
      } as LogHooks,
    );
    hooks.callHook('generateTemplate', {
      msg: `执行公共文件生成器`,
    });
    const projectRoot = await this.template.generateTemplate(
      parseResult,
      this.postProcessors,
    );

    let buildResult: IModuleInfo[] = [];

    const builders = this.createModuleBuilders({
      extraContextData: {
        projectRemark: parseResult?.project?.projectRemark,
        template: this.template,
      },
    });
    // Generator Code module
    // components
    // pages

    const pagesLength = parseResult.containers.length;
    const containerBuildResult: IModuleInfo[] = await Promise.all<IModuleInfo>(
      parseResult.containers.map(async (containerInfo, index) => {
        let builder: IModuleBuilder = builders.pages;
        let path: string[];
        if (containerInfo.containerType === 'Modal') {
          path = this.template.slots.modalPages.path;
        } else if (containerInfo.containerType === 'Drawer') {
          path = this.template.slots.drawerPages.path;
        } else if (containerInfo.containerType === 'Popover') {
          path = this.template.slots.popoverPages.path;
        } else if (PAGE_TYPES.includes(containerInfo.containerType)) {
          path = this.template.slots.pages.path;
        } else {
          path = this.template.slots.components.path;
        }
        const { files } = await builder.generateModule(containerInfo);
        hooks.callHook('containers', {
          msg: `生成 ${containerInfo.containerType} - ${
            containerInfo.moduleName
          } 进度${index + 1}/${pagesLength}`,
          childProcess: (index + 1) / pagesLength,
        });
        return {
          moduleName: containerInfo.moduleName,
          path,
          files,
        };
      }),
    );
    buildResult = buildResult.concat(containerBuildResult);

    // app
    if (parseResult.app && builders.app) {
      hooks.callHook('app', {
        msg: `生成运行时配置，配置项目钩子，生命周期函数...`,
      });
      const { files } = await builders.app.generateModule(parseResult.app);

      buildResult.push({
        path: this.template.slots.app.path,
        files,
      });
    }
    // pageview
    if (parseResult.pageview && builders.pageview) {
      hooks.callHook('pageview', {
        msg: `生成页面视图，建立页面之间联系`,
      });
      const { files } = await builders.pageview.generateModule(
        parseResult.pageview,
      );

      buildResult.push({
        path: this.template.slots.pageview.path,
        files,
      });
    }
    // router
    if (parseResult.globalRouter && builders.router) {
      const { files } = await builders.router.generateModule(
        parseResult.globalRouter,
      );

      buildResult.push({
        path: this.template.slots.router.path,
        files,
      });
    }

    // appConfig
    if (builders.appConfig) {
      hooks.callHook('appConfig', {
        msg: `生成项目级配置，配置代理`,
      });
      const { files } = await builders.appConfig.generateModule(parseResult);

      buildResult.push({
        path: this.template.slots.appConfig.path,
        files,
      });
    }

    // packageJSON
    if (parseResult.project && builders.packageJSON) {
      const { files } = await builders.packageJSON.generateModule(
        parseResult.project,
      );
      hooks.callHook('packageJSON', {
        msg: `建立项目模块依赖，装载 ebe utils`,
      });
      buildResult.push({
        path: this.template.slots.packageJSON.path,
        files,
      });
    }

    // globalDataSource
    if (Object.keys(parseResult.models).length > 0 && builders.models) {
      const modelsLength = Object.keys(parseResult.models).length;

      const globalDataBuildResult: IModuleInfo[] =
        await Promise.all<IModuleInfo>(
          Object.keys(parseResult.models).map(async (key, index) => {
            const item = parseResult.models[key]!;
            const { files } = await builders.models.generateModule(item);
            hooks.callHook('globalDataSource', {
              msg: `生成全局数据源 ${item?.moduleName ?? key} 进度${
                index + 1
              }/${modelsLength}`,
              childProcess: (index + 1) / modelsLength,
            });
            return {
              path: ['src', 'models'],
              files,
            };
          }),
        );

      buildResult = buildResult.concat(globalDataBuildResult);
    } else {
      hooks.callHook('globalDataSource', {
        msg: `未使用全局数据源，跳过生成`,
      });
    }

    // handle extra slots
    await this.generateExtraSlots(builders, parseResult, buildResult, hooks);
    const isSingleComponent =
      parseResult?.project?.projectRemark?.isSingleComponent;
    // Combine Modules
    buildResult.forEach((moduleInfo) => {
      let targetDir = getDirFromRoot(projectRoot, moduleInfo.path);
      // if project only contain single component, skip creation of directory.
      if (moduleInfo.moduleName && !isSingleComponent) {
        targetDir = getDirFromRoot(targetDir, [moduleInfo.moduleName]);
      }
      moduleInfo.files.forEach((file) => addFile(targetDir, file));
    });

    // post-processors
    let finalResult = projectRoot;

    for (const projectPostProcessor of this.projectPostProcessors) {
      finalResult = await projectPostProcessor(
        finalResult,
        schema,
        originalSchema,
        {
          template: this.template,
          parseResult,
        },
      );
    }

    hooks.callHook('end');

    printCmdList(parseResult.staticFiles!.platform!);
    return finalResult;
  }

  private createModuleBuilders(
    extraContextData: Record<string, unknown> = {},
  ): Record<string, IModuleBuilder> {
    const builders: Record<string, IModuleBuilder> = {};

    Object.keys(this.plugins).forEach((pluginName) => {
      if (this.plugins[pluginName].length > 0) {
        const options: { mainFileName?: string } = {};
        if (
          this.template.slots[pluginName] &&
          this.template.slots[pluginName].fileName
        ) {
          options.mainFileName = this.template.slots[pluginName].fileName;
        }
        builders[pluginName] = createModuleBuilder({
          plugins: this.plugins[pluginName],
          postProcessors: this.postProcessors,
          contextData: {
            // template: this.template,
            inStrictMode: this.inStrictMode,
            tolerateEvalErrors: true,
            evalErrorsHandler: '',
            ...this.extraContextData,
            ...extraContextData,
          },
          ...options,
        });
      }
    });

    return builders;
  }

  private async generateExtraSlots(
    builders: Record<string, IModuleBuilder>,
    parseResult: IParseResult,
    buildResult: IModuleInfo[],
    hooks: LogHooks,
  ) {
    const length: number = Object.keys(this.template.slots).length;
    let count = 1;
    for (const slotName in this.template.slots) {
      if (!isBuiltinSlotName(slotName)) {
        const { files } = await builders[slotName].generateModule(parseResult);
        hooks.callHook('generateExtraSlots', {
          msg: `执行其他插件 ${slotName} 进度${count}/${length}`,
          childProcess: count / length,
        });
        buildResult.push({
          path: this.template.slots[slotName].path,
          files,
        });
      } else {
        hooks.callHook('generateExtraSlots', {
          msg: `内置插件 ${slotName} 已执行 进度${count}/${length}`,
          childProcess: count / length,
        });
      }
      count += 1;
    }
  }
}

export function createProjectBuilder(
  initOptions: ProjectBuilderInitOptions,
): IProjectBuilder {
  return new ProjectBuilder(initOptions);
}

function getDirFromRoot(root: ResultDir, path: string[]): ResultDir {
  let current: ResultDir = root;
  path.forEach((p) => {
    const exist = current.dirs.find((d) => d.name === p);
    if (exist) {
      current = exist;
    } else {
      const newDir = createResultDir(p);
      addDirectory(current, newDir);
      current = newDir;
    }
  });

  return current;
}
