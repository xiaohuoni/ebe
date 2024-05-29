import fixSyntaxError from '../../../src/core/utils/fixSyntaxError';
import { expectValue } from '../../utils';

describe('给代码片段增加操作链', () => {
  test.each([
    ['from 1.2 to 1.2', { code: '1.2', expected: '1.2' }],
    ['from a.b to a?b', { code: 'a.b', expected: 'a?.b' }],
    ['from a["b"] to a?.["b"]', { code: 'a["b"]', expected: 'a?.["b"]' }],
    ['from a.b() to a?.b?.()', { code: 'a.b()', expected: 'a?.b?.()' }],
    ['from a() to a?.()', { code: 'a()', expected: 'a?.()' }],
    [
      'from a["b"]() to a?.["b"]?.()',
      { code: 'a["b"]()', expected: 'a?.["b"]?.()' },
    ],
    [
      'from a[0]() to a?.[0]?.()',
      { code: 'a[0]()', expected: 'a?.[0]?.()' },
    ],
  ])('%s', (name, { code, expected }) => {
    expectValue(expected, fixSyntaxError(code));
  });
});
