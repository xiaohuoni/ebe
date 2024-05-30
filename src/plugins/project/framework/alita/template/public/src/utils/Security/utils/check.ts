import config from '../config';
import { MODE } from '../types';

const signModes: string[] = [
  MODE.SIGN,
  MODE.SIGN_KEY,
  MODE.SIGN_UUID,
  MODE.SIGN_UUID_WITHOUT_SALT,
  MODE.SIGN_WITHOUT_SALT,
  MODE.SIGN_WITH_TIME,
];
const signModesWithSalt: string[] = [
  MODE.SIGN,
  MODE.SIGN_KEY,
  MODE.SIGN_UUID,
  MODE.SIGN_WITH_TIME,
];
const encryptionModes: string[] = [MODE.AES, MODE.DES, MODE.RSA];

export const checkIsSignMode = (mode: string): boolean => {
  return signModes.includes(mode);
};

export const checkIsSignWithSalt = (mode: string): boolean => {
  return signModesWithSalt.includes(mode);
};

export const checkIsEncryption = (mode: string): boolean => {
  return encryptionModes.includes(mode);
};

export const checkIsModeValue = (mode: string): boolean => {
  return signModes.includes(mode) || encryptionModes.includes(mode);
};

export const checkIsUrlIgnore = (
  url: string,
  options?: { headers?: any; body?: any; method?: string },
): boolean => {
  let isIgnore: boolean = false;
  if (config.ignore) {
    const testIsIgnore = (item: string | RegExp | Function): boolean => {
      if (typeof item === 'string') {
        return url === item;
      }
      if (Object.prototype.toString.call(item) === '[object RegExp]') {
        return (item as RegExp).test(url);
      }
      if (typeof item === 'function') {
        return item(url, options);
      }
      return false;
    };

    if (Array.isArray(config.ignore)) {
      isIgnore = config.ignore.map((item) => testIsIgnore(item)).includes(true);
    } else {
      isIgnore = testIsIgnore(config.ignore);
    }
  }
  return isIgnore;
};
