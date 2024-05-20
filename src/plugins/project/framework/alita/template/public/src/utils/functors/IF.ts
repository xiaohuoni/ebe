import { FunctorDefine } from './types';

export const IF = FunctorDefine({
  label: '条件语句',
  type: 'IF',
  value: "IF(分数>=60,'及格','不及格')",
  functor(condition: boolean, trueValue: any, falseValue: any): any {
    return condition ? trueValue : falseValue;
  },
  define: ['设置判断条件，然后根据判断结果TRUE或FALSE来返回不同的文本'],
  description: {
    tips: ['· 无论表达式成立或不成立时，输出结果固定为文本类型'],
    title: '(表达式,成立时输出,不成立时输出)',
  },
  example: {
    tips: ['如果分数大于等于60分，则记为及格，否则记为不及格'],
    title: "(分数>=60,'及格','不及格')，结果：'及格'",
  },
  groupsName: '常用函数',
});
