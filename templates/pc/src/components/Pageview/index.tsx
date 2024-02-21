import { parse } from 'qs';
import React from 'react';

export const pageStaticData: any = {};
export const RootProps: any = {
  '1077431851017072640': {
    path: '/modal0804',
    fileName: '/modal0804',
    type: '/modal0804',
    pageId: '1077431851017072640',
    width: 624,
    closeOnClickOverlay: false,
    pageName: 'modal',
    customWidth: 624,
    customHeight: 500,
  },
};
const Pages: any = {
  '/ceshi8260': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/ceshi8260__index" */ '@/pages/ceshi8260'
      ),
  ),
  '1024261720265998336': React.lazy(
    () =>
      import(/* webpackChunkName: "1024261720265998336" */ '@/pages/ceshi8260'),
  ),
  '/qipao9952': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/qipao9952__index" */ '@/pages/qipao9952'
      ),
  ),
  '1077467890419003392': React.lazy(
    () =>
      import(/* webpackChunkName: "1077467890419003392" */ '@/pages/qipao9952'),
  ),
  '/modal0804': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/modal0804__index" */ '@/pages/modal0804'
      ),
  ),
  '1077431851017072640': React.lazy(
    () =>
      import(/* webpackChunkName: "1077431851017072640" */ '@/pages/modal0804'),
  ),
  '/cdd5883': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/cdd5883__index" */ '@/pages/cdd5883'
      ),
  ),
  '1028120483871506432': React.lazy(
    () =>
      import(/* webpackChunkName: "1028120483871506432" */ '@/pages/cdd5883'),
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
