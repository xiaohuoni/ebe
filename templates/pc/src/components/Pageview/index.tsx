import { parse } from 'qs';
import React from 'react';

export const RootProps = {};
const Pages: any = {
  '/guanliyuanshouye0496': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/guanliyuanshouye0496__index" */ '@/pages/guanliyuanshouye0496'
      ),
  ),
  '1056843976424230912': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1056843976424230912" */ '@/pages/guanliyuanshouye0496'
      ),
  ),
};

export function parseSrc(src?: string): [string, any] {
  const arr = src?.split('?') as string[];
  return [arr[0], parse(arr[1])];
}

const P = (props: any) => <div>{props?.pageSrc} 页面未找到</div>;
const Pageview = (props: any) => {
  // 页面 src 可能是带参数的如 /a?b=1&c=2
  const [path, query] = parseSrc(props?.pageSrc);
  const Page = Pages[path] ?? P;
  return <Page {...query} {...props} />;
};
export default Pageview;
