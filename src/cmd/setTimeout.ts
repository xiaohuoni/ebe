import { CMDGeneratorPrames } from '../core/types';
import { CMDGeneratorEvent } from '../core/utils/CMDGenerator';
import { parse2Var } from '../core/utils/compositeType';

export function setTimeout(generateParams: CMDGeneratorPrames): string {
  const { value, platform, scope, config } = generateParams;
  const { timername = 'undefined', interval, callback1 } = value.options;
  return `// 定时器
  addActionTimer('timeout', ${parse2Var(timername)}, ${CMDGeneratorEvent(
    callback1,
    { platform },
    scope,
    config,
  )}, ${parse2Var(interval)});
  `;
}
