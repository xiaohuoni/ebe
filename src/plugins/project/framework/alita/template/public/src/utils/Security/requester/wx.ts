import config from '../config';
import { checkIsSignMode, checkIsEncryption, checkIsUrlIgnore, checkIsSignWithSalt } from '../utils/check';
import { createHttpSignStr } from '../encipher/sign';
import { encryptedRequestParams, decryptedStr } from '../utils/encrypted';
import capabilities from '../clientCapabilities';

const originRequester: any = capabilities.wxRequest ? wx.request : undefined;

const wxRequest = (option: WechatMiniprogram.RequestOption): WechatMiniprogram.RequestTask => {
  const opts = { ...option };
  // 判定是否符合忽略规则
  if (checkIsUrlIgnore(opts.url, { headers: opts.header, body: opts.data, method: opts.method })) {
    return originRequester(opts);
  }

  let requester;
  // 请求头配置
  // headers.disabledSignKey 关闭签名(兼容，新模式通过将 securityHeaderKey设为false关闭)
  // headers.disabledEncrypted 关闭加密(兼容，新模式通过将 securityHeaderKey设为false关闭)
  // headers[securityHeaderKey] 指定当前服务安全模式
  const securityHeaderKey = config.securityHeaderKey as string;
  const modeInHeadParam = (opts.header || {})[securityHeaderKey];

  // 优先使用当前请求头指定的安全模式
  const finallyMode = modeInHeadParam || config.mode;


  // 拦截success，处理解密
  const originSuccess = opts.success;
  if (originSuccess) {
    const success: WechatMiniprogram.RequestSuccessCallback = (response) => {
      const securityType = response.header[securityHeaderKey];
      if (checkIsEncryption(securityType)) {
        let result;
        try {
          if (typeof response.data === 'string') {
            result = decryptedStr(response.data, securityType, config);
            if (response.header['content-type'] === 'application/json') {
              result = JSON.parse(result);
            }
          }
        } finally {
          response.data = typeof result === 'undefined' ? response.data : result;
        }
      }
      originSuccess(response);
    };
    opts.success = success;
  }

  // 通过请求头参数关闭当次安全模式
  if (String(modeInHeadParam) === 'false' || opts.header?.disabledSignKey === true || opts.header?.disabledEncrypted === true || finallyMode === false) {
    // 不能直接删除，否则会导致disabledSignKey 这个节点删除了，第二次进来的时候导致异常
    // const { disabledSignKey, ...resprops } = opts?.headers;
    const _cloneHeader = Object.assign({}, opts.header);
    delete _cloneHeader.disabledSignKey;
    delete _cloneHeader.disabledEncrypted;
    delete _cloneHeader[securityHeaderKey];
    requester = originRequester({ ...opts, header: { ..._cloneHeader } });
  } else if (checkIsSignMode(finallyMode)) {
    // ------ 参数签名(默认) ------
    const signValueKeyName = config.sign?.valueKeyName as string;
    opts.header = {
      ...(opts.header || {}),
      [securityHeaderKey]: finallyMode,
      [signValueKeyName]: createHttpSignStr(
        opts.url,
        { method: opts.method, body: opts.data },
        finallyMode
      ),
    };
    // 后端根据cookie里的值进行校验
    if (checkIsSignWithSalt(finallyMode)) {
      const saltValue = typeof config.sign?.saltValue === 'function' ? config.sign?.saltValue() : config.sign?.saltValue;
      opts.header.Cookie = opts.header.Cookie ? `${opts.header.Cookie};${config.sign?.saltKey}=${saltValue}` : `${config.sign?.saltKey}=${saltValue}`;
    }
    requester = originRequester(opts);
  } else if (checkIsEncryption(finallyMode)) {
    // ------ 参数加密 ------
    // search和body加密
    const [encryptedUrl, encryptedOpts] = encryptedRequestParams(opts.url, { body: opts.data, headers: opts.header }, finallyMode);
    opts.url = encryptedUrl;
    if (encryptedOpts.body) { opts.data = encryptedOpts.body; }
    if (encryptedOpts.headers) { opts.header = encryptedOpts.headers; }
    requester = originRequester(encryptedUrl, encryptedOpts);
  } else {
    // 其他
    requester = originRequester(opts);
  }

  return requester;
};

export const conflict = () => {
  wx.request = wxRequest;
};
export const noConflict = () => {
  wx.request = originRequester;
};

export default wxRequest;
