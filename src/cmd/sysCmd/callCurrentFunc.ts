import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { getSaleEventName } from '../../utils/getSaleEventName';
import { GeneratorCallbackWithThenCatch } from '../utils';

export function callCurrentFunc(generateParams: CMDGeneratorPrames): string {
  const { value = {} } = generateParams;
  const { compId, id, paramsObj, customFuncParams, customFuncName } =
    value.options;
  const params = customFuncParams === 'object' ? paramsObj : customFuncParams;

  return GeneratorCallbackWithThenCatch(
    `// 调用组件${compId}的自定义事件\n  refs?.['${compId}']?.customActionMap?.${getSaleEventName(
      customFuncName,
    )}(${params ? parse2Var(params) : ''})`,
    generateParams,
    {
      sync: false,
      params: {
        callback1: [`currentFunc_${id}`],
      },
    },
  );
}
