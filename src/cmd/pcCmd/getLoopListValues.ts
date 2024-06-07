import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getLoopListValues(generateParams: CMDGeneratorPrames): string {
  const { compId, id } = generateParams.value?.options || {};
  const code = `
  // 循环列表获取选中值
  new Promise<void>((resolve, reject) => {
    if (refs[${parse2Var(compId)}].getValues) {
      const values = refs[${parse2Var(compId)}].getValues();
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
      callback1: [`loopData`],
      callback2: [`loopData`],
    },
    funcTops: {
      callback1: `const [loopDataKeys_${id}, loopDataValues_${id}, loopDataIndexs_${id}] = loopData;`,
      callback2: `const [loopDataKeys_${id}, loopDataValues_${id}, loopDataIndexs_${id}] = loopData;`,
    },
  });
}
