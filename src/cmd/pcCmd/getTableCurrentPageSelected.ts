import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getTableCurrentPageSelected(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { id } = options;

  const code = `
  // 表格·获取当前页选中行
  asyncCallComponentMethod(${parse2Var(
    options.compId,
  )}, 'getTableCurrentPageSelected')
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`currentPageSelectedRows_${id}`],
      callback2: [`currentPageSelectedRows_${id}`],
    },
  });
}

export default getTableCurrentPageSelected;
