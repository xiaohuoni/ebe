import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function addTableRow(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, inlineeditnow } = options;
  const code = `
    // 表格·新增一行空白数据
    if (refs[${parse2Var(compId)}].addTableEmptyRow) {
      refs[${parse2Var(
        compId,
      )}].addTableEmptyRow(updateData, ${!!inlineeditnow});
    }
  `;
  return code;
}

export default addTableRow;
