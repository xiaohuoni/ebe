import { FunctorDefine } from './types';

export const RANDOMNUM = FunctorDefine({
  label: '根据位数生成随机数',
  type: 'RANDOMNUM',
  value: 'RANDOMNUM(6)',
  functor(x: number) {
    if ([null, undefined, ''].includes(x as any)) {
      return undefined;
    }
    let randomNumStr = '';
    let i = 0;
    while (i < x) {
      randomNumStr += String(Math.floor(Math.random() * 10));
      // eslint-disable-next-line no-plusplus
      i++;
    }
    return Number(randomNumStr);
  },
  define: ['根据位数生成随机数'],
  description: {
    tips: [],
    title: '(位数)',
  },
  example: {
    tips: ['随机生成6位随机数'],
    title: '示例：=RANDOMNUM(6)',
  },
  groupsName: ['数学函数'],
});
