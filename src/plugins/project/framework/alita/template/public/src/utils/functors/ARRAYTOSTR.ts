import { FunctorDefine } from './types';

export const ARRAYTOSTR = FunctorDefine({
  label: '数组转字符串',
  type: 'ARRAYTOSTR',
  value: 'ARRAYTOSTR([1,2,3,4])',
  functor(arr: any[]) {
    if (!Array.isArray(arr)) {
      return null;
    }
    return arr.toString();
  },
  define: ['获取数组对应的字符串'],
  description: {
    tips: [],
    title: '(数组)',
  },
  example: {
    tips: ['[1,2,3,4]转为字符串'],
    title: "([1,2,3,4]) ，结果：'1,2,3,4'",
  },
  groupsName: ['常用函数'],
});
