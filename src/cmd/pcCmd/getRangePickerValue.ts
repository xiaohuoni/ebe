import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getRangePickerValue(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { id, compId } = options;

  const code = `
    // 时间段选择·获取起止时间
    asyncGetValue(${parse2Var(compId)})
    `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: ['Range_value'],
    },
    funcTops: {
      callback1: `const [value_${id}_begin, value_${id}_end] = Range_value;`,
    },
  });
}

export default getRangePickerValue;
