import { SandBoxContext } from '@lingxiteam/types';
export declare type IPublicSchemaType = Record<string, any>;
declare const parseDsl: (schema: IPublicSchemaType, isRoot: boolean, appId: string, pageId?: string) => IPublicSchemaType;
/**
 * 处理自定义函数
 * @param customFuctions
 * @returns
 */
declare const parseCustomFuction: (customFuctions: [], context: SandBoxContext, CMDParse: any) => any;
export { parseDsl, parseCustomFuction };
