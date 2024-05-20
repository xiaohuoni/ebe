import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';

export function resetForm(generateParams: CMDGeneratorPrames): string {
  const { compId } = generateParams.value?.options || {};

  // 这里因为是formValues可能会多次表单获取值的值重复，所以用var 来代替 let和const
  return `
    // 重置表单值
    resetForm(${parse2Var(compId)});
  `;
}
