/* eslint-disable no-new-func */
import SandBoxRules from './sandboxrules';
import { isNativeFn } from './utils';

// 语法兼容函数，用于作为轻量的babel处理一些意料外的新运算符
const fiterCodeFun = (code:string) => {
  let filterCode = code;
  if (code !== '') {
    // 按照SandBoxRules的定义，依次执行
    SandBoxRules.forEach(loader => {
      filterCode = loader(filterCode);
    });
    return filterCode;
  }
  // 都是空字符串了，沙盒还执行什么，直接抛出
  return '';
};


function checkSyntax(checkcode:string) {
  try {
    Function(`(${checkcode})`);
    // 如果沙盒接收到有ES6 import语句的，那么在跑import的时候就会脱离沙盒限制，变成可以访问道全局上下文，目前未存在此使用场景
    // if (/\bimport\s*(?:[(]|\/[*]|\/\/|<!--|-->)/.test(checkcode)) {
    //   throw new Error('Dynamic imports are blocked');
    // }
  } catch (e) {
    return {
      result: false,
      err: e,
    };
  }
  return {
    result: true,
  };
}

const compile = {
  general: (code: string, config?: { check: boolean }) => {
    const { check = true } = config || {};
    if (!check) {
      return {
        result: true,
        err: null,
        filterCode: code,
      };
    }
    let filterCode = code;
    // 预检测语法
    let checkResult = checkSyntax(filterCode);

    // 使用原始代码进行检查报错
    if (!checkResult.result) {
      // 尝试使用转换过的代码
      filterCode = fiterCodeFun(code);
      // 处理后再次检测
      checkResult = checkSyntax(filterCode);
    }
    
    return {
      ...checkResult,
      filterCode,
    };
  },
  ie: (code: string, config?: { check: boolean }) => {
    const { check = true } = config || {};
    return check ? fiterCodeFun(code) : code;
  },
};

export const compileCode = (code: string, config?: { check: boolean }) => {
  if (isNativeFn(window?.Proxy)) {
    return compile.general(code, config);
  }
  return {
    result: true,
    err: null,
    filterCode: compile.ie(code, config),
  };
};

export default compile;
