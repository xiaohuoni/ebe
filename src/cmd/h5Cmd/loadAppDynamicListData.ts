import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function loadAppDynamicListData(
  generateParams: CMDGeneratorPrames,
): string {
  const { compId, total, data } = generateParams.value?.options || {};

  return `
    // 加载数据
    callComponentMethod(${parse2Var(compId)}, 'setTotal', ${parse2Var(total)});
    callComponentMethod(${parse2Var(compId)}, 'setTotal', ${parse2Var(data)});
  `;
}
