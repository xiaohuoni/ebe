import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function setStepsCurrentValue(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;

  const code = `
    // 步骤条·设置当前步骤
    asyncCallComponentMethod(
      ${parse2Var(options.compId)}, 
      'setCurrent',
      ${parse2Var(options.current)}
    )
    `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default setStepsCurrentValue;
