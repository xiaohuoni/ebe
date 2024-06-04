// const regex = /^\$.+\$$/;
const regex = /^[\s]*\$[^\x05]*\$[\s]*$/;
export function isJSVar(x: any) {
  return typeof x === 'string' && regex.test(x);
}

const templateRegext = /^('\$[^\x05]*\$')|("\$[^\x05]*\$")$/;
export function isTemplateJSVar(x: any) {
  return typeof x === 'string' && templateRegext.test(x);
}

/**
 * 解析可执行的js代码字符串
 *
 * @param accept
 * @returns
 */
export function parse2JSCode(accept: string) {
  let target = accept.replace(/^\$|;\$|\$$/g, '');
  if (isTemplateJSVar(target)) {
    // 兼容旧引擎逻辑，可能存在两层$$符号，如果只解析一层 可能代码异常
    target = target.replace(/^["']\$|;\$|\$["']$/g, '');
  }
  return target;
}
