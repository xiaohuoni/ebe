import CryptoJS from 'crypto-js';
import type { fnAESDecryptType, fnAESEncryptType } from '../types';

/**
 * 默认AES加密处理函数
 * @param content 待加密内容
 * @param aesKey 密钥
 * @param handle 自定义加密函数
 * @returns 加密后内容
 */
export const AESEncrypt = (content: string, aesKey: string, handle?: fnAESEncryptType) => {
  if (typeof handle === 'function') {
    return handle(content, aesKey, CryptoJS);
  }
  const key = CryptoJS.enc.Utf8.parse(aesKey);
  const ciphertext = CryptoJS.enc.Utf8.parse(content);
  const encrypted = CryptoJS.AES.encrypt(ciphertext, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

/**
 * 默认AES解密处理函数
 * @param content 待解密内容
 * @param aesKey 密钥
 * @param handle 自定义解密函数
 * @returns 解密后内容
 */
export const AESDecrypt = (content: string, aesKey: string, handle?: fnAESDecryptType) => {
  if (typeof handle === 'function') {
    return handle(content, aesKey, CryptoJS);
  }
  const key = CryptoJS.enc.Utf8.parse(aesKey);
  const ciphertext = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Base64.parse(content));
  const encrypted = CryptoJS.AES.decrypt(ciphertext, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString(CryptoJS.enc.Utf8);
};
