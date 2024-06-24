import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function setVerificationCodeImageUrl(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, verificationCodeUrl } = options;

  const code = `
  // 验证码·设置图片地址
  asyncCallComponentMethod(${parse2Var(
    compId,
  )}, 'setVerificationCodeImageUrl',${parse2Var(verificationCodeUrl)})
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default setVerificationCodeImageUrl;
