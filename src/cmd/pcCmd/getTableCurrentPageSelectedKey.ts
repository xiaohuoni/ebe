import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getTableCurrentPageSelectedKey(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { id } = options;

  const code = `
  // 表格·获取当前页选中行主键
  asyncCallComponentMethod(${parse2Var(
    options.compId,
  )}, 'getTableCurrentPageSelectedKey')
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`currentPageSelectedRowKeys_${id}`],
      callback2: [`currentPageSelectedRowKeys_${id}`],
    },
  });
}

export default getTableCurrentPageSelectedKey;
