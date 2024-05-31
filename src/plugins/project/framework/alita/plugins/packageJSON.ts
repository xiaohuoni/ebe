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
        'lint-staged': 'lint-staged',
        'lint-staged:js': 'eslint --ext .ts,.tsx',
        plugin: 'alita plugin list',
        start: 'NODE_OPTIONS=--max-old-space-size=8192 alita dev',
      },
      'lint-staged': {
        '**/*.less': 'stylelint --syntax less',
        '**/*.css': 'stylelint --syntax css',
        '**/*.{ts,tsx}': 'npm run lint-staged:js',
        '**/*.{ts,tsx,json,jsx,less}': ['git add', 'prettier --write'],
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
      gitHooks: {
        'pre-commit': 'lint-staged',
        'commit-msg': 'alita verify-commit',
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

  allDeps.forEach((dep) => {
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
