import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function setBadgeValue(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;

  const code = `
    // 静态标签页·设置选项卡内容
    asyncCallComponentMethod(
      ${parse2Var(options.compId)}, 
      'setBadge',
      ${parse2Var(options.value)}
    )
    `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default setBadgeValue;
