import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function setDynamicFormValues(
  generateParams: CMDGeneratorPrames,
): string {
  const { params, paramsObj, compId } = generateParams.value?.options || {};
  const _p = params === 'object' ? paramsObj : params;

  return `
    // 设置当前表单数据
    setFormValues(${parse2Var(compId)}, ${parse2Var(_p)})
  `;
}
