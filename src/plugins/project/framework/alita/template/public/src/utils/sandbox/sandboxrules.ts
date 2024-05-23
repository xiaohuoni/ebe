/* eslint-disable prefer-rest-params */
/* eslint-disable camelcase */
/* eslint-disable no-new-func */
import { browserCompatible } from './browserCompatible';

// 沙盒转换规则定义

// 兼容参数，寻找原始字符串中所有的
// 这个参数的返回值是String.matchAll的简化版本，没有匹配组的信息（因为没用到）
const matchAllPolyFill = (str: String, pattern: RegExp) => {
  const result: Array<any> = [];
  const mystr = str;
  mystr.replace(pattern, function () {
    const index = arguments[arguments.length - 2];
    result.push({
      0: arguments[0],
      index,
    });
    return '';
  });
  return result;
};

// 轻型的词法分析，使用贪心法得到字符串/正则表达式的范围
const quotestr = ['`', "'", '"', '/'];
const liteQuoteCheck = (str: String) => {
  // @ts-ignore
  const strarr = [...str];
  const result: any[] = [];
  let rangestart: any;
  let lastrangechar: any;
  strarr.forEach((char, ind) => {
    if (char === lastrangechar) {
      // 贪心法到达结束为止
      result.push({
        start: rangestart,
        end: ind,
      });
      lastrangechar = null;
      rangestart = null;
    } else if (quotestr.includes(char) && !lastrangechar) {
      // 遇到一个指定字符，开始记录当前字符，贪心法匹配最大范围
      rangestart = ind;
      lastrangechar = char;
    }
  });

  return result;
};

// 可选链操作符?.
const Optional_Chaining: (arg0: string) => string = (code) => {
  // 浏览器能力检测，如果支持不需要再处理
  if (browserCompatible.optionalChainingOperator) {
    return code;
  }
  let filterCode = code;
  let opchain = matchAllPolyFill(
    code,
    /[\$a-zA-Z_\[]+([0-9a-zA-Z\[\]\.]*|\[.+\])\?\.\[?/g,
  );
  if (opchain.length > 0) {
    // 生产紧急兼容：code存在可选链操作符，进行转换
    const quoterange = liteQuoteCheck(code);
    if (quoterange.length > 0) {
      // 存在在正则表达式和字符串里的结果，这些结果应当忽略
      opchain = opchain.filter(
        (i: any) =>
          !quoterange.find(
            (o: any) => o.start <= i.index && o.end >= i.index + i[0].length,
          ),
      );
    }
    // 进行替换，替换逻辑是： ?. → ||{}). ，然后在每“组”表达式的前面补充对应数量的左括号
    const finalCodeArr: string[] = [];
    let nextind = 0;
    let chainflag = 0; // 临时记录是否出现了连续的?.表达式
    opchain.forEach((c: any, cind) => {
      if (nextind === c.index) {
        chainflag += 1;
      } else {
        finalCodeArr.push(code.slice(nextind, c.index));
        if (chainflag > 0) {
          // 退出了连续表达式，要在前面追加，但是这个位置实际上是脱离连续表达式后的第一个项目(a?.b;c?.x)，所以计数要往回倒腾2
          if (finalCodeArr.length - chainflag - 2 < 0) {
            finalCodeArr.unshift('('.repeat(chainflag));
          } else {
            finalCodeArr.splice(
              finalCodeArr.length - chainflag - 2,
              0,
              '('.repeat(chainflag),
            );
          }
        }
        finalCodeArr.push('(');
        chainflag = 0;
      }
      if (c[0].charAt(c[0].length - 1) === '[') {
        // 如果尾巴跟着一个下标括号，那么就不要引入额外的.，那样会变成(a || {}).[0]，显然又是一个语法错误
        finalCodeArr.push(c[0].replace('?.', '||{})'));
      } else {
        finalCodeArr.push(c[0].replace('?.', '||{}).'));
      }
      nextind = c.index + c[0].length;
    });
    if (chainflag !== 0) {
      if (finalCodeArr.length - chainflag - 2 < 0) {
        finalCodeArr.unshift('('.repeat(chainflag));
      } else {
        finalCodeArr.splice(
          finalCodeArr.length - chainflag - 2,
          0,
          '('.repeat(chainflag),
        );
      }
    }
    finalCodeArr.push(code.slice(nextind));

    filterCode = finalCodeArr.join('');
  }
  return filterCode;
};

// 空值合并运算符??
const NullishCoalescing: (arg0: string) => string = (code) => {
  // 浏览器能力检测，如果支持不需要再处理
  if (browserCompatible.nullishCoalescingOperator) {
    return code;
  }
  let filterCode = code;
  let ncchain = matchAllPolyFill(code, /\?\?/g);
  if (ncchain.length > 0) {
    // 存在??
    const quoterange = liteQuoteCheck(code);
    if (quoterange.length > 0) {
      // 存在在正则表达式里的结果，这些结果应当忽略
      ncchain = ncchain.filter(
        (i: any) =>
          !quoterange.find(
            (o: any) => o.start <= i.index && o.end >= i.index + i[0].length,
          ),
      );
    }
    const finalCodeArr: string[] = [];
    let nextind = 0;
    ncchain.forEach((c: any, ind) => {
      // 把每一个??替换成||
      finalCodeArr.push(code.slice(nextind, c.index));
      finalCodeArr.push(c[0].replace('??', '||'));
      nextind = c.index + c[0].length;
    });
    finalCodeArr.push(code.slice(nextind));

    filterCode = finalCodeArr.join('');
  }
  return filterCode;
};

const isLastSemicolon = (code: string) => {
  if (code.trim().charAt(code.length - 1) === ';') {
    return code.trim().substring(0, code.length - 1);
  }
  return code;
};

// 怀疑输入的内容是不是“一组”JS语句，如果是的话，那么把这些JS语句转为函数定义
// 这个处理应该在最后面
const isJSLine = (code: string) => {
  let filterCode = code;
  try {
    // 先检查是不是经过前面的修正后就通过语法检查了，是的话就不需要再处理了
    Function(`(${code})`);
  } catch (e) {
    // 外层默认是增加括号进行语法校验的，如果增加括号进行语法校验出错才会进入到这个规则
    try {
      Function(code);
      // 如果不增加括号这种情况下，语法校验就成功，说明应该是JS语句（表达式增加括号不应该出现问题），尝试套在一个function里再试一遍
      filterCode = `(function(){
         ${code}
      })()`;

      // code可能是语句，不能被return
      if (code.trim().startsWith('var ')) {
        // 处理babel编译后的代码。例如：var _item; _item = 10;
        // 并不保证这一步能完全正确使用，但可兼容大部分情况
        const splitCodes = code.split(/[;\n]/).filter((c) => Boolean(c));
        const lastCode = splitCodes[splitCodes.length - 1];
        const beforeCode = splitCodes.slice(0, splitCodes.length - 1);

        filterCode = `(function(){${beforeCode.join(
          ';',
        )};return ${lastCode};})()`;
      }
    } catch (e2) {
      // 这里的报错意味着源代码应该是完全不正确的语法，不需要处理
    }
  }
  return filterCode;
};

export default [
  Optional_Chaining,
  NullishCoalescing,
  isLastSemicolon,
  isJSLine, // isJSLine务必放置在最后一步
];
