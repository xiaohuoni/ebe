import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function setRangeValue(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { startVal, endVal } = options;

  const code = `
    // 时间段选择·设置时间段区间
    asyncCallComponentMethod(
      ${parse2Var(options.compId)}, 
      'setValue',
      ${parse2Var([startVal, endVal])}
    )
    `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default setRangeValue;
