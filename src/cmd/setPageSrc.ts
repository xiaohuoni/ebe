import { CMDGeneratorPrames } from '../core/types';
import { CMDGeneratorEvent } from '../core/utils/CMDGenerator';
import { parse2Var } from '../core/utils/compositeType';

export function setPageSrc(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { pathname, paramsObj, compId } = value.options;

  return `// 设置页面地址
  callComponentMethod(${parse2Var(compId)}, 'setPageSrc', ${parse2Var(pathname)}, ${parse2Var(paramsObj)})
  `;
}
