import { FunctorDefine } from './types';

export const DATETIME = FunctorDefine({
  label: '时间戳',
  type: 'DATETIME',
  value: 'DATETIME()',
  functor() {
    return new Date().getTime();
  },
  define: ['获取当前时间戳'],
  description: {
    tips: [],
    title: '()',
  },
  example: {
    tips: ['获取当前时间戳'],
    title: '()',
  },
  groupsName: ['日期函数'],
});
