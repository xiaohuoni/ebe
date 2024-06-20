import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const LineColumnLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-LineColumn' */ './LineColumn'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default LineColumnLoader;
