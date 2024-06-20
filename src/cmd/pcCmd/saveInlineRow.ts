import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function saveInlineRow(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;

  const code = `
  // 表格·保存当前行内编辑行
  callComponentMethod(${parse2Var(compId)}, 'saveInlineRow');
  `;

  return code;
}

export default saveInlineRow;
