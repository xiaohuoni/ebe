import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getSelectedData(generateParams: CMDGeneratorPrames): string {
  const { compId, id } = generateParams.value?.options || {};

  const code = `
  // 获取选中数据
  asyncCallComponentMethod(${parse2Var(compId)}, 'getSelectedData')
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`selectedData_${id}`],
      callback2: [`selectedData_${id}`],
    },
  });
}
