import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const LoadableChartLine = Loadable({
  loader: async () =>
    (await import(
      /* webpackChunkName: 'pcfactory-ChartBar' */ '../ChartLine/loader'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default LoadableChartLine;
