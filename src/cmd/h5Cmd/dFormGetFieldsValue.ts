import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function dFormGetFieldsValue(
  generateParams: CMDGeneratorPrames,
): string {
  const { compId } = generateParams.value?.options || {};

  return `
    // 获取表单值
    ${GeneratorCallbackWithThenCatch(
      `getFormValue(${parse2Var(compId)})`,
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
