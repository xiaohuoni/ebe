import * as t from '@umijs/bundler-utils/compiled/babel/types';

/** 判断是非是一些简单直接的字面值 */
export function isSimpleStraightLiteral(expr: t.Expression): boolean {
  switch (expr.type) {
    case 'BigIntLiteral':
    case 'BooleanLiteral':
    case 'DecimalLiteral':
    case 'NullLiteral':
    case 'NumericLiteral':
    case 'RegExpLiteral':
    case 'StringLiteral':
      return true;
    default:
      return false;
  }
}
