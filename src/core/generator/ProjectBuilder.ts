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

    const defaultPrettier = ({
      tag,
      childTag = '',
      msg,
      progress,
      childProcess = '',
      end = '',
    }: any) => {
      if (end) {
        return `${tag} ${msg} ${end}`;
      }
      return `${tag}${childTag} ${msg} ${childProcess} ${progress}`;
    };
    // 允许用户不传 printUtil
    const {
      log = console.log,
      prettier = defaultPrettier,
      onOff = false,
    } = printUtil;
    this.printUtil = {
      log,
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
      const { msg = '' } = (args[0] as { msg: string }) || {};
      const [type, childType] = name.split(':');
      let logTag = LogTagsHash[type];
      let childLogTag;

      if (logTag) {
        if (childType) {
          childLogTag = logTag?.childProcess?.[childType];
        }

        if (logTag.progress > hooksLength) {
          this.printUtil.log(
            this.printUtil.prettier({
              tag: `[${logTag.tag}]`,
              msg,
              end: '出码模块执行完毕，自动下载项目 zip，请关注浏览器【下载】',
            }),
          );
        } else if (childLogTag) {
          const childProcessLength = Object.keys(logTag?.childProcess).length;
          this.printUtil.log(
            this.printUtil.prettier({
              tag: `[${logTag.tag}]`,
              childTag: `[${childLogTag?.tag}]`,
              progress: `(整体进度: ${logTag?.progress}/${hooksLength})`,
              childProcess: `{ 进度：${childLogTag?.progress}/${childProcessLength} }`,
              msg,
            }),
          );
        } else {
          this.printUtil.log(
            this.printUtil.prettier({
              tag: `[${logTag.tag}]`,
              progress: `(整体进度: ${logTag?.progress}/${hooksLength})`,
              msg,
            }),
          );
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
    for (const preProcessor of this.projectPreProcessors) {
      // eslint-disable-next-line no-await-in-loop
      schema = await preProcessor(schema);
      hooks.callHook('preProcessor', {
        msg: `进度${preProcessorCount}/${projectPreProcessorsLength}`,
      });
      preProcessorCount += 1;
    }

    // Validate
    if (!schemaParser.validate(schema)) {
      throw new CodeGeneratorError('Schema is invalid');
    }

    // Collect Deps
    // Parse JSExpression
    hooks.callHook('schemaParser', { msg: '' });

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
        let builder: IModuleBuilder;
        let path: string[];
        if (PAGE_TYPES.includes(containerInfo.containerType)) {
          builder = builders.pages;
          path = this.template.slots.pages.path;
        } else {
          builder = builders.components;
          path = this.template.slots.components.path;
        }
        hooks.callHook('containers', {
          msg: `进度${index + 1}/${pagesLength}`,
        });
        const { files } = await builder.generateModule(containerInfo);

        return {
          moduleName: containerInfo.moduleName,
          path,
          files,
        };
      }),
    );
    buildResult = buildResult.concat(containerBuildResult);

    // dataSource
    if (parseResult.dataSources && builders.dataSources) {
      const dataSourcesLength = parseResult.dataSources.length;

      const dataSourceBuildResult: IModuleInfo[] =
        await Promise.all<IModuleInfo>(
          parseResult.dataSources.map(async (containerInfo, index) => {
            let path: string[];
            if (PAGE_TYPES.includes(containerInfo.containerType)) {
              path = this.template.slots.pages.path;
            } else {
              path = this.template.slots.components.path;
            }
            hooks.callHook('dataSources', {
              msg: `进度${index + 1}/${dataSourcesLength}`,
            });
            const { files } = await builders.dataSources.generateModule(
              containerInfo,
            );
            return {
              moduleName: containerInfo.moduleName,
              path,
              files,
            };
          }),
        );

      buildResult = buildResult.concat(dataSourceBuildResult);
    }

    // useModels
    if (parseResult.globalDatas && builders.globalData) {
      const globalDataBuildResult: IModuleInfo[] =
        await Promise.all<IModuleInfo>(
          parseResult.globalDatas.map(async (containerInfo) => {
            let path: string[];
            if (PAGE_TYPES.includes(containerInfo.containerType)) {
              path = this.template.slots.pages.path;
            } else {
              path = this.template.slots.components.path;
            }
            const { files } = await builders.globalData.generateModule(
              containerInfo,
            );
            return {
              moduleName: containerInfo.moduleName,
              path,
              files,
            };
          }),
        );
      buildResult = buildResult.concat(globalDataBuildResult);
    }

    // app
    if (parseResult.app && builders.app) {
      hooks.callHook('app', {
        msg: ``,
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
        msg: ``,
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
      hooks.callHook('router', {
        msg: ``,
      });
      const { files } = await builders.router.generateModule(
        parseResult.globalRouter,
      );

      buildResult.push({
        path: this.template.slots.router.path,
        files,
      });
    }

    // entry 不打印日志
    if (parseResult.project && builders.entry) {
      const { files } = await builders.entry.generateModule(
        parseResult.project,
      );

      buildResult.push({
        path: this.template.slots.entry.path,
        files,
      });
    }

    // appConfig
    if (builders.appConfig) {
      hooks.callHook('appConfig', {
        msg: ``,
      });
      const { files } = await builders.appConfig.generateModule(parseResult);

      buildResult.push({
        path: this.template.slots.appConfig.path,
        files,
      });
    }

    // buildConfig
    if (builders.buildConfig) {
      const { files } = await builders.buildConfig.generateModule(parseResult);

      buildResult.push({
        path: this.template.slots.buildConfig.path,
        files,
      });
    }

    // constants?
    if (
      parseResult.project &&
      builders.constants &&
      this.template.slots.constants
    ) {
      const { files } = await builders.constants.generateModule(
        parseResult.project,
      );

      buildResult.push({
        path: this.template.slots.constants.path,
        files,
      });
    }

    // utils?
    if (
      parseResult.globalUtils &&
      builders.utils &&
      this.template.slots.utils
    ) {
      const { files } = await builders.utils.generateModule(
        parseResult.globalUtils,
      );

      buildResult.push({
        path: this.template.slots.utils.path,
        files,
      });
    }

    // i18n?
    if (builders.i18n && this.template.slots.i18n) {
      const { files } = await builders.i18n.generateModule(parseResult.project);

      buildResult.push({
        path: this.template.slots.i18n.path,
        files,
      });
    }

    // globalStyle
    if (parseResult.project && builders.globalStyle) {
      const { files } = await builders.globalStyle.generateModule(
        parseResult.project,
      );

      buildResult.push({
        path: this.template.slots.globalStyle.path,
        files,
      });
    }

    // htmlEntry
    if (parseResult.project && builders.htmlEntry) {
      const { files } = await builders.htmlEntry.generateModule(
        parseResult.project,
      );

      buildResult.push({
        path: this.template.slots.htmlEntry.path,
        files,
      });
    }

    // packageJSON
    if (parseResult.project && builders.packageJSON) {
      hooks.callHook('packageJSON', {
        msg: ``,
      });
      const { files } = await builders.packageJSON.generateModule(
        parseResult.project,
      );

      buildResult.push({
        path: this.template.slots.packageJSON.path,
        files,
      });
    }

    // demo
    if (parseResult.project && builders.demo) {
      const { files } = await builders.demo.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.demo.path,
        files,
      });
    }

    // globalDataSource
    if (Object.keys(parseResult.models).length > 0 && builders.models) {
      const modelsLength = parseResult.models.length;

      const globalDataBuildResult: IModuleInfo[] =
        await Promise.all<IModuleInfo>(
          Object.keys(parseResult.models).map(async (key, index) => {
            const item = parseResult.models[key]!;
            hooks.callHook('globalDataSource', {
              msg: `进度${index + 1}/${modelsLength}`,
            });
            const { files } = await builders.models.generateModule(item);
            return {
              path: ['src', 'models'],
              files,
            };
          }),
        );

      buildResult = buildResult.concat(globalDataBuildResult);
    }

    // handle extra slots
    await this.generateExtraSlots(builders, parseResult, buildResult);

    // Post Process
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
      // eslint-disable-next-line no-await-in-loop
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

    printCmdList();
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
  ) {
    for (const slotName in this.template.slots) {
      if (!isBuiltinSlotName(slotName)) {
        const { files } = await builders[slotName].generateModule(parseResult);
        buildResult.push({
          path: this.template.slots[slotName].path,
          files,
        });
      }
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
