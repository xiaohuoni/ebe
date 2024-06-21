import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const LoadableLXRadarChart = Loadable({
  loader: async () =>
    (await import(
      /* webpackChunkName: 'pcFactory-LXPieChart' */ './LXPieChart'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default LoadableLXRadarChart;
