import { FunctorDefine } from './types';

export const STRTOARRAY = FunctorDefine({
  label: '字符串转数组',
  type: 'STRTOARRAY',
  value: "STRTOARRAY('a,b,c', ',')",
  functor(s: string, sk: string) {
    if (typeof s === 'string') {
      return s.split(sk);
    }
    return undefined;
  },
  define: ['字符串根据字符转换成数组'],
  description: {
    tips: [],
    title: '(字符串,分割字符)',
  },
  example: {
    tips: ['字符串"a,b,c"，以","分割为数组'],
    title: '("a,b,c", ",") ，结果：["a","b","c"]',
  },
  groupsName: ['常用函数'],
});
