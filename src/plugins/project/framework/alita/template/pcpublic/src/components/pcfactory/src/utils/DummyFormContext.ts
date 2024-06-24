import React from 'react';

const DummyFormContext = React.createContext<any>(null);

const useDummyFormContext = () => {
  return React.useContext(DummyFormContext) || {};
};

// 以下是用于嵌套fieldName写法的东西
const CHECK_ARR = ['[', ']', '.'];
// 判断当前索引是否在引号的字符串引用范围内
const inRange = (ind: number, rangearr: any[]) => {
  let result = false;
  const findObj = rangearr.find((r) => {
    if (ind > r.end || ind < r.start) {
      // 如果索引已经超过了区间的范围，那么根本不用考虑
      return false;
    }
    if (r.end >= ind && r.start <= ind) {
      result = true;
      return true;
    }
    return false;
  });

  return findObj ? result : false;
};
// 检查路径。这个方法返回被切分好的标识符数组，空数组代表这个路径是不合法的
const pathSplit = (str: string) => {
  const result = [];

  let lastchar: string;
  let rangestartind: number;
  let quotechar: string;
  const quoterange: any[] = [];
  const strarr = [...str];
  // 第一次遍历，进行简易的词法分析，本次仅额外处理形如[""]的完整字符串强调形式
  strarr.forEach((c, ind) => {
    if (['"', "'"].includes(c) && lastchar === '[') {
      // 发现下标字符串的起始范围，启用记录
      rangestartind = ind;
      quotechar = c;
    } else if (quotechar && lastchar === quotechar && c === ']') {
      // 到达结束标记
      quoterange.push({
        start: rangestartind,
        end: ind - 1,
      });
      quotechar = '';
    }

    lastchar = c;
  });

  let id = '';
  // 贪心法拆分标识符
  strarr.forEach((c, ind) => {
    if (inRange(ind, quoterange)) {
      if (!['"', "'"].includes(c)) {
        id += c;
      }
    } else if (!CHECK_ARR.includes(c)) {
      id += c;
    } else if (id) {
      result.push(id);
      id = '';
    }
  });
  if (id) {
    result.push(id);
  }
  // TODO 检查标识符序列是否合法，如果不合法的话抛出空数组？
  // 这个事情暂时在我这边不还原得很清楚

  return result;
};

const getObjByPath = (obj: any, path: string) => {
  if (!obj) return undefined;
  const sp = pathSplit(path);
  // chained: 表示这个值取自一个链式写法 notcompletechain:表示途径属性链不完整，比如一个对象里的a字段对象里没有b字段，但取它的a.b，虽然不会报错（得到undefined），但这属性链条不完整
  const finalresult = {
    chained: false,
    notcompletechain: false,
    value: undefined,
  };

  let temp = obj;
  if (sp.length > 0) {
    finalresult.chained = true;
    sp.forEach((k) => {
      if (!temp || !(k in temp)) {
        finalresult.notcompletechain = true;
      }
      temp = temp?.[k];
    });
    finalresult.value = temp;
  } else {
    finalresult.value = obj[path];
  }

  return finalresult;
};

const setObjByPath = (obj: any, path: string, val: any) => {
  if (!obj) return;

  const sp = pathSplit(path);
  let result = obj;
  const lastResult = obj;
  let lastkey = '';
  if (sp.length > 0) {
    sp.forEach((k, ind) => {
      if (ind < sp.length - 1) {
        if (lastkey && /^\d+$/g.test(k)) {
          // 如果有全数字，只要不是第一层，优先尝试给它处理成数组
          lastResult[lastkey] = Array.isArray(lastResult[lastkey])
            ? lastResult[lastkey]
            : [];
          result = lastResult[lastkey]; // 把上一层改为数组
          result[k] = result[k] || {};
          result = result[k];
        } else {
          result[k] = result[k] || {};
          result = result[k];
        }
      }
      lastkey = k;
    });
    result[lastkey] = val;
  } else {
    obj[path] = val;
  }
};

export { DummyFormContext, useDummyFormContext, getObjByPath, setObjByPath };
