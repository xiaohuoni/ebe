import { FunctorDefine } from './types';
import { includes } from './utils/tools';

export const MIN = FunctorDefine({
  label: '最小值',
  type: 'MIN',
  value: 'MIN(10,20,30)',
  functor(...numbers: number[]): number | undefined {
    if (includes(numbers, ['', undefined, null])) {
      return undefined;
    }
    return Math.min(...numbers);
  },
  define: ['返回一组数字中的最小值'],
  description: {
    tips: [],
    title: '(数值1,数值2...)',
  },
  example: {
    tips: ['返回10,20,30中最小的数字'],
    title: '(10,20,30) ，结果：10',
  },
  groupsName: '数学函数',
});
