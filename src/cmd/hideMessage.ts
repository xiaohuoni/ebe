import { CMDGeneratorPrames } from '../core/types';
export function hideMessage({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  return `// 隐藏弹窗 \n   messageApi.destroy && messageApi.destroy()`;
}
