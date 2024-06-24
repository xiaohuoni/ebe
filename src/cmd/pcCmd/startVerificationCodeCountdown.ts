import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function startVerificationCodeCountdown(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;

  const code = `
  // 验证码·开始倒计时
  asyncCallComponentMethod(${parse2Var(
    compId,
  )}, 'startVerificationCodeCountdown',new Date())
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default startVerificationCodeCountdown;
