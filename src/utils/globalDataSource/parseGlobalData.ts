import { camelCase } from 'lodash';
import { GlobalDataSourceItemType } from '../../core';

/**
 * 获取model的Hook名称
 * @param name
 * @returns
 */
const getModelHookName = (name: string) => {
  return camelCase(['use', name].join(' '));
};

/**
 * 获取更新数据源的方法名
 * @param name
 * @returns
 */
const getUpdateFunctionName = (name: string) => {
  return camelCase(['update', name, 'model'].join(' '));
};

/**
 * 获取刷新数据源的方法名
 * @param name
 * @returns
 */
const getReloadFunctionName = (name: string) => {
  return camelCase(['reload', name, 'model'].join(' '));
};

/**
 * 获取更新数据源的方法名
 * @param name
 * @returns
 */
const getResetFunctionName = (name: string) => {
  return camelCase(['reset', name, 'model'].join(' '));
};

/**
 * 获取更新数据源的方法名
 * @param name
 * @returns
 */
const getReadyCompleteName = (name: string) => {
  return camelCase([name, 'readyComplete'].join(' '));
};

/**
 * 获取更新数据源的方法名
 * @param name
 * @returns
 */
const getInitialCompleteName = (name: string) => {
  return camelCase(['initial', name, 'model'].join(' '));
};

/**
 * 解析全局数据源
 */
export const parseGlobalData = (globalData: GlobalDataSourceItemType) => {
  const modelHookName = getModelHookName(globalData.frontendDatasourceCode);

  return {
    ...globalData,
    moduleName: modelHookName,
    namespace: modelHookName,
    updateFunctionName: getUpdateFunctionName(
      globalData.frontendDatasourceCode,
    ),
    reloadFunctionName: getReloadFunctionName(
      globalData.frontendDatasourceCode,
    ),
    resetFunctionName: getResetFunctionName(globalData.frontendDatasourceCode),
    dataName: globalData.frontendDatasourceCode,
    readyCompleteName: getReadyCompleteName(globalData.frontendDatasourceCode),
    initialFunctionName: getInitialCompleteName(
      globalData.frontendDatasourceCode,
    ),
    camelCaseName: camelCase(globalData.frontendDatasourceCode),
  };
};
