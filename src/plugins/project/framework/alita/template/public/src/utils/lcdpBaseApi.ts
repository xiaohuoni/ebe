/* eslint-disable */
import copy from 'copy-to-clipboard';
import _ from 'lodash';
import api from './service/commonFetch';
import React from 'react';
import { ModalManagerHooks } from '@lingxiteam/types';
// import PopoverUtils from '@/utils/popoverUtils';
// import { Interceptor } from "../request";
// import type { InterceptorType } from "../request";
// import browserCompatible from './browserCompatible';

// 对应用全局数据和全局方法访问的接口对象,为自定义代码提供更多可能性
class LcdpBaseApi {
  [x: string]:{
    refs: {
      ModalManager: React.RefObject<ModalManagerHooks>,
      history: any,
    }
  } | any
  constructor(mountObj?: any, singletonLcdpApi?: any) {
    // 数据
    this.data = {
      // 应用页面数据
      pages: [],
      // 用户登录信息
      user: {},
      /**
       * @deprecated 应用页面公共状态数据 已废弃，兼容DICT
       */
      pagePublicState: {},

      hasInitApp: false,
    };

    // 收集所有应用hooks
    this.hooksOfApp = {};
    // 内部资产列表
    this.inLineComps = {};
   // 收集antd对象
    this.antd = {};
    // 对象引用
    this.refs = {
      /**
       * @deprecated 已废弃，兼容DICT
       */
      history: null,
      /**
       * @deprecated  窗口管理对象 已废弃，兼容DICT
       */
      ModalManager: null,
      /**
       * 收集页面popover引用
       */
    //   PopoverManager: PopoverUtils.getInstance(),
    };

    // 调用接口合集
    this.apis = {

    };

    // 外部系统注册的原滋原味的接口，不需要去包装参数
    this.originalApis = {};

    // 通用工具方法
    this.utils = {

    };

    // http请求拦截器
    // this.interceptors = [];

    // 页面自定义事件对象
    this.selCustomFunc = {};

    // 页面返回数据
    this.pageCallBackData = {};
    
    /**
     * 用于兼容江西渠道-接收页面信息事件
     * @deprecated
     */
    this.messageHandlers = {};
    
    /**
    * @name 调用页面的自定义事件
    * @param {string} currentPageId 当前页面id，由于自动取当前页面PageId存在问题，故新增此参数
    * @param {string} funcName 自定义事件名
    * @param {object} options 自定义事件所需参数
    */
    this.callSelCustomFunc = (currentPageId: string, funcName: string, options: any) => {
      let pageId = currentPageId;
      let func = funcName;

      // 存量数据第一个参数为funcName，该参数支持嵌套写法，现调整为currentPageId
      if (typeof currentPageId === 'string' && currentPageId.indexOf('.') !== -1) {
        pageId = currentPageId.split('.')[0];
        func = currentPageId.split('.')[1];
      }
      // 如果funcName为对象时，肯定是存量数据的options
      if (typeof funcName === 'object') {
        options = funcName;
      }

      if (!this.selCustomFunc[pageId]) {
        console.warn('当前页面未配置自定义事件');
        return;
      }
      // @ts-ignore
      if (!this.selCustomFunc[pageId][func]) {
        console.warn(`当前页面未找到自定义事件:${func}`);
        return;
      }
      // @ts-ignore
      return this.selCustomFunc[pageId][func](options);
    };


    /**
    * @name 复制到粘贴板
    * @param {string} text 复制内容
    * @param {object} options 配置项，详见：https://www.npmjs.com/package/copy-to-clipboard
    */
    this.copy = copy;

    /**
    * @name 发送请求
    */
    this.fetch = api.commonFetch;

    // 重构 屏蔽
    // this.isSupport = browserCompatible(),

    this.hooks = {};

    this.mount(mountObj);
    // 兼容旧数据，在访问lcdpApi的data数据（仅针对公共数据部分，如： pages, user等）时需要将singletonLcdpApi的数据返回
    if (singletonLcdpApi) {
      const dataKeys = new Set(['user', 'tenantId']);
      Object.keys(singletonLcdpApi.data).forEach(k => {
        if (this.data[k] === undefined) {
          dataKeys.add(k);
        }
      });
      [...dataKeys].forEach(k => {
        (() => {
          // 理论上不会用到val
          let val = null;
          Object.defineProperty(this.data, k, {
            get() {
              return singletonLcdpApi.data[k];
            },
            set(value) {
              // this[k] = value; 这种写法会造成死循环
              val = value;
            }
          });
        })()
      });
      ['history'].forEach(k => {
        (() => {
          let val = null;
          Object.defineProperty(this.refs, k, {
            get() {
              return singletonLcdpApi.refs[k];
            },
            set(value) {
              val = value;
            }
          });
        })()

      });
    }
  }

  // /**
  //  * 注册http请求拦截器
  //  * /**
  // * @typedef RequestInterceptor 请求拦截器
  // * @type {Object}
  // * @property {boolean|function} useCustomRequest 是否使用自定义的发送请求实现, 值为 boolean 或返回 boolean 的函数（函数的参数为请求地址）
  // * @property {function} customRequest 自定义的发送请求实现，值为函数，参数为 (url, options), 返回 Promise, Promise 的解析结果为响应数据（包含 resultCode, resultObject 这一层）
  //  */
  // registerHttpInterceptors(interceptor: any) {
  //   // 暂时注释，考虑到可能存在其他地方使用的风险。
  //   // this.interceptors.push(interceptor);
  //   Interceptor.addInterceptors(interceptor);
  // }

  // // 注册拦截器
  // registerInterceptors(interceptor: { 
  //   request: InterceptorType['request'],
  //   response: InterceptorType['response'],
  // }) { 

  //   interceptor.request.forEach(req => {
  //     Interceptor.addRequestInterceptors(req);
  //   });

  //   interceptor.response.forEach(res => {
  //     Interceptor.addResponseInterceptors(res);
  //   });
  // }

  setData(key: string, value: any, isReplaceAll = true) {
    // 对象/数组赋值保留原内存地址, 解决被变量引用内存地址，修改后导致该变量无法正常取值
    if (Object.prototype.toString.call(value) === '[object Object]' && Object.prototype.toString.call(this.data[key]) === '[object Object]') {
      if (isReplaceAll) {
        Object.keys(this.data[key]).forEach(n => delete this.data[key][n]);
      }
      this.data[key] = Object.assign(this.data[key], value);
    } else if (Array.isArray(value) && Array.isArray(this.data[key])) {
      const val = [...value];
      if (isReplaceAll) {
        // 很神奇，有时候清除该值时，value会被清空，此处value有值start
        this.data[key].length = 0;
        // 很神奇，有时候清除该值时，value会被清空，此处value为空end
      }
      Array.prototype.push.apply(this.data[key], val);
    } else {
      this.data[key] = value;
    }
  }

  setPageCallBackData(data: any) {
    this.pageCallBackData = data;
  }

  setInLineComps(key:string, value: any) {
    this.inLineComps[key] = value;
  }
  removeData(key: string) {
    delete this.data[key];
  }

  setRefs(key: string, value: any) {
    this.refs[key] = value;
  }

  removeRefs(key: string) {
    delete this.refs[key];
  }

  // apis 一次性注册,  original为true需要保持原滋原味
  setApis(apis: any, original = false) {
    if (apis) {
      if (original) {
        this.originalApis = apis;
      } else {
        this.apis = apis;
      }
    }
  }
  registryAllHooks(appId: string, key: string, value: any) {
    if (!this.hooksOfApp[appId]) {
      this.hooksOfApp[appId] = {};
    }
    this.hooksOfApp[appId][key] = value;
  }

  /**
   * @deprecated 兼容存量，后续禁止使用
   * @param pageId 
   * @param funcString 
   */
  setSelCustomFunc(pageId: string, funcString: string) {
    this.selCustomFunc[pageId] = funcString;
  }

  /**
   * @deprecated 兼容存量，后续禁止使用
   * @param pageId 
   */
  clearSelCustomFunc(pageId: string) { 
    this.selCustomFunc[pageId] = {};
  }

  removeSelCustomFuncString() {
    delete this.selCustomFunc;
  }

  initHooks(hookArray: any[]) {
    hookArray.forEach(c => {
      this.hooks[c.hookCode] = c.hookCompiledContent;
    });
  }
  /**
   * 注册Antd组件，包括APP和PC
   * @param compsOpts
   */
  setAntd(compsOpts: any) {
    this.antd = compsOpts;
  }
}

export default LcdpBaseApi;
