import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function setFormValues({ value }: CMDGeneratorPrames): string {
  const { options } = value;
  const { paramsObj, params, compId } = options;

  const _p = params === 'object' ? paramsObj : params;
  return `
    // 设置表单值
    setFormValues(${parse2Var(compId)}, ${parse2Var(_p)})
  `;
}
