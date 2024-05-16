import { parse2Var } from '../core/utils/compositeType';
import { CMDGeneratorPrames } from '../core/types';
import { console } from 'fp-ts';
export function callCustomPageFunc({ value, platform, scope, config }: CMDGeneratorPrames): string {
    const { params = {}, customFuncName, pageId, pathname } = value.options;
    let id = pathname || pageId;
    return `// 调用${id}页面事件 \n customFuncMapping.callPageCustomFunc(${parse2Var(id)}, ${parse2Var(customFuncName)}, ${parse2Var(params)})`;
}
