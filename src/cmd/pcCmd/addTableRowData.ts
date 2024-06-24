import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function addTableRowData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { paramsObj, params, compId } = options;
  const finalValue = params === 'object' ? paramsObj : params;
  const code = `
    // 表格·新增一行数据
    if (typeof ${parse2Var(finalValue)} !== 'object') {
      console.error("数据类型不正确")
    } else {
      callComponentMethod(
        ${parse2Var(compId)},
        'addTableRowData',
        ${parse2Var(finalValue)}
      );
    }
  `;
  return code;
}

export default addTableRowData;
