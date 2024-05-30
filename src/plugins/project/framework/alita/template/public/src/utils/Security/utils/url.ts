/**
 * 将对象转成url search字符串
 * @param params 待转换的对象
 * @returns
 */
export const obj2QueryString = (params: any) => {
  const queryString = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return queryString;
};

/**
 * 将url参数进行编码转换
 * @param queryStr 待处理url参数
 * @returns
 */
export const decodeQueryString = (queryStr: string) => {
  return queryStr?.replace(/[^&=]+/g, mat => decodeURIComponent(mat));
};

/**
 * 将url地址上参数转换成对象
 * @param url url地址
 * @returns
 */
export const getSearchObj = (url: string) => {
  const urlArr = url.split('?');
  if (urlArr.length === 1) return {};
  const search = urlArr.pop() || '';
  const objs = search.split('&');
  const obj: any = {};

  objs.forEach(value => {
    const [k, v] = value.split('=');
    if (v) {
      obj[decodeURIComponent(k)] = decodeURIComponent(v);
    }
  });

  return obj;
};

/**
 * 移除URL指定参数
 * @param url url地址
 * @param paramsToRemove 需要移除的参数列表
 * @returns 处理后的url
 */
export const removeURLParameters = (url: string, paramsToRemove: string[]): string => {
  let result = url;
  // 对每个要移除的参数，构建正则表达式并执行替换操作
  paramsToRemove.forEach(param => {
    // 正则表达式解释：
    // 1. (?<=\?|\&) 匹配参数前的 ? 或 &，使用正向后查找确保匹配位置在这些字符之后
    // 2. param 匹配指定的参数名
    // 3. = 匹配等号
    // 4. [^&]* 匹配等号后面的所有字符，直到遇到下一个 & 或字符串结束
    // 5. (?:&|$) 匹配字符串结束或者下一个参数的开始（&），使用非捕获组
    const regex = new RegExp(`(?<=\\?|&)${param}=[^&]*(?:&|$)`, 'g');

    // 执行替换操作，删除匹配到的参数及其值
    result = result.replace(regex, '');

    // 移除可能由于参数删除留下的多余的 & 或将 ? 替换为最后一个参数后的 &
    result = result.replace(/&$/, '').replace(/\?&/, '?');
  });

  // 移除末尾可能多余的 ?（如果参数是URL的唯一查询参数）
  result = result.replace(/\?$/, '');

  return result;
};
