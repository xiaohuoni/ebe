const regex = /^\$.+\$$/;
export function isJSVar(x: any) {
  return typeof x === 'string' && regex.test(x);
}
