const regex = /^[\s]*\$[^\x05]*\$[\s]*$/;
export function isJSVar(x: any) {
  return typeof x === 'string' && regex.test(x);
}
