import React from 'react';
import Loadable from 'react-loadable';
import { LoadingComponennt } from '../utils/LoaderHelper';
import { MyDynamicTableProps } from './Table';

const DynamicTableLoader = Loadable<
  MyDynamicTableProps,
  React.ComponentType<MyDynamicTableProps>
>({
  // eslint-disable-next-line func-call-spacing
  loader: async () =>
    (await import(
      /* webpackChunkName: 'factory-DynamicTable' */ './Table'
    )) as unknown as React.ComponentType<any>,
  loading: LoadingComponennt,
});

export default DynamicTableLoader;
