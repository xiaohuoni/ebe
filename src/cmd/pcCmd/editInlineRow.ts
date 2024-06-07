import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function editInlineRow(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, inlineeditrow } = options;
  const code = `
    // 表格·指定行开启行内编辑
    if (refs[${parse2Var(compId)}].editInlineRow) {
      refs[${parse2Var(compId)}].editInlineRow(${parse2Var(inlineeditrow)});
    }
  `;
  return code;
}
export default editInlineRow;
