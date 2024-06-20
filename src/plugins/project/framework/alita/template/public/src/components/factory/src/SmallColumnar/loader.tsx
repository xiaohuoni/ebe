import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const SmallColumnarLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: "factory-SmallColumnar" */ './SmallColumnar'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default SmallColumnarLoader;
