import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';

const CardFooterLoader = Loadable({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-CardFooter' */ './CardFooter'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default CardFooterLoader;
