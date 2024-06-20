import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function validateTableRowData(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;
  const code = `
  // 表格·获取表格当前行数据并校验
  new Promise<void>((resolve, reject) => {
    if (refs[${parse2Var(compId)}].validateTableRowData) {
      refs[${parse2Var(compId)}].validateTableRowData(${parse2Var(
    compId,
  )},(err: any)=>{
        if (!err) {
          resolve();
        } else {
          reject();
        }
      });
    }
  })
  `;
  return GeneratorCallbackWithThenCatch(code, generateParams);
}
export default validateTableRowData;
