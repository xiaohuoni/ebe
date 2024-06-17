import { isFunction } from 'lodash';

export type TransformPlugin = () => {
  /**
   * 名称
   */
  name: string;

  /**
   * 准备开始编译
   * @param code
   * @returns
   */
  begin?: (code: string) => void;

  /**
   * 转化代码
   * @param code 源代码
   * @returns
   */
  transformCode?: (code: string) => string;

  /**
   * 编译结束
   */
  end?: (code: string) => string;
};

export const defineTransform = (func: TransformPlugin) => func;

/**
 * 安全调用函数
 * @param func
 * @param arg
 * @returns
 */
export const safeCallFunctionCode = (
  func: (code: string) => any = (c) => c,
  code: string = '',
) => {
  if (isFunction(func)) {
    return func(code) ?? code;
  }
  return code;
};

/**
 * 插件解析
 * @param plugins
 * @returns
 */
export const parsePlugins = (plugins: TransformPlugin[]) => {
  const { begins, transformCodes, ends } = plugins.reduce(
    (pre, current) => {
      // @ts-check
      const { begin, transformCode, end } = current();
      const { begins, transformCodes, ends } = pre;
      if (isFunction(begin)) {
        begins.push(begin);
      }

      if (isFunction(transformCode)) {
        transformCodes.push(transformCode);
      }

      if (isFunction(end)) {
        ends.push(end);
      }
      return pre;
    },
    {
      begins: [] as ReturnType<TransformPlugin>['begin'][],
      transformCodes: [] as ReturnType<TransformPlugin>['transformCode'][],
      ends: [] as ReturnType<TransformPlugin>['end'][],
    },
  );

  return {
    runPluginBegin: (code: string) => {
      begins.forEach((func) => safeCallFunctionCode(func, code));
    },
    runPluginTransformCode: (code: string) => {
      let target = code;
      transformCodes.forEach(
        (func) => (target = safeCallFunctionCode(func, target)),
      );
      return target;
    },

    runPluginEnd: (code: string) => {
      let target = code;
      ends.forEach((func) => (target = safeCallFunctionCode(func, target)));
      return target;
    },
  };
};
