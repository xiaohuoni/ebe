import { FunctorDefine } from './types';

export const COUNTARRAY = FunctorDefine({
  label: '计对象数量',
  type: 'COUNTARRAY',
  value: 'COUNTARRAY(工序)',
  functor(array: any[]) {
    return array.length;
  },
  define: ['计算人员、部门、多选、子表或关联表的数量'],
  description: {
    tips: [],
    title: '(数组类字段)',
  },
  example: {
    tips: ['计算名称为“工序”的子表数量（实际有7道工序）'],
    title: '(工序) ，结果：7',
  },
  groupsName: '数学函数',
});
