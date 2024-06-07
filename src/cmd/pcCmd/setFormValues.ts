import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function setFormValues({ value }: CMDGeneratorPrames): string {
  const { options } = value;
  const { paramsObj, params, compId } = options;

  const _p = params === 'object' ? paramsObj : params;
  return `
    // 设置表单值
    callComponentMethod(${parse2Var(compId)}, 'setFieldsValue', ${parse2Var(
    _p,
  )})
  `;
}
