import { IProjectSchema, IPublicTypeNodeDataType } from '../../core/types';
/**
 * 遍历并处理所有的子节点
 * @param components
 * @param handlers
 * @param options
 * @returns
 */
export declare function handleSubNodes<T>(components: IPublicTypeNodeDataType, handlers: {
    string?: (i: string) => T;
    node?: (i: IPublicTypeNodeDataType) => T;
}, options?: {
    rerun?: boolean;
    maxDepth?: number;
}): T[];
export declare const parseSchema: (schema: IProjectSchema, isRoot: boolean) => IProjectSchema;
