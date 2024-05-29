import { message } from 'antd';
import { clone } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useCreation } from '../../utils/ahooks';
import {
  createAutoKey,
  createTempRowKey,
  deleteTempRowProperties,
  EMPTY_ROW_TEMP_KEY_ATTR,
} from '../utils';

const useDataSource = (props: any) => {
  const {
    compId,
    rowKeyType,
    currentRowKey,
    boundDataSource,
    page,
    pagination,
    hasPageChangeEvent,
    getLocale,
  } = props;

  const [dataSource, setDataSource] = useState<any[]>([]);

  const [replaceBoundDataSource, setReplaceBoundDataSource] = useState(null);
  // 优先取 replaceBoundDataSource
  const outerDataSource = replaceBoundDataSource || boundDataSource;

  const preCloneData = useRef<any>();

  const outerDataSourceRef = useCreation(() => {
    preCloneData.current = clone(outerDataSource);
    return {
      current: outerDataSource,
    };
  }, []);

  const preOuterDataSourceRef = outerDataSourceRef.current;

  // 若表格源数据源引用发生变更，则进一步判断
  if (preOuterDataSourceRef !== outerDataSource) {
    /**
     * 简单的通过 JSON.stringify 判断值是否变更
     * 注：正常情况下，表格绑定页面数据数据源，不会走到里面来，理论上不会有多余的 JSON.stringify 性能损耗
     * 目前只针对表格数据源绑定的表达式是“json字符串数组固定数据”的情况，在每次运行态解析DSL时会是一个新的数组
     * 导致表格数据重复更新渲染 -> 外部渲染 -> 死循环
     * 若今后有其他场景被影响到，或者是 表格数据源绑定的表达式是“json字符串数组固定数据” 但数据量巨大的场景，影响到性能，请修正
     */
    if (
      JSON.stringify(preCloneData.current) !== JSON.stringify(outerDataSource)
    ) {
      preCloneData.current = clone(outerDataSource);
      outerDataSourceRef.current = outerDataSource;
    }
  }

  // 表格当前页数据
  const currentPageDataSource = useMemo(() => {
    // 当 未配置页面回调事件（前端分页） 且 开启分页，需计算当前页的数据有哪些
    const currentPageData =
      hasPageChangeEvent || !page
        ? dataSource
        : dataSource.slice(
            (pagination?.current - 1) * pagination?.pageSize,
            pagination?.current * pagination?.pageSize,
          );

    return currentPageData;
  }, [
    dataSource,
    hasPageChangeEvent,
    page,
    pagination?.current,
    pagination?.pageSize,
  ]);

  // 表格自动生成主键时，记录当前使用的index值，不使用数据下标，防止重复报错
  const rowIdMapRef: any = useRef();
  if (rowIdMapRef.current === undefined) {
    rowIdMapRef.current = {
      index: 0, // 暂时无用
      replaceIds: {}, // 存放已被替换的主键及新主键，避免重复替换
    };
  }

  // 用于表格加载数据动作
  const setOuterDataSource = (newOuterDataSource: any) => {
    // 一旦执行过，绑定的数据使用内部维护的 replaceBoundDataSource，boundDataSource 发生任何改变都和内部没关系了
    setReplaceBoundDataSource(newOuterDataSource || []);
  };

  useEffect(() => {
    let fd: any[] = outerDataSource || [];
    // 处理数据
    if (!Array.isArray(fd)) {
      message.warn(
        getLocale('Table.data.typeError', {
          type: Object.prototype.toString.call(fd),
        }),
      );
      return;
    }

    const tempRows = fd.filter((r) => r?.[EMPTY_ROW_TEMP_KEY_ATTR]);
    const lastTempRow = tempRows[tempRows.length - 1];

    fd = fd.map((i: any, idx) => {
      if (i) {
        // 若为新增一行空白行的临时数据
        if (i[EMPTY_ROW_TEMP_KEY_ATTR]) {
          i[currentRowKey] = i[EMPTY_ROW_TEMP_KEY_ATTR];

          // TODO: 以下的先注释，尝试重构优化代码，不期望在初始化数据时，引入不必要的逻辑，如：在这里开启行编辑
          // // 优先取缓存
          // const cachedKey = rowIdMapRef.current[i._tempKey];

          // // 若无则直接生成主键，并记录
          // if (!cachedKey) {
          //   const tempKey = createTempRowKey();
          //   rowIdMapRef.current[i._tempKey] = tempKey;
          //   i[currentRowKey] = tempKey;
          // } else {
          //   i[currentRowKey] = cachedKey;
          // }

          // // 是否为最新创建的，且是否开启行编辑
          // if (i._latestCreation && i._inlineEditNow) {
          //   // 设置当前行为编辑状态
          //   setNowInlineEditKey(i[currentRowKey]);
          //   setNowEditingData({});
          // }

          /**
           * 移除空白行的临时属性
           * 最后一条空白行，不允许自动移除临时属性（交由保存/取消逻辑手动移除）
           */
          if (
            lastTempRow?.[EMPTY_ROW_TEMP_KEY_ATTR] !==
            i?.[EMPTY_ROW_TEMP_KEY_ATTR]
          ) {
            // 移除临时属性
            deleteTempRowProperties(i);
          }
        } else if (rowKeyType === 'auto' && currentRowKey === '__RowId__') {
          // 行主键自动生成
          // remark：每页每行的固定标识 作为自动生成主键缓存后，二次渲染时，查找的标识（但如果涉及到数据变更，感觉不是太合理，但先恢复这么处理）
          // 每页每行的固定标识
          const rowAutoKeyFlag = `${compId}_${
            page ? `${pagination.current || 0}_` : ''
          }${idx}`;
          // 优先取缓存
          const cachedKey = rowIdMapRef.current[rowAutoKeyFlag];
          // 若无则直接生成，并记录
          if (!cachedKey) {
            const tempKey = createAutoKey(compId);
            i[currentRowKey] = tempKey;
            rowIdMapRef.current[rowAutoKeyFlag] = tempKey;
          } else {
            i[currentRowKey] = cachedKey;
          }
        } else if (!i[currentRowKey]) {
          // 指定字段
          // 非临时数据，但没有主键
          // 直接生成(因为无法知道唯一标识是什么，只能每次渲染都生成新的)
          i[currentRowKey] = createTempRowKey();
        }
      }

      /**
       * 不能直接返回 i，需要返回新对象
       * 让表格内部的 dataSource 与 boundDataSource 彻底脱钩，不含任何相同引用
       */
      return {
        ...(i || {}),
      };
    });
    setDataSource(fd);
  }, [outerDataSourceRef.current, currentRowKey]);

  return {
    outerDataSource,
    outerDataSourceRef: outerDataSourceRef.current,
    setOuterDataSource,
    innerDataSource: dataSource,
    setInnerDataSource: setDataSource,
    currentPageDataSource,
  };
};

export default useDataSource;
