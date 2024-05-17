import { FunctorDefine } from './types';
import { includes } from './utils/tools';

export const MAX = FunctorDefine({
  label: '最大值',
  type: 'MAX',
  value: 'MAX(10,20,30)',
  functor(...numbers: number[]): number | undefined {
    if (includes(numbers, ['', undefined, null])) {
      return undefined;
    }
    return Math.max(...numbers);
  },
  define: ['返回一组数字中的最大值'],
  description: {
    tips: [],
    title: '(数值1,数值2...)',
  },
  example: {
    tips: ['返回10,20,30中最大的数字'],
    title: '(10,20,30) ，结果：30',
  },
  groupsName: '数学函数',
});
