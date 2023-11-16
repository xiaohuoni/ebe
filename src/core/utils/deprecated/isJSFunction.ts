export function isJSFunction(x: any) {
  return typeof x === 'object' && x && x.type === 'JSFunction';
}
