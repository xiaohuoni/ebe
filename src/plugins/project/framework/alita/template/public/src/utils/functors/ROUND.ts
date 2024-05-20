import { FunctorDefine } from './types';
import { includes } from './utils/tools';

export const ROUND = FunctorDefine({
  label: '四舍五入',
  type: 'ROUND',
  value: 'ROUND(3.14159265,4)',
  functor(x: number, digits: number): number | undefined {
    if (includes([x, digits], [null, undefined, ''])) {
      return undefined;
    }
    return Math.round(x * 10 ** digits) / 10 ** digits;
  },
  define: ['按指定位数对数字进行四舍五入'],
  description: {
    tips: [],
    title: '(数值,位数)',
  },
  example: {
    tips: ['随机输出1-10之间的一个数字'],
    title: '(3.14159265,4) ，结果：3.1416',
  },
  groupsName: '数学函数',
});
