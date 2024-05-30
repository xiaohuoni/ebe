import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const GanttLoader = Loadable({
  loader: async () =>
    (await import(
      /* webpackChunkName: 'pcFactory-RichTextEditor' */ './RichTextEditor'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default GanttLoader;
