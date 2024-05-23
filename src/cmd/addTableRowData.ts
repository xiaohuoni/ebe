import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';

export function addTableRowData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { paramsObj, params, compId } = options;

  const obj = params === 'object' ? paramsObj : params;
  const newRowData = parse2Var(obj);
  const code = `
    // 表格·新增一行数据
    if (typeof ${newRowData} !== 'object') {
      console.error("数据类型不正确")
    }else if (refs[${parse2Var(compId)}].addTableRowData) {
      refs[${parse2Var(compId)}].addTableRowData(${newRowData});
    }
  `;
  return code;
}

export default addTableRowData;
