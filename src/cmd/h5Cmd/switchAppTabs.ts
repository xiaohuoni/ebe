import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function switchAppTabs(generateParams: CMDGeneratorPrames): string {
  const { compId, value } = generateParams.value?.options || {};

  return `
    // 切换页面
    ${GeneratorCallbackWithThenCatch(
      `switchAppTabs(${parse2Var(compId)}, ${parse2Var(value)})`,
      generateParams,
    )};
  `;
}
