import { get, isPlainObject, set } from 'lodash';
import { parse2Var } from './compositeType';
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
     * 部分属性是动态读取的
     * @returns
     */
    getType?: (item: any) => string;

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

const isArrayType = (type: string) => {
  return ['array', 'objectArray'].includes(type);
};

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
    path: string[];
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

  private getStopFn = () => {
    const context = {
      stopFlag: false,
    };
    const stop = () => {
      context.stopFlag = true;
    };
    return {
      stop,
      context,
    };
  };

  public appendProperty(key: string, value: string, path: string[]) {
    this.todoProperty.push({
      key,
      value,
      path,
    });
  }

  private getType(item: any) {
    if (typeof this.options?.alias?.getType === 'function') {
      return this.options?.alias?.getType(item) ?? this.type;
    }
    return this.type;
  }

  private getPath = (path: string[], code: string) => {
    return [...path, code].filter((it) => it !== '');
  };

  /**
   * 解析
   * @param tree
   * @param replacer
   * @returns
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
    const type = get(tree, this.getType(tree));
    if (isArrayType(type)) return '[]';

    const reqParams: Record<string, any> = {};

    this.todoProperty.forEach(({ key, value, path = [] }) => {
      if (value !== undefined) {
        set(reqParams, [...path, key], value);
      }
    });

    const loop = (item: any, path: string[]) => {
      const code = get(item, this.fieldCode);
      const children = get(item, this.children);

      const type = get(item, this.getType(item));
      let value = get(item, this.value);
      if (isArrayType(type)) value = [];

      // 更新是否继续下钻
      let shouldNext = shouldDeepLoop(type);

      if (typeof replacer === 'function') {
        const stopParam = this.getStopFn();

        if (!shouldNext) {
          stopParam.stop();
        }

        value = replacer(
          {
            key: code,
            value,
            path,
            item,
          },
          stopParam.stop,
        );

        // 更新是否继续下钻
        shouldNext = !stopParam.context.stopFlag;
      }

      // 部分字段为字符串、数字等类型，确实无法下钻。即使用户设置为下钻也不继续执行
      if (!shouldDeepLoop(type)) {
        shouldNext = false;
      }

      // 如果value已经有值了，就不在需要下钻
      if (value !== undefined) {
        set(reqParams, this.getPath(path, item.code), value);
        shouldNext = false;
      }

      // 继续下钻 遍历
      if (shouldNext && Array.isArray(children)) {
        children.forEach((it) => loop(it, this.getPath(path, item.code)));
      }
    };

    loop(
      {
        ...tree,
        code: '',
      },
      [],
    );

    return parse2Var(reqParams);
  }
}

export default TreeParser;
