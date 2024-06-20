import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const SingleProgressLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-SingleProgress' */ './SingleProgress'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default SingleProgressLoader;
