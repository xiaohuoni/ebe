// const regex = /^\$.+\$$/;
const regex = /^[\s]*\$[^\x05]*\$[\s]*$/;
export function isJSVar(x: any) {
  return typeof x === 'string' && regex.test(x);
}

/**
 * 解析可执行的js代码字符串
 *
 * @param accept
 * @returns
 */
export function parse2JSCode(accept: string) {
  let target = accept;
  // 部分代码存在错误的编辑问题， 所以需要处理多层的情况
  while (isJSVar(target)) {
    target = target.replace(/^\$|;\$|\$$/g, '');
  }

  return target;
}
