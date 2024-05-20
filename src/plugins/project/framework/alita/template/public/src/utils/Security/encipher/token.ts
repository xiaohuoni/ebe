import CryptoJS from 'crypto-js';
import AES from 'crypto-js/aes';
import encUtf8 from 'crypto-js/enc-utf8';
import MD5 from 'crypto-js/md5';

const key = 'Lixing666';
const iv = '3468546098617269';

/**
 * 生成token
 * @param salt token里添加的盐值
 * @returns token
 */
const generateToken = (salt: any) => {
  const tokenStr = `${MD5(salt).toString()}.${new Date().getTime()}`;
  return AES.encrypt(tokenStr, key, {
    iv: encUtf8.parse(iv),
  }).toString();
};

/**
 * 校验token合法性
 * @param token 待校验的token
 * @param salt token里添加的盐值
 * @returns 是否合法
 */
const checkToken = (token: string, salt: string): boolean => {
  let result = true;
  if (token) {
    const bytes = CryptoJS.AES.decrypt(token, key, {
      iv,
    } as any);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if (decryptedData) {
      // 加密字符串： MD5(pageId) + '.' + Timestamp + '.' + ‘版本(保留)’
      const tokenarr = decryptedData.split('.');
      const pagemd5 = CryptoJS.MD5(salt).toString();
      // Token验证：第一段相同，且Timestamp和当前时间的差距在1小时（3600秒 = 3600000毫秒）内
      if (
        tokenarr.length >= 2 &&
        tokenarr[0] === pagemd5 &&
        new Date(parseInt(tokenarr[1], 10)).getTime() - new Date().getTime() <=
          3600000
      ) {
        result = true;
      }
    }
  }
  return result;
};

export { checkToken, generateToken };
