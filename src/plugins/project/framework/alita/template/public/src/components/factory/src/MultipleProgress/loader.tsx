import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const MultipleProgressLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-MultipleProgress' */ './MultipleProgress'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default MultipleProgressLoader;
