import JSEncrypt from 'jsencrypt';
import type { fnRSADecryptType, fnRSAEncryptType } from '../types';

/**
 * 默认RSA加密处理函数
 * @param content 待加密内容
 * @param publicKey 密钥
 * @param handle 自定义加密函数
 * @returns 加密后内容
 */
export const RSAEncrypt = (
  content: string,
  publicKey: string,
  handle?: fnRSAEncryptType,
) => {
  if (typeof handle === 'function') {
    return handle(content, publicKey, JSEncrypt);
  }
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey);
  return encryptor.encrypt(content);
};

/**
 * 默认RSA解密处理函数
 * @param content 待解密内容
 * @param privKey 密钥
 * @param handle 自定义解密函数
 * @returns 解密后内容
 */
export const RSADecrypt = (
  content: string,
  privKey: string,
  handle?: fnRSADecryptType,
) => {
  if (typeof handle === 'function') {
    return handle(content, privKey, JSEncrypt);
  }
  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privKey);
  return decrypt.decrypt(content);
};
