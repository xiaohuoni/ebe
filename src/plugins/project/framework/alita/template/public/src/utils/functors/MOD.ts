import { FunctorDefine } from './types';
import { includes } from './utils/tools';

export const MOD = FunctorDefine({
  label: '求余',
  type: 'MOD',
  value: 'MOD(15,4)',
  functor(x: number, y: number): number | undefined {
    if (includes([x, y], [undefined, null, ''])) {
      return undefined;
    }
    return Math.round(x) % Math.round(y);
  },
  define: ['返回两数相除的余数'],
  description: {
    tips: [],
    title: '(被除数,除数)',
  },
  example: {
    tips: ['计算 15 除以 4 的余数'],
    title: '(15,4) ，结果：3',
  },
  groupsName: '数学函数',
});
