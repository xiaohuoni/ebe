import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from './utils';

export function setRangeValue(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { startVal, endVal, compId } = options;
  const code = `
  // 设置时间段区间
    if (refs[${parse2Var(compId)}].setValue) {
      refs[${parse2Var(compId)}].setValue([${parse2Var(startVal)},${parse2Var(
    endVal,
  )}]);
    }
  `;
  return GeneratorCallbackWithThenCatch(code, generateParams);
}

export default setRangeValue;
