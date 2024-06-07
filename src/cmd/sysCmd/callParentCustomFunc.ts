import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
export function callParentCustomFunc({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  const { params = {}, customFuncName } = value.options;
  return `// 调用父页面事件 \n customFuncMapping.callCustomFunc(lcdpParentRenderId, ${parse2Var(
    customFuncName,
  )}, ${parse2Var(params)})`;
}
