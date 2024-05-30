/*
 * @Author: 张国永 zhang.guoyong2@iwhalecloud.com
 * @Date: 2022-08-08 15:08:58
 * @Description: 一个简单的http请求安全加密处理
 */

// TODO 支持XMLHttpRequest拦截、参数混淆、响应拦截

// 使用方式1: 使用fetch请求模块，start({ mode: signKey })，适应经过封装的fetch模块
// 使用方式2: 使用fetch请求模块，将window.fetch 替换成 fetch，适应自己封装的fetch模块
// 使用方式3: 不使用fetch请求模块，使用createHttpSignStr自己获取签名，自行在header上添加参数
import merge from 'merge';
import capabilities from './clientCapabilities';
import config, { createDefaultConfig, setConfig } from './config';
import {
  conflict as conflictFetch,
  noConflict as noConflictFetch,
} from './requester/fetch';
import {
  conflict as conflictWxRequest,
  noConflict as noConflictWxRequest,
} from './requester/wx';
import {
  conflict as conflictXHR,
  noConflict as noConflictXHR,
} from './requester/xhr';
import type { configType } from './types';
import { checkIsModeValue } from './utils/check';
import message from './utils/message';

let isHttpEncryption = false;
const noConflictList: Function[] = [];

function start(startConfig?: configType) {
  if (isHttpEncryption) {
    message.warn('安全模式已开启,请使用stop方法停止后再重新开启');
    return true;
  }

  const _startConfig = merge.recursive({}, createDefaultConfig(), startConfig);

  const mode = _startConfig.mode as string;
  if (checkIsModeValue(mode)) {
    isHttpEncryption = true;
    // 设置
    setConfig(_startConfig);

    // 按需启动请求劫持
    if (capabilities.fetch && config.requester?.includes('fetch')) {
      conflictFetch();
      noConflictList.push(noConflictFetch);
    }
    if (capabilities.xhr && config.requester?.includes('xhr')) {
      conflictXHR();
      noConflictList.push(noConflictXHR);
    }
    if (capabilities.wxRequest && config.requester?.includes('wxRequest')) {
      conflictWxRequest();
      noConflictList.push(noConflictWxRequest);
    }
  } else {
    message.error(`http安全开启失败,不支持${mode}模式`);
  }

  return isHttpEncryption;
}

function stop() {
  isHttpEncryption = false;
  noConflictList.forEach((noConflict) => {
    noConflict();
  });
}

export default { start, stop };
