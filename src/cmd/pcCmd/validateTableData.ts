import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function validateTableData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, id } = options;
  const code = `
  // 表格·获取表格数据并校验
  new Promise<void>((resolve, reject) => {
    if (refs[${parse2Var(compId)}].validateTableData) {
      refs[${parse2Var(compId)}].validateTableData(${parse2Var(
    compId,
  )},(err: any, dataSource: any)=>{
        if (!err) {
          resolve(dataSource);
        } else {
          reject(dataSource);
        }
      });
    }
  })
  `;
  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`tableData_${id}`],
      callback2: [`tableData_${id}`],
    },
  });
}
export default validateTableData;
