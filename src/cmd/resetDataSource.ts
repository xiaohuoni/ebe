import { CMDGeneratorPrames } from '../core/types';

export function getResetDataSource({ value }: CMDGeneratorPrames): string {
  const { options } = value;

  // TODO: 全局数据源
  if (options?.isGlobalData) return `//【清空全局数据源】全局数据源指令暂不支持`;

  return `resetDataSource('${options.dataSourceName}')`;
}
