import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
export function returnCmd({ value }: CMDGeneratorPrames): string {
  const { returnValue } = value.options;
  return `// 退出事件 \n  return Promise.resolve({ \n returnValue: ${parse2Var(
    returnValue,
  )}\n});`;
}
