import { FunctorDefine } from './types';

export const COUNTCHAR = FunctorDefine({
  label: '计字符数',
  type: 'COUNTCHAR',
  value: 'COUNTCHAR(标题)',
  functor(text: string) {
    if (typeof text !== 'string') {
      return 0;
    }
    if (text === null || text === undefined) {
      return 0;
    }
    return text.length;
  },
  define: ['计算文本字段的字符数量'],
  description: {
    tips: [],
    title: '(文本)',
  },
  example: {
    tips: ['计算标题“通过函数计算赋字段默认值”的字数'],
    title: '(标题)，结果：12',
  },
  groupsName: '数学函数',
});
