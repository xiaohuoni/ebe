import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getTreeEditingKey(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { id, compId } = options;

  const code = `
  // 树形控件·获取当前操作的节点key
  asyncGetValue(${parse2Var(compId)}, 'editingKey')
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`editingKey_${id}`],
    },
  });
}

export default getTreeEditingKey;
