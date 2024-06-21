import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getStepsCurrentValue(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;

  const code = `
  // 步骤条·获取当前步骤
  asyncGetValue(
    ${parse2Var(options.compId)}, 
    'current'
  )
    `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`current_${options.id}`],
    },
  });
}

export default getStepsCurrentValue;
