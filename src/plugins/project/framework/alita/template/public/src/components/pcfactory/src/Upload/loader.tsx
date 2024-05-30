import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const UploadLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () => (await import /* webpackChunkName: 'factory-Upload' */('./Upload')) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default UploadLoader;
