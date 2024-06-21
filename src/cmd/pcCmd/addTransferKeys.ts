import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from '../utils';
export function addTransferKeys(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, transferValue } = options;
  const code = `
   // 穿梭框·加载右侧列表值
   const valueMap = ${parse2Var(transferValue)}
   const currentVal = [...(refs[${parse2Var(compId)}]?.value || [])];
   if (typeof valueMap === 'string') {
    const vals = (valueMap || '').replace(/ /g, '').split(',');
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
