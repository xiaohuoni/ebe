import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import {
  CMDGeneratorPrames,
} from '../core/types';

export function sysSetValue({ value }: CMDGeneratorPrames): string {
  const { compId, valueList: temValue } = value;
 let valueList: any = {};
 compId.map((id: string ) => {
  if (temValue?.[id]) {
    if (isJSVar(temValue?.[id])) {
      valueList = generateVarString(temValue[id])
    } else {
      return `'${temValue[id]}'`;
    }
  }
 });

  return `// 批量设置控件的值 \n setValue(${compId}, ${JSON.stringify(valueList)}) ` ;
}
