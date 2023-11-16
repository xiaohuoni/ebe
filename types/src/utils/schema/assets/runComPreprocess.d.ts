import { ComponentRunProcessType, PlatformType } from '@lingxiteam/types';
export interface RunComPreprocessOptions {
    /**
     * 获取组件名称
     */
    getComponentName(type: string, alias?: string): string;
}
declare class runComPreprocess {
    runComPreprocess: Record<string, ComponentRunProcessType>;
    opts?: RunComPreprocessOptions;
    updateOptions(opts: RunComPreprocessOptions): void;
    /**
     * 注册平台指令
     * @param obj
     */
    registerRunComPreprocess(obj: ComponentRunProcessType, platform: PlatformType): void;
    getRunComPreprocessMethods(compName: string, platform: PlatformType): import("@lingxiteam/types").ProcessFunctionType[];
}
export default runComPreprocess;
