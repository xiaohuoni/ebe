import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
import { getImportFrom } from '../utils/depsHelper';

export function historyReplace({ value, config }: CMDGeneratorPrames): string {
  const { options } = value;
  const { pathname, paramsObj, search, routerData } = options;

  config?.ir?.deps?.push(getImportFrom('alita', 'history'));

  return `// 路由替换 
    historytool(HISTORYTYPES.replace, ${parse2Var({
      history: '$history$',
      pathname,
      search: paramsObj || search || '',
      state: routerData || '${}$',
    })});
  `;
}
