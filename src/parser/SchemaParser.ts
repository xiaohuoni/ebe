import * as _ from 'lodash';
import { MODAL_TYPES, PAGE_TYPES } from '../constants';
import {
  DependencyType,
  IDependency,
  IExternalDependency,
  IInternalDependency,
  INpmPackage,
  InternalDependencyType,
  IParseResult,
  IProjectSchema,
  IPublicTypeNodeDataType,
  IRouterInfo,
  ISchemaParser,
  LogHooks,
  LXGlobalDataInfo,
  LXProjectOptions,
} from '../core';
import { uniqueArray } from '../core/utils/common';
import { parse2Var } from '../core/utils/compositeType';
import enPreprocess from '../utils/factory/h5/index.enPreprocess';
import enRunPreprocess from '../utils/factory/h5/index.enRunPreprocess';
import enPreprocessPC from '../utils/factory/pc/index.enPreprocess';
import enRunPreprocessPC from '../utils/factory/pc/index.enRunPreprocess';
import { parseGlobalData } from '../utils/globalDataSource/parseGlobalData';
import assetHelper from '../utils/schema/assets/assets';
import { cleanDataSource } from '../utils/schema/cleanDataSource';
import { getBusiCompName } from '../utils/schema/getBusiCompName';
import {
  handleSubNodes,
  markerLoopComponent,
  parseSchema,
} from '../utils/schema/lxschema';

function getInternalDep(
  internalDeps: Record<string, IInternalDependency>,
  depName: string,
) {
  const dep = internalDeps[depName];
  return dep && dep.type !== InternalDependencyType.PAGE ? dep : null;
}

const CustomComponentName = 'CustomComponent';

export class SchemaParser implements ISchemaParser {
  validate(): boolean {
    // TODO: 这里要检测数据合法性
    return true;
  }
  parse(
    schemaSrc: IProjectSchema | string,
    options?: LXProjectOptions,
    hooks?: LogHooks,
  ): IParseResult {
    const schemaData = this.decodeSchema(schemaSrc);
    const schemaArr = Array.isArray(schemaData) ? schemaData : [schemaData];
    const compDeps: Record<string, IExternalDependency> = {};
    const internalDeps: Record<string, IInternalDependency> = {};
    const pageStaticData: any = {};
    let customClass = '';
    const {
      platform = 'h5',
      busiCompMapping = {},
      compAssetList = [],
      pageIdMapping = {},
    } = options || {};
    const compAssetListMapping: Record<string, any> = {};

    // 细化日志
    // hooks?.callHook('aaa', { msg: 'AAA112312' });

    compAssetList.forEach((asset: any) => {
      compAssetListMapping[asset.compCode] = asset;
    });

    const globalModels: Record<string, LXGlobalDataInfo> = {};
    Object.keys(options?.models || {}).forEach((itemId) => {
      if (options?.models?.[itemId]) {
        globalModels[itemId] = parseGlobalData(options?.models?.[itemId]!);
      }
    });

    // compLib schema.platform
    // 解析三方组件依赖
    const getComponentsMap = (root: any, pageId: string) => {
      root.components.forEach((info: any) => {
        if (info?.customClass) {
          customClass += info?.customClass;
        }
        if (info?.props?.staticData?.type === 'static') {
          pageStaticData[pageId] ??= [];
          pageStaticData[pageId].push(info?.props?.staticData?.data?.attrNbr);
        }
        if (compAssetListMapping[info.type]) {
          compDeps[CustomComponentName] = {
            package: `@/components/factory`,
            dependencyType: DependencyType.External,
            type: CustomComponentName,
            exportName: CustomComponentName,
            version: '*',
            destructuring: true,
          };
        } else if (info.type === 'Pageview' || info.type === 'Popover') {
          compDeps[info.type] = {
            package: `@/components/${info.type}`,
            dependencyType: DependencyType.External,
            type: info.type,
            exportName: info.exportName ?? info.type,
            version: '*',
            destructuring: false,
          };
        } else if (info.type === 'BOFramer' || info.type === 'BusiComp') {
          const typeBOFramer = getBusiCompName(info, 'component');
          compDeps[typeBOFramer] = {
            package: `@/components/${typeBOFramer}`,
            dependencyType: DependencyType.External,
            type: typeBOFramer,
            exportName: typeBOFramer,
            version: '*',
            destructuring: false,
          };
        } else if (info.type) {
          compDeps[info.type] = {
            package: `@/components/factory`,
            dependencyType: DependencyType.External,
            type: info.type,
            exportName: info.exportName ?? info.type,
            version: '*',
            destructuring: true,
          };
          // compDeps[info.type] = {
          //   package: getPackage(info),
          //   dependencyType: DependencyType.External,
          //   type: info.type,
          //   exportName: info.exportName ?? info.type,
          //   // TODO: 先写死的版本号，因为现在主版本号上不是最新的
          //   version:
          //     info.compLib === '@/components' ||
          //     info.compLib === 'custom' ||
          //     info.compLib === 'comm'
          //       ? LINGXI_PROJECT_VERSION
          //       : info.version ?? '*',
          //   destructuring: info.destructuring ?? false,
          // };
        }
        if (info.components) {
          getComponentsMap(info, pageId);
        }
      });
    };

    let containers: any[] = [];
    // keepalive
    let keepalive: string[] = [];

    // dataSource
    let dataSources: any[] = [];
    let globalDatas: any[] = [];

    containers = schemaArr.map((schema) => {
      getComponentsMap(_.cloneDeep(schema), pageIdMapping[schema.pagePath]);
      // 标记循环容器
      markerLoopComponent(schema);
      const newSchema = parseSchema(schema, true);

      if (newSchema?.pageDynamicFlag && newSchema.pagePath) {
        keepalive.push(newSchema.pagePath);
      }
      // 简写 业务组件没有 pagePath
      let moduleName = newSchema.pagePath;
      if (newSchema.pageContainerType === 'BusiComp') {
        moduleName = getBusiCompName(newSchema, 'page');
      }

      // 这里不能做dataSource判断，不然数据无法执行数据源的插件，导致文件无法生成
      // if (newSchema.dataSource) {
      dataSources.push({
        moduleName,
        abc: 1,
        containerType: newSchema.pageContainerType ?? 'Page',
        type: newSchema.pageContainerType ?? 'Page',
        analyzeResult: {
          isUsingRef: false,
        },
        dataSource: JSON.stringify(cleanDataSource(newSchema.dataSource ?? [])),
      });
      // delete newSchema.dataSource;
      // }

      const globalDataSource: Record<string, any> = {};

      (schema.globalDataSource || [])?.forEach((item: any) => {
        const gItem = globalModels[item.id];
        if (!gItem.dataName) return;
        globalDataSource[gItem.dataName] = {
          moduleName: gItem.moduleName,
          namespace: gItem.namespace,
          updateFunctionName: gItem.updateFunctionName,
          reloadFunctionName: gItem.reloadFunctionName,
          resetFunctionName: gItem.resetFunctionName,
          id: item.id,
          dataName: gItem.dataName,
          readyCompleteName: gItem.readyCompleteName,
          initialFunctionName: gItem.initialFunctionName,
        };
      });

      globalDatas.push({
        globalDataSource,
        type: newSchema.pageContainerType ?? 'Page',
        containerType: newSchema.pageContainerType ?? 'Page',
        moduleName,
        analyzeResult: {
          isUsingRef: false,
        },
      });

      return {
        ...newSchema,
        moduleName,
        containerType: newSchema.pageContainerType ?? 'Page',
        type: newSchema.pageContainerType ?? 'Page',
        analyzeResult: {
          isUsingRef: false,
        },
        globalDataSource,
      };
    });

    // 建立所有容器的内部依赖索引
    containers.forEach((container) => {
      if (PAGE_TYPES.includes(container.containerType)) {
        const dep: IInternalDependency = {
          type: container.moduleName,
          moduleName: container.moduleName,
          destructuring: false,
          exportName: container.moduleName,
          dependencyType: DependencyType.Internal,
        };

        internalDeps[dep.moduleName] = dep;
      }
    });

    const containersDeps = ([] as IDependency[]).concat(
      ...containers.map((c) => c.deps || []),
    );

    containers.forEach((container) => {
      const depNames = this.getCompNames(container.components, options);
      container.deps = uniqueArray<string>(depNames, (i: string) => i)
        .map((depName) => {
          if (compAssetListMapping[depName]) {
            return (
              internalDeps[CustomComponentName] || compDeps[CustomComponentName]
            );
          }
          return internalDeps[depName] || compDeps[depName];
        })
        .filter(Boolean);
    });

    // 分析路由配置
    const routes: IRouterInfo['routes'] = containers
      .filter((container) => PAGE_TYPES.includes(container.containerType))
      .map((page) => {
        return {
          path: page.pagePath,
          fileName: page.pagePath,
          type: page.pagePath,
          pageId: pageIdMapping[page.pagePath],
        };
      });

    // 获取 model 的弹窗配置
    const models: IRouterInfo['routes'] = containers
      .filter((container) => MODAL_TYPES.includes(container.containerType))
      .map((page) => {
        const drawObject = _.some(
          {
            okText: page.okText,
            cancelText: page.cancelText,
            drawerTitle: parse2Var(page.drawerTitle),
            modalTitle: parse2Var(page.modalTitle),
          },
          (value) => _.isNil(value) || value === '' || _.isUndefined(value),
        );
        const pcDraw = _.mergeWith({}, drawObject);
        // position: 'top' | 'bottom' | 'right' | 'left';
        // mode: 'alert' | 'sliderLeft' | 'sliderRight' | 'dropdown' | 'popup' | '';
        // closeOnMaskClick: boolean;
        // destroyOnClose: boolean;
        // showCloseButton: boolean;
        // width?: string;
        // height?: string;
        return {
          path: page.pagePath,
          fileName: page.pagePath,
          type: page.pagePath,
          pageId: pageIdMapping[page.pagePath],
          position: page.position,
          width: page.width,
          mode: page.mode,
          closeOnMaskClick: page.closeOnMaskClick,
          height: page.height,
          closeOnClickOverlay: page.closeOnClickOverlay,
          destroyOnClose: page.destroyOnClose,
          showCloseButton: page.showCloseButton,
          // pc model 需要的参数
          pageContainerType: page.containerType,
          pageName: page.pageName,
          customWidth: page.customWidth,
          customHeight: page.customHeight,
          okText: page.okText,
          ...pcDraw,
        };
      });

    // 分析项目 npm 依赖
    let npms: INpmPackage[] = [];
    containers.forEach((con) => {
      const p = (con.deps || [])
        .map((dep: any) => {
          return dep.dependencyType === DependencyType.External ? dep : null;
        })
        .filter((dep: any) => dep !== null);
      const npmInfos: INpmPackage[] = p.filter(Boolean).map((i: any) => ({
        package: (i as IExternalDependency).package,
        version: (i as IExternalDependency).version,
      }));
      npms.push(...npmInfos);
    });

    npms = uniqueArray<INpmPackage>(npms, (i: any) => i.package).filter(
      Boolean,
    );

    return {
      containers,
      dataSources,
      // globalRouter: {
      //   routes,
      //   deps: routerDeps,
      // },
      project: {
        containersDeps,
        packages: npms || [],
      },
      pageview: {
        routes,
        models,
        pageStaticData,
      },
      app: {
        keepalive,
      },
      // 静态文件生成的时候，可以传递一些简单的配置，比如修改一个代理地址，没有必要单独写一个插件？
      staticFiles: options,
      models: globalModels,
      globalDatas,
    };
  }
  decodeSchema(schemaSrc: string | IProjectSchema): IProjectSchema {
    // 注册组件预处理，为了拉平旧数据的差异
    assetHelper.comPreprocess.registerComPreprocess(enPreprocess, 'h5');
    assetHelper.comRunPreprocess.registerRunComPreprocess(
      enRunPreprocess,
      'h5',
    );
    assetHelper.comPreprocess.registerComPreprocess(enPreprocessPC, 'pc');
    assetHelper.comRunPreprocess.registerRunComPreprocess(
      enRunPreprocessPC as any,
      'pc',
    );

    let schema: IProjectSchema;
    if (typeof schemaSrc === 'string') {
      try {
        schema = JSON.parse(schemaSrc);
      } catch (error) {
        throw new Error(`Parse schema failed: unknown reason`);
      }
    } else {
      schema = schemaSrc;
    }
    return schema;
  }
  getCompNames(
    components: IPublicTypeNodeDataType,
    options?: LXProjectOptions,
  ): string[] {
    return handleSubNodes<string>(
      components,
      {
        node: (i: any) => {
          if (i.type === 'BOFramer' || i.type === 'BusiComp') {
            const name = getBusiCompName(i, 'component');
            return name;
          }
          return i.type;
        },
      },
      {
        rerun: true,
      },
    );
  }
}
export default SchemaParser;
