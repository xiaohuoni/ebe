import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getTableSelectedKey(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { id, compId } = options;

  const code = `
  // 表格·获取选中行主键
  asyncCallComponentMethod(${parse2Var(compId)}, 'getTableSelectedKey')
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`selectedRowKeys_${id}`],
      callback2: [`selectedRowKeys_${id}`],
    },
  });
}

export default getTableSelectedKey;
