import { CMDGeneratorPrames } from '../core/types';
import { generateVarString, parse2Var } from '../core/utils/compositeType';
import { getImportFrom } from '../utils/depsHelper';

export function history({ value, config }: CMDGeneratorPrames): string {
  const { options } = value;
  const { type = 'push' } = options;
  const paramsObj = generateVarString(options.paramsObj);
  const pathname = generateVarString(options.pathname);
  const routerData = generateVarString(options.routerData);

  config?.ir?.deps?.push(getImportFrom('alita', 'history'));
  return `// 路由跳转 \n  historytool(HISTORYTYPES.${type}, {
    history,
    pathname:'${pathname}',
    search:${parse2Var(paramsObj)},
    state:${parse2Var(routerData || {})},
  });`;
}
