import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
export function setLoading({ value }: CMDGeneratorPrames): string {
  const { loading, compId } = value.options;
  return `// 加载loading\n  refs[${parse2Var(
    compId,
  )}]?.setLoading?.(!!${loading});`;
}
