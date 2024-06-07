import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getCurrentFormValues(
  generateParams: CMDGeneratorPrames,
): string {
  const { compId } = generateParams.value?.options || {};

  // 这里因为是formValues可能会多次表单获取值的值重复，所以用var 来代替 let和const
  return `
    // 获取表单值
    ${GeneratorCallbackWithThenCatch(
      `getFormValue(${parse2Var(compId)})`,
      generateParams,
      {
        params: {
          callback1: [compId],
          callback2: ['errorMsg'],
        },
        alwayCatch: true,
        sync: true,
      },
    )};
  `;
}
