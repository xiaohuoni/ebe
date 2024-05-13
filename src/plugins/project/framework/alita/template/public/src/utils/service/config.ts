import { getApiBasePath } from '@/utils/resolveApiPath';
// @ts-ignore
import { security } from '@lingxiteam/engine-utils';
import merge from 'lodash/merge';
import type { ExtendOptionsInit, RequestMethod } from 'umi-request';
import { extend } from 'umi-request';
import { platformConfig } from '../platformConfig';
import middlewares from './middlewares';
import { LocaleFunction } from '@lingxiteam/types';


class RequestConfig {
  private request?: RequestMethod;

  private timeout = 300000;

  // 默认配置
  private defaultOptions = () => {
    return {
      timeout: this.timeout,
      timeoutMessage: this.getLocale('service.config.timeoutMsg', '请求失败，请求超时未响应'),
      // prefix: getApiBasePath(),
    };
  };

  // 请求选项配置
  private requestOptions: ExtendOptionsInit;

  initOptions?: ExtendOptionsInit;

  constructor() {
    this.requestOptions = this.defaultOptions();
  }

  private get prefix() {
    return getApiBasePath();
  }

  public getLocale: LocaleFunction = (k, placeholder) => placeholder ?? '';

  public set setLocale(v: LocaleFunction) {
    this.getLocale = v;
  }

  /**
   * 避免url和前缀冲突/斜杠
   * @param url
   * @param options
   * @returns
   */
  public getURL = (url: string, options: ExtendOptionsInit) => {
    const { prefix = this.requestOptions.prefix } = options;
    // 移除前缀"/"斜杠
    const newURL = url.trim().replace(/^[\/]+/g, '');

    // 当前请求配置了前缀, 并且非/结尾
    if (prefix && !/[\/]$/.test(prefix)) {
      return `/${newURL}`;
    }

    return newURL;
  };

  /**
   * 设置全局请求配置
   * @param initOptions
   * @returns
   */
  public setGlobalRequestOptions = (initOptions: ExtendOptionsInit) => {
    this.requestOptions = merge(this.defaultOptions(), { prefix: this.prefix }, initOptions);
    this.initOptions = merge(this.initOptions, initOptions);
    return this.requestOptions;
  };

  /**
   * 获取全局配置
   * @returns
   */
  public getGlobalRequestOptions = () => {
    return merge({ prefix: this.prefix }, this.requestOptions);
  };

  /**
   * 初始化http配置，安全加密？
   */
  private initializeHttpConfig = () => {
    const win: any = window;
    let __LINGXI__ = win.__LINGXI__ || {};
    try {
      __LINGXI__ = merge({}, __LINGXI__, win.parent.__LINGXI__);
    } catch {
      // eslint-disable-next-line no-empty
    }
    if (__LINGXI__.security || platformConfig?.httpSecurityMode) {
      security.httpEncryption.start(__LINGXI__.security || {
        mode: platformConfig?.httpSecurityMode,
      });
    }
  };

  /**
   * 初始化请求
   * @returns
   */
  private initRequest = () => {
    // 初始化安全配置
    this.initializeHttpConfig();

    const requestOptions = this.getGlobalRequestOptions();
    // 请求
    const request = extend(requestOptions);

    // 添加全局中间件
    middlewares.run(request);
    return request;
  };

  public refresh = () => {
    // 重新获取下接口地址， 把数据刷新下
    this.setGlobalRequestOptions(this.initOptions || {});
    this.request = this.initRequest();
  };

  /**
   * 获取请求
   * @returns
   */
  public getRequest = () => {
    if (!this.request) {
      this.request = this.initRequest();
    }
    return this.request;
  };
}

export default new RequestConfig();
