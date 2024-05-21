import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';

export function setCurrentFormValues(generateParams: CMDGeneratorPrames): string {
  const { compId, paramsObj, params } = generateParams.value?.options || {};

  const _p = params === 'object' ? paramsObj : params;
  return `setFormValues(${parse2Var(compId)}, ${parse2Var(_p)})`;
}
