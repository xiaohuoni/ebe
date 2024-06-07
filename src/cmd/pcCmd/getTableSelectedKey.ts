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
  new Promise<void>((resolve, reject) => {
    if (refs[${parse2Var(compId)}].getTableSelectedKey) {
      const values = refs[${parse2Var(compId)}].getTableSelectedKey();
      if (values) {
        resolve(values)
      }else{
        reject([])
      }
    }
  })
  `;
  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`selectedRowKeys_${id}`],
      callback2: [`selectedRowKeys_${id}`],
    },
  });
}

export default getTableSelectedKey;
