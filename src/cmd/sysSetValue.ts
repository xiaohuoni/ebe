import { CMDGeneratorPrames } from '../core/types';
import { CMDGeneratorFunction } from '../core/utils/CMDGenerator';
import { parse2Var } from '../core/utils/compositeType';

export function sysSetValue({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  const { compId: tempCompId, valueList: temValue } = value.options;
  const { callback1 = [] } = value;
  let compId = Array.isArray(tempCompId) ? tempCompId : [];
  const callback =
    Array.isArray(callback1) && callback1.length
      ? `\n${CMDGeneratorFunction(callback1, {}, platform, scope, config)}`
      : '';
  if (typeof tempCompId === 'string' && temValue?.[tempCompId]) {
    compId = [tempCompId];
    return `// 设置控件的值 \n setValue('${compId}', ${parse2Var(
      temValue?.[tempCompId],
    )})${callback} `;
  } else if (Array.isArray(tempCompId)) {
    let valueList: any = {};
    compId.map((id: string) => {
      if (temValue?.[id]) {
        valueList[id] = temValue[id];
      }
    });
    return `// 批量设置控件的值 \n setValue(${parse2Var(
      valueList,
    )})${callback} `;
  } else {
    return '';
  }
}
