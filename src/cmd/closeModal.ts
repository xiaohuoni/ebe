import { CMDGeneratorPrames } from '../core/types';
import { CMDGeneratorFunction } from '../core/utils/CMDGenerator';
export function closeModal({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  return `// 关闭当前弹窗 \n closeModal && closeModal(); `;
}
