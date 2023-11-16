import Command from './command';
import comPreprocess from './comPreprocess';
import comRunPreprocess from './runComPreprocess';
export interface AssetsOptions {
    /**
     * 是否启用alias
     */
    enableAlias: boolean;
}
declare class Assets {
    opts?: AssetsOptions;
    private get enableAlias();
    getComponentName(type: string, alias?: string): string;
    /**
     * 初始化资源配置
     */
    initOptions(opts: AssetsOptions): void;
    comPreprocess: comPreprocess;
    comRunPreprocess: comRunPreprocess;
    command: Command;
}
declare const _default: Assets;
export default _default;
