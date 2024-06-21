import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function setExpandedKey(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;
  const code = `
  // 树形控件·展开指定节点
  callComponentMethod(${parse2Var(compId)}, 'setExpandedKey',${parse2Var(
    options.value,
  )}?.replace(/\[|]/g, '')?.split(',')?.filter((v: any) => !!v));
  `;

  return code;
}

export default setExpandedKey;
