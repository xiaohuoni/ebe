type requester = 'fetch' | 'xhr' | 'wxRequest';

export const enum MODE {
  // 参数签名(旧数据)
  SIGN_KEY = 'signKey',
  // 参数签名
  SIGN = '1.0',
  // 时间限制性签名
  SIGN_WITH_TIME = '1.1',
  // 时间限制性签名(不带盐-用户信息)
  SIGN_WITHOUT_SALT = '1.1.1',
  // 唯一限制性签名
  SIGN_UUID = '1.2',
  // 唯一限制性签名(不带盐-用户信息)
  SIGN_UUID_WITHOUT_SALT = '1.2.1',
  // RSA参数加密
  RSA = '2.0',
  // AES参数加密
  AES = '3.0',
  // DES参数加密
  DES = '4.0',
}

// 自定义加解密函数
type EncryptionFunctionType = (
  content: string,
  key: string,
  CryptoJS: CryptoJS,
) => string;

export type fnDESEncryptType = EncryptionFunctionType;

export type fnDESDecryptType = EncryptionFunctionType;

export type fnAESEncryptType = EncryptionFunctionType;

export type fnAESDecryptType = EncryptionFunctionType;

export type fnRSAEncryptType = (
  content: string,
  publicKey: string,
  JSEncrypt: JSEncrypt,
) => string;

export type fnRSADecryptType = (
  content: string,
  privKey: string,
  JSEncrypt: JSEncrypt,
) => string;

export declare namespace encipherOptionType {
  interface sign {
    key?: string;
    saltKey?: string;
    saltValue?: string | Function;
    valueKeyName?: string;
    includeHeaders?: string[];
  }
  interface aes {
    key?: string;
    encrypt?: fnAESEncryptType;
    decrypt?: fnAESDecryptType;
  }

  interface des {
    key?: string;
    encrypt?: fnDESEncryptType;
    decrypt?: fnDESDecryptType;
  }

  interface rsa {
    privKey?: string;
    publicKey?: string;
    encrypt?: fnRSAEncryptType;
    decrypt?: fnRSADecryptType;
  }
}

type ignoreSupportType = string | RegExp | Function;
export interface configType {
  mode?: MODE;
  securityHeaderKey?: string;
  requester?: requester | requester[];
  ignore?: ignoreSupportType | ignoreSupportType[];
  sign?: encipherOptionType.sign;
  aes?: encipherOptionType.aes;
  des?: encipherOptionType.des;
  rsa?: encipherOptionType.rsa;
  timeDeviation?: number;
  debug?: boolean;
  serverTime?: number | null;
  keyEncrypt?: boolean;
  emptyBodyValue?: any;
}

export interface signHttpOptionsType {
  method?:
    | 'OPTIONS'
    | 'GET'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT';
  headers?: any;
  body?: any;
  search?: string | any;
  saltValue?: string;
}

namespace securityType {
  export interface httpEncryption {
    start: (startConfig?: configType) => void;
    stop: () => void;
  }

  export function createHttpSignStr(
    url: string,
    options: signHttpOptionsType,
    version?: any,
  ): string;

  export function createHttpSignWithUrl(
    url: string,
    options?: signHttpOptionsType,
    version?: any,
  ): string;

  export function RSAEncrypt(
    content: string,
    publicKey: string,
    handle?: fnRSAEncryptType,
  ): string;

  export function RSADecrypt(
    content: string,
    privKey: string,
    handle?: fnRSADecryptType,
  ): string;

  export function AESEncrypt(
    content: string,
    aesKey: string,
    handle?: fnAESEncryptType,
  ): string;

  export function AESDecrypt(
    content: string,
    aesKey: string,
    handle?: fnAESDecryptType,
  ): string;

  export function DESEncrypt(
    content: string,
    desKey: string,
    handle?: fnDESEncryptType,
  ): string;

  export function DESDecrypt(
    content: string,
    desKey: string,
    handle?: fnDESDecryptType,
  ): string;

  export function setConfig(config: configType): void;

  export function lxEncrypt(str: string): string;

  export type httpEncryptionConfigType = typeof configType;

  export type KEYS = {
    signKey: string;
    rsaPublicKey: string;
    rsaPrivKey: string;
    aesKey: string;
    desKey: string;
  };
}

export default securityType;
