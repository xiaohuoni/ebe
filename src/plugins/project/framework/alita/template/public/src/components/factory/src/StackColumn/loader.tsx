import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const StackColumnLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: factory-StackColumn */ './StackColumn'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default StackColumnLoader;
