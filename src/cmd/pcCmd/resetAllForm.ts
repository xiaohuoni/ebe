import { CMDGeneratorPrames } from '../../core/types';

export function resetAllForm(generateParams: CMDGeneratorPrames): string {
  return `
    // 重置所有表单值
    resetAllForm()
  `;
}
