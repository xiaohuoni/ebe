import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
import { isJSVar } from '../core/utils/deprecated';

export function setFormValues({ value }: CMDGeneratorPrames): string {
  const { options } = value;
  const { compId, paramsObj, params } = options;

  const _p = params === 'object' ? paramsObj : params;
  return `setFormValues(${parse2Var(_p)})`;
}
