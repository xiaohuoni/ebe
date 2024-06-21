import { Table, TableType } from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useImperativeHandle, useState } from 'react';
import useAsyncState from '../utils/hooks/useAsyncState';

export interface MyTableProps extends Omit<TableType, 'dataSource'> {
  data?: TableType['columns'];
  dataSource?: TableType['dataSource'];
  dataMap: any;
  style?: any;
  isBindData?: boolean;
  getValueAction?: any;
}

const MyTable = LingxiForwardRef<any, MyTableProps>((props, ref) => {
  const {
    style,
    getValueAction,
    $$componentItem,
    getEngineApis,
    ...restProps
  } = props;

  const {
    service: { commonFetch },
  } = getEngineApis();

  const [{ data, dataMap, dataSource, isBindData }, setState] = useAsyncState({
    data: props.data,
    dataMap: props.dataMap,
    dataSource: props.dataSource,
    isBindData: props.isBindData ?? false,
  });
  const {
    titleBackground,
    titleColor,
    leftTitleColor,
    leftBackground,
    ...restStyle
  } = style;
  const firstLeftStyle: any = {};
  const [remotedataColumns, setRemoteDataColumns] = useState<any>([]);
  const [remoteDataSource, setRemoteDataSource] = useState<any>([]);

  if (leftTitleColor) {
    firstLeftStyle.color = leftTitleColor;
  }
  if (leftBackground) {
    firstLeftStyle.background = leftBackground;
  }
  if (dataMap.type === 'custom' && Array.isArray(data)) {
    useEffect(() => {
      setRemoteDataColumns(dataMap.data);
      setRemoteDataSource(dataMap.dataSource);
    }, [dataMap]);
  } else if (dataMap.type === 'service') {
    const { service } = dataMap;
    const { requestParam, selectedService } = service;
    const dataColumnsKey = service.data;
    const dataSourceKey = service.dataSource;

    const getTableData = async (method: string, api: string, params: any) => {
      // @ts-ignore
      return commonFetch(method || 'post', api || '', params);
    };

    useEffect(() => {
      const params: any = {};
      if (typeof requestParam === 'string') {
        params.parameters = JSON.parse(requestParam);
      }
      params.serviceCode = selectedService.serviceCode || '';
      params.appId = selectedService.appId || '';
      params.serviceVersionId = selectedService.serviceVersionId || '';
      params.version = selectedService.versionCode || '1.0';

      getTableData(
        selectedService.serviceMethod,
        selectedService.api,
        params,
      ).then((res: any) => {
        if (typeof res === 'object') {
          const columnData = res[dataColumnsKey] || [];
          const columnDataCopy: any[] = [];
          if (Array.isArray(columnData)) {
            columnData.forEach((item: any) => {
              const itemCopy = { ...item } || {};
              if (!itemCopy.width) {
                itemCopy.width = 100;
              } else if (typeof itemCopy.width === 'string') {
                itemCopy.width = parseFloat(itemCopy.width);
              }
              columnDataCopy.push(itemCopy);
            });
          }
          setRemoteDataColumns(columnDataCopy);
          setRemoteDataSource(res[dataSourceKey] || []);
        }
      });
    }, []);
  }

  useEffect(() => {
    // 绑定数据
    if (isBindData) {
      setRemoteDataColumns(data);
      setRemoteDataSource(dataSource);
    }
  }, [data, dataSource]);

  useEffect(() => {
    if (getValueAction) {
      getValueAction({ data: remotedataColumns, dataSource: remoteDataSource });
    }
  }, [getValueAction]);

  useImperativeHandle(ref, () => ({
    reloadAppTableData: setState,
    dataSource: remoteDataSource,
    data: remotedataColumns,
  }));

  return (
    <Table
      {...restProps}
      columns={remotedataColumns}
      dataSource={remoteDataSource}
      titleBackground={titleBackground}
      titleColor={titleColor}
      firstLeftStyle={firstLeftStyle}
      style={restStyle}
    />
  );
});

export default MyTable;
