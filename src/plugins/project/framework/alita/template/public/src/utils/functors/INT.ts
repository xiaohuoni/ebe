import { FunctorDefine } from './types';

export const INT = FunctorDefine({
  label: '求整',
  type: 'INT',
  value: 'INT(-3.14159265)',
  functor(x: number) {
    if ([null, undefined, ''].includes(x as any)) {
      return undefined;
    }
    return Math.floor(x);
  },
  define: ['返回永远小于等于原数字的最接近的整数'],
  description: {
    tips: [],
    title: '(数值)',
  },
  example: {
    tips: ['对 -3.14159265 进行求整'],
    title: '(-3.14159265)，结果：-4',
  },
  groupsName: '数学函数',
});
