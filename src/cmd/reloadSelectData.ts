import { parse2Var } from '../core/utils/compositeType';
import { CMDGeneratorPrames } from '../core/types';
export function reloadSelectData({ value }: CMDGeneratorPrames): string {
  const { compId, data, labelKey, valueKey } = value.options;

  return `
  callComponentMethod(
    ${parse2Var(compId)},
    ${parse2Var('setDataWithLabelAndValue')},
    ${parse2Var({
      dataSource: data,
      labelKey,
      valueKey,
    })}
  )
  `;
}
