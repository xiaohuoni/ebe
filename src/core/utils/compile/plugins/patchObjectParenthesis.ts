import { defineTransform } from '../core';

/**
 * 修正对象的小括号
 * ({ a: 0, b: 100 }) -> { a: 0, b: 100 }
 * @param code
 */
export default defineTransform(() => ({
  name: 'removeParenthesis',
  transformCode: (code: string) => {
    const newCode = code.replace(/[;]+$/, '');
    if (newCode.startsWith('({') && newCode.endsWith('})')) {
      return newCode.replace(/^\({/, '{').replace(/}\)$/, '}');
    }
    return code;
  },
}));
