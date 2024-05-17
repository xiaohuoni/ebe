import { FunctorDefine } from './types';

export const ABS = FunctorDefine({
  label: '绝对值',
  type: 'ABS',
  value: 'ABS(-7)',
  functor(x: number) {
    if ([null, undefined, ''].includes(x as any)) {
      return undefined;
    }
    return Math.abs(x);
  },
  define: ['计算数字的绝对值'],
  description: {
    tips: [],
    title: '(数值)',
  },
  example: {
    tips: ['求 -7 的绝对值'],
    title: '(-7) ，结果：7',
  },
  groupsName: '常用函数',
});
