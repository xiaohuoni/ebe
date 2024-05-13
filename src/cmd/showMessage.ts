import { parse2Var } from '../core/utils/compositeType';
import {
    CMDGeneratorPrames,
} from '../core/types';

export function showMessage({ value }: CMDGeneratorPrames): string {
    const { options } = value;
    let content = options.value;

    return `// 提示消息 \n messageApi('${options.type}', ${parse2Var(content)}) `;
}
