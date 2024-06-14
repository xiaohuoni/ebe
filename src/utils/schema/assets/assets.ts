// TODO: 指令没用吧？
// import Command from './command';
import comPreprocess from './comPreprocess';
// import platformFunctions from './functions';
import comRunPreprocess from './runComPreprocess';

export interface AssetsOptions {
  /**
   * 是否启用alias
   */
  enableAlias: boolean;
}

class Assets {
  opts?: AssetsOptions;

  // private get enableAlias() {
  //   return this.opts?.enableAlias ?? false;
  // }

  // public getComponentName(type: string, alias?: string) {
  //   if (this.enableAlias && alias) {
  //     return alias;
  //   }
  //   return type;
  // }

  /**
   * 初始化资源配置
   */
  // initOptions(opts: AssetsOptions) {
  //   this.opts = opts;
  //   this.comPreprocess.updateOptions({
  //     getComponentName: this.getComponentName.bind(this),
  //   });
  //   this.comRunPreprocess.updateOptions({
  //     getComponentName: this.getComponentName.bind(this),
  //   });
  // }
  // 平台函数资源
  // eslint-disable-next-line new-cap
  // function = new platformFunctions();

  // 平台组件预处理
  // eslint-disable-next-line new-cap
  comPreprocess = new comPreprocess();

  // 平台组件渲染时预处理
  // eslint-disable-next-line new-cap
  comRunPreprocess = new comRunPreprocess();

  // 指令
  // command = new Command();
}

export default new Assets();
