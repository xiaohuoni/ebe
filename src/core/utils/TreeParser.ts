import { get, isPlainObject } from 'lodash';
import { generateVarString } from './compositeType';
import { isJSVar } from './deprecated';

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
};

/**
 * 树状结构解析器
 */
class TreeParser {
  todoProperty: {
    key: string;
    value: string;
    path: string;
  }[] = [];
  constructor(readonly options?: TreeParserOptions) {}

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

  private getKey(code: string = '') {
    const iCode = code.trim();
    if (!/^[\$_a-zA-Z][\d_\$a-zA-Z]{0,}/.test(iCode) && !/^\d+$/.test(iCode)) {
      return `['${code}']`;
    }
    return iCode;
  }

  private getStopFn = () => {
    let stopFlag = false;
    const stop = () => {
      stopFlag = true;
    };
    return {
      stop,
      isStop: stopFlag,
    };
  };

  /**
   * 获取代码片段
   * @param key
   * @param value
   * @returns
   */
  private getFragment = (value: string, type: string) => {
    if (
      !value &&
      this.filterEmpty &&
      !['array', 'fieldArray', 'objectArray', 'object'].includes(type)
    ) {
      return '';
    }

    let placeholder = 'undefined';
    if (type === 'object') {
      placeholder = '{}';
    } else if (['array', 'fieldArray', 'objectArray'].includes(type)) {
      placeholder = '[]';
    }

    return `${value || placeholder}`;
  };

  /**
   * 解析value值
   * @param val
   * @returns
   */
  private parseValue = (val: any) => {
    if (typeof val === 'string') {
      if (isJSVar(val)) {
        return generateVarString(val);
      }
    }

    if (!val) {
      return val;
    }

    return JSON.stringify(val);
  };

  public appendProperty(key: string, value: string, path: string) {
    this.todoProperty.push({
      key,
      value,
      path,
    });
  }

  private getKeyValueByPath(path: string[]) {
    return this.todoProperty
      .filter((it) => it.path === path.join('.'))
      .map((it) => ({
        keyCode: it.key,
        value: it.value,
      }));
  }

  /**
   * 开始解析
   */
  public stringify(
    tree: any,
    replacer?: (
      options: { key: string; value: any; path: string[]; item: any },
      stop: () => void,
    ) => any | void,
  ) {
    if (!isPlainObject(tree) || Object.keys(tree).length === 0)
      return 'undefined';

    const loop = (item: any, path: string[]) => {
      const code = get(item, this.fieldCode);
      const children = get(item, this.children);
      const type = get(item, this.type);
      const value = this.parseValue(get(item, this.value));

      const keyCode = this.getKey(code);

      // 更新是否继续下钻
      let shouldNext = shouldDeepLoop(type);
      // 先给予默认值
      let keyVal: string = value ?? '{}';

      if (typeof replacer === 'function') {
        const stopParam = this.getStopFn();

        if (!shouldNext) {
          stopParam.stop();
        }

        let val = replacer(
          {
            key: code,
            value,
            path,
            item,
          },
          stopParam.stop,
        );

        keyVal = this.getFragment(val === undefined ? value : val, type);

        // 更新是否继续下钻
        shouldNext = !stopParam.isStop;
      } else if (!shouldNext) {
        // 不需要递归的情况下，直接赋值即可
        keyVal = this.getFragment(value, type);
      }

      // 部分字段为字符串、数字等类型，确实无法下钻。即使用户设置为下钻也不继续执行
      if (!shouldDeepLoop(type)) {
        shouldNext = false;
      }

      // 如果value已经有值了，就不在需要下钻
      if (value !== undefined) {
        shouldNext = false;
      }
      // 继续下钻 遍历
      if (shouldNext && Array.isArray(children)) {
        const brotherKeys: string[] = [];
        let fragmentCode: {
          keyCode: string;
          value: string;
        }[] = [];
        children.forEach((it) => {
          const fragmentItem = loop(it, [...path, code]);
          // 自动检测key是否重复，重复了就放弃该字段
          if (brotherKeys.includes(fragmentItem.keyCode)) {
            fragmentCode = fragmentCode.filter(
              (it) => it.keyCode !== fragmentItem.keyCode,
            );
          }
          brotherKeys.push(fragmentItem.keyCode);

          if (fragmentItem.value) {
            fragmentCode.push(fragmentItem);
          }
        });

        keyVal = `{${[...fragmentCode, ...this.getKeyValueByPath(path)]
          .map((item) => `${item.keyCode}: ${item.value}`)
          .join(',')}}`;
      }

      return {
        keyCode,
        value: keyVal,
      };
    };

    const key = loop(tree, []);

    return this.getFragment(key.value, tree.type);
  }
}

export default TreeParser;
