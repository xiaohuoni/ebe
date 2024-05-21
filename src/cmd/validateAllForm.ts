import { CMDGeneratorPrames } from '../core/types';
import { GeneratorCallbackWithThenCatch } from './utils';

export function validateAllForm(generateParams: CMDGeneratorPrames): string {
  const { compId } = generateParams.value?.options || {};

  // 这里因为是formValues可能会多次表单获取值的值重复，所以用var 来代替 let和const
  return `
    // 获取表单值
    ${GeneratorCallbackWithThenCatch(
      `validateAllForm()`,
      generateParams,
      {
        params: {
          callback1: [`allFormValues_${compId}`],
          callback2: [`error_${compId}`],
        },
        funcTops: {
          callback1: `const allFormValues = allFormValues_${compId}`,
          callback2: `const allFormValues = error_${compId}`
        }
      },
    )};
  `;
}
