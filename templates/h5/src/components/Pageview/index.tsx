import { parse } from 'qs';
import React from 'react';

export const RootProps = {
  '1049266938740068352': {
    path: '/model7813',
    fileName: '/model7813',
    type: '/model7813',
    pageId: '1049266938740068352',
    width: '99vw',
    mode: 'alert',
    height: '99vh',
    closeOnClickOverlay: true,
    destroyOnClose: true,
    showCloseButton: true,
  },
};
const Pages: any = {
  '/model7813': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/model7813__index" */ '@/pages/model7813'
      ),
  ),
  '1049266938740068352': React.lazy(
    () =>
      import(/* webpackChunkName: "1049266938740068352" */ '@/pages/model7813'),
  ),
  '/tanchuang1787': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/tanchuang1787__index" */ '@/pages/tanchuang1787'
      ),
  ),
  '1060380198735069184': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1060380198735069184" */ '@/pages/tanchuang1787'
      ),
  ),
  '/asd5371': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/asd5371__index" */ '@/pages/asd5371'
      ),
  ),
  '1024143466269171712': React.lazy(
    () =>
      import(/* webpackChunkName: "1024143466269171712" */ '@/pages/asd5371'),
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
