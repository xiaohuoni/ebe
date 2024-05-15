export const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
export const isNode = typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.node !== 'undefined';
export const isWXminiProgram = !isBrowser && typeof wx === 'object';

const capabilities = (function() {
  return {
    cookie: isBrowser && navigator.cookieEnabled,
    fetch: typeof fetch === 'function',
    xhr: typeof XMLHttpRequest === 'function',
    wxRequest: isWXminiProgram && typeof wx.request === 'function',
    localStorage: typeof localStorage === 'object',
  };
}());

export default capabilities;
