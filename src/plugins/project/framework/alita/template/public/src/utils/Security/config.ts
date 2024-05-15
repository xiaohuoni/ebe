import merge from 'merge';
import type { configType } from './types';
import { MODE } from './types';
import { signHeaderKey, rsaPublicKey, rsaPrivKey, aesKey, desKey, signSaltKey, securityHeaderKey, signKey } from './const';
import capabilities, { isBrowser } from './clientCapabilities';
import CookieUtil from './utils/cookie';

let isInit:boolean = false;

// 在浏览器模式下，通过平台env/info.js写入配置数据
const defaultMode = () => (isBrowser && (window as any).lxSecurityMode) || MODE.SIGN_WITH_TIME;
const countTimeDeviation = () => isBrowser && (window as any).lxServerTime ? (Date.now() - (window as any).lxServerTime) : 0;

export const createDefaultConfig = () : configType => ({
  // 安全模式
  mode: defaultMode(),

  requester: ['xhr', 'fetch', 'wxRequest'],
  // 签名&加密配置
  sign: {
    key: signKey,
    saltKey: signSaltKey,
    saltValue: isBrowser ? () => CookieUtil.get(config.sign?.saltKey as string) : '',
    valueKeyName: signHeaderKey,
  },
  aes: {
    key: aesKey,
  },
  des: {
    key: desKey,
  },
  rsa: {
    privKey: rsaPrivKey,
    publicKey: rsaPublicKey,
  },

  // 服务器与客户端时间偏差
  timeDeviation: countTimeDeviation(),

  // 服务器时间
  serverTime: null,

  // 通过请求头传递给后端安全类型的字段
  securityHeaderKey,

  debug: capabilities.localStorage ? localStorage.getItem('lxDebug') === 'true' : false,
});

const config: configType = {};

const setConfig = (newConfig: configType = {}): void => {
  // 只更新服务器时间时，重新计算时间偏差
  if (newConfig.serverTime && newConfig.serverTime !== config.serverTime && !newConfig.timeDeviation) {
    newConfig.timeDeviation = Date.now() - Number(new Date(newConfig.serverTime));
  }
  if (!isInit) {
    isInit = true;
    merge.recursive(config, createDefaultConfig(), newConfig);
  } else {
    merge.recursive(config, newConfig);
  }
};

export default config;
export { setConfig };
