import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from './utils';
export function reloadSelectData(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { compId, data, labelKey, valueKey } = value.options;

  const code = `asyncCallComponentMethod(
    ${parse2Var(compId)},
    ${parse2Var('setDataWithLabelAndValue')},
    ${parse2Var({
      dataSource: data,
      labelKey,
      valueKey,
    })}
  )`;

  return GeneratorCallbackWithThenCatch(code, generateParams);
}
