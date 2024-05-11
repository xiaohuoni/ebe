import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import {
  CMDGeneratorPrames,
} from '../core/types';

export function showMessage({ value }: CMDGeneratorPrames): string {

 let content = value.value;
 if (isJSVar(content)) {
    content = generateVarString(content)
  }

  return `// 提示消息 \n showMessage(${value.type}, ${content}) ` ;
}
