import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import { toBool } from '../utils/common';

export function sysSetRequired({ value }: CMDGeneratorPrames): string {
  const { compId: tempCompId, compValueList: temValue } = value.options;
  let compId = Array.isArray(tempCompId) ? tempCompId : [];
  if (typeof tempCompId === 'string' && temValue?.[tempCompId]) {
    compId = [tempCompId];
    return `// 设置控件必填 \n setRequired('${compId}', ${parse2Var(
      toBool(temValue?.[tempCompId]),
    )})`;
  } else if (Array.isArray(tempCompId)) {
    let valueList: any = {};
    compId.map((id: string) => {
      if (temValue?.[id] !== undefined) {
        valueList[id] = toBool(temValue[id]) || false;
      }
    });
    if (Object.keys(valueList).length === 1) {
      return `// 设置控件必填  \n setRequired('${
        Object.keys(valueList)[0]
      }', ${parse2Var(valueList[Object.keys(valueList)[0]])})`;
    }
    return `// 批量设置控件必填  \n setRequired(${parse2Var(valueList)})`;
  } else {
    return '';
  }
}
