import { useAppData } from 'alita';
import { parse } from 'qs';
import React from 'react';

export const pageStaticData: any = {};
export const RootProps: any = {};
const pageRouteMapping: any = { '1024261720265998336': '/ceshi8260' };
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
