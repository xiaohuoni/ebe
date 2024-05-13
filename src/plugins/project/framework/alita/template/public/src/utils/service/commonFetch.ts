import http, { AppCtxType, RequestOptions } from './baseRequest';

// 开启了接口模拟的内部服务列表
let mockAppServices: any[] = [];

// 固定的服务调用地址
const FIXED_SERVICE_URL = {
  // 解析类服务统一调用地址
  QUERY: '/app/sql/execute',
  // 低代码运营者门户原子服务的统一调用地址
  ATOM: '/app/provider/execute',
  // 编排服务通用调用地址
  STD: '/app/orchestration/run', // POST
  // 业务运营平台接入服务
  RHIN: '/app/rhin/gateway/callRhinEngine',
  // 超级表单增删改查
  SUPER: '/app/object/run', // POST
};

// 加载内部服务模拟配置
const loadMockAppServices = (
  params: Record<string, any> = {},
  appCtx: AppCtxType,
) => {
  return http
    .get(`app/appServiceMock/qryMockServices?appId=${params.appId}`, appCtx)
    .then((services) => {
      mockAppServices = services || [];
    });
};

/**
 *  如果是get请求，拼接url
 * @param url
 * @param method
 * @param params
 * @returns
 */
const spliceGeturl = (
  url: string,
  method: string,
  params: Record<string, any>,
) => {
  if (method === 'get') {
    let newUrl = url;
    let queryStr = '';
    const targetparam = params;
    // 注意：后端的请求参数一半在url查询字符串里，另一半在body里，需要分离处理
    // 参考service层
    if (targetparam) {
      queryStr = '?';
      let tempVal = '';
      Object.keys(targetparam).forEach((key) => {
        if (Array.isArray(targetparam[key])) {
          targetparam[key].forEach((str: string) => {
            if (str && typeof str === 'object') {
              tempVal = JSON.stringify(str);
            } else {
              tempVal = str;
            }
            queryStr += `${encodeURIComponent(key)}=${encodeURIComponent(
              tempVal,
            )}&`;
          });
        } else {
          if (targetparam[key] && typeof targetparam[key] === 'object') {
            tempVal = JSON.stringify(targetparam[key]);
          } else {
            tempVal = targetparam[key];
          }
          queryStr += `${encodeURIComponent(key)}=${encodeURIComponent(
            tempVal,
          )}&`;
        }
      });
      newUrl = (newUrl + queryStr).slice(0, (newUrl + queryStr).length - 1);
    }
    return newUrl;
  }
  return url;
};

/**
 * 公共接口请求
 * @param {*} method 方法名 支持 'get', 'post', 'put', 'delete'
 * @param {*} url 接口地址
 * @param {*} params 请求参数
 * @param {*} extraParams 可能存在不兼容的情况，参数暂时保留。目的是判别内部服务的类型切换。
 * @param {*} options: RequestOptions 请求头
 * @returns
 */
const commonFetch = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  params: Record<string, any>,
  extraParams?: Record<string, any>,
  options?: RequestOptions,
) => {
  const _method: 'get' | 'post' | 'put' | 'delete' =
    method.toLowerCase() as any;
  let _url = url;
  const appId = params?.appId || extraParams?.appId;
  const pageId = params?.pageId || extraParams?.pageId;
  const _extraParams = extraParams || {};
  if (_extraParams?.pageId) {
    _extraParams.pageId = extraParams?.pageId || pageId;
    _extraParams.appId = appId;
  }
  // 调用内部服务时，检查是否开启了接口模拟
  if (_extraParams && _extraParams._source === 'inner') {
    // extraParams 中没有传递 appServiceId, 只能根据请求方法、请求路径匹配。不考虑重复的情况
    const appService = mockAppServices.find(
      (s) => s.serviceMethod === _method && s.servicePath === _url,
    );
    // 开启接口模拟时，调用固定的模拟接口地址
    if (appService) {
      _url = `app/appServiceMock/mockService?appId=${appId}&appServiceId=${appService.appServiceId}`;
    }
  }
  if (['get', 'post', 'put', 'delete'].includes(_method)) {
    if (!_url) {
      throw new Error('Request_URL_is_empty');
    }
    if (_url.includes(FIXED_SERVICE_URL.STD) && params) {
      params.appId = appId;
    }
    return http[_method](
      spliceGeturl(_url, method, params),
      { appId, pageId },
      params,
      options,
    );
  }
  throw new Error('Method Not Allowed');
};

export default {
  commonFetch,
  loadMockAppServices,
};
