import Loadable from 'react-loadable';

const DocViewer = Loadable({
  loader: async () =>
    (await import(
      /* webpackChunkName: "engine-app-DocViewer" */ './DocViewer'
    )) as unknown as React.ComponentType<any>,
  loading: () => <></>,
});

export default DocViewer;
