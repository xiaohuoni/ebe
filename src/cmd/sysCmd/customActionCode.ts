import { CMDGeneratorPrames } from '../../core/types';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function customActionCode(generateParams: CMDGeneratorPrames): string {
  const {
    code: tCode,
    originCode = tCode,
    id,
  } = generateParams.value?.options || ({} as any);

  const code = ` // 自定义代码块
    new Promise((resolve, reject) => {
      try {
        ${originCode}
        main(data, state, resolve, reject);
      } catch (error) {}
    })`;

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`data_${id}`],
      callback2: [`fail_${id}`],
    },
  });
}

