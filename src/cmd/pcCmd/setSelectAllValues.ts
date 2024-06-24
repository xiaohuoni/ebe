import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function setSelectAllValues(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId } = options;

  const code = `
  // 级联选择·全部选中
    asyncCallComponentMethod(
      ${parse2Var(compId)}, 
      'selectAll'
    )
    `;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [],
    },
  });
}

export default setSelectAllValues;
