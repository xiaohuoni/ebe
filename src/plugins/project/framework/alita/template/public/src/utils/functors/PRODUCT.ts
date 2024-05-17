import { FunctorDefine } from './types';

export const PRODUCT = FunctorDefine({
  label: '乘积',
  type: 'PRODUCT',
  value: 'PRODUCT(15,4)',
  functor(...numbers: number[]): number {
    return numbers.reduce((a, b) => Number(a ?? 0) * Number(b ?? 0), 1);
  },
  define: ['返回两数相乘的积'],
  description: {
    tips: [],
    title: '(数值1,数值2...)',
  },
  example: {
    tips: ['计算 15 乘以 4 的积'],
    title: '(15,4) ，结果：60',
  },
  groupsName: '数学函数',
});
