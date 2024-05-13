import merge from 'lodash/merge';
import type { RequestOptionsInit } from 'umi-request';
import { fetchWhiteList } from '../services/constant';


export type CacheURLType = CacheConfigType & { url: string } | string;

export interface CacheConfigType {

  /**
   * 缓存时长（毫秒）
   */
  ttl?: number;

  /**
   * 最大缓存数量
   */
  maxCache?: number;
  
  /**
   * 缓存策略
   */
  validateCache?: RequestOptionsInit['validateCache'];
}

/**
 * 缓存默认配置
 */
const cacheDefaultConfig: CacheConfigType = {
  ttl: 10 * 1000,
  maxCache: 50,
};

class Cache {
  private cacheConfig = cacheDefaultConfig;

  private defaultItems: Record<string, CacheConfigType&{ useCache: boolean }> = {};

  private urlItems: Record<string, CacheConfigType & { useCache: boolean }> = {};

  /**
   * 缓存请求中的值
   * fix: umi-request在请求未返回时，无法触发缓存bug
   */
  private pendingPromise: Record<string, Promise<unknown>> = {};

  private getDefaultURLItems = () => {
    this.defaultItems = {};
    fetchWhiteList.forEach(item => {
      this.defaultItems[item] = {
        ...this.cacheConfig,
        useCache: true,
      };
    });
    return this.defaultItems;
  };

  private getURLPath(url: string = '', items: typeof this.urlItems) {
    let relativePath = url.split('?')[0].replace(/\s+/g, '');
    relativePath = relativePath.replace(/^\//, '');
    const path = Object.keys(items).find(k => k.endsWith(relativePath));
    return path;
  }

  /**
   * 是否使用默认白名单
   */
  public useDefaultURLs = true;

  /**
   * 配置缓存策略
   * @param config
   */
  public setCacheConfig = (config: CacheConfigType) => {
    this.cacheConfig = merge(cacheDefaultConfig, config);
  };

  /**
   * 增加缓存地址
   */
  public addCacheUrls = (urls: CacheURLType[] = []) => {
    urls.forEach(item => {
      if (typeof item === 'string') {
        this.urlItems[item] = {
          ...this.cacheConfig,
          useCache: true,
        };
      } else if (typeof item === 'object') {
        const { url, ...config } = item;
        this.urlItems[url] = {
          ...config,
          useCache: true,
        };
      }
    });
    return this.urlItems;
  };

  /**
   * 获取缓存参数
   * @param url
   */
  public getCacheOptions = (url: string) => {
    if (this.useDefaultURLs) {
      const defaultItems = this.getDefaultURLItems();
      const urlPath = this.getURLPath(url, defaultItems);
      if (urlPath) {
        return defaultItems[urlPath];
      }
    }
    const urlPath = this.getURLPath(url, this.urlItems);
    return urlPath ? this.urlItems[urlPath] : undefined;
  };

  /**
   * 是否需要缓存
   * @param url
   */
  public shouldCache = (url: string) => {
    return Boolean(this.getCacheOptions(url));
  };

  public getCacheKey = (url: string, options: any) => {
    return JSON.stringify({ url, options });
  };

  public addPendingRequests = (key: string, promise: Promise<unknown>) => {
    this.pendingPromise[key] = promise;
  };

  public getPendingRequests = (key: string) => {
    return this.pendingPromise[key];
  };

  public clearPendingRequests = (key: string) => {
    // @ts-ignore
    if (this.pendingPromise[key]) {
      delete this.pendingPromise[key];
    }
  };
}


export default new Cache();
