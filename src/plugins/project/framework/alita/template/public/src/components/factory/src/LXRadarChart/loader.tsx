import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const LoadableLXRadarChart = Loadable({
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-LXRadarChart' */ './LXRadarChat'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default LoadableLXRadarChart;
