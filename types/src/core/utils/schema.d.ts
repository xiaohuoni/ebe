import { IPublicTypeNodeDataType } from '../types';
import { Component } from '@lingxiteam/types';
export declare function isContainerSchema(x: any): x is any;
export declare function isNpmInfo(x: any): x is any;
/**
 * 遍历并处理所有的子节点
 * @param components
 * @param handlers
 * @param options
 * @returns
 */
export declare function handleSubNodes<T>(components: IPublicTypeNodeDataType, handlers: {
    string?: (i: string) => T;
    expression?: (i: any) => T;
    node?: (i: IPublicTypeNodeDataType) => T;
}, options?: {
    rerun?: boolean;
    maxDepth?: number;
}): T[];
export declare function isValidContainerType(schema: Component): boolean;
export declare const enum ContainerType {
    Page = "Page",
    Component = "Component",
    Block = "Block"
}
