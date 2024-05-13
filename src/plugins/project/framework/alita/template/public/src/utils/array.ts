import { get, isArray, set } from "lodash";

/**
 * 往数组中添加数据元素
 * @param data 数据对象
 * @param path 添加的路径
 * @param value 要添加的元素
 */
const push = (data: any, path: string, value: any) => { 
  const arr = get(data, path) || [];
  if (isArray(arr)) {
    arr.push(value);
  }
  set(data, path, [...arr]);
  return arr;
}

/**
 * 删除某路径下数组的元素
 * @param data 数据对象
 * @param path 路径
 * @param deleteCb 元素函数  返回true表示移除，  否则保留
 * @returns 
 */
const remove = (data: any, path: string, deleteCb: (item: any, index: number) => boolean) => { 
  let arr: any[] = get(data, path) || [];
  arr = arr.filter((item, index) => {
    return !deleteCb?.(item, index) ?? true;
  });

  set(data, path, [...arr]);
  return arr;
}

/**
 * 替换某路径下数组的元素
 * @param data 
 * @param path 
 * @param value 
 */
const replace = (data: any, path: string, value: any) => { 
  set(data, path, value);
  return get(data, path);
}

/**
 * 更新某路径下的数组元素，
 * @param data 
 * @param path 
 * @param value 
 * @param updateCb 只满足第一条内容，超出后不再兼容
 * @returns 
 */
const update = (data: any, path: string, value: any, updateCb: (item: any, index: number) => boolean) => { 
  if (typeof updateCb !== 'function') {
    return;
  }

  let arr = get(data, path);

  if (Array.isArray(arr)) {
    const index = arr.findIndex(updateCb);
    arr[index] = value;
  }

  set(data, path, value);
  return arr;
}


export default {
  remove, 
  push,
  replace,
  update,
}