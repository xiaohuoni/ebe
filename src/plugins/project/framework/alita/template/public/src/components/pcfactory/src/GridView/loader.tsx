import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const SyncGridViewLoader = Loadable({
  loader: async () =>
    (await import(
      /* webpackChunkName: "factory-GridView" */ './GridView'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default SyncGridViewLoader;
