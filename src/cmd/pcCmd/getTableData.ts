import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getTableData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { id, compId } = options;

  const code = `
  // 表格·获取表格数据
  asyncCallComponentMethod(${parse2Var(compId)}, 'getTableData')
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`tableData_${id}`],
      callback2: [`tableData_${id}`],
    },
  });
}

export default getTableData;
