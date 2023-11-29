import React from 'React';

const Pages: any = {
  '/ceshi1071': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__ceshi1071__index" */ '@/pages/ceshi1071'
      ),
  ),
  '/ssss3279': React.lazy(
    () =>
      import(
        /* webpackChunkName: "src__pages__ssss3279__index" */ '@/pages/ssss3279'
      ),
  ),
};
const P = (props: any) => <div>{props?.pageSrc} 页面未找到</div>;
const Pageview = (props: any) => {
  const Page = Pages[props?.pageSrc] ?? P;
  return <Page {...props} />;
};
export default Pageview;
