import { FunctorDefine } from './types';
import type { ManipulateType } from 'dayjs';
import dayjs from 'dayjs';

export const DATEADD = FunctorDefine({
  label: '为日期加减时间',
  type: 'DATEADD',
  value: "DATEADD('2008-11-11 12:23','+8h','YYYY-MM-DD hh:mm')",
  functor: (date: string | Date, unitDis: string, formatter?: string): Date | string => {
    const day = dayjs(date);
    const unitLen = unitDis.length;
    const unit = unitDis.charAt(unitLen - 1) as ManipulateType;
    const resultDate = day.add(parseFloat(unitDis), unit);
    if (!formatter) {
      return resultDate.toDate();
    }
    return resultDate.format(formatter);
  },
  define: ['对某个日期（时间）添加/减去一定时间段，再对计算结果设置格式'],
  description: {
    tips: [
      '· 计算式：\'+\'或\'-\'代表添加或减去；时间段的单位，\'y\'代表年、\'M\'代表月、\'d\'代表天、\'h\'代表小时、\'m\'代表分钟、\'s\'代表秒',
      '· [输出格式]：YYYY-MM-DD；如果不指定这个参数，则默认是Date类型',
    ],
    title: '(初始日期,计算式,[输出格式])',
  },
  example: {
    tips: [],
    title: '(\'2008-11-11 12:23\',\'+8h\',\'YYYY-MM-DD hh:mm\') ，结果：2008-11-11 20:23',
  },
  groupsName: ['日期函数', '常用函数'],
});
