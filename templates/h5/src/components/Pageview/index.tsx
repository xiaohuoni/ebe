import { parse } from 'qs';
import React from 'react';

export const RootProps = {};
const Pages: any = {
  '/asd5371': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/asd5371__index" */ '@/pages/asd5371'
      ),
  ),
  '/ceshi1071': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/ceshi1071__index" */ '@/pages/ceshi1071'
      ),
  ),
  '1024143466269171712': React.lazy(
    () =>
      import(/* webpackChunkName: "1024143466269171712" */ '@/pages/ceshi1071'),
  ),
  '/kapian9555': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/kapian9555__index" */ '@/pages/kapian9555'
      ),
  ),
  '1052397738087833600': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1052397738087833600" */ '@/pages/kapian9555'
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
