import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function clearTimer(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  // targettimer 不存在的时候，存的 ref 就是 undefined 字符串
  const { targettimer = 'undefined' } = value.options;
  return `// 定时器
  clearActionTimer(${parse2Var(targettimer)});
  `;
}
