import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function reloadColServiceDataForEdit(
  generateParams: CMDGeneratorPrames,
): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, colNameForEdit, data } = options;

  const code = `asyncCallComponentMethod(
    ${parse2Var(compId)},
    'addColServiceDataForEdit', 
    ${parse2Var({
      [colNameForEdit]: data,
    })})
    `;

  return `
    // 表格·加载字段数据
    ${GeneratorCallbackWithThenCatch(code, generateParams)}
  `;
}

export default reloadColServiceDataForEdit;
