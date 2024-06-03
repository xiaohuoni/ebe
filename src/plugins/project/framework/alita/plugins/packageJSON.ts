import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';

import { LINGXI_TYPES_VERSION } from '../../../../../constants';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IProjectInfo,
  IPublicTypeNpmInfo,
  PackageJSON,
} from '../../../../../core/types';
import { getErrorMessage } from '../../../../../core/utils/errors';
import { isNpmInfo } from '../../../../../core/utils/schema';
import { calcCompatibleVersion } from '../../../../../core/utils/version';

const pluginFactory: BuilderComponentPluginFactory<any> = (cfg) => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IProjectInfo;

    const npmDeps = getNpmDependencies(ir);
    const options = next.contextData.options;
    const isMobile = options?.platform === 'h5';
    const packageJson: PackageJSON = {
      name: cfg?.packageName || isMobile ? 'app-mobile' : 'app-pc',
      private: true,
      version: cfg?.packageVersion || '1.0.0',
      scripts: {
        build: 'alita build',
        dev: 'alita dev',
        format: 'prettier --write .',
        plugin: 'alita plugin list',
        // TODO: 本地调试不需要
        // postinstall: 'ebe setup && npm run format',
        start: 'alita dev',
      },
      dependencies: {
        react: '^17.0.2',
        'react-dom': '^17.0.2',
        '@alita/flow': '*',
        '@lingxiteam/types': LINGXI_TYPES_VERSION,
        alita: '3.4.0',
        ...(isMobile ? cfg?.dependencies : cfg?.dependenciesPc),
        // 其他组件库
        ...npmDeps.reduce<Record<string, string>>(
          (acc, npm) => ({
            ...acc,
            // TODO: 组件库不从 main 导出，好怪
            [npm.package.split('/es')[0]]: npm.version || '*',
          }),
          {},
        ),
      },
      devDependencies: {
        // TODO: 现状最新的，如果有版本管控，需要建立关联关系
        'ebe-utils': 'latest',
        '@types/react': '^18.0.15',
        '@types/react-dom': '^18.0.6',
        'cross-env': '^6.0.3',
        prettier: '^2',
        'ts-node': '^10',
        typescript: '^4',
        ...cfg?.devDependencies,
      },
      engines: {
        node: '>=14.0.1',
      },
    };

    next.chunks.push({
      type: ChunkType.JSON,
      fileType: FileType.JSON,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: packageJson,
      linkAfter: [],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;

function getNpmDependencies(project: IProjectInfo): IPublicTypeNpmInfo[] {
  const npmDeps: IPublicTypeNpmInfo[] = [];
  const npmNameToPkgMap = new Map<string, IPublicTypeNpmInfo>();

  const allDeps = project.packages;

  allDeps.forEach((dep: any) => {
    if (!isNpmInfo(dep)) {
      return;
    }
    if (dep.package.startsWith('@/')) {
      return;
    }
    const existing = npmNameToPkgMap.get(dep.package);
    // 过滤内部的依赖
    if (!existing) {
      npmNameToPkgMap.set(dep.package, dep);
      npmDeps.push(dep);
      return;
    }

    if (existing.version !== dep.version) {
      try {
        npmNameToPkgMap.set(dep.package, {
          ...existing,
          version: calcCompatibleVersion(existing.version, dep.version),
        });
      } catch (e) {
        throw new Error(
          `Cannot find compatible version for ${
            dep.package
          }. Detail: ${getErrorMessage(e)}`,
        );
      }
    }
  });

  return npmDeps;
}
