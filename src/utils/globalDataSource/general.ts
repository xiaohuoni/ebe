import { isPlainObject } from 'lodash';

/**
 * 页面是否需要全局数据源
 * @param globalData
 * @returns
 */
export const shouldUsedGlobalData = (globalData?: any) => {
  if (isPlainObject(globalData)) {
    return Object.keys(globalData).length > 0;
  }
  if (Array.isArray(globalData)) {
    return globalData.length > 0;
  }
  return false;
};
