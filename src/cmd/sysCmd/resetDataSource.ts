import { CMDGeneratorPrames } from '../../core/types';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function getResetDataSource(generateParams: CMDGeneratorPrames): string {
  const { value, config } = generateParams;
  const { options } = value;

  // TODO: 全局数据源
  if (options?.isGlobalData) {
    const resetFunctionName =
      config?.ir?.globalDataSource?.[options.dataSourceName]?.resetFunctionName;
    if (!resetFunctionName) {
      return `// FIXME: 全局数据源${options.dataSourceName}不存在，请检查配置。`;
    }
    return GeneratorCallbackWithThenCatch(
      `${resetFunctionName}(globalData)`,
      generateParams,
    );
  }

  return GeneratorCallbackWithThenCatch(
    `resetDataSource('${options.dataSourceName}')`,
    generateParams,
  );
}
