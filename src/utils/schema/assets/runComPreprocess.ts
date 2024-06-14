import { ComponentRunProcessType, PlatformType } from '@lingxiteam/types';
import { delPreprocessMethods } from './utils';

export interface RunComPreprocessOptions {
  /**
   * 获取组件名称
   */
  getComponentName(type: string, alias?: string): string;
}

class runComPreprocess {
  runComPreprocess!: Record<string, ComponentRunProcessType>;

  opts?: RunComPreprocessOptions;

  // updateOptions(opts: RunComPreprocessOptions) {
  //   this.opts = opts;
  // }

  /**
   * 注册平台指令
   * @param obj
   */
  public registerRunComPreprocess(
    obj: ComponentRunProcessType,
    platform: PlatformType,
  ) {
    this.runComPreprocess ??= {};
    this.runComPreprocess[platform] = obj;
  }

  public getRunComPreprocessMethods(compName: string, platform: PlatformType) {
    if (platform && this.runComPreprocess) {
      return delPreprocessMethods(
        compName,
        this.runComPreprocess[platform] as any,
      );
    }
    return [];
  }
}

export default runComPreprocess;
