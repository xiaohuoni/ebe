import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';
export function addTransferKeys(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, transferValue } = options;
  const code = `
   // 穿梭框·加载右侧列表值
   if (typeof ${parse2Var(transferValue)} === 'string') {
    const currentVal = [...(getValue(${parse2Var(compId)}) || [])];
    const vals = (${parse2Var(
      transferValue,
    )} || '').replace(/ /g, '').split(',');
    if (vals.length > 0 && Array.isArray(currentVal)) {
      vals.forEach(key => {
        if (!currentVal.includes(key)) {
          currentVal.push(key);
        }
      });
    }
   ${GeneratorCallbackWithThenCatch(
     `asyncCallComponentMethod(
        ${parse2Var(compId)},
        'setValue',
        [...currentVal]
      )`,
     generateParams,
     {
       params: {
         callback1: [],
       },
     },
   )}
  } else {
    console.error("穿梭框·加载右侧列表值数据类型错误")
  }
  `;

  return code;
}

export default addTransferKeys;
