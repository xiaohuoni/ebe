import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function clearTreeCheckedKey(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;
  const code = `
  // 树形控件·清空复选框值
  callComponentMethod(${parse2Var(compId)}, 'setCheckedKeys',null);
  `;
  return code;
}

export default clearTreeCheckedKey;
