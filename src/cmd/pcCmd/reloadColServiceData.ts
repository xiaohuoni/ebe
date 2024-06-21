import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function reloadColServiceData(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, data, colName } = options;
  const code = `
  // 加载字段翻译数据
  callComponentMethod(${parse2Var(compId)}, 'addColServiceData',${parse2Var({
    [colName]: data,
  })});
  `;
  return code;
}

export default reloadColServiceData;
