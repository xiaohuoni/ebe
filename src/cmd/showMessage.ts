import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import {
  CMDGeneratorPrames,
} from '../core/types';

export function showMessage({ value }: CMDGeneratorPrames): string {
const { options } = value;
 let content = options.value;
 if (isJSVar(content)) {
    content = generateVarString(content)
  }

  return `// 提示消息 \n showMessage(${options.type}, ${content}) ` ;
}
