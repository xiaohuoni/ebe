import { isPlainObject } from 'lodash';
import http, { AppCtxType } from './baseRequest';

const urlHelper = {
  stringify: (param: Record<string, string> = {}) => {
    let result: any = [];

    const add = (k: string, v: any) => {
      if (Array.isArray(v)) {
        arr(v, k);
      } else if (v && isPlainObject(v)) {
        obj(v);
      } else {
        result = [...result, `${k}=${v || ''}`];
      }
    };

    const arr = (v: string[], key: string) => {
      v.forEach((item) => {
        add(key, item);
      });
    };

    const obj = (p: Record<string, any>) => {
      Object.keys(p).forEach((k) => {
        const v = p[k];
        add(k, v);
      });
    };
    obj(param);
    return result.join('&');
  },
  url: (
    url: string,
    params: Record<string, string> = {},
    appCtx: AppCtxType,
  ) => {
    return `${url}?${urlHelper.stringify({
      ...params,
      ...appCtx,
    })}`;
  },
  get: (
    url: string,
    params: Record<string, string> = {},
    appCtx: AppCtxType,
  ) => {
    return http.get(urlHelper.url(url, params, appCtx), appCtx);
  },
  parse: (url: string) => {
    // TODO: 后续再实现
    console.log('TODO: 后续实现');
  },
};

export default urlHelper;
