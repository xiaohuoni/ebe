import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const LineLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-Line' */ './Line'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default LineLoader;
