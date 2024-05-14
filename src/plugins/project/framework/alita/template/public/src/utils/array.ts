import { get, isArray, mergeWith, set } from "lodash";

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
const update = (options: { 
  data: any,
  path: string,
  value: any,
  isPatch: boolean
}, updateCb: (item: any, index: number) => boolean) => { 
  if (typeof updateCb !== 'function') {
    return;
  }

  const { data, path, value, isPatch } = options;

  let arr = get(data, path);
  if (!Array.isArray(arr)) return;

  let newData = value;

  const index = arr.findIndex(updateCb);
  if (index < -1) return;

  const row = arr[index];
  if (
    Object.prototype.toString.call(row) === '[object Object]' &&
    Object.prototype.toString.call(value) === '[object Object]' &&
    isPatch
  ) {
    newData = Object.assign({}, row, newData);
  }

  arr[index] = newData;
  set(data, path, arr);
  return arr;
}

/**
 * 更新对象
 * @param options 
 */
const updateObject = (options: {
  data: any,
  path: string,
  value: any,
  isPatch: boolean
}) => { 
  const { data, path, value, isPatch } = options;
  const oldItem = get(data, path);
  let newData = value;

  if (
    Object.prototype.toString.call(oldItem) === '[object Object]' &&
    Object.prototype.toString.call(value) === '[object Object]' &&
    isPatch
  ) {
    newData = Object.assign({}, oldItem, newData);
  }
  set(data, path, newData);
  return newData;
}


export default {
  remove, 
  push,
  replace,
  update,
  updateObject,
}