import fixSyntaxError from '../../../src/core/utils/fixSyntaxError';
import { expectValue } from '../../utils';

describe('fixSyntaxError', () => {
  test.each([
    ['from "a.b" to "a?b"', { code: 'a.b', expected: 'a?.b' }],
    ['from a["b"] to a?.["b"]', { code: 'a["b"]', expected: 'a?.["b"]' }],
    ['from a["b"] to a?.["b"]', { code: 'a.b()', expected: 'a?.b?.()' }],
    ['from a["b"] to a?.["b"]', { code: 'a()', expected: 'a?.()' }],
  ])('%s', (name, { code, expected }) => {
    expectValue(expected, fixSyntaxError(code));
  });
});
