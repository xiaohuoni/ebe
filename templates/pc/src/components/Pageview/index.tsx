import { useAppData } from 'alita';
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
const pageRouteMapping: any = {
  '1024261720265998336': '/ceshi8260',
  '1028120483871506432': '/cdd5883',
  '1077467890419003392': '/qipao9952',
  '1077431851017072640': '/modal0804',
};
const P = (props: any) => <div>{props?.pageSrc} 页面未找到</div>;

const getPage = (target: string, clientRoutes: any, routeComponents: any) => {
  const { routes = [] } = clientRoutes[0];
  let path = target;
  // 支持传进来的是 pageId
  if (!target.startsWith('/')) {
    path = pageRouteMapping[target] ?? target;
  }
  const route = routes.find((r: any) => `/${r.path}` === path);
  return routeComponents[route?.id] ?? P;
};

export function parseSrc(src?: string): [string, any] {
  const arr = src?.split('?') as string[];
  return [arr[0], parse(arr[1])];
}

const Pageview = React.forwardRef<any, any>((props, ref) => {
  const { clientRoutes, routeComponents } = useAppData();
  // 页面 src 可能是带参数的如 /a?b=1&c=2
  const [path, query] = parseSrc(props?.pageSrc);
  const Page = getPage(path, clientRoutes, routeComponents);
  return <Page ref={ref} {...query} {...props} />;
});
export default Pageview;
