import { ComPreprocessTypes, PlatformType } from '@lingxiteam/types';
import { delPreprocessMethods } from './utils';

export interface ComPreprocessOptions {
  /**
   * 获取组件名称
   */
  getComponentName(type: string, alias?: string): string;
}

class comPreprocess {
  comPreprocess!: Record<string, ComPreprocessTypes>;

  opts?: ComPreprocessOptions;

  updateOptions(opts: ComPreprocessOptions) {
    this.opts = opts;
  }

  /**
   * 注册平台指令
   * @param obj
   */
  public registerComPreprocess(
    obj: ComPreprocessTypes,
    platform: PlatformType,
  ) {
    this.comPreprocess ??={}
    this.comPreprocess[platform] = obj;
  }

  public getComPreprocessMethods(compName: string, platform: PlatformType) {
    if (platform && this.comPreprocess) {
      return delPreprocessMethods(compName, this.comPreprocess[platform]);
    }
    return [];
  }
}

export default comPreprocess;
