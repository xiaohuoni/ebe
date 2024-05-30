import React, { useRef, useImperativeHandle, useState } from 'react';
import { LingxiForwardRef } from '@lingxiteam/types';
import GanttLoader from './loader';

const Gantt = LingxiForwardRef<unknown, any>((props, ref) => {
  const gridViewRef = useRef<any>(null);
  const [dataSource, setDataSource] = useState<any[]>();
  useImperativeHandle(ref, () => ({
    setDataSource,
  }));
  return <GanttLoader {...props} refDataSource={dataSource} ref={gridViewRef} />;
});

export default Gantt;
