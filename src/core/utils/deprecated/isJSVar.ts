// const regex = /^\$.+\$$/;
const regex = /^[\s]*\$[^\x05]*\$[\s]*$/;
export function isJSVar(x: any) {
  return typeof x === 'string' && regex.test(x);
}

/**
 * 解析可执行的js代码字符串
 * @param accept
 * @returns
 */
export function parse2JSCode(accept: string) {
  return accept.replace(/^\$|;\$|\$$/g, '');
}
