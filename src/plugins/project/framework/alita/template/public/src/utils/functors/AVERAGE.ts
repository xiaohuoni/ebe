import { FunctorDefine } from './types';

export const AVERAGE = FunctorDefine({
  label: '平均值',
  type: 'AVERAGE',
  value: 'AVERAGE(10,20,30)',
  functor(...numbers: number[]): number {
    return (
      numbers.reduce((a, b) => Number(a ?? 0) + Number(b ?? 0), 0) /
      numbers.length
    );
  },
  define: ['计算数字的绝对值'],
  description: {
    tips: [],
    title: '(数值1,数值2...)',
  },
  example: {
    tips: ['计算10,20,30的平均值'],
    title: '(10,20,30) ，结果：20',
  },
  groupsName: ['常用函数', '数学函数'],
});
