import { flatten } from 'lodash';

interface PreprocessMethodContext {
  extraData?: Record<string, any>;
}

/**
 * 函数预处理逻辑
 * 执行优先级
 * “*” 优先级最低，最早被执行
 * “|” 下划线的 其次执行
 * “Button” 直接有组件的 优先级最高 最后执行
 */
const preprocessMethod = {
  '*': (originProps: Record<string, any>, context: PreprocessMethodContext) => {
    return originProps;
  },
};

type PreprocessFunctionType =
  (typeof preprocessMethod)[keyof typeof preprocessMethod];

/**
 * 获取待执行的函数列表
 * @param type
 */
const getTodoFunc = (type: string) => {
  const todoFunc: PreprocessFunctionType[][] = [
    // 带有 *
    [],
    // 带有 |
    [],
    // 单独组件
    [],
  ];

  Object.keys(preprocessMethod).forEach((key) => {
    if (key === '*') {
      // 把 * 放在最前面，优先级最低
      todoFunc[0].push(preprocessMethod[key]);
    }
    if (key.split('|').includes(type)) {
      let index = 1;
      if (!key.includes('|')) {
        index = 2;
      }
      todoFunc[index].push(
        preprocessMethod[key as keyof typeof preprocessMethod],
      );
    }
  });

  return flatten(todoFunc);
};

const runFunc = (
  funcs: PreprocessFunctionType[],
  originProps: Record<string, any>,
  context: PreprocessMethodContext,
) => {
  let props = originProps;

  funcs.forEach((func) => {
    try {
      props = func(props, context) ?? props;
    } catch (err) {}
  });

  return props;
};

/**
 * 属性预处理函数
 * @param type
 * @returns
 */
export const preprocessMethods = (
  type: string,
  context: PreprocessMethodContext,
) => {
  const todoFunc: PreprocessFunctionType[] = getTodoFunc(type);

  return {
    run: (originProps: Record<string, any>) => {
      return runFunc(todoFunc, originProps, context);
    },
  };
};
