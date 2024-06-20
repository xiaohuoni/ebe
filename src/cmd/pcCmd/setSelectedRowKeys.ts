import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function setSelectedRowKeys(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;

  const code = `asyncCallComponentMethod(
    ${parse2Var(options.compId)}, 
    'setSelectedRowKeys',
    ${parse2Var(options.value)})
    `;

  return `
    // 表格·设置选中行
    ${GeneratorCallbackWithThenCatch(code, generateParams)}
  `;
}

export default setSelectedRowKeys;
