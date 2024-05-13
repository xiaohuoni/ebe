import { CMDGeneratorPrames } from '../core/types';
import { CMDGeneratorFunction } from '../core/utils/CMDGenerator';
export function getValue({ value, platform, scope, config  }: CMDGeneratorPrames): string {
  const { options, callback1 } = value;
  if (options?.compId) {
    const { id, compId } = options;
    return `// 获取组件的值 \n const value_${id} = getValue('${compId}');\n
    ${CMDGeneratorFunction(
      callback1,
      {},
      platform,
      scope,
      config,
    )}
    `;
  }
  return '';
}
