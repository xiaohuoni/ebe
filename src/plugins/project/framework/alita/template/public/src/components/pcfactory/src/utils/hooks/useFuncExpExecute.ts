import { useCallback } from 'react';

export type FuncExpExeCuteType = (
  str: string,
  params: ({ key: string; value: any })[],
  execute?: Function,
  getLocale?: Function
) => any;

const funcExpExeCute: FuncExpExeCuteType = (str, params, execute, getLocale?: Function) => {
  if (!str) return '';

  let codeStr = str;

  try {
    if (params && Array.isArray(params)) {
      const isArrowFunc = codeStr.indexOf('=>') !== -1;
      
      if (isArrowFunc) {
        const [funcDefine, funcBody] = codeStr.split('=>');
        codeStr = `function ${funcDefine} ${funcBody}`;
      }
  
      const codeFunc = execute?.(codeStr);

      if (typeof codeFunc !== 'function') {
        throw new Error(getLocale?.('functionWarning') || '必须为函数声明的表达式');
      }
  
      let funcParams: any = [];

      /**
       * TODO: 目前已知的，表格/描述列表/树形控件自定义渲染存在参数格式：
       * 1、存量数据：(text, row/item, index)   注：表格为 row，描述列表/树形控件为 item
       * 2、新数据：(renderParams)
       * 所以，需要兼容两种参数格式解析，在这边临时处理强行弥补
       */
      if (!str.match(/function.*\(renderParams\)/g)) {
        funcParams = params.map(param => param.value);
      } else {
        const objParam: any = {};
  
        params.forEach(param => {
          objParam[param.key] = param.value;
        });
  
        funcParams = objParam;
      }
  
      if (funcParams && Array.isArray(funcParams)) {
        return codeFunc(...funcParams);
      }
  
      return codeFunc(funcParams);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('funcExpExeCute error:', error, str);
    return '';
  }

  return '';
};

export const useFuncExpExecute = (executor: Function, getLocale?: any) => {
  /**
   * 执行表达式
   * @param {string} str 函数表达式 字符串
   * @param {array} params [{ key: '参数名', value: '参数实际值'}]
   * @param {function} execute
   * @returns
   */
  return useCallback((str, params) => {
    return funcExpExeCute(str, params, executor, getLocale);
  }, [executor]);
};
