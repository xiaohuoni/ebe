import { ComPreprocessTypes, ProcessFunctionType } from '@lingxiteam/types';

/**
 * 支持属性key通过 "compName|compName"模式  * 全部处理
 * @param compName
 * @param obj
 * @returns
 */
const collectionMethods = (compName: string, obj: ComPreprocessTypes) => {
  const funcs: ProcessFunctionType[] = [];
  Object.keys(obj).forEach((key) => {
    const compNames = key.replace(/\s/g, '').split('|');
    if (compNames.includes(compName) || key === '*') {
      funcs.push(obj[key]);
    }
  });
  return funcs;
};

/**
 * 预处理DSL数据， 本方法仅在编辑器端使用。 处理后数据的权重高于preprocessDSL
 * @param component 组件JSON数据
 * @param context 上下文
 */
export const delPreprocessMethods = (
  compName: string,
  preEditorObj: ComPreprocessTypes,
) => {
  const methods = collectionMethods(compName, preEditorObj);
  return methods;
};
