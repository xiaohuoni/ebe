import { CMDGeneratorPrames } from '../../core';
import { CMDGeneratorEvent } from '../../core/utils/CMDGenerator';

/**
 * 用then和catch生成回调字符串
 * @param code promise函数调用的代码字符串 例如: fetch('')  字符串需满足”)“后无任何符号，
 * @param generateParams 生成参数，可以直接把指令的方法塞进来
 * @param options sync 是否为同步， 若为true 则会在前面增加await
 *    params 成功和失败回调的参数
 * @returns 拼接完成的字符串
 */
const GeneratorCallbackWithThenCatch = (
  code: string,
  generateParams: CMDGeneratorPrames,
  options?: {
    sync?: boolean;
    params?: {
      callback1?: string[];
      callback2?: string[];
    };
    funcTops?: {
      callback1?: string;
      callback2?: string;
    };
  },
) => {
  if (!code) return code;
  const { value, platform, scope, config } = generateParams;

  const { callback1, callback2 } = value;

  const callback1Params = options?.params?.callback1 || [];
  const callback2Params = options?.params?.callback2 || [];
  if (callback1) {
    callback1.params = callback1Params.map((key) => ({ name: key }));
  }
  if (callback2) {
    callback2.params = callback2Params.map((key) => ({ name: key }));
  }

  const callback1Code =
    Array.isArray(callback1) && callback1.length
      ? CMDGeneratorEvent(
          callback1,
          { platform },
          scope,
          config,
          '',
          options?.funcTops?.callback1,
        )
      : '';

  const callback2Code =
    Array.isArray(callback2) && callback2.length
      ? CMDGeneratorEvent(
          callback2,
          { platform },
          scope,
          config,
          '',
          options?.funcTops?.callback2,
        )
      : '';

  let cmdCode = [
    code,
    callback1Code ? `then(${callback1Code})` : '',

    callback2Code ? `catch(${callback2Code})` : '',
    //     ? `catch((${callback2Params.join(',')}) => {
    //   ${callback2Code}
    // })`
    //     : '',
  ]
    .filter(Boolean)
    .join('.');

  if (options?.sync && config) {
    config.parentIsAsync = true;
    cmdCode = `await ${cmdCode}`;
  }
  return cmdCode;
};

export default GeneratorCallbackWithThenCatch;
