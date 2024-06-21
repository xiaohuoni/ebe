import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function clearTreeSelectedKey(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;
  const code = `
  // 树形控件·清空选中项
  callComponentMethod(${parse2Var(compId)}, 'setSelectedKeys',[]);
  `;
  return code;
}

export default clearTreeSelectedKey;
