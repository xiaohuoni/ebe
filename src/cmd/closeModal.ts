import { CMDGeneratorPrames } from '../core/types';
export function closeModal({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  return `// 关闭当前弹窗 \n closeModal && closeModal(); `;
}
