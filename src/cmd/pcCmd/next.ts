import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function next(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;
  const code = `
  // 轮播图·下一张
  callComponentMethod(${parse2Var(compId)}, 'next')
  `;
  return code;
}

export default next;
