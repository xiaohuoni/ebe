import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const DountLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-Dount' */ './Dount'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default DountLoader;
