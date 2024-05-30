import capabilities from '../clientCapabilities';
import config from '../config';
import { createHttpSignStr } from '../encipher/sign';
import {
  checkIsEncryption,
  checkIsSignMode,
  checkIsUrlIgnore,
} from '../utils/check';
import { decryptedStr, encryptedRequestParams } from '../utils/encrypted';
import message from '../utils/message';

const originRequester: any = capabilities.fetch
  ? (window || globalThis).fetch
  : undefined;

const fetch = (url: any, fetchOptions: any = {}): Promise<any> => {
  let requester: Promise<any>;
  const opts = { ...fetchOptions };

  // 判定是否符合忽略规则
  if (checkIsUrlIgnore(url, opts)) {
    return originRequester(url, opts);
  }

  // 请求头配置
  // headers.disabledSignKey 关闭签名(兼容，新模式通过将 securityHeaderKey设为false关闭)
  // headers.disabledEncrypted 关闭加密(兼容，新模式通过将 securityHeaderKey设为false关闭)
  // headers[securityHeaderKey] 指定当前服务安全模式
  const securityHeaderKey = config.securityHeaderKey as string;
  const modeInHeadParam = (opts.headers || {})[securityHeaderKey];

  // 优先使用当前请求头指定的安全模式
  const finallyMode = modeInHeadParam || config.mode;

  // 通过请求头参数关闭当次安全模式
  if (
    String(modeInHeadParam) === 'false' ||
    opts.headers?.disabledSignKey === true ||
    opts.headers?.disabledEncrypted === true ||
    finallyMode === false
  ) {
    // 不能直接删除，否则会导致disabledSignKey 这个节点删除了，第二次进来的时候导致异常
    // const { disabledSignKey, ...resprops } = opts?.headers;
    const _cloneHeader = Object.assign({}, opts.headers);
    delete _cloneHeader.disabledSignKey;
    delete _cloneHeader.disabledEncrypted;
    delete _cloneHeader[securityHeaderKey];
    requester = originRequester(url, { ...opts, headers: { ..._cloneHeader } });
  } else if (checkIsSignMode(finallyMode)) {
    // ------ 参数签名(默认) ------
    const signValueKeyName = config.sign?.valueKeyName as string;
    opts.headers = {
      [securityHeaderKey]: finallyMode,
      ...opts.headers,
      [signValueKeyName]: createHttpSignStr(url, fetchOptions, finallyMode),
    };
    requester = originRequester(url, opts);
  } else if (checkIsEncryption(finallyMode)) {
    // ------ 参数加密 ------
    // search和body加密
    const [encryptedUrl, encryptedOpts] = encryptedRequestParams(
      url,
      opts,
      finallyMode,
    );

    requester = originRequester(encryptedUrl, encryptedOpts);
  } else {
    // 其他
    requester = originRequester(url, opts);
  }

  // ------ 响应解密 ------
  return requester.then(async (response: Response) => {
    const securityType = response.headers.get(securityHeaderKey);

    if (securityType && checkIsEncryption(securityType) && response.body) {
      // 响应数据
      const respResult = await response.text();

      // 解密数据
      let result;
      try {
        result = decryptedStr(respResult, securityType, config);
      } catch (e) {
        message.error('--------解密失败--------');
        // message.error(`请求ID：${reqId}`);
        message.error(`请求地址：${url}`);
        message.error(`解密方式：${securityType}`);
        message.error(`解密报文：${respResult}`);
        message.error(`失败原因：${e}`);
        return new Response(null, { status: 400, statusText: String(e) });
      }

      // 覆盖响应值
      let json;
      try {
        json = JSON.parse(result);
      } catch (e) {
        json = result;
        message.warn(`响应报文转换JSON失败, 内容为 ${result}`);
      }
      const blob = new Blob([JSON.stringify(json, null, 2)], {
        type: 'application/json',
      });
      return new Response(blob);
    }
    return response;
  });
};

export const conflict = () => {
  (window || globalThis).fetch = fetch;
};
export const noConflict = () => {
  (window || globalThis).fetch = originRequester;
};

export default fetch;
