import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useImperativeHandle, useRef, useState } from 'react';
import SyncGridViewLoader from './loader';

const SyncGridView = LingxiForwardRef<unknown, any>((props, ref) => {
  const gridViewRef = useRef<any>(null);
  const [gridData, setGridData] = useState<any[]>();

  useImperativeHandle(ref, () => ({
    getValues: () => gridViewRef.current?.getValues(),
    setBlockSelectData: (list: any[]) => {
      setGridData(list || []);
    },
  }));
  return (
    <SyncGridViewLoader
      {...props}
      refGridData={gridData}
      gridViewRef={gridViewRef}
    />
  );
});

export default SyncGridView;
