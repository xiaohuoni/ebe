import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const StepProcessLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: "factory-StepProcess" */ './StepProcess'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default StepProcessLoader;
