import { request as baseRequest, RequestOptionsInit } from 'alita';
import merge from 'lodash/merge';
export interface AppCtxType {
  appId: string;
  pageId?: string;
  language?: string;
}

export interface DataType {
  [key: string]: any;
}

export interface RequestOptions {
  charset?: 'utf8' | 'gbk';
  requestType?: 'json' | 'form';
  responseType?: ResponseType;
  useCache?: boolean;
  ttl?: number;
  timeout?: number;
  timeoutMessage?: string;
  prefix?: string;
  suffix?: string;
  validateCache?: (url: string, options: RequestOptionsInit) => boolean;
  headers?: Record<string, any>;
  isShowError?: boolean;
}
export type MethodType = 'get' | 'post' | 'put' | 'delete';

/**
 * 获取请求头
 * @param options
 * @returns
 */
const getHeaders = (options: {
  appId?: string;
  pageId?: string;
  data: any;
}) => {
  const { appId, pageId, data } = options;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (appId) {
    headers['APP-ID'] = appId;
  }

  if (pageId) {
    headers['X-B-TARGET-ID'] = pageId;
    headers['X-B-AUTH'] = '1';
  }
  if (data instanceof FormData) {
    delete headers['Content-Type'];
  }
  return headers;
};

export const request = (
  method: MethodType,
  url: string,
  appCtx?: AppCtxType,
  data?: DataType,
  options?: RequestOptions,
) => {
  const { appId, pageId } = appCtx || {};
  const headers = getHeaders({ appId, pageId, data });
  let requestOptions: RequestOptionsInit = merge(options, {
    method,
    data,
    headers,
    credentials: 'include',
  } as RequestOptionsInit);

  return baseRequest(url, requestOptions);
};

const http = {
  get: (
    url: string,
    appCtx: AppCtxType,
    data?: DataType,
    options?: RequestOptions,
  ) => {
    return request('get', url, appCtx, data, options);
  },
  post: (
    url: string,
    appCtx: AppCtxType,
    data: DataType,
    options?: RequestOptions,
  ) => {
    return request('post', url, appCtx, data, options);
  },
  put: (
    url: string,
    appCtx: AppCtxType,
    data: DataType,
    options?: RequestOptions,
  ) => {
    return request('put', url, appCtx, data, options);
  },
  delete: (
    url: string,
    appCtx: AppCtxType,
    data: DataType,
    options?: RequestOptions,
  ) => {
    return request('delete', url, appCtx, data, options);
  },
};
export default http;
