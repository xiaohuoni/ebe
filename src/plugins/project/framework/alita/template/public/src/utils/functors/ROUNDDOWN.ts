import { FunctorDefine } from './types';
import { includes } from './utils/tools';

export const ROUNDDOWN = FunctorDefine({
  label: '向下舍入',
  type: 'ROUNDDOWN',
  value: 'ROUNDDOWN(3.14159265,4)',
  functor(x: number, digits: number) {
    if (includes([x, digits], [null, undefined, ''])) {
      return undefined;
    }
    return Math.floor(x * 10 ** digits) / 10 ** digits;
  },
  define: ['以绝对值减小的方向按指定位数舍入数字'],
  description: {
    tips: [],
    title: '(数值,位数)',
  },
  example: {
    tips: ['保留 3.14159265 的四位小数'],
    title: '(3.14159265,4) ，结果：3.1415',
  },
  groupsName: '数学函数',
});
