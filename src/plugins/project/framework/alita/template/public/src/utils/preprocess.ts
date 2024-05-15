import { flatten } from "lodash";

/**
 * 函数预处理逻辑
 * 执行优先级
 * “*” 优先级最低，最早被执行
 * “|” 下划线的 其次执行
 * “Button” 直接有组件的 优先级最高 最后执行
 */
const preprocessMethod = {
  '*': (props: Record<string, any>) => {
    return props;
  }
}

/**
 * 获取待执行的函数列表
 * @param type 
 */
const getTodoFunc = (type: string) => { 
  const todoFunc: ((props: Record<string, any>) => Record<string, any>)[][] = [
    // 带有 *
    [],
    // 带有 |
    [],
    // 单独组件 
    []
  ];

  Object.keys(preprocessMethod).forEach(key => { 
    if (key === '*') {
      // 把 * 放在最前面，优先级最低
      todoFunc[0].push(preprocessMethod[key]);
    }
    if (key.split('|').includes(type)) {
      let index = 1;
      if (!key.includes('|')) {
        index = 2;
      }
      todoFunc[index].push(preprocessMethod[key]);
    }
  })

  return flatten(todoFunc);
}

const runFunc = (funcs: ((props: Record<string, any>) => Record<string, any>)[], originProps: Record<string, any>) => { 
  let props = originProps;

  funcs.forEach(func => { 
    try { 
      props = func(props) ?? props;
    }catch(err){}
  })

  return props;
}

/**
 * 属性预处理函数
 * @param type 
 * @returns 
 */
export const preprocessMethods = (type: string) => {
  const todoFunc: ((props: Record<string, any>) => Record<string, any>)[] = getTodoFunc(type);

  return { 
    run: (originProps: Record<string, any>) => { 
      return runFunc(todoFunc, originProps);
    }
  } 
}