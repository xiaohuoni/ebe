import { FunctorDefine } from './types';

export const CONCAT = FunctorDefine({
  label: '合并文本',
  type: 'CONCAT',
  value: "CONCAT('aaaa','2021MMDD','bbbb')",
  functor(...texts: string[]): string {
    return texts.join('');
  },
  define: ['将两个或多个文本合并为一个整体'],
  description: {
    tips: [],
    title: '(文本1,文本2...)',
  },
  example: {
    tips: ['合并aaaa、2021MMDD、bbbb三段文本'],
    title: "('aaaa','2021MMDD','bbbb') ，结果：aaaa2021MMDDbbbb",
  },
  groupsName: '常用函数',
});
