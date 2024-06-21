import Loadable from 'react-loadable';
import type { ReactPlayerProps } from 'react-player';
import { LoadingComponennt } from '../utils/LoaderHelper';

const ViewPlayerLoader = Loadable<
  ReactPlayerProps,
  React.ComponentType<ReactPlayerProps>
>({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: factory-ViewPlayer */ './ViewPlayer'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default ViewPlayerLoader;
