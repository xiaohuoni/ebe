import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function reloadDescData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, data } = options;
  const code = `
  // 加载数据
  callComponentMethod(${parse2Var(compId)}, 'setDataSource',${parse2Var(data)});
  `;
  return code;
}

export default reloadDescData;
