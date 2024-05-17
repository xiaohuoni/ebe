import { FunctorDefine } from './types';

export const OBJECTVALUE = FunctorDefine({
  label: '获取对象字段值',
  type: 'OBJECTVALUE',
  value: "OBJECTVALUE({ a: { b: 1 } }, 'a', 'b')",
  functor(obj: any, ...keys) {
    return keys?.reduce((target, it) => target?.[it], obj);
  },
  define: ['获取对象对应的对象值'],
  description: {
    tips: [],
    title: '(对象, key1, key2, ...)',
  },
  example: {
    tips: ['获取 { a: { b: 1 } } b的值'],
    title: "({ a: { b: 1 } }, 'a', 'b') ，结果：1",
  },
  groupsName: ['常用函数'],
});
