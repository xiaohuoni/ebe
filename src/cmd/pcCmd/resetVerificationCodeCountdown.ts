import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function resetVerificationCodeCountdown(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;

  const code = `
  // 验证码·重置倒计时
  asyncCallComponentMethod(${parse2Var(
    compId,
  )}, 'resetVerificationCodeCountdown',new Date())
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default resetVerificationCodeCountdown;
