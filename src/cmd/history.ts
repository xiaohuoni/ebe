import { CMDGeneratorPrames } from '../core/types';
import { generateVarString } from '../core/utils/compositeType';
export function history({ value }: CMDGeneratorPrames): string {
  const { options } = value;
  const paramsObj = generateVarString(options.paramsObj);
  const pathname = generateVarString(options.pathname);
  const routerData = generateVarString(options.routerData);
  const historyParmas = {
    history,
    pathname,
    search: paramsObj,
    state: routerData || {},
  };
  return `// 路由跳转 \n  historytool(HISTORYTYPES.${
    options.type
  }, ${JSON.stringify(historyParmas)});`;
}
