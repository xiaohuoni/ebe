import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';

export function clearOptions(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { compId } = value.options;

  return `// 清空选项
  callComponentMethod(${parse2Var(compId)}, 'clearOptions');
  `;
}
