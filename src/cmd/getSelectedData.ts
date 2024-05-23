import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from './utils';

export function getSelectedData(generateParams: CMDGeneratorPrames): string {
  const { compId, id } = generateParams.value?.options || {};
  const code = `
  // 获取选中数据
  new Promise<void>((resolve, reject) => {
    if (refs[${parse2Var(compId)}].getSelectedData) {
      const values = refs[${parse2Var(compId)}].getSelectedData();
      if (values && values.length) {
        resolve(values)
      }else{
        reject(values)
      }
    }
  })
  `;
  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`selectedData_${id}`],
      callback2: [`selectedData_${id}`],
    },
  });
}
