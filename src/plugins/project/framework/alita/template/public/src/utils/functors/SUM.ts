import { FunctorDefine } from './types';

export const SUM = FunctorDefine({
  label: '求和',
  type: 'SUM',
  value: 'SUM(10,20,30)',
  functor(...numbers: number[]): number {
    return numbers.reduce((a, b) => Number(a ?? 0) + Number(b ?? 0), 0);
  },
  define: ['计算数字之和'],
  description: {
    tips: [],
    title: '(数值1,数值2...)',
  },
  example: {
    tips: ['计算10,20,30的和'],
    title: '(10,20,30) ，结果：60',
  },
  groupsName: ['常用函数', '数学函数'],
});
