/* eslint-disable no-case-declarations */
import { SHA256 } from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import { AESEncrypt } from './aes';
import { obj2QueryString, decodeQueryString, removeURLParameters } from '../utils/url';
import { aesKey, securityHeaderKey, signHeaderKey } from '../const';
import { checkIsSignMode } from '../utils/check';
import config from '../config';
import message from '../utils/message';
import { MODE, signHttpOptionsType } from '../types';


// 注意：修改此文件请跑测试用例, npm run test

// 1、签名算法：
// 通过对url、参数、秘钥拼接成字符串，然后对字符串使用算法SHA-256得到64个字符串，放到header, X-SIGN=XXXXXXX。

// 2、签名字符串拼接规则：
// a.get 请求：url+"#"+header+"#"+参数+"#"+秘钥
// b.post 请求：url+"#"+header+"#"+body+"#"秘钥
// 参数说明：
// ● 如果其中的变量为空，则为空字符串。
// ● url ：不包含参数，(2022.08.08 更改为apiName)
// ● header ：取X-开头的header，或者APP-ID，多个则逗号分隔拼接。比如X-AA=a;APP-ID=88888
// ● get 参数：就是url 问号后面的串
// ● body：post 请求体

/**
 * 组装X-SIGN请求头
 * @param {请求地址} url 接口请求地址
 * @param {请求参数} options
 * @returns
 */

// 由于X-B 的规则可能被业务网关使用，并往请求头增加内容，导致前后端加密不一致
// 2022.08.09 使用以下3个固定值 + X-LX-*匹配 方式
const hKeys = ['X-B-AUTH', 'X-B-TARGET-ID', 'APP-ID'];

// 获取接口路径,2023-03-16调整，由于网关配置问题可能导致前后端取的服务地址不一致，调整后只取最后一级
const getApiPath = (url: string) => {
  return url.split('/').pop();
};

export const createHttpSignStr = (url: string, options: signHttpOptionsType, version?: any) => {
  if (!url || !options) {
    message.warn('签名失败，url地址或参数为空');
    return '';
  }
  if (version && !checkIsSignMode(version)) {
    message.warn(`不支持[${version}]签名模式`);
    return '';
  }
  const { method = 'GET', headers, body, search, saltValue } = options;
  const signVersion = version || config.mode;

  // 获取参数1: 接口名称
  let mixUrl = url;
  if (search && search instanceof Object) {
    mixUrl += (url.indexOf('?') !== -1 ? '&' : '?') + obj2QueryString(search);
  }
  const [urlPath, urlSearch = ''] = mixUrl.split('?');
  const apiPath = getApiPath(urlPath);

  // 获取参数2: 请求头部参数
  let headerParams = '';
  const headersKeyArr: any = [];
  if (headers) {
    Object.keys(headers).concat(config.sign?.includeHeaders || []).forEach((key) => {
      if (key.startsWith('X-LX-') || hKeys.includes(key)) {
        headersKeyArr.push(`${key.toLowerCase()}=${headers[key]}`);
      }
    });
  }
  headerParams = headersKeyArr.sort().join(';');

  // 获取参数3: 请求参数
  let params = '';
  // body为空时，可能出现前后端取值不一致问题。
  // nodejs 一般存在空字符串、空对象、undefined、空表单 等，取决于框架处理和使用的中间件
  // java后端一般为null
  let finallyBody = body;
  if (typeof config.emptyBodyValue !== 'undefined') {
    finallyBody = (body === undefined || body === null) ? config.emptyBodyValue : body;
  }
  if (method.toLowerCase() === 'get') {
    // 为保证与后端值一致此处需要将数据进行解码
    params = decodeQueryString(urlSearch);
  } else {
    params = typeof finallyBody === 'object' ? JSON.stringify(finallyBody) : finallyBody;
  }

  // 获取参数4: 用户id, 优先从options.saltValue
  const getSaltValue = (): string => typeof config.sign?.saltValue === 'function' ? config.sign.saltValue() : config.sign?.saltValue;

  // 签名内容
  let content: string = '';
  // 签名结果
  let result: string = '';
  switch (signVersion) {
    case MODE.SIGN:
    case MODE.SIGN_KEY:
      content = [apiPath, headerParams, params, saltValue || getSaltValue(), config.sign?.key].join('#');
      result = SHA256(content).toString();
      break;
    case MODE.SIGN_WITH_TIME:
    case MODE.SIGN_WITHOUT_SALT:
      // eslint-disable-next-line no-case-declarations
      const deviation = config.timeDeviation as number;
      const now = Date.now() - deviation;
      content = [apiPath, headerParams, params, signVersion === MODE.SIGN_WITHOUT_SALT ? '' : saltValue || getSaltValue(), config.sign?.key, now].join('#');
      result = [SHA256(content).toString(), now, deviation].join('.');
      break;
    case MODE.SIGN_UUID:
    case MODE.SIGN_UUID_WITHOUT_SALT:
      const uuid = uuidv4();
      content = [apiPath, headerParams, params, signVersion === MODE.SIGN_UUID_WITHOUT_SALT ? '' : saltValue || getSaltValue(), config.sign?.key, uuid].join('#');
      result = AESEncrypt([SHA256(content).toString(), uuid].join('.'), aesKey);
      break;
    default: break;
  }

  if (config.debug) {
    message.log(` --- signDebug(${signVersion}) ---`);
    message.log('url', url);
    message.log('str', content);
    message.log('sign', result);
  }

  // 返回约定签名
  return result;
};

// 由于（img、script）无法进行处理请求头，将签名参数x-sign放到url参数里
export const buildXSignUrl = (url: string, options: signHttpOptionsType = {}, version?: any) => {
  if (!url) {
    return '';
  }
  if (version && !checkIsSignMode(version)) {
    message.warn(`不支持[${version}]签名模式`);
    return url;
  }
  let _url = url;
  const signVersion = version || checkIsSignMode(config.mode as MODE) ? config.mode : MODE.SIGN_WITH_TIME ;
  const signStr = createHttpSignStr(url, { method: 'GET', ...options }, signVersion);
  // 如果url上存在签名则移除原签名
  if (url.indexOf(signHeaderKey) !== -1 || url.indexOf(securityHeaderKey) !== -1) {
    _url = removeURLParameters(url, [signHeaderKey, securityHeaderKey]);
  }
  return `${_url}${_url.includes('?') ? '&' : '?'}${signHeaderKey}=${signStr}&${securityHeaderKey}=${signVersion}`;
};

// buildXSignUrl兼容平台内部使用，外部使用createHttpSignWithUrl
export const createHttpSignWithUrl = buildXSignUrl;

export default { createHttpSignStr, createHttpSignWithUrl };
