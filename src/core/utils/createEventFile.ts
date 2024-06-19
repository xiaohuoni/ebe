import { getGlobalDataVars } from '../../utils/globalDataSource/template';
import { getContextInfo } from '../../utils/pageVarConfig';
import { groupDepsByPack } from '../plugins/common/esmodule';
import { IContainerInfo, IDependency } from '../types';

/**
 * 导入依赖转成import生命代码
 * @param deps
 * @returns
 */
const depsToImportDeclarationCode = (deps: IDependency[] = []) => {
  const packs = groupDepsByPack(deps);

  const importString = Object.keys(packs)
    .map((pkg: string) => {
      const ips = packs[pkg];
      if (!ips || ips.length === 0) {
        return '';
      }

      // 取出需要importSpecifier的列表。
      const importSpecifier = ips
        .filter((i) => i.destructuring)
        .map((i: any) => i.exportName);
      // exportNames需要保证唯一
      const exportNames = new Set(importSpecifier);

      // 构造解构部分的导出字符串
      const destructure =
        exportNames.size > 0 ? `{ ${[...exportNames].join(',')} }` : '';

      // 默认导出
      const defaultIpsName = ips
        .filter((i) => !i.destructuring)
        .map((it) => it.exportName);

      // 如果发现默认导出有多个不同的名称，需要抛出异常，以便更好的排查问题。
      if (new Set(defaultIpsName).size > 1) {
        const imparityDefaultNames = [...new Set(defaultIpsName)];
        throw new Error(
          `默认导入存在多个不同的变量名，请排查${imparityDefaultNames}`,
        );
      }

      const defaultExportName = defaultIpsName?.[0];

      // 导出的代码
      const exportCode = [defaultExportName, destructure]
        .filter(Boolean)
        .join(',');

      return `import ${exportCode} from '${pkg}';`;
    })
    .join('\n');
  return importString;
};

interface DynamicFileOptions {
  /**
   * 默认依赖
   */
  defaultDeps?: IDependency[];

  /**
   * 页面信息
   */
  containerInfo: IContainerInfo;

  /**
   * 解构的名称
   */
  paramsName?: string;
}

/**
 * 生成函数主体
 */
type GenerateMainCodeFunction = (provider: {
  /**
   * 导入依赖
   */
  deps: IDependency[];
  /**
   * 上下文变量
   */
  contextVars: string[];

  /**
   * 解构上下文
   */
  deconstructionContextCode: string;

  /**
   * 插件
   */
  plugins: {
    /**
     * 在文件的入口出增加， import上面
     * @param cb
     * @returns
     */
    addEntryCode: (cb: () => string | void) => void;

    /**
     * 在文件import之后、startGenerateMain的代码之前插入
     * @param cb
     * @returns
     */
    addImportAfterCode: (cb: () => string | void) => void;

    /**
     * 在文件结尾处增加。处于startGenerateMain之后
     * @param cb
     * @returns
     */
    addEndCode: (cb: () => string | void) => void;
  };
}) => Promise<string>;

const createEventFile = async (
  options: DynamicFileOptions,
  startGenerateMain: GenerateMainCodeFunction,
) => {
  const { defaultDeps = [], containerInfo, paramsName } = options;

  const { vars, deps, deconstructionCode } = getContextInfo({
    paramsName,
    includeVars: getGlobalDataVars(containerInfo.globalDataSource),
  });

  // 存储代码
  const storageCode = {
    addEntryCode: [''],
    addImportAfterCode: [''],
    addEndCode: [''],
  };

  const plugins = {
    addEntryCode: (cb: () => string | void) => {
      const entryCode = cb();
      if (entryCode) {
        storageCode.addEntryCode.push(entryCode);
      }
    },
    addImportAfterCode: (cb: () => string | void) => {
      const importAfterCode = cb();
      if (importAfterCode) {
        storageCode.addImportAfterCode.push(importAfterCode);
      }
    },
    addEndCode: (cb: () => string | void) => {
      const endCode = cb();
      if (endCode) {
        storageCode.addEndCode.push(endCode);
      }
    },
  };

  const provider = {
    deps: [...defaultDeps, ...deps],
    contextVars: vars,
    deconstructionContextCode: deconstructionCode,
    plugins,
  };

  const code = await startGenerateMain(provider);

  // 通过deps 生成 导入语句
  const importString = depsToImportDeclarationCode(provider.deps);

  return [
    storageCode.addEntryCode.join('\n'),
    importString,
    storageCode.addImportAfterCode.join('\n'),
    code,
    storageCode.addEndCode.join('\n'),
  ];
};

export default createEventFile;
