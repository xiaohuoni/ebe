import compile from '../../../../src/core/utils/compile';
import { expectValue } from '../../../utils';

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
    ['from a[0]() to a?.[0]?.()', { code: 'a[0]()', expected: 'a?.[0]?.()' }],
  ])('%s', (name, { code, expected }) => {
    expectValue(expected, compile(code));
  });

  test('customSyntaxToJS', () => {
    expectValue(
      'functorsMap?.IF?.(functorsMap?.MAX?.(1,2),1,2)',
      compile('IF(MAX(1,2),1,2)'),
    );
    expectValue(
      'functorsMap?.IF?.(functorsMap?.MAX?.(globalData?.a?.b,2),state?.a,2)',
      compile('IF(MAX("$globalData.a.b$",2),"$state.a$",2)'),
    );
  });

  test.each([
    ['"$globalData$"', 'globalData'],
    ['"$globalData.a$"', 'globalData?.a'],
    ['"$data.a$"', 'data?.a'],
    ['"$data$"', 'data'],
    ['"$urlParam.a$"', 'urlParam?.a'],
    ['"$routerData.a$"', 'routerData?.a'],
    ['"$appInfo.a$"', 'appInfo?.a'],
    ['"$state.a$"', 'state?.a'],
    ['\'$getValue("bac")$\'', 'getValue?.("bac")'],
    ['\'$getDynamicDataValue("bac")$\'', 'getValue?.("bac")'],
  ])('form %s to %s', (code, expected) => {
    expectValue(expected, compile(code));
  });
});
