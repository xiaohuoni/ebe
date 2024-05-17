/**
 * 函数库部分类型定义
 */
export interface FunctorDefineParams {
  label: string;
  type: string;
  functor: (...e: any) => any;
  define: string[];
  value: string;
  description: {
    title: string;
    tips: string[];
  };
  example: {
    title: string;
    tips: string[];
  };
  groupsName: string | string[];
}

export type FunctorDefineReturn = Omit<FunctorDefineParams, 'functor'> & FunctorDefineParams['functor'];

export type FunctorDefineFn = (params: FunctorDefineParams) => FunctorDefineReturn;

export const FunctorDefine: FunctorDefineFn = ({
  functor,
  ...restProps
}) => {
  const fn = functor as unknown as FunctorDefineReturn;
  Object.assign(fn, restProps);
  return fn;
};
