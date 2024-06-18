import _ from 'lodash';

export const getGlobalDataVars = (globalDataSource: any = {}): string[] => {
  const exportNames = Object.keys(globalDataSource).map((name) => {
    const { updateFunctionName, reloadFunctionName, resetFunctionName } =
      globalDataSource[name];

    return [updateFunctionName, reloadFunctionName, resetFunctionName];
  });
  return [..._.flatten(exportNames), 'globalDataReadyComplete', 'globalData'];
};

/**
 * 获取导出的变量代码
 * @param globalDataSource
 * @returns
 */
export const getGlobalDataExportNamesCode = (globalDataSource: any = {}) =>
  `${getGlobalDataVars(globalDataSource).join(',')},`;
