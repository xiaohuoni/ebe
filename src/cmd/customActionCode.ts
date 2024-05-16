import { CMDGeneratorPrames } from '../core/types';
import { GeneratorCallbackWithThenCatch } from './utils';

export function customActionCode(generateParams: CMDGeneratorPrames): string {

  const { code: tCode, originCode = tCode, id } = generateParams.value?.options || {};

  const code =`(async () => {
    ${originCode}
    // 自定义代码块
    return new Promise((resolve, reject) => { 
      main(data, state, resolve, reject);
    })
  })()`

  return GeneratorCallbackWithThenCatch(code, generateParams, {
    params: {
      callback1: [`data_${id}`],
      callback2: [`fail_${id}`]
  }});
}
