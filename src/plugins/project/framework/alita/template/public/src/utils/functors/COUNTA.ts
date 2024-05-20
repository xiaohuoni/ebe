import { FunctorDefine } from './types';

export const COUNTA = FunctorDefine({
  label: '计数',
  type: 'CONCAT',
  value: 'CONCAT(1月,2月,3月)',
  functor(...values: any[]): number {
    return values.filter((v) => v !== null && v !== undefined).length;
  },
  define: ['计算参数中包含非空值的个数'],
  description: {
    tips: [],
    title: '(数值1,数值2...)',
  },
  example: {
    tips: [
      '计算第一季度指标的完成数量，该表有三个检查框对应1、2、3月指标是否完成，名称分别为1月、2月、3月，2月份未完成',
    ],
    title: '(1月,2月,3月) ，结果：2',
  },
  groupsName: '数学函数',
});
