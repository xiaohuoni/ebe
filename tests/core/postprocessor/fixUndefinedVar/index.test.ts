import fixUndefinedVar, {
  getCodeComment,
} from '../../../../src/core/postprocessor/fixUndefinedVar';
import { expectValue } from '../../../utils';

describe('fixSyntaxError 解决部分未定义变量导致的错误', () => {
  test.each([
    ['if(a){}', `if(${getCodeComment('a')}){}`],
    ['console.log(a)', `console.log(${getCodeComment('a')})`],
    ['console.log(a.b.c)', `console.log(${getCodeComment('a')}.b.c)`],
    ['const c = { a: data.a }', `const c = { a: ${getCodeComment('data')}.a }`],
    ['const c = { a: window.a }', `const c = { a: window.a }`],
    ['const c = { a: console.log }', `const c = { a: console.log }`],
  ])('from %s to %s', (code, expected) => {
    console.log(fixUndefinedVar()(code, 'ts').split('\n').join(''));
    expectValue(expected, fixUndefinedVar()(code, 'ts').split('\n').join(''));
  });
});
