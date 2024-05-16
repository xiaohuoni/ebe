import { parse2Var } from '../core/utils/compositeType';
import { CMDGeneratorPrames } from '../core/types';
export function callSelfFunc({ value, platform, scope, config }: CMDGeneratorPrames): string {
    const { paramsObj, customFuncName, customFuncParams } = value.options;
   const params = customFuncParams === 'object' ? paramsObj : customFuncParams;
  return `// 调用当前页面自定义事件 \n customActionMap?.${customFuncName}(${params ? parse2Var(params) : ''})`;
}
