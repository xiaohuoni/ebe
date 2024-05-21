import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
import { getImportFrom } from '../utils/depsHelper';

export function historyGoBack({ value, config }: CMDGeneratorPrames): string {
  const { options } = value;
  const { custParams = {} } = options;

  config?.ir?.deps?.push(getImportFrom('alita', 'history'));
  return `// 页面返回
  lcdpApi.setPageCallBackData(${parse2Var(custParams)});
   history.go(-1);
  `;
}
