import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';
export function setSelectAll(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;

  const code = `
   // 树形控件·设置全部选中
   asyncCallComponentMethod(${parse2Var(compId)}, 'setSelectAll', true)
  `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default setSelectAll;
