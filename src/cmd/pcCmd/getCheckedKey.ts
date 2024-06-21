import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getCheckedKey(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { id, compId } = options;

  const code = `
  // 树形控件·获取复选框选中值
  asyncGetValue(${parse2Var(compId)}, 'checkedKeys')
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`checkedKeys_${id}`],
    },
  });
}

export default getCheckedKey;
