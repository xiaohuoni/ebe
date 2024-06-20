import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function restoreInlineRow(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;
  const code = `
  // 表格·撤销全部行内编辑行
  callComponentMethod(${parse2Var(compId)}, 'restoreInlineRow');
  `;

  return code;
}

export default restoreInlineRow;
