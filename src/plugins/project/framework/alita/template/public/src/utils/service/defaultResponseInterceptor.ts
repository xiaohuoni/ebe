import { RequestOptionsInit, ResponseInterceptor } from 'umi-request';
import { AppCtxType } from './baseRequest';

export const isErrorStatus = (status: number) => {
  switch (status) {
    case 400:
    case 401:
    case 403:
    case 404:
    case 500:
    case 501:
    case 502:
    case 503:
    case 413:
      return true;
    default:
      return false;
  }
};
type InterceptorResponseTypeCtx = {
  options: RequestOptionsInit;
  data: any;
  response: Response;
  appCtx: AppCtxType;
  hookCtx: Record<string, any>;
};

type InterceptorResponseType = (
  url: string,
  ctx: InterceptorResponseTypeCtx,
) => any;

export const defaultResponense: ResponseInterceptor = async (
  response,
  options,
) => {
  const { url } = response;
  const data = await response.clone().json();
  if (url.indexOf('/static') !== -1) {
    if (
      typeof data === 'object' &&
      Object.hasOwnProperty.call(data, 'resultCode') &&
      +data.resultCode !== 0
    ) {
      return Promise.reject(data.resultMsg);
    }
    return data;
  }

  // 下载文件
  if (
    Object.prototype.toString.call(data) === '[object Blob]' ||
    url.indexOf('/app/file/download') !== -1
  ) {
    return data;
  }

  if (data.resultCode === '0') {
    const successData = data.resultData || data.resultObject;
    // 如果resultObject中有错误码抛出异常
    if (
      successData &&
      successData.error &&
      typeof successData.status === 'number' &&
      isErrorStatus(successData.status)
    ) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ response: successData });
    }
    return successData;
  }

  if (!Object.hasOwnProperty.call(data, 'resultCode')) {
    return data;
  }

  if (data.resultCode === '401') {
    // 注入权限失败回调，这里直接抛错，在统一错误处理那边响应
    const unauthorizeData = '请重新登录';
    return Promise.reject(unauthorizeData);
  }

  return Promise.reject(data);
};
