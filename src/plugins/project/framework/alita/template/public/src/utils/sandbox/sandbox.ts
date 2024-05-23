// @ts-ignore
import ES6Proxy from 'es6-proxy-polyfill';
import compile from './compileCode';
import { isNativeFn } from './utils';

/* eslint-disable */
const ESSandbox = (function () {
  const run = (
    code: string,
    extendAllowMap: any,
    config?: { check: boolean },
  ) => {
    if (!code || typeof code !== 'string') {
      // 如果输入的字符串是空字符串，或者非法值，直接原样输出
      return code;
    }
    try {
      const { err, result, filterCode } = compile.general(code, config);

      if (result) {
        const handler = {
          get(obj: any, prop: any) {
            // 先从目标对象读取prop是否存在
            let target = Reflect.has(obj, `${prop.toString()}__$`)
              ? obj[`${prop.toString()}__$`]
              : undefined;
            // 如果不存在fallback到白名单版本的window
            if (target === undefined) {
              target = Reflect.has(obj.window__$, `${prop.toString()}`)
                ? obj.window__$[`${prop.toString()}`]
                : undefined;
            }
            return target;
          },
          set(obj: any, prop: any, value: any) {
            return Reflect.set(obj, `${prop}__$`, value);
          },
          has(obj: any, prop: any) {
            return (
              obj &&
              (Reflect.has(obj, `${prop.toString()}__$`) ||
                Reflect.has(obj.window__$, `${prop.toString()}`))
            );
          },
        };
        const catchAllHandler = {
          get(obj: any, prop: any) {
            return Reflect.get(obj, prop);
          },
          set() {
            return true;
          },
          has() {
            return true;
          },
        };

        const _console: any = {};

        (function createMockConsole(_console) {
          const allowConsoleProps = [
            'debug',
            'error',
            'info',
            'log',
            'warn',
            'dir',
            'dirxml',
            'table',
            'trace',
            'group',
            'groupCollapsed',
            'groupEnd',
            'clear',
            'count',
            'countReset',
            'assert',
            'profile',
            'profileEnd',
            'time',
            'timeLog',
            'timeEnd',
            'timeStamp',
          ];

          for (const property of allowConsoleProps) {
            _console[property] = function () {
              if (arguments.length > 1 && typeof arguments[0] === 'string') {
                arguments[0] = arguments[0].replace(/%/g, '%%');
              }
              // @ts-ignore
              return console[property](...arguments);
            };
          }
        })(_console);

        const allowList = {
          __proto__: null,
          console__$: _console,
          alert__$() {
            alert(`Sandboxed alert:${arguments[0]}`);
          },
          String__$: String,
          Number__$: Number,
          Array__$: Array,
          Symbol__$: Symbol,
          Math__$: Math,
          RegExp__$: RegExp,
          Object__$: Object,
          eval__$(ecode: string) {
            return Sandbox.run(`return ${ecode}`, {});
          },
          window__$: window as Window & {
            appId?: string;
            pageId?: string;
            lcdpApi?: any;
          }, // TODO 这里的window对象原则上需要限制，这是白名单的理由
          parseInt__$: parseInt,
          parseFloat__$: parseFloat,
          // FIX: TypeError: Illegal invocation 原因是因为setTimeout、setInterval取到的函数this指向异常
          setTimeout__$: window.setTimeout.bind(window),
          setInterval__$: window.setInterval.bind(window),
          clearTimeout__$: window.clearTimeout.bind(window),
          clearInterval__$: window.clearInterval.bind(window),
        };
        if (allowList.window__$) {
          allowList.window__$.appId = extendAllowMap.appId;
          allowList.window__$.pageId = extendAllowMap.pageId;
          // allowList.window__$._ = extendAllowMap.lodash;
          (allowList.window__$ as any).lcdpApi =
            extendAllowMap.lcdpApi || (window as any).lcdpApi;
        }

        if (extendAllowMap && typeof extendAllowMap === 'object') {
          Object.keys(extendAllowMap).forEach((k) => {
            const dkey: keyof typeof allowList = `${k}__$` as any;
            if (!allowList[dkey]) {
              // @ts-ignore
              allowList[dkey] = extendAllowMap[k];
            }
          });
        }
        const proxy = new Proxy(allowList, handler);
        const catchAllProxy = new Proxy(
          {
            __proto__: null,
            proxy,
            globalThis: new Proxy(allowList, handler),
            window: new Proxy(allowList, handler),
          },
          catchAllHandler,
        );

        const output = Function(
          'proxy',
          'catchAllProxy',
          `
                    with(catchAllProxy) {
                        with(proxy) {
                            return (function(){
                                "use strict";
                                return ${filterCode}
                            })();
                        }
                    }
                `,
        )(proxy, catchAllProxy);
        return output;
      } else {
        throw err;
      }
    } catch (e) {
      throw e;
    }
  };
  return { run };
})();

// IE兼容版Sandbox，这个版本的Sandbox基本移除了原本的proxy能力
// IE兼容版Sandbox在表达式里出现未定义的变量时无法直接转换为undefined，只能正常抛出报错。
const IESandbox = (function () {
  const run = (
    code: string,
    extendAllowMap: any,
    config?: { check: boolean },
  ) => /*  @__HOT_UPDATE__ @alias Sandbox.run */ {
    if (!code || typeof code !== 'string') {
      // 如果输入的字符串是空字符串，或者非法值，直接原样输出
      return code;
    }

    try {
      const filterCode = compile.ie(code, config);
      if (true) {
        const handler = {
          get(obj: any, prop: any) {
            // 先从目标对象读取prop是否存在
            let target = Reflect.has(obj, prop.toString())
              ? obj[prop.toString()]
              : undefined;
            // 如果不存在fallback到白名单版本的window
            if (target === undefined) {
              target = Reflect.has(obj.window, `${prop.toString()}`)
                ? obj.window[`${prop.toString()}`]
                : undefined;
            }
            return target;
          },
          set(obj: any, prop: any, value: any) {
            return Reflect.set(obj, prop, value);
          },
        };

        const _console = {};

        (function createMockConsole(_console) {
          const allowConsoleProps = [
            'debug',
            'error',
            'info',
            'log',
            'warn',
            'dir',
            'dirxml',
            'table',
            'trace',
            'group',
            'groupCollapsed',
            'groupEnd',
            'clear',
            'count',
            'countReset',
            'assert',
            'profile',
            'profileEnd',
            'time',
            'timeLog',
            'timeEnd',
            'timeStamp',
          ];

          for (const property of allowConsoleProps) {
            // @ts-ignore
            _console[property] = function () {
              if (arguments.length > 1 && typeof arguments[0] === 'string') {
                arguments[0] = arguments[0].replace(/%/g, '%%');
              }
              // @ts-ignore
              return console[property](...arguments);
            };
          }
        })(_console);

        const allowList = {
          console: _console,
          alert() {
            alert(`Sandboxed alert:${arguments[0]}`);
          },
          String: String,
          Number: Number,
          Array: Array,
          Symbol: Symbol,
          Math: Math,
          RegExp: RegExp,
          Object: Object,
          eval(ecode: string) {
            return Sandbox.run(`return ${ecode}`, {});
          },
          window: window as Window & {
            appId?: string;
            pageId?: string;
            lcdpApi?: any;
          }, // TODO 这里的window对象原则上需要限制，这是白名单的理由
          parseInt: parseInt,
          parseFloat: parseFloat,
          setTimeout,
          setInterval,
        };

        if (allowList.window) {
          allowList.window.appId = extendAllowMap.appId;
          allowList.window.pageId = extendAllowMap.pageId;
          // allowList.window._ = extendAllowMap.lodash;
          (allowList.window as any).lcdpApi =
            extendAllowMap.lcdpApi || (window as any).lcdpApi;
        }

        if (extendAllowMap && typeof extendAllowMap === 'object') {
          Object.keys(extendAllowMap).forEach((k) => {
            const dkey: keyof typeof allowList = k as any;
            if (!allowList[dkey]) {
              allowList[dkey] = extendAllowMap[k];
            }
          });
        }
        const proxy = new ES6Proxy(allowList, handler);
        // 注意：解析数据，防止return的第一个字符是分号或者\n 导致返回数据为空
        const output = Function(
          'proxy',
          `
            with(proxy) {
                return (${filterCode});
            }
        `,
        )(proxy);
        return output;
      }
    } catch (e) {
      throw e;
    }
  };
  return { run };
})();

/* @__HOT_UPDATE__ */
const Sandbox = (function () {
  if (isNativeFn(window?.Proxy)) {
    return ESSandbox;
  } else {
    return IESandbox;
  }
})();

export { Sandbox };
