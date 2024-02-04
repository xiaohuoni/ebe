import { parse } from 'qs';
import React from 'react';

export const pageStaticData: any = {};
export const RootProps: any = {};
const Pages: any = {
  '/auditOrderPrepare': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/auditOrderPrepare__index" */ '@/pages/auditOrderPrepare'
      ),
  ),
  '884045146848604160': React.lazy(
    () =>
      import(
        /* webpackChunkName: "884045146848604160" */ '@/pages/auditOrderPrepare'
      ),
  ),
};

export function parseSrc(src?: string): [string, any] {
  const arr = src?.split('?') as string[];
  return [arr[0], parse(arr[1])];
}

const P = (props: any) => <div>{props?.pageSrc} 页面未找到</div>;
const Pageview = React.forwardRef<any, any>((props, ref) => {
  // 页面 src 可能是带参数的如 /a?b=1&c=2
  const [path, query] = parseSrc(props?.pageSrc);
  const Page = Pages[path] ?? P;
  return <Page ref={ref} {...query} {...props} />;
});
export default Pageview;
