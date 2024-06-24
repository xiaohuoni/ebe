import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';

export function clearDynamicFormValues(
  generateParams: CMDGeneratorPrames,
): string {
  const { compId } = generateParams.value?.options || {};

  return `resetForm(${parse2Var(compId)})`;
}
