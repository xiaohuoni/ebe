import fixSyntaxError from '../../../src/core/utils/fixSyntaxError';
import { expectValue } from '../../utils';

describe('给代码片段增加操作链', () => {
  test.each([
    ['from a.b to a?b', { code: 'a.b', expected: 'a?.b' }],
    ['from a["b"] to a?.["b"]', { code: 'a["b"]', expected: 'a?.["b"]' }],
    ['from a.b() to a?.b?.()', { code: 'a.b()', expected: 'a?.b?.()' }],
    ['from a() to a?.()', { code: 'a()', expected: 'a?.()' }],
    [
      'from a["b"]() to a?.["b"]?.()',
      { code: 'a["b"]()', expected: 'a?.["b"]?.()' },
    ],
  ])('%s', (name, { code, expected }) => {
    expectValue(expected, fixSyntaxError(code));
  });
});
