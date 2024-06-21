import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';
export function reloadTransferData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { data, compId } = options;

  const code = `
  // 传索框·加载数据
   asyncCallComponentMethod(${parse2Var(compId)}, 'setDataSource', ${parse2Var(
    data,
  )})
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default reloadTransferData;
