import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const RadarChartLoader = Loadable({
  loader: async () =>
    (await import(
      /* webpackChunkName: pcFactory-RadarECharts */ './RadarECharts'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default RadarChartLoader;
