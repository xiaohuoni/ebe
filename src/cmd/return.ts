import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
export function returnCmd({ value }: CMDGeneratorPrames): string {
  const { returnValue, returnType } = value.options;
  if (returnType === 'failure') {
    return `// 退出事件 \n  reject(${parse2Var(returnValue)});`;
  }
  return `// 退出事件 \n  resolve(${parse2Var(returnValue)});`;
}
