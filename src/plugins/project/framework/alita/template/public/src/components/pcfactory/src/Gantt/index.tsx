import { LingxiForwardRef } from '@lingxiteam/types';
import { useImperativeHandle, useRef, useState } from 'react';
import GanttLoader from './loader';

const Gantt = LingxiForwardRef<unknown, any>((props, ref) => {
  const gridViewRef = useRef<any>(null);
  const [dataSource, setDataSource] = useState<any[]>();
  useImperativeHandle(ref, () => ({
    setDataSource,
  }));
  return (
    <GanttLoader {...props} refDataSource={dataSource} ref={gridViewRef} />
  );
});

export default Gantt;
