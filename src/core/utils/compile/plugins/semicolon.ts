import { defineTransform } from '../core';

/**
 * 结尾分号处理
 */
export default defineTransform(() => {
  let hasLastSemicolon = false;
  return {
    name: 'statementEndSemicolon',
    begin: (code) => {
      // 是否已分号结尾
      const trimCode = code.trim();
      hasLastSemicolon = trimCode.charAt(trimCode.length - 1) === ';';
    },
    transformCode: (code: string) => {
      return code.replace(/;$/, '');
    },
    end(code) {
      if (hasLastSemicolon) {
        return `${code};`;
      }
      return code;
    },
  };
});
