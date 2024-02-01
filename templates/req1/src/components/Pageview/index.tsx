import { parse } from 'qs';
import React from 'react';

export const pageStaticData: any = {
  '1066920654087147520': ['exam_state', 'exam_type'],
  '1040468589346041856': ['exam_type'],
  '1040468594920271872': ['exam_state', 'exam_type'],
};
export const RootProps: any = {
  '1052411612038131712': {
    path: '/kaoshengpeizhi6102',
    fileName: '/kaoshengpeizhi6102',
    type: '/kaoshengpeizhi6102',
    pageId: '1052411612038131712',
    width: 'custom',
    closeOnClickOverlay: false,
    pageName: '考生配置',
    customWidth: 1200,
    customHeight: '',
  },
  '1040468589346041856': {
    path: '/chaxunfenyeshuju_7915695modal',
    fileName: '/chaxunfenyeshuju_7915695modal',
    type: '/chaxunfenyeshuju_7915695modal',
    pageId: '1040468589346041856',
    width: 'custom',
    closeOnClickOverlay: false,
    pageName: '考试实例弹窗',
    customWidth: 800,
    customHeight: '',
  },
};
const Pages: any = {
  '/kaoshitimu9180copy': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/kaoshitimu9180copy__index" */ '@/pages/kaoshitimu9180copy'
      ),
  ),
  '1053839668338454528': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1053839668338454528" */ '@/pages/kaoshitimu9180copy'
      ),
  ),
  '/gerenkaoshi8972': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/gerenkaoshi8972__index" */ '@/pages/gerenkaoshi8972'
      ),
  ),
  '1053668469436280832': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1053668469436280832" */ '@/pages/gerenkaoshi8972'
      ),
  ),
  '/kaoshengpeizhi6102': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/kaoshengpeizhi6102__index" */ '@/pages/kaoshengpeizhi6102'
      ),
  ),
  '1052411612038131712': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1052411612038131712" */ '@/pages/kaoshengpeizhi6102'
      ),
  ),
  '/xinbankaoshishouye5627': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/xinbankaoshishouye5627__index" */ '@/pages/xinbankaoshishouye5627'
      ),
  ),
  '1066920654087147520': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1066920654087147520" */ '@/pages/xinbankaoshishouye5627'
      ),
  ),
  '/chaxunfenyeshuju_7915695modal': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/chaxunfenyeshuju_7915695modal__index" */ '@/pages/chaxunfenyeshuju_7915695modal'
      ),
  ),
  '1040468589346041856': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1040468589346041856" */ '@/pages/chaxunfenyeshuju_7915695modal'
      ),
  ),
  '/kaoshiguanli_948507': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/kaoshiguanli_948507__index" */ '@/pages/kaoshiguanli_948507'
      ),
  ),
  '1040468594920271872': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1040468594920271872" */ '@/pages/kaoshiguanli_948507'
      ),
  ),
  '/kaoshitimu9180': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/kaoshitimu9180__index" */ '@/pages/kaoshitimu9180'
      ),
  ),
  '1040532731008397312': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1040532731008397312" */ '@/pages/kaoshitimu9180'
      ),
  ),
  '/kaotipeizhi6839': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__/kaotipeizhi6839__index" */ '@/pages/kaotipeizhi6839'
      ),
  ),
  '1040511037455740928': React.lazy(
    () =>
      import(
        /* webpackChunkName: "1040511037455740928" */ '@/pages/kaotipeizhi6839'
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
