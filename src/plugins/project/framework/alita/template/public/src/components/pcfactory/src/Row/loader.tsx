import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const RowLoader = Loadable({
  loader: async () => (await import/* webpackChunkName: 'factory-Row' */('./Row')) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default RowLoader;
