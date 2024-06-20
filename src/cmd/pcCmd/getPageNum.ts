import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getPageNum(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { id } = options;

  const code = `
  // 表格·获取当前页
  asyncCallComponentMethod(${parse2Var(options.compId)}, 'getPageNum')
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`pageNum_${id}`],
      callback2: [`pageNum_${id}`],
    },
  });
}

export default getPageNum;
