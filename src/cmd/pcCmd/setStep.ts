import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function setStep(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;

  const code = `
    // 步骤条·设置步骤状态
    asyncCallComponentMethod(
      ${parse2Var(options.compId)}, 
      'setStepByOptions',
      ${parse2Var(options.stepSetting)}
    )
    `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default setStep;
