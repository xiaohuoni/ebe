import { FunctorDefine } from './types';
import { includes } from './utils/tools';

export const LOG = FunctorDefine({
  label: '计算以指定数字为底的对数',
  type: 'LOG',
  value: 'LOG(8,2)',
  functor(x: number, base: number): number | undefined {
    if (includes([x, base], ['', undefined, null])) {
      return undefined;
    }
    return Math.round(Math.log(x) / Math.log(base));
  },
  define: ['计算填入数值的对数，返回的是整数'],
  description: {
    tips: [],
    title: '(真数, 底数)',
  },
  example: {
    tips: ['计算以2为底8的对数'],
    title: '(8,2)，结果：3',
  },
  groupsName: '数学函数',
});
