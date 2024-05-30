import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const ReactChartsLoader = Loadable({
  loader: async () => (await import/* webpackChunkName: 'pcFactory-ReactECharts' */('./ReactECharts')) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default ReactChartsLoader;
