import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import {
  CMDGeneratorPrames,
} from '../core/types';

export function changeContent({ value }: CMDGeneratorPrames): string {
  const { name,  compId} = value.options;
  let param = undefined;
  if (isJSVar(name)) {
    param = generateVarString(name);
  } else if (name){
    param = `'${name}'`;
  }
  return `// 按钮更改内容 \n callComponentMethod('${compId}', 'changeContent', ${param})` ;
}
