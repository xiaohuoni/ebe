import config from '../config';
// import { checkIsSignMode, checkIsEncryption, checkIsUrlIgnore, checkIsSignWithSalt } from '../utils/check';
import { createHttpSignStr } from '../encipher/sign';
import { checkIsUrlIgnore } from '../utils/check';
// import { encryptedRequestParams, decryptedStr } from '../utils/encrypted';
import capabilities from '../clientCapabilities';

const originRequester: any = capabilities.xhr ? XMLHttpRequest : undefined;

// 从请求头中获取参数
function getRequestHeaders(xhr: XMLHttpRequest) {
  const headers: any = {};
  xhr
    .getAllResponseHeaders()
    .split('\n')
    .forEach((header) => {
      const [key, value] = header.split(': ');
      headers[key] = value;
    });
  return headers;
}

const xhr = function () {
  // eslint-disable-next-line new-cap
  const originXhr = new originRequester();

  const securityHeaderKey = config.securityHeaderKey as string;
  const signValueKeyName = config.sign?.valueKeyName as string;

  let finallyMode: any = config.mode;
  let xhrUrl: string = '';
  let xhrMethod: any = '';

  // 用于存储请求头信息
  const requestHeaders: any = {};

  // 劫持 open 方法
  const originalOpen = originXhr.open;
  originXhr.open = function (
    method: string,
    url: string,
    async?: boolean,
    user?: string,
    password?: string,
  ) {
    // 记录url地址
    xhrUrl = url;
    xhrMethod = method;
    // 获取请求头中的参数
    const _requestHeaders = getRequestHeaders(originXhr);
    Object.assign(requestHeaders, _requestHeaders);
    // 调用原始的 open 方法
    originalOpen.call(this, method, url, async, user, password);
  };

  // 劫持 setRequestHeader 方法
  const originalSetRequestHeader = originXhr.setRequestHeader;
  originXhr.setRequestHeader = function (
    key: string,
    value: string | number | boolean,
  ) {
    // 记录请求头信息
    requestHeaders[key] = value;

    // 调用原始的 setRequestHeader 方法
    originalSetRequestHeader.call(this, key, value);
  };

  // 劫持 send 方法
  const originalSend = originXhr.send;
  originXhr.send = function (data: any) {
    // 判定是否符合忽略规则
    if (
      checkIsUrlIgnore(xhrUrl, {
        headers: requestHeaders,
        body: data,
        method: xhrMethod,
      })
    ) {
      originalSend.call(this, data);
      return;
    }

    // 获取请求头信息
    const requestHeadersSnapshot = { ...requestHeaders };

    // 优先使用请求头自带的模式
    if (requestHeadersSnapshot[securityHeaderKey]) {
      finallyMode = requestHeadersSnapshot[securityHeaderKey];
    }

    // 签名并添加额外的参数
    originalSetRequestHeader.call(this, securityHeaderKey, finallyMode);
    originalSetRequestHeader.call(
      this,
      signValueKeyName,
      createHttpSignStr(
        xhrUrl,
        { method: xhrMethod, headers: requestHeadersSnapshot, body: data },
        finallyMode,
      ),
    );

    // 修改请求 URL
    //  originXhr.open(originXhr.method, url, originXhr.async, originXhr.username, originXhr.password);

    // 调用原始的 send 方法
    originalSend.call(this, data);
  };

  return originXhr;
};

export const conflict = () => {
  (window as any).XMLHttpRequest = xhr;
};
export const noConflict = () => {
  (window as any).XMLHttpRequest = originRequester;
};

export default xhr;
