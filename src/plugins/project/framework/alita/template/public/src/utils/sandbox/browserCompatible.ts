// 一个简易的浏览器能力检测，如需强大功能可考虑引入modernizr.js

type BrowserCompatibleType =
  | 'optionalChainingOperator'
  | 'nullishCoalescingOperator'
  | string;

const testQueue: Record<BrowserCompatibleType, Function> = {};

export const browserCompatible: Record<BrowserCompatibleType, boolean> = {};

export const browserCompatibleTest = {
  add: (key: string, testFun: Function) => {
    testQueue[key] = testFun;
  },
  remove: (key: string) => {
    if (testQueue[key]) {
      delete testQueue[key];
    }
  },
  run: (keys?: BrowserCompatibleType[]) => {
    (keys || Object.keys(testQueue)).forEach((key) => {
      if (typeof testQueue[key] === 'function') {
        browserCompatible[key] = testQueue[key]();
      }
    });
  },
};

// test optionalChainingOperator
browserCompatibleTest.add('optionalChainingOperator', () => {
  try {
    // eslint-disable-next-line no-eval
    eval('browserCompatible?.optionalChainingOperator');
    return true;
  } catch (e) {
    return false;
  }
});

// test nullishCoalescingOperator
browserCompatibleTest.add('nullishCoalescingOperator', () => {
  try {
    // eslint-disable-next-line no-eval
    eval('browserCompatible ?? true');
    return true;
  } catch (e) {
    return false;
  }
});

browserCompatibleTest.run();

export default browserCompatible;
