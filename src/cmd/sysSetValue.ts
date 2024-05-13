import { parse2Var } from '../core/utils/compositeType';
import {
  CMDGeneratorPrames,
} from '../core/types';

export function sysSetValue({ value }: CMDGeneratorPrames): string {
  const { compId: tempCompId, valueList: temValue } = value.options;
 let compId  = Array.isArray(tempCompId)? tempCompId : [];
 if (typeof tempCompId === 'string' && temValue?.[tempCompId]) {
  compId = [tempCompId];
  return `// 设置控件的值 \n setValue('${compId}', ${temValue?.[tempCompId]}) ` ;
 } else if (Array.isArray(tempCompId)){
  let valueList: any = {};
  compId.map((id: string ) => {
    if (temValue?.[id]) {
      const aaa = parse2Var(temValue[id]);
      valueList[id] = parse2Var(temValue[id]);
    }
   });
  return `// 批量设置控件的值 \n setValue(${JSON.stringify(valueList)}) `
 } else {
  return '';
 } ;
}
