import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import {
  CMDGeneratorPrames,
} from '../core/types';

export function changeContent({ value }: CMDGeneratorPrames): string {
  const { name,  compId} = value;
  let param = undefined;
  if (isJSVar(name)) {
    param = generateVarString(name);
  } else if (name){
    param = `'${param}'`;
  }
  return `// 按钮更改内容 \n callComponentMethod(compId, 'changeContent', ${param}) ` ;
}
