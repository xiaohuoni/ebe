import { defineTransform } from '../core';

/**
 * 兼容字符串前后包括$符号
 * 例如： $rowData.a  -> rowData.a
 * 这种数据属于错误的变量，正确逻辑不应该去处理$。但是配置态的bug导致这种数据在动态渲染端正常使用
 */
export default defineTransform(() => ({
  name: 'compatVariableSymbol',
  transformCode: (code: string) => {
    return code.replace(/^\$/, '').replace(/\$$/, '');
  },
}));
