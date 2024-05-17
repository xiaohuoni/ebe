import { FunctorDefine } from './types';
import { includes } from './utils/tools';

export const POWER = FunctorDefine({
  label: '计算数字的乘幂',
  type: 'POWER',
  value: 'POWER(2,3)',
  functor(x: number, y: number): number | undefined {
    if (includes([x, y], ['', undefined, null])) {
      return undefined;
    }
    return x ** y;
  },
  define: [],
  description: {
    tips: [],
    title: '(底数，指数)',
  },
  example: {
    tips: ['计算2的3次方'],
    title: '(2,3)，结果：8',
  },
  groupsName: '数学函数',
});
