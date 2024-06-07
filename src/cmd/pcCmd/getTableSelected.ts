import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getTableSelected(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { id, compId } = options;
  const code = `
  // 表格·获取选中行
  new Promise<void>((resolve, reject) => {
    if (refs[${parse2Var(compId)}].getTableSelected) {
      const values = refs[${parse2Var(compId)}].getTableSelected();
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
      callback1: [`selectedRows_${id}`],
      callback2: [`selectedRows_${id}`],
    },
  });
}

export default getTableSelected;
