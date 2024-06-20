import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const CardBodyLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-CardBody' */ './CardBody'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default CardBodyLoader;
