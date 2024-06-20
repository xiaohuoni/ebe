import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function delTableRow(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, params } = options;
  const code = `
  // 表格·删除指定行数据
  callComponentMethod(${parse2Var(compId)}, 'deleteTableRow',_,${parse2Var(
    params,
  )});
  `;
  return code;
}

export default delTableRow;
