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
  '1051421568049684480': {
    path: '/model28529',
    fileName: '/model28529',
    type: '/model28529',
    pageId: '1051421568049684480',
    width: '50vw',
    mode: 'alert',
    height: '50vh',
    closeOnClickOverlay: true,
    destroyOnClose: true,
    showCloseButton: true,
  },
};
const Pages: any = {
  '/buchong4160': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/buchong4160__index" */ '@/pages/buchong4160'
      ),
  ),
  '1051387196217495552': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1051387196217495552" */ '@/pages/buchong4160'
      ),
  ),
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
  '/model28529': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/model28529__index" */ '@/pages/model28529'
      ),
  ),
  '1051421568049684480': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1051421568049684480" */ '@/pages/model28529'
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
