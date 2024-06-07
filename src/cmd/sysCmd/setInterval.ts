import { CMDGeneratorPrames } from '../../core/types';
import { CMDGeneratorEvent } from '../../core/utils/CMDGenerator';
import { parse2Var } from '../../core/utils/compositeType';

export function setInterval(generateParams: CMDGeneratorPrames): string {
  const { value, platform, scope, config } = generateParams;
  const { timername = 'undefined', interval } = value.options;
  return `// 定时器
  addActionTimer('interval', ${parse2Var(timername)}, ${CMDGeneratorEvent(
    value.callback1,
    { platform },
    scope,
    config,
  )}, ${parse2Var(interval)});
  `;
}
