import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';

export function clearTimer(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { targettimer = 'undefined' } = value.options;
  return `// 定时器
  clearActionTimer(${parse2Var(targettimer)});
  `;
}
