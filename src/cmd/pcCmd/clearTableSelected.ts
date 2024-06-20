import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function clearTableSelected(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;

  const code = `
  // 表格·清除选中数据
  callComponentMethod(${parse2Var(compId)}, 'clearTableSelected');
  `;

  return code;
}

export default clearTableSelected;
