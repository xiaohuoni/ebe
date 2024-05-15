export const checkIsEmpty = (nowValue: any) => {
  return (
    nowValue === '' ||
    nowValue === undefined ||
    nowValue === null ||
    (Object.prototype.toString.call(nowValue) == '[object Array]'
      ? nowValue.length == 0
      : false) ||
    (Object.prototype.toString.call(nowValue) == '[object Object]'
      ? Object.keys(nowValue).length == 0
      : false)
  );
};

export const checkIsContains = (contents: any, containContent: any) => {
  if (Array.isArray(contents)) {
    // 可能存在字符串数字，需使用弱等于查找
    return contents.findIndex((n) => n == containContent) !== -1;
  }
  return String(contents).indexOf(containContent) !== -1;
};
const numberregex = /\d+/g;
export const safeNumber = (str: string | number) => {
  return typeof str === 'string' && numberregex.test(str) && !isNaN(Number(str))
    ? Number(str)
    : str;
};
