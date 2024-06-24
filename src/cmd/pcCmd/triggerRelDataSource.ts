import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
export function triggerRelDataSource(
  generateParams: CMDGeneratorPrames,
): string {
  const { custTargetVal, target, arelStaticData, zrelStaticData, compId } =
    generateParams.value.options;

  if (arelStaticData?.attr.attrNbr && zrelStaticData?.attr.attrNbr) {
    let TargetVal = custTargetVal ? parse2Var(custTargetVal) : undefined;
    if (!TargetVal && target) {
      // 如果当前上下文不存在值的话，优先取cmd.options.target 控件ID 的值
      TargetVal = `refs?.['target']?.value`;
    }
    return `
    // 获取联动数据,并设置
    callComponentMethod('${compId}','setData',getTriggerRelDataSource(attrDataMap,${parse2Var(
      arelStaticData.attr.attrNbr,
    )}, ${parse2Var(zrelStaticData.attr.attrNbr)}, ${TargetVal || ''}))
    `;
  }
  return '';
}

export default triggerRelDataSource;
