/**
 * 获取导出的变量代码
 * @param globalDataSource
 * @returns
 */
export const getGlobalDataExportNamesCode = (globalDataSource: any = {}) => {
  const exportNames = Object.keys(globalDataSource)
    .map((name) => {
      const { updateFunctionName, reloadFunctionName, resetFunctionName } =
        globalDataSource[name];

      return [updateFunctionName, reloadFunctionName, resetFunctionName].join(
        ',',
      );
    })
    .join(',');

  return `
    globalDataReadyComplete,
    globalData,
    ${exportNames ? `${exportNames},` : ''}
  `;
};
