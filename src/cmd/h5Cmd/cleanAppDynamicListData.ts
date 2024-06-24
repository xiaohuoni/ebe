import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function cleanAppDynamicListData(
  generateParams: CMDGeneratorPrames,
): string {
  const { compId } = generateParams.value?.options || {};

  return `
    // 清空列表
    ${GeneratorCallbackWithThenCatch(
      `asyncCallComponentMethod(${parse2Var(compId)}, ${parse2Var(
        'cleanData',
      )})`,
      generateParams,
    )};
  `;
}
