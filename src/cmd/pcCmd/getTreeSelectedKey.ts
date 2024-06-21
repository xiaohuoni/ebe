import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getTreeSelectedKey(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { id, compId } = options;

  const code = `
  // 树形控件·获取选中节点key
  asyncGetValue(${parse2Var(compId)}, 'selectedKeys')
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`selectedKeys_${id}`],
    },
  });
}

export default getTreeSelectedKey;
