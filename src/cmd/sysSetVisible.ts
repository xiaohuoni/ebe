import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import {
  CMDGeneratorPrames,
} from '../core/types';

export function sysSetVisible({ value }: CMDGeneratorPrames): string {
  const { compId, valueList } = value.options;
  return `// 批量设置控件的值 \n setValue(${compId}, ${JSON.stringify(valueList)}) ` ;
}
