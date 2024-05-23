// 如果这个Proxy是polyfill版本，那么一定是IE
// 使用判断是否原生实现的形式来判断Proxy是polyfill版还是浏览器规范版本
function isNativeFn(value:Function) {
  return typeof value === 'function' && /\[native code\]/.test(value.toString());
}

export {
  isNativeFn,
};
