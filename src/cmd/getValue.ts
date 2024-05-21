import { CMDGeneratorPrames } from '../core/types';
import { GeneratorCallbackWithThenCatch } from './utils';
export function getValue({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  const { options, callback1 } = value;
  if (options?.compId) {
    const { id, compId } = options;
    return `// 获取组件的值 \n;
    ${GeneratorCallbackWithThenCatch(
      `getValue('${compId}')`,
      {
        value,
        platform,
        scope,
        config,
      },
      {
        params: {
          callback1: [`value_${id} `],
        },
      },
    )};`;
  }
  return '';
}
