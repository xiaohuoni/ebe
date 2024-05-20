import { CMDGeneratorPrames } from '../core/types';
import { CMDGeneratorEvent } from '../core/utils/CMDGenerator';
import { parse2Var } from '../core/utils/compositeType';

export function setTimer(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { timername = 'undefined', type = 'timeout', interval, callback1 } = value.options;
  return `// 定时器
  addActionTimer(${parse2Var(type)}, ${parse2Var(timername)}, ${CMDGeneratorEvent(callback1, generateParams)}, ${parse2Var(interval)});
  `;
}
