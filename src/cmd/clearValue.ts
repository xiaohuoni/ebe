import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
export function clearValue({ value }: CMDGeneratorPrames): string {
  const { compId } = value.options;
  return `
    // 清除value字段
    clearValue(${parse2Var(compId)});
  `;
}