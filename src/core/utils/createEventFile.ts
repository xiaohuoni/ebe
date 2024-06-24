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
   * 要解构的上下文名称
   */
  paramsName?: string;

  /**
   * 上下文变量
   */
  contextVars?: string[];
}

/**
 * 生成函数主体
 */
type GenerateMainCodeFunction<T extends Record<string, any>> = (
  provider: T & {
    /**
     * 导入依赖
     */
    deps: IDependency[];

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
  },
) => Promise<string>;

export const createFile = async <T extends Record<string, any>>(
  options: {
    deps?: IDependency[];
    provider: T;
  },
  startGenerateMain: GenerateMainCodeFunction<T>,
) => {
  const { deps = [], provider: useProvider } = options;
  // 存储代码
  const storageCode = {
    addEntryCode: [''],
    addImportAfterCode: [''],
    addEndCode: [''],
  };

  // 页面可以通过插件的方式插入到自己想要的位置
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

  const provider: Parameters<GenerateMainCodeFunction<T>>[0] = {
    deps,
    plugins,
    ...useProvider,
  };

  // 生成主代码
  const code = await startGenerateMain(provider);

  // 通过deps 生成 导入语句
  const importString = depsToImportDeclarationCode(provider.deps);

  return [
    storageCode.addEntryCode.join('\n'),
    importString,
    storageCode.addImportAfterCode.join('\n'),
    code,
    storageCode.addEndCode.join('\n'),
  ].join('\n');
};

interface GenerateEventMainParams {
  /**
   * 上下文变量
   */
  contextVars: string[];

  /**
   * 解构上下文
   */
  deconstructionContextCode: string;
}

const createEventFile = async (
  options: DynamicFileOptions,
  startGenerateMain: GenerateMainCodeFunction<GenerateEventMainParams>,
) => {
  const {
    defaultDeps = [],
    containerInfo,
    paramsName,
    contextVars = [],
  } = options;

  const { vars, deps, deconstructionCode } = getContextInfo({
    platform: containerInfo.platform ?? 'pc',
    paramsName,
    includeVars: [
      ...getGlobalDataVars(containerInfo.globalDataSource),
      ...contextVars,
    ],
  });

  // 覆盖原有的deps，防止
  containerInfo.deps = [...(containerInfo.deps || []), ...defaultDeps, ...deps];

  const code = await createFile(
    {
      deps: containerInfo.deps,
      provider: {
        contextVars: vars,
        deconstructionContextCode: deconstructionCode,
      },
    },
    startGenerateMain,
  );

  return code;
};

/**
 * 生成函数代码
 */
export const generatorFuncCode = async (options: {
  prefix?: string;
  functionName?: string;
  type: 'arrowFunction' /* 箭头函数 */ | 'Anonymous' /* 匿名函数 */;
  paramsVars?: {
    type?: string;
    name: string;
  }[];
}) => {
  const {
    functionName,
    type = 'arrowFunction',
    paramsVars = [],
    prefix = '',
  } = options || {};

  const storageCode = {
    funcDefineCode: '',
    insertFuncDefineTop: [''],
    insertFuncHead: [''],
    appendFuncBody: [''],
    returnCode: '',
  };

  if (!['arrowFunction', 'Anonymous'].includes(type)) {
    throw Error('不支持的函数类型');
  }

  if (type === 'arrowFunction') {
    storageCode.funcDefineCode = `const ${functionName} = ${prefix} (${paramsVars
      .map((it) => `${it.name}${it.type ? `:${it.type}` : ''}`)
      .join(',')})  => {`;
  } else if (type === 'Anonymous') {
    storageCode.funcDefineCode = `${prefix} (${paramsVars
      .map((it) => `${it.name}${it.type ? `:${it.type}` : ''}`)
      .join(',')}) => {`;
  }

  const getReturnCode = (code?: string) => {
    if (!code) return '';
    let exitCode = code;
    if (!code.trimStart().startsWith('return ')) {
      exitCode = `return ${code}`;
    }
    return exitCode;
  };

  return {
    /**
     * 函数定义之上
     * @param cb
     */
    insertFuncDefineTop: (cb: () => string) => {
      const code = cb();
      if (code) {
        storageCode.insertFuncDefineTop.push(code);
      }
    },

    /**
     * 插入到到函数定义的顶部
     * @param cb
     */
    insertFuncHead: (cb: () => string) => {
      const code = cb();
      if (code) {
        storageCode.insertFuncHead.push(code);
      }
    },

    /**
     * 追加到函数体
     */
    appendFuncBody: (cb: () => string) => {
      const code = cb();
      if (code) {
        storageCode.appendFuncBody.push(code);
      }
    },

    returnCode: (cb: () => string) => {
      storageCode.returnCode = getReturnCode(cb());
    },

    /**
     * 生成函数
     * @param returnCode 返回代码内容
     */
    toString: (returnCode?: string) => {
      if (returnCode !== undefined) {
        storageCode.returnCode = getReturnCode(returnCode);
      }

      return [
        storageCode.insertFuncDefineTop.join('\n'),
        storageCode.funcDefineCode,
        storageCode.insertFuncHead.join('\n'),
        storageCode.appendFuncBody.join('\n'),
        storageCode.returnCode,
        '}',
      ].join('\n');
    },
  };
};

export default createEventFile;
