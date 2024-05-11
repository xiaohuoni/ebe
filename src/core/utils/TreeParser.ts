import { get } from "lodash";
import { isJSVar } from "./deprecated";
import { generateVarString } from "./compositeType";

interface TreeParserOptions {
  /**
   * 字段别名
   */
  alias?: {
    /**
     * 字段编码
     */
    fieldCode?: string;

    /**
     * 取下级的字段
     */
    children?: string;

    /**
     * 类型
     */
    type?: string;

    /**
     * value值的字段
     * 可以使用 initialData.value  自动根据路径读取
     */
    value?: string;
  };

  /**
   * 是否过滤空字段 undefined;
   * 默认为true
   */
  filterEmpty?: boolean;
}

// 是否需要继续递归
const shouldDeepLoop = (type: string) => { 
  return ['object'].includes(type);
}

/**
 * 树状结构解析器
 */
class TreeParser { 
  constructor(readonly options?: TreeParserOptions) { 

  }

  private get fieldCode() { 
    return this.options?.alias?.fieldCode || 'code';
  }

  private get children() { 
    return this.options?.alias?.children || 'children';
  }

  private get type() { 
    return this.options?.alias?.type || 'type';
  }

  private get value() { 
    return this.options?.alias?.value || 'initialData.value';
  }

  private get filterEmpty() { 
    return this.options?.filterEmpty ?? true;
  }

  private getKey(code: string) { 
    const iCode = code.trim();
    if (
      !/^[\$_a-zA-Z][\d_\$a-zA-Z]{0,}/.test(iCode) && !/^\d+$/.test(iCode)
    ) {
      return `['${code}']`;
    }
    return iCode;
  }


  private getStopFn = () => { 
    let stopFlag = false;
    const stop = () => { 
      stopFlag = true;
    }
    return {
      stop, 
      isStop: stopFlag
    };
  }

  /**
   * 获取代码片段
   * @param key 
   * @param value 
   * @returns 
   */
  private getFragment = (key: string, value: string) => {
    if (!value && this.filterEmpty) {
      return '';
    }
    return `${key}: ${value || undefined}`;
  }

  /**
   * 解析value值
   * @param val 
   * @returns 
   */
  private parseValue = (val: any, type: string) => { 
    if (typeof val === 'string') {
      if (isJSVar(val)) {
        return generateVarString(val);
      } 
    }

    if (['array', 'fieldArray', 'objectArray'].includes(type)) {
      return val || '[]';
    }

    
    return JSON.stringify(val);
  }

  /**
   * 开始解析
   */
  public stringify(tree: any[], replacer?: (options: { key: string, value: any, path: string[] }, stop: () => void) => (any | void)) {
    if (!Array.isArray(tree) || !tree.length) return 'undefined';

    const loop = (list: any[], path: string[]) => { 

      // 字段片段  `key: a`,
      let fragmentCode: string[] = [];
      const brotherKeys: string[] = [];
      list.forEach(item => {
        const code = get(item, this.fieldCode);
        const children = get(item, this.children);
        const type = get(item, this.type);
        const value = this.parseValue(get(item, this.value), type);

        const keyCode = this.getKey(code);

        // 自动检测key是否重复，重复了就放弃该字段
        if (brotherKeys.includes(keyCode)) {
          return;
        }

        brotherKeys.push(keyCode);

        // 更新是否继续下钻
        let shouldNext = shouldDeepLoop(type);

        // 先给予默认值
        let keyVal: string = '';

        if (typeof replacer === 'function') {
          const stopParam = this.getStopFn();

          if (!shouldNext) {
            stopParam.stop();
          }

          let val = replacer({
            key: code,
            value,
            path
          }, stopParam.stop);

          keyVal = this.getFragment(keyCode, val === undefined ? value : val)

          // 更新是否继续下钻
          shouldNext = !stopParam.isStop;
        } else if (!shouldNext) {
          // 不需要递归的情况下，直接赋值即可
          keyVal = this.getFragment(keyCode, value);
        }
        
        // 部分字段为字符串、数字等类型，确实无法下钻。即使用户设置为下钻也不继续执行
        if (!shouldDeepLoop(type)) {
          shouldNext = false;
        }

        // 继续下钻 遍历
        if (shouldNext && Array.isArray(children)) {
          const objCode = loop(children, [...path, code]);
          keyVal = this.getFragment(keyCode, objCode);
        }

        if (keyVal) {
          fragmentCode.push(keyVal);
        }
      });

      return `{${fragmentCode.join(',')}}`;
    }

    
    return loop(tree, []);
  }
}

export default TreeParser;