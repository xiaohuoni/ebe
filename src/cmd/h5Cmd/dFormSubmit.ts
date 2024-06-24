import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function dFormSubmit(generateParams: CMDGeneratorPrames): string {
  const { compId } = generateParams.value?.options || {};

  return `
    // 获取表单值
    ${GeneratorCallbackWithThenCatch(
      `validateForm(${parse2Var(compId)})`,
      generateParams,
      {
        params: {
          callback1: [`values_${compId}`],
          callback2: [`errors_${compId}`],
        },
        alwayCatch: true,
        sync: true,
      },
    )};
  `;
}
