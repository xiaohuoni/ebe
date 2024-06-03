/**
 * 获取导出的变量代码
 * @param globalDataSource
 * @returns
 */
export const getGlobalDataExportNamesCode = (globalDataSource: any = {}) => {
  return `
    globalDataReadyComplete,
    globalData,
    ${Object.keys(globalDataSource)
      .map((name) => {
        const { updateFunctionName, reloadFunctionName, resetFunctionName } =
          globalDataSource[name];

        return [updateFunctionName, reloadFunctionName, resetFunctionName].join(
          ',',
        );
      })
      .join(',')}
  `;
};
