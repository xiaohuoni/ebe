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
import enPreprocessPC from '@lingxiteam/pcfactory/es/index.enPreprocess';
import enRunPreprocessPC from '@lingxiteam/pcfactory/es/index.enRunPreprocess';
import assetHelper from '../utils/schema/assets/assets';
import { LINGXI_PROJECT_VERSION } from '../constants';

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

    const { platform = 'h5', busiCompMapping = {} } = options || {};
    // compLib schema.platform
    // 解析三方组件依赖
    const getPackage = ({ compLib, type }) => {
      // TODO：遗留问题，组件包应该正确写明 compLib，现在先写死
      // if (
      //   compLib === '@/components' ||
      //   compLib === 'custom' ||
      //   compLib === 'comm'
      // ) {

      return platform === 'h5'
        ? '@lingxiteam/factory/es/index.component'
        : '@lingxiteam/pcfactory/es/index.component';
      // }
      // return compLib;
    };
    const getComponentsMap = (root: any) => {
      root.components.forEach((info: any) => {
        if (info.type === 'Pageview') {
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
            package: getPackage(info),
            dependencyType: DependencyType.External,
            type: info.type,
            exportName: info.exportName ?? info.type,
            // TODO: 先写死的版本号，因为现在主版本号上不是最新的
            version:
              info.compLib === '@/components' ||
              info.compLib === 'custom' ||
              info.compLib === 'comm'
                ? LINGXI_PROJECT_VERSION
                : info.version ?? '*',
            destructuring: info.destructuring ?? true,
          };
        }
        if (info.components) {
          getComponentsMap(info);
        }
      });
    };

    let containers: any[] = [];

    containers = schemaArr.map((schema) => {
      getComponentsMap(schema);
      return {
        ...parseSchema(schema, true),
        // 简写 业务组件没有 pagePath
        moduleName: schema.pagePath
          ? schema.pagePath
          : `${schema.pageContainerType}${schema.id}`,
        containerType: schema.pageContainerType ?? 'Page',
        type: schema.pageContainerType ?? 'Page',
        analyzeResult: {
          isUsingRef: false,
        },
      };
    });

    // 建立所有容器的内部依赖索引
    containers.forEach((container) => {
      if (container.containerType === 'Page') {
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
      .filter((container) => container.containerType === 'Page')
      .map((page) => {
        return {
          path: page.pagePath,
          fileName: page.pagePath,
          type: page.pagePath,
        };
      });

    const routerDeps = routes
      .map((r) => internalDeps[r.type] || compDeps[r.type])
      .filter((dep) => !!dep);

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
      },
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
