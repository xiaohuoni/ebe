import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';

export function setActiveTabPane(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { compId, paramsObj } = options;
  const code = `
    // 设置激活的tab
    if (refs[${parse2Var(compId)}].setValue) {
      refs[${parse2Var(compId)}].setValue(${parse2Var(paramsObj.activiKey)});
    }
  `;
  return code;
}

export default setActiveTabPane;
