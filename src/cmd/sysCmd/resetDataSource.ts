import { CMDGeneratorPrames } from '../../core/types';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getResetDataSource(generateParams: CMDGeneratorPrames): string {
  const { options } = generateParams.value;

  // TODO: 全局数据源
  if (options?.isGlobalData)
    return `//【清空全局数据源】全局数据源指令暂不支持`;

  return GeneratorCallbackWithThenCatch(
    `resetDataSource('${options.dataSourceName}')`,
    generateParams,
  );
}
