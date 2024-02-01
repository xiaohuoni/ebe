import {
  IParseResult,
  ISchemaParser,
  IExternalDependency,
  DependencyType,
  IProjectSchema,
  IRouterInfo,
  IInternalDependency,
  InternalDependencyType,
  IDependency,
  INpmPackage,
  IPublicTypeNodeDataType,
  LXProjectOptions,
} from '../core';
import { handleSubNodes, parseSchema } from '../utils/schema/lxschema';
import { uniqueArray } from '../core/utils/common';
// @ts-ignore
import enPreprocess from '@lingxiteam/factory/es/index.enPreprocess';
// @ts-ignore
import enRunPreprocess from '@lingxiteam/factory/es/index.enRunPreprocess';
import enPreprocessPC from '../utils/factory/pc/index.enPreprocess';
import enRunPreprocessPC from '../utils/factory/pc/index.enRunPreprocess';
import assetHelper from '../utils/schema/assets/assets';
import { LINGXI_PROJECT_VERSION, PAGE_TYPES, MODAL_TYPES } from '../constants';
import { cleanDataSource } from '../utils/schema/cleanDataSource';

import * as _ from 'lodash';

function getInternalDep(
  internalDeps: Record<string, IInternalDependency>,
  depName: string,
) {
  const dep = internalDeps[depName];
  return dep && dep.type !== InternalDependencyType.PAGE ? dep : null;
}

export class SchemaParser implements ISchemaParser {
  validate(): boolean {
    // TODO: 这里要检测数据合法性
    return true;
  }
  parse(
    schemaSrc: IProjectSchema | string,
    options?: LXProjectOptions,
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
      pageIdMapping = {},
    } = options || {};
    // compLib schema.platform
    // 解析三方组件依赖
    // const getPackage = ({ compLib, type }) => {
    //   // TODO：遗留问题，组件包应该正确写明 compLib，现在先写死
    //   // if (
    //   //   compLib === '@/components' ||
    //   //   compLib === 'custom' ||
    //   //   compLib === 'comm'
    //   // ) {

    //   return '@/components/factory';
    //   // }
    //   // return compLib;
    // };
    const getComponentsMap = (root: any, pageId: string) => {
      root.components.forEach((info: any) => {
        if (info?.customClass) {
          customClass += info?.customClass;
        }
        if (info?.props?.staticData?.type === 'static') {
          pageStaticData[pageId] ??= [];
          pageStaticData[pageId].push(info?.props?.staticData?.data?.attrNbr);
        }
        if (info.type === 'Pageview' || info.type === 'Popover') {
          compDeps[info.type] = {
            package: `@/components/${info.type}`,
            dependencyType: DependencyType.External,
            type: info.type,
            exportName: info.exportName ?? info.type,
            version: '*',
            destructuring: false,
          };
        } else if (info.type === 'BOFramer') {
          const typeBOFramer = `BusiComp${
            busiCompMapping[info?.props?.busiCompId] ?? ''
          }`;
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
    containers = schemaArr.map((schema) => {
      getComponentsMap(_.cloneDeep(schema), pageIdMapping[schema.pagePath]);
      const newSchema = parseSchema(schema, true);
      if (newSchema?.pageDynamicFlag && newSchema.pagePath) {
        keepalive.push(newSchema.pagePath);
      }
      if (newSchema.dataSource) {
        dataSources.push({
          moduleName: newSchema.pagePath
            ? newSchema.pagePath
            : `${newSchema.pageContainerType}${newSchema.id}`,
          containerType: newSchema.pageContainerType ?? 'Page',
          type: newSchema.pageContainerType ?? 'Page',
          analyzeResult: {
            isUsingRef: false,
          },
          dataSource: JSON.stringify(
            cleanDataSource(newSchema.dataSource ?? []),
          ),
        });
        // delete newSchema.dataSource;
      }
      return {
        ...newSchema,
        // 简写 业务组件没有 pagePath
        moduleName: newSchema.pagePath
          ? newSchema.pagePath
          : `${newSchema.pageContainerType}${newSchema.id}`,
        containerType: newSchema.pageContainerType ?? 'Page',
        type: newSchema.pageContainerType ?? 'Page',
        analyzeResult: {
          isUsingRef: false,
        },
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
          pageName: page.pageName,
          customWidth: page.customWidth,
          customHeight: page.customHeight,
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

    npms = uniqueArray<INpmPackage>(npms, (i) => i.package).filter(Boolean);

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
          if (i.type === 'BOFramer') {
            const otherType =
              options?.busiCompMapping[i?.props?.busiCompId] ?? '';
            if (otherType) {
              return `BusiComp${otherType}`;
            }
            return i.type;
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
