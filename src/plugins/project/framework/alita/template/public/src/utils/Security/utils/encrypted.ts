import config from '../config';
import { lxKey } from '../const';
import { AESDecrypt, AESEncrypt } from '../encipher/aes';
import { RSADecrypt, RSAEncrypt } from '../encipher/rsa';
import { MODE } from '../types';
import message from './message';

export function lxEncrypt(str: string) {
  if (config.keyEncrypt) {
    return AESEncrypt(str, lxKey) || str;
  }
  return str;
}

function lxDecrypt(str: string) {
  if (config.keyEncrypt) {
    return AESDecrypt(str, lxKey) || str;
  }
  return str;
}

export function encryptedStr(str: string, type: string): string {
  if (type === MODE.AES) {
    return AESEncrypt(
      str,
      lxDecrypt(config.aes?.key as string),
      config.aes?.encrypt,
    );
  }
  if (type === MODE.RSA) {
    return (
      RSAEncrypt(
        str,
        lxDecrypt(config.rsa?.publicKey as string),
        config.rsa?.encrypt,
      ) || ''
    );
  }
  if (type === MODE.DES) {
    message.warn('DES encryption is no longer supported');
  }
  return str;
}

export function decryptedStr(
  str: string,
  type: string,
  config: any = {},
): string {
  if (type === MODE.AES) {
    return AESDecrypt(
      str,
      lxDecrypt(config.aes?.key as string),
      config.aes?.decrypt,
    );
  }
  if (type === MODE.RSA) {
    return (
      RSADecrypt(
        str,
        lxDecrypt(config.rsa?.privKey as string),
        config.rsa?.decrypt,
      ) || ''
    );
  }
  if (type === MODE.DES) {
    message.warn('DES encryption is no longer supported');
  }
  return str;
}

interface optsType {
  body?: any;
  headers?: any;
}
type returnType = [string, { body?: any; headers?: any }];

// 统一请求参数加密
export const encryptedRequestParams = (
  url: string,
  opts: optsType,
  type: string,
): returnType => {
  const isFormData = opts.body instanceof FormData;

  // search 部分加密
  const encryptedUrl =
    url.indexOf('?') !== -1
      ? url.replace(/[^?]+$/g, (search: string) => {
          const params = search.split('&').map((param) => {
            const [k, v] = param.split('=');
            return `${encodeURIComponent(k)}=${encodeURIComponent(
              encryptedStr(v, type),
            )}`;
          });
          return params.join('&');
        })
      : url;

  // body参数加密
  const encryptedOpts = Object.assign({}, opts);
  encryptedOpts.headers = {
    ...(opts.headers || {}),
    [config.securityHeaderKey as string]: type,
  };

  if (isFormData) {
    // formData 加密
    const formData = new FormData();
    const reqBody = opts.body;
    for (const key of (reqBody as any).keys()) {
      const value = reqBody.get(key);
      formData.append(key, encryptedStr(value, type));
    }
    encryptedOpts.body = formData;
  } else if (opts.body) {
    //  文本加密
    encryptedOpts.body = encryptedStr(opts.body, type);
  }

  return [encryptedUrl, encryptedOpts];
};
