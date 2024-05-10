import { CMDGeneratorPrames } from '../core/types';
import { generateVarString } from '../core/utils/compositeType';
export function setLoading({ value }: CMDGeneratorPrames): string {
  const paramsObj = generateVarString(value.paramsObj);
  const pathname = generateVarString(value.pathname);
  const routerData = generateVarString(value.routerData);
  const historyParmas = {
    history,
    pathname,
    search: paramsObj,
    state: routerData || {},
  };
  return `// 路由跳转 \n  historytool(${value.type}, ${JSON.stringify(
    historyParmas,
  )});\n`;
}
