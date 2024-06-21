import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';
export function reloadTableData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { data, total, current, compId } = options;

  const code = `
  // 表格·加载数据
   asyncCallComponentMethod(${parse2Var(compId)}, 'setTableData', ${parse2Var({
    dataSource: data,
    total,
    current,
  })})
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams);
}

export default reloadTableData;
