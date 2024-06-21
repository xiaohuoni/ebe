import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const GroupColumnLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-GroupColumn' */ './GroupColumn'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default GroupColumnLoader;
