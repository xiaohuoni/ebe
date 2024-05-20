import CryptoJS from 'crypto-js';
import type { fnDESDecryptType, fnDESEncryptType } from '../types';

/**
 * 默认DES加密处理函数
 * @param content 待加密内容
 * @param desKey 密钥
 * @param handle 自定义加密函数
 * @returns 加密后内容
 */
export const DESEncrypt = (
  content: string,
  desKey: string,
  handle?: fnDESEncryptType,
): string => {
  if (typeof handle === 'function') {
    return handle(content, desKey, CryptoJS);
  }
  const key = CryptoJS.enc.Utf8.parse(desKey);
  const ciphertext = CryptoJS.enc.Utf8.parse(content);
  const encrypted = CryptoJS.DES.encrypt(ciphertext, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

/**
 * 默认AES解密处理函数
 * @param content 待解密内容
 * @param desKey 密钥
 * @param handle 自定义解密函数
 * @returns 解密后内容
 */
export const DESDecrypt = (
  content: string,
  desKey: string,
  handle?: fnDESDecryptType,
): string => {
  if (typeof handle === 'function') {
    return handle(content, desKey, CryptoJS);
  }
  const key = CryptoJS.enc.Utf8.parse(desKey);
  const ciphertext = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Base64.parse(content),
  );
  const encrypted = CryptoJS.DES.decrypt(ciphertext, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString(CryptoJS.enc.Utf8);
};
