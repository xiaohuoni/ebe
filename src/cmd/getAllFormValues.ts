import { CMDGeneratorPrames } from '../core/types';
import { GeneratorCallbackWithThenCatch } from './utils';

export function getAllFormValues(generateParams: CMDGeneratorPrames): string {
  return `
    // 获取所有表单值
    ${GeneratorCallbackWithThenCatch(
      `getAllFormValues()`,
      generateParams,
      {
        params: {
          callback1: ['allFormValues'],
          callback2: ['errors'],
        }
      },
    )};
  `;
}
