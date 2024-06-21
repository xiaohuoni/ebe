import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import DynamicTableLoader from './loader';
import { MyDynamicTableProps } from './Table';

function useSync<S>(
  initialValue: S,
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const [state, setState] = useState(initialValue);
  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  return [state, setState];
}

interface DynamicTableProps extends Omit<MyDynamicTableProps, 'currentData'> {}

const DynamicTable = LingxiForwardRef<any, DynamicTableProps>((props, ref) => {
  const [dataSource, setDataSource] = useSync(props.dataSource);
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [total, setTotal] = useSync<number | string>(props.total ?? 0);
  const [pageNum, setPageNum] = useSync<any>(props.pageNum || 1);
  const [pageSize, setPageSize] = useSync<any>(props.pageSize || 1);
  const [dataLoading, setDataLoading] = useState<boolean>(true);

  useImperativeHandle(ref, () => ({
    setTableData: setDataSource,
    setTotal: (total: any) => {
      if (typeof total !== 'undefined') {
        setTotal(Number(total));
      }
    },
    setPageNum: (page: any) => {
      if (typeof page !== 'undefined') {
        setPageNum(Number(page));
      }
    },
    setPageSize: (pageSize: any) => {
      if (typeof pageSize !== 'undefined') {
        setPageSize(Number(pageSize));
      }
    },
    setLoading: (loading: boolean, reloadDataSource?: string) => {
      if (reloadDataSource && reloadDataSource === 'reloadDataSource') {
        if (props.dataSourceLoading) {
          setDataLoading(loading);
        }
      } else {
        setDataLoading(loading);
      }
    },
    clearData: () => {
      setDataSource([]);
      setCurrentData([]);
    },
    getCurrentPage: () => {
      return pageNum;
    },
    getcurrentData: () => {
      return currentData;
    },
  }));
  return (
    <DynamicTableLoader
      {...props}
      setDataLoading={setDataLoading}
      dataLoading={dataLoading}
      dataSource={dataSource}
      total={total}
      currentData={currentData}
      setCurrentData={setCurrentData}
      pageNum={pageNum}
      setPageNum={setPageNum}
      pageSize={pageSize}
    />
  );
});
export default DynamicTable as any;
