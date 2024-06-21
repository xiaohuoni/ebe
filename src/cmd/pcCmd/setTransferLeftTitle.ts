import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';
export function setTransferLeftTitle(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;

  const code = `
  // 传索框·设置左边标题
   asyncCallComponentMethod(${parse2Var(
     compId,
   )}, 'setTransferLeftTitle', ${parse2Var(options.value)})
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default setTransferLeftTitle;
