import { ARRAY_OPERATE_TYPE } from '@/constants';
import useSetState from '@/hooks/useSetState';
import ArrayUtil from '@/utils/array';
import { fetchQueryObject, fetchQueryService } from '@/utils/dataSource';
import { cloneDeep, isPlainObject } from 'lodash';
import { useEffect, useRef, useState } from 'react';

export interface UpdateDataSourceOptions {
  /**
   * 数据源名称
   */
  name: string;

  /**
   * 更新数据源的路径
   */
  path: string;

  /**
   * 目标值
   */
  value?: any;

  /**
   * 需要过滤的变量
   */
  predicate?: (item: any, index: number) => boolean;

  /**
   * 操作类型 数组时需要
   */
  operateType?: 0 | 1 | 2 | 3;

  /**
   * 数组或者对象类型
   */
  type: 'object' | 'array';

  /**
   * 是否局部赋值
   */
  onlySetPatch: boolean;
}

export interface DataSourceOptions {
  urlParam?: Record<string, any>;
  routerData?: Record<string, any>;
  state?: Record<string, any>;
  lcdpApi?: any;
}

export interface BaseDataSourceType {
  _others_: {
    /**
     * 用户信息
     */
    personInfo: Record<string, any>;
  };
  [key: string]: any;
}

const useBaseDataSource = <T extends BaseDataSourceType>(
  options: DataSourceOptions,
) => {
  const { lcdpApi } = options;

  // 是否正在加载数据，发起请求时会切换loading
  const [loading, setLoading] = useState(false);
  // 数据源是否准备完成
  const [dataReadyComplete, setDataReadyComplete] = useState(false);
  // 数据源
  const [data, setData] = useSetState<T>();
  // 保存数据源快照，只有服务和对象发起成功后才会保存，用来缓存服务数据
  const dataSnapshotRef = useRef<Record<string, any>>({});

  /**
   * 保存快照
   */
  const setDataSnapshot = (snapshot: Record<string, any>) => {
    Object.assign(dataSnapshotRef.current, snapshot);
  };

  /**
   * 设置用户信息
   */
  useEffect(() => {
    setData({
      _others_: {
        personInfo: lcdpApi.data?.user || {},
      },
    });
  }, [lcdpApi.data?.user]);

  /**
   * 更新数据源
   */
  const updateData = async ({
    name,
    path,
    value,
    type,
    operateType,
    predicate = () => false,
    onlySetPatch = true,
  }: UpdateDataSourceOptions) => {
    try {
      // 对象类型 直接赋值
      if (type === 'object') {
        ArrayUtil.updateObject({
          data,
          path,
          value,
          isPatch: onlySetPatch,
        });
      } else if (type === 'array') {
        if (operateType === ARRAY_OPERATE_TYPE.ADD) {
          ArrayUtil.push(data, path, value);
        } else if (operateType === ARRAY_OPERATE_TYPE.DELETE) {
          ArrayUtil.remove(data, path, predicate);
        } else if (operateType === ARRAY_OPERATE_TYPE.REPLACE) {
          ArrayUtil.replace(data, path, value);
        } else if (operateType === ARRAY_OPERATE_TYPE.UPDATE) {
          ArrayUtil.update(
            {
              data,
              path,
              value,
              isPatch: onlySetPatch,
            },
            predicate,
          );
        }
      }
      return setData({
        [name]: cloneDeep(data![name]),
      });
    } catch (error) {
      return Promise.reject(error as Error);
    }
  };

  // 清空数据源
  const cleanDataSource = (name: string, initialData: Record<string, any>) => {
    const newData = initialData[name];
    if (Array.isArray(newData)) {
      return [];
    }
    if (isPlainObject(newData)) {
      return {};
    }
    return undefined;
  };

  /**
   * 重置数据源
   */
  const clearDataSource = (name: string, initialData: Record<string, any>) => {
    /**
     * 数据源名字不存在，无需重置数据源
     */
    if (!name) return Promise.resolve(null);
    return setData({
      [name]: cleanDataSource(name, initialData) as any,
    });
  };

  /**
   * 刷新自定义数据源
   */
  const reloadCustomDataSource = (name: string, params?: any) =>
    setData({
      [name]: params,
    });

  /**
   * 刷新对象数据源
   */
  const reloadObjectDataSource = (
    name: string,
    url: string,
    options: any,
    params: any,
  ) => {
    setLoading(true);
    return fetchQueryObject(url, {
      ...options,
      attrs: params,
    })
      .then((res) => {
        setData({
          [name]: res,
        });
        const snapShot = cloneDeep(res);
        setDataSnapshot({
          [name]: snapShot,
          [`${name}Filter`]: params,
        });
        return res;
      })
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });
  };

  /**
   * 刷新服务数据源
   */
  const reloadServiceDataSource = (name: string, service: any, params: any) => {
    setLoading(true);
    return fetchQueryService(service, params)
      .then((res) => {
        setData({
          [name]: res,
        });
        const snapShot = cloneDeep(res);
        setDataSnapshot({
          [name]: snapShot,
          [`${name}Filter`]: params,
        });
        return res;
      })
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    data,
    updateData,
    clearDataSource,
    reloadCustomDataSource,
    loading,
    dataSnapshot: dataSnapshotRef.current,
    reloadServiceDataSource,
    reloadObjectDataSource,
    dataReadyComplete,
    setLoading,
    setDataSnapshot,
    setDataReadyComplete,
    setData,
  };
};

export default useBaseDataSource;
