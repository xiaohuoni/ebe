import { FunctorDefine } from './types';

export const RANDBETWEEN = FunctorDefine({
  label: '返回随机数',
  type: 'RANDBETWEEN',
  value: 'RANDBETWEEN(1,10)',
  functor(x: number, y: number) {
    return Math.round(Math.random() * (y - x) + x);
  },
  define: [
    '随机输出指定两个数字之间的一个整数；在新建记录时生成后，值将不再改变',
  ],
  description: {
    tips: [],
    title: '(最小值,最大值)',
  },
  example: {
    tips: ['随机输出1-10之间的一个数字'],
    title: '(1,10) ，结果：7',
  },
  groupsName: '数学函数',
});
