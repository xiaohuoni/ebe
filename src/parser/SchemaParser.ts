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
  parse(schemaSrc: IProjectSchema | string): IParseResult {
    const schema = this.decodeSchema(schemaSrc);
    const compDeps: Record<string, IExternalDependency> = {};
    const internalDeps: Record<string, IInternalDependency> = {};

    // compLib schema.platform
    // 解析三方组件依赖
    const getPackage = (compLib: string) => {
      // 遗留问题，组件包应该正确写明 compLib
      if (compLib === '@/components') {
        return schema.platform === 'h5'
          ? '@lingxiteam/factory/es/index.component'
          : '@lingxiteam/pcfactory';
      }
      return compLib;
    };
    const getComponentsMap = (root: any) => {
      root.components.forEach((info: any) => {
        if (info.type) {
          compDeps[info.type] = {
            package: getPackage(info.compLib),
            dependencyType: DependencyType.External,
            type: info.type,
            exportName: info.exportName ?? info.type,
            // TODO: 先写死的版本号，因为现在主版本号上不是最新的
            version:
              info.version || info.compLib === '@/components'
                ? '3.2.1-alpha.44'
                : '*',
            destructuring: info.destructuring ?? true,
          };
        }
        if (info.components) {
          getComponentsMap(info);
        }
      });
    };
    getComponentsMap(schema);

    let containers: any[] = [];

    containers.push({
      ...schema,
      moduleName: schema.pagePath,
      containerType: schema.pageContainerType ?? 'Page',
      type: schema.pageContainerType ?? 'Page',
      analyzeResult: {
        isUsingRef: false,
      },
    });
    // 建立所有容器的内部依赖索引
    containers.forEach((container) => {
      let type;
      switch (container.containerType) {
        case 'Page':
          type = InternalDependencyType.PAGE;
          break;
        case 'Block':
          type = InternalDependencyType.BLOCK;
          break;
        default:
          type = InternalDependencyType.COMPONENT;
          break;
      }

      const dep: IInternalDependency = {
        type,
        moduleName: container.moduleName,
        destructuring: true,
        exportName: container.moduleName,
        dependencyType: DependencyType.Internal,
      };

      internalDeps[dep.moduleName] = dep;
    });

    const containersDeps = ([] as IDependency[]).concat(
      ...containers.map((c) => c.deps || []),
    );

    containers.forEach((container) => {
      const depNames = this.getCompNames(container.components);
      container.deps = uniqueArray<string>(depNames, (i: string) => i)
        .map(
          (depName) =>
            getInternalDep(internalDeps, depName) || compDeps[depName],
        )
        .filter(Boolean);
    });

    const routes: IRouterInfo['routes'] = [];
    routes.push({
      path: schema.pagePath,
      fileName: schema.pagePath,
      type: schema.pageName,
    });
    const routerDeps: IInternalDependency[] = [
      {
        dependencyType: DependencyType.Internal,
        destructuring: false,
        exportName: schema.pageName,
        moduleName: schema.pageName,
        type: InternalDependencyType.PAGE,
      },
    ];
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

    // containers: IContainerInfo[];
    // globalUtils?: IUtilInfo;
    // globalI18n?: IPublicTypeI18nMap;
    // globalRouter?: IRouterInfo;
    // project?: IProjectInfo;
    return {
      containers,
      globalRouter: {
        routes,
        deps: routerDeps,
      },
      project: {
        containersDeps,
        packages: npms || [],
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
        schema = parseSchema(JSON.parse(schemaSrc), true);
      } catch (error) {
        throw new Error(`Parse schema failed: unknown reason`);
      }
    } else {
      schema = parseSchema(schemaSrc, true);
    }
    return schema;
  }
  getCompNames(components: IPublicTypeNodeDataType): string[] {
    return handleSubNodes<string>(
      components,
      {
        node: (i: any) => i.type,
      },
      {
        rerun: true,
      },
    );
  }
}
export default SchemaParser;
