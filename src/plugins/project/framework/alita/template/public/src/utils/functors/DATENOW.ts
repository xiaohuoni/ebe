import dayjs from 'dayjs';
import { FunctorDefine } from './types';
import { getGreenText } from './utils/tools';

export const DATENOW = FunctorDefine({
  label: '返回当前时间',
  type: 'DATENOW',
  value: "DATENOW('YYYY-MM-DD')",
  functor: (formatter?: string): Date | string => {
    if (!formatter) {
      return new Date();
    }
    return dayjs().format(formatter);
  },
  define: ['返回当前时间'],
  description: {
    tips: ['返回指定格式的当前时间，如果不传参数。将返回Date类型'],
    title: '([格式])',
  },
  example: {
    tips: [],
    title: `('YYYY-MM-DD')，结果：'2022-07-24'; ${getGreenText(
      'DATENOW',
    )}()，结果: Thu Jul 14 2022 17:23:31 GMT+0800 (中国标准时间)`,
  },
  groupsName: ['日期函数', '常用函数'],
});
