import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function stopAppDynamicListLoading(
  generateParams: CMDGeneratorPrames,
): string {
  const { compId } = generateParams.value?.options || {};

  return `
    // 停止加载/刷新
    ${GeneratorCallbackWithThenCatch(
      `asyncCallComponentMethod(${parse2Var(compId)}, 'stopLoading')`,
      generateParams,
    )};
  `;
}
