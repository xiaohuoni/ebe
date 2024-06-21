import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';
import type { MyAudioProps } from './Audio';

const ViewPlayerLoader = Loadable<
  MyAudioProps,
  React.ComponentType<MyAudioProps>
>({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: "factory-Audio" */ './Audio'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default ViewPlayerLoader;
