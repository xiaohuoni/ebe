import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';

export function addTableRowData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { paramsObj, params, compId } = options;

  const code = `
    // 表格·新增一行数据
    const obj = ${parse2Var(params)} === 'object' ? ${parse2Var(paramsObj)} : ${parse2Var(params)};
    if (typeof obj !== 'object') {
      console.error("数据类型不正确")
    }else if (refs[${parse2Var(compId)}].addTableRowData) {
      refs[${parse2Var(compId)}].addTableRowData(obj);
    }
  `;
  return code;
}

export default addTableRowData;
