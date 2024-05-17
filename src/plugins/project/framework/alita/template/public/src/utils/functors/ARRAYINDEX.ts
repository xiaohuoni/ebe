import { FunctorDefine } from './types';

export const ARRAYINDEX = FunctorDefine({
  label: '获取数组索引值',
  type: 'ARRAYINDEX',
  value: 'ARRAYINDEX([1,2,3,4], 1)',
  functor(arr: any[], i: number) {
    if (!Array.isArray(arr)) {
      return null;
    }
    return arr[i];
  },
  define: ['获取数组对应的索引值'],
  description: {
    tips: [],
    title: '(数组, 索引)',
  },
  example: {
    tips: ['获取[1,2,3,4]的第2个元素'],
    title: '([1,2,3,4], 1) ，结果：2',
  },
  groupsName: ['常用函数'],
});
