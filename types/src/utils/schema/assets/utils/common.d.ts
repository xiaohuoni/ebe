import { ProcessFunctionType, ComPreprocessTypes } from '@lingxiteam/types';
/**
 * 预处理DSL数据， 本方法仅在编辑器端使用。 处理后数据的权重高于preprocessDSL
 * @param component 组件JSON数据
 * @param context 上下文
 */
export declare const delPreprocessMethods: (compName: string, preEditorObj: ComPreprocessTypes) => ProcessFunctionType[];
