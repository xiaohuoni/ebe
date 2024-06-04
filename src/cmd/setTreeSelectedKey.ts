import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from './utils';

export function setTreeSelectedKey(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const code = `asyncCallComponentMethod(${parse2Var(
    options.compId,
  )}, ${parse2Var('setSelectedKeys')}, ${parse2Var(options.value)})`;
  return `
    // 设置选中节点
    ${GeneratorCallbackWithThenCatch(code, generateParams)}
  `;
}
