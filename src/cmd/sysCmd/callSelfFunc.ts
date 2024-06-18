import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { getSaleEventName } from '../../utils/getSaleEventName';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function callSelfFunc(generateParams: CMDGeneratorPrames): string {
  const { value = {} } = generateParams;
  const { paramsObj, customFuncName, customFuncParams, id } = value.options;
  const params = customFuncParams === 'object' ? paramsObj : customFuncParams;

  return GeneratorCallbackWithThenCatch(
    `// 调用当前页面自定义事件\n  customActionMap?.${getSaleEventName(
      customFuncName,
    )}(${params ? parse2Var(params) : ''})`,
    generateParams,
    {
      sync: false,
      params: {
        callback1: [`customFunc_${id}`],
      },
    },
  );
}
