import { parse2Var } from '../core/utils/compositeType';
import { CMDGeneratorPrames } from '../core/types';
export function okCallbackData({ value, platform, scope, config }: CMDGeneratorPrames): string {
  const { params } = value.options;
  return `// 弹窗确认回掉 \n fatherOnOk && fatherOnOk(${params? parse2Var(params): ''})`;
}
