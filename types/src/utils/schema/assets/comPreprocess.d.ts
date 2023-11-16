import { ComPreprocessTypes, PlatformType } from '@lingxiteam/types';
export interface ComPreprocessOptions {
    /**
     * 获取组件名称
     */
    getComponentName(type: string, alias?: string): string;
}
declare class comPreprocess {
    comPreprocess: Record<string, ComPreprocessTypes>;
    opts?: ComPreprocessOptions;
    updateOptions(opts: ComPreprocessOptions): void;
    /**
     * 注册平台指令
     * @param obj
     */
    registerComPreprocess(obj: ComPreprocessTypes, platform: PlatformType): void;
    getComPreprocessMethods(compName: string, platform: PlatformType): import("@lingxiteam/types").ProcessFunctionType[];
}
export default comPreprocess;
