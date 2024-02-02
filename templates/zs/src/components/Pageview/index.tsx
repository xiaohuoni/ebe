import { parse } from 'qs';
import React from 'react';

export const pageStaticData: any = {};
export const RootProps: any = {};
const Pages: any = {
  '/auditStart': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/auditStart__index" */ '@/pages/auditStart'
      ),
  ),
  '887537833022541824': React.lazy(
    () =>
      import(/* webpackChunkName: "887537833022541824" */ '@/pages/auditStart'),
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
