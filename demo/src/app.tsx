import type { ResponseError } from 'alita';

// 请求中间件 就是发起请求和响应之后需要统一操作数据就写这
const middleware = async (ctx: Context, next: () => void) => {
  // 可以在这写一些请求前做的事情 操作ctx.req
  await next();

  const { res = {}, req = {} as any } = ctx;
  const { resultCode, resultObject = {} } = res;
  if (resultCode === '0') {
    ctx.res = resultObject || {};
  }
};
export const request = {
  prefix: '',
  method: 'get',
  middlewares: [middleware],
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(11111111);
    console.log(error);
  },
};
