import { isPlainObject, last } from 'lodash';
import { createElement, Fragment } from 'react';
import Sandbox from '@/utils/sandbox';

const { hasOwnProperty } = Object.prototype;
const hasOwn = (val: object, key: string | symbol): key is keyof typeof val =>
  hasOwnProperty.call(val, key);

interface LoadModuleConfig {
  /**
   * 上下文
   */
  context?: {
    /**
     * 包含某些上下文的key
     */
    include?: string[];

    /**
     * 排除某些key  优先级最高， 会排除包含的所有函数
     */
    exclude?: string[];

    /**
     * 增加额外的上下文
     */
    allowMap?: Record<string, any>;
  };

  /**
   * 自定义执行函数
   * @returns 执行结果
   */
  run?: (
    code: string,
    options: {
      context: Record<string, any>;
      dependencies: Record<string, any>;
    },
  ) => any;
}

// 这些key禁止修改
export const forbidModifyKey = [
  'data',
  'globalData',
  'urlParam',
  'routerData',
  'state',
];

export const defaultLoadModuleCtxKey = [
  'data',
  'globalData',
  'urlParam',
  'routerData',
  'state',
  'lcdpApi',
  'appId',
  'pageId',
  'attrDataMap',
  'moment',
  '_',
  'messageApi',
  'api',
  'customActionMap',
  'LcdpTerminalType',
  'utils',
  'appInfo',
  'utils.getLocaleEnv',
  'utils.getLocaleLanguage',
  'functorsMap',
  'getValue',
];

// 缓存环境变量，防止过渡解析
const environmentCacheMap = new Map<string, boolean>();

const isDevelopment = () => {
  if (environmentCacheMap.has(window.location.href)) {
    return environmentCacheMap.get(window.location.href);
  }

  const [, search] = window.location.href.split('?') || [];
  const qsKeys: Record<string, any> = {};

  search.split('&').forEach((keyValues) => {
    const [key, value] = keyValues?.split('=') || [];
    if (key) {
      qsKeys[key] = value;
    }
  });

  const isDev = Object.keys(qsKeys).includes('debugToken');

  environmentCacheMap.set(window.location.href, isDev);

  return isDev;
};

// 创建require函数，构造一个require的浏览器环境
const createRequires = (dependencies: Record<string, any> = {}) => {
  return (name: string) => {
    if (!dependencies[name]) {
      throw new Error(`Module ${name} cannot be found.`);
    }
    return dependencies[name];
  };
};

/**
 * 获取上下文
 * @param context
 * @param config
 * @param allowMap
 * @returns
 */
const getAllowContext = (
  context: Record<string, any>,
  config?: LoadModuleConfig,
  allowMap = {},
) => {
  let allowContextKeys = [...defaultLoadModuleCtxKey];

  const {
    context: { include = [], exclude = [], allowMap: userAllowMap = {} } = {},
  } = config || {};

  // 优先插入包含的key;
  allowContextKeys.push(...include, ...Object.keys({ ...userAllowMap }));

  const totalContext: Record<string, any> = {
    ...context,
    ...userAllowMap,
    ...allowMap,
  };

  const isDEV = hasOwn(totalContext, 'urlParam')
    ? totalContext.urlParam.debugToken
    : isDevelopment();

  // 移除exclude的key;
  allowContextKeys = allowContextKeys.filter((key) => !exclude.includes(key));

  // 调用方增加的上下文具有最高优先级，不允许被配置排除。
  allowContextKeys.push(...Object.keys(allowMap));

  const result: Record<string, any> = {};
  allowContextKeys.forEach((key) => {
    const path = key.split('.');
    if (result[last(path)!]) {
      throw new Error(`加载模块时，上下文遇到相同的key:${key}, 请检查配置`);
    }
    let value = path
      .filter(Boolean)
      .reduce((pre, current) => pre?.[current], totalContext);

    // 对象在预览模式下禁止修改对象值
    if (isPlainObject(value)) {
      value = { ...value };
      // 开发模式下 部分字段禁止修改
      if (forbidModifyKey.includes(key) && isDEV && Object.freeze) {
        Object.freeze(value);
      }
    }

    result[last(path)!] = value;
  });

  return result;
};

/**
 * 加载cjs或者模块
 * @param code
 * @param run 运行场景
 * @param dependencies 依赖项
 */
export const sandBoxLoadModule = (
  code: string,
  context: Record<string, any>,
  config?: LoadModuleConfig,
  options?: {
    dependencies?: Record<string, any>;
    allowMap?: Record<string, any>;
  },
) => {
  const { dependencies = {}, allowMap } = options || {};

  const allowContext = getAllowContext(context, config, allowMap);
  // 模拟requre函数
  const mockRequire = createRequires(dependencies);

  const exports = {};
  const module = { exports };

  // 模拟commonjs环境
  const moduleContext = {
    require: mockRequire,
    exports,
    module,
    Lingxi: {
      createVNode: createElement,
      Fragment,
    },
  };

  // 沙箱执行
  Sandbox.run(code, {
    ...allowContext,
    ...moduleContext,
  });

  // 取出返回值
  return module.exports;
};
