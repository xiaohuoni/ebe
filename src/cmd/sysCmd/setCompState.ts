import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
export function setCompState({ value }: CMDGeneratorPrames): string {
  const { compId, paramsObj } = value.options;

  return `
  // 设置组件状态
  callComponentMethod(
    ${parse2Var(compId)},
    ${parse2Var('setCompPropMapState')},
    ${parse2Var(paramsObj)}
  )
  `;
}
