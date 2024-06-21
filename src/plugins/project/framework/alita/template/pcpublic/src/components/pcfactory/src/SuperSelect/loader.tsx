import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const SuperSelectLoader = Loadable({
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-SuperSelect' */ './ComSelect'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default SuperSelectLoader;
