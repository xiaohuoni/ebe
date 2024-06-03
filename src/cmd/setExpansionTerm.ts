import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
export function setExpansionTerm({ value }: CMDGeneratorPrames): string {
  const { expansionkey, compId, type } = value.options;
  let params = parse2Var(expansionkey);

  return `callComponentMethod(
    ${parse2Var(compId)},
    ${parse2Var('setExpansionTerm')},
    ${parse2Var(type)}
    ${params && params !== 'undefined' ? `, ${params}` : ''}
  )`;
}
