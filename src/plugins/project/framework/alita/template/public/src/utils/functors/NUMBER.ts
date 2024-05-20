import { FunctorDefine } from './types';
import { getGreenText, includes } from './utils/tools';

export const NUMBER = FunctorDefine({
  label: '强制转为数值',
  type: 'NUMBER',
  value: `NUMBER(${getGreenText('IF')}(${getGreenText('TRUE')}(),'-1','0'))`,
  functor(x: number): number | undefined {
    if (includes([x], ['', null, undefined])) {
      return undefined;
    }
    return Number(x);
  },
  define: ['将文本等类型的值转为数值'],
  description: {
    tips: [],
    title: '(文本)',
  },
  example: {
    tips: ["将 '-1' 和 5 相加（if输出的结果类型固定为文本）"],
    title: `(${getGreenText('IF')}(${getGreenText(
      'TRUE',
    )}(),'-1','0'))+5，结果：4`,
  },
  groupsName: '数学函数',
});
