import { LanguageKeys } from './types';

export type ListenerParams = {
  language: LanguageKeys;
  locale: Record<string, any>;
  getLocaleLanguage: any;
  getLocale: any;
  getLocaleEnv: any;
};

export type ListenerCallback = (opts: ListenerParams) => void;

/**
 * 监听语言变更
 */
class LocaleMonitor {
  protected listenerCallbacks: ListenerCallback[] = [];
  
  protected onceCallbacks: ListenerCallback[] = [];

  /**
   * 监听语言变更
   */
  public addListener = (callback: ListenerCallback) => {
    this.listenerCallbacks.push(callback);
  };

  /**
   * 移除监听
   * @param callback
   */
  public removeListener = (callback: ListenerCallback) => {
    this.listenerCallbacks = this.listenerCallbacks.filter(fn => fn !== callback);
  };

  /**
   * 监听一次
   * @param callback
   */
  public onceListener = (callback: ListenerCallback) => {
    this.onceCallbacks.push(callback);
  };

  /**
   * 只监听一次的
   * @param params
   */
  protected emitOnce = (params: ListenerParams) => {
    this.onceCallbacks.forEach(callback => {
      callback(params);
    });
    // 清空
    this.onceCallbacks = [];
  };

  /**
   * 消息发送
   */
  public emit = (params: ListenerParams) => {
    this.emitOnce(params);
    this.listenerCallbacks.forEach(cb => {
      cb(params);
    });
  };
}

export default LocaleMonitor;

export const localeMonitor = new LocaleMonitor();
