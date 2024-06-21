import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function clearData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;
  const code = `
  // 清空数据
  callComponentMethod(${parse2Var(compId)}, 'clearData');
  `;
  return code;
}

export default clearData;
