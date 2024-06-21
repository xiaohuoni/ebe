import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function prev(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;
  const code = `
  // 轮播图·上一张
  callComponentMethod(${parse2Var(compId)}, 'prev')
  `;
  return code;
}

export default prev;
