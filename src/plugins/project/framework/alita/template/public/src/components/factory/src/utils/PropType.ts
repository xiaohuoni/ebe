import type React from 'react';

// 提取FC组件中的组件泛型
export type InferFunctionComponents<T> = T extends React.FC<infer P> ? P : any;

export interface FilterWhiteSpaceParamaters extends Record<string, unknown> {
  required?: boolean;
  message?: string;
}

type RecordKeys<T extends Record<string, any>> = keyof T;

// 值为undefined的key值移除
export type FilterWhiteSpace<T extends Record<string, any>> = {
  [Key in RecordKeys<T>]: T[Key] extends undefined ? never : T[Key];
};

export type FilterWhiteSpaceFunction<T extends FilterWhiteSpaceParamaters> = (
  params: T,
) => FilterWhiteSpaceParamaters;

export interface GetRulesParamaters {
  required?: boolean;
  regexp?: any[];
  message?: string;
}

export type GetRulesFunction<P> = (params: P) => FilterWhiteSpaceParamaters[];
