import { useImperativeHandle, useState } from 'react';
import { createEmptyRow, EMPTY_ROW_TEMP_KEY_ATTR } from '../utils';

interface UseCommonCMDAction {
  ref: any;
  setCurrent?: React.SetStateAction<any>;
  setCurrentPage?: React.SetStateAction<any>;
  setTotal?: React.SetStateAction<any>;
  selectedRows: any[];
  selectedRowKeys: (string | number)[];
  setSelectedRows: React.SetStateAction<any>;
  setSelectedRowKeys: React.SetStateAction<any>;
  setCurrentPageSelectedRows?: React.SetStateAction<any>;
  setCurrentPageSelectedRowKeys?: React.SetStateAction<any>;
  setSelectedRowsRule: React.SetStateAction<any>;
  dataSourceLoading?: boolean;
  innerDataSource: any[];
  setInnerDataSource: Function;
  setOuterDataSource: Function;
  onRowSelected: Function;
}

interface UseCMDActionPropsType extends UseCommonCMDAction {
  [key: string]: any;
  ref: any;
  form: any;
  currentRowKey: string;
  dataSourceFromDataSourceConfig?: string;
  currentPageDataSource?: any[];
  editInlineRow: Function;
  setNowInlineEditKey: React.SetStateAction<any>;
  setNowEditingData: React.SetStateAction<any>;
  currentPageSelectedRows: any[];
  currentPageSelectedRowKeys: (string | number)[];
  page?: boolean;
  pagination?: any;
  onRowSaveClick: Function;
  loadPrint: any;
}

const useCMDAction = (props: UseCMDActionPropsType) => {
  const {
    ref,
    form,
    currentRowKey,
    dataSourceFromDataSourceConfig,
    innerDataSource,
    setInnerDataSource,
    setOuterDataSource,
    currentPageDataSource,
    editInlineRow: innerEditInlineRow,
    setNowInlineEditKey,
    setNowEditingData,
    setTotal,
    setCurrent,
    currentPageSelectedRows,
    currentPageSelectedRowKeys,
    page,
    pagination,
    onRowSaveClick,
    loadPrint,
  } = props;

  // 表格编辑格式为下拉框时，绑定的服务对应的数据
  const [colServiceDataForEdit, setColServiceDataForEdit] = useState({});

  const { loading, colServiceData } = useCommonCMDAction(props);

  const validateFormAndScroll = (compId: string, callback: any = () => {}) => {
    const formValues = form.getFieldsValue() || {};
    const keys = Object.keys(formValues).filter((k) => k.startsWith(compId));
    form
      .validateFields(keys)
      .then(() => {
        if (typeof callback === 'function') {
          callback();
        }
      })
      .catch((errorInfo: any) => {
        if (typeof callback === 'function') {
          callback(errorInfo);
        }
      });
  };

  useImperativeHandle(ref, () => ({
    /**
     * 加载表格数据（加载完之后，表格就脱离了数据源的控制了）
     */
    setTableData: (data: { dataSource: any[]; total: any; current: any }) => {
      /**
       * 注意，不是直接使用 setInnerDataSource
       * 而是通过 setOuterDataSource 间接驱动 -> setInnerDataSource
       * 因为需要对数据进行初始化
       */
      setOuterDataSource(data?.dataSource || []);
      setTotal?.(data?.total);
      setCurrent?.(data?.current);
    },

    /**
     * 表格·加载字段数据
     * （编辑格式为下拉框时，绑定的服务对应的数据）
     * @param serviceData
     */
    addColServiceDataForEdit: (serviceData: any = {}) => {
      setColServiceDataForEdit({
        ...(colServiceDataForEdit || {}),
        ...serviceData,
      });
    },
    getTableCurrentPageSelected: () => {
      return [...(currentPageSelectedRows || [])];
    },
    getTableCurrentPageSelectedKey: () => {
      return [...(currentPageSelectedRowKeys || [])];
    },
    getPageNum: () => {
      return page ? pagination.current : 1;
    },

    /**
     * 新增一行空白数据（绑定了数据源/没有绑定数据源通用）
     */
    addTableEmptyRow: (updateData: Function, inlineeditnow?: boolean) => {
      const newRowData = createEmptyRow();

      // TODO: 正是由于这里的历史需求，导致在表格初始化数据里，需要保留处理空白行的逻辑
      // 如果表格绑定了数据源，则添加空白数据行时，采用先在数据源中加入空白行的方式，再刷新该表格数据实现
      if (dataSourceFromDataSourceConfig) {
        const dataArrs = (dataSourceFromDataSourceConfig as any).split('.');
        const dataName = dataArrs[1];

        const payload = {
          ...newRowData,
        };

        const params: any = {
          name: dataName,
          patch: undefined,
          operateType: 0,
          itemIndex: {},
          newData: {},
          payload,
        };

        if (dataArrs.length > 2) {
          const childFiled = dataArrs.slice(
            dataArrs.length - 1,
            dataArrs.length,
          );
          params.otherObjectArrayOptions = {
            [childFiled]: {
              name: dataName,
              patch: undefined,
              operateType: 0,
              itemIndex: {},
              newData: {},
              payload,
            },
          };
          delete params.payload;
          // 如果是更新子节点，需要增加isChildren标识
          params.isChildren = true;
        }
        updateData(params);
      } else {
        // 注意，不是直接使用 setInnerDataSource，而是通过 setOuterDataSource 间接驱动 -> setInnerDataSource
        setOuterDataSource([...innerDataSource, newRowData]);
      }

      // 是否开启行编辑
      if (inlineeditnow) {
        // 设置当前行为编辑状态
        setNowInlineEditKey(newRowData[EMPTY_ROW_TEMP_KEY_ATTR]);
        setNowEditingData({});
      }
    },

    /**
     * 新增一行数据（这里新增完后，表格就脱离了数据源的控制了）
     */
    addTableRowData: (newRowData: any) => {
      /**
       * 注意，不是直接使用 setInnerDataSource
       * 而是通过 setOuterDataSource 间接驱动 -> setInnerDataSource
       * 因为需要对数据进行初始化
       */
      setOuterDataSource([...innerDataSource, newRowData]);
    },

    /**
     * 删除指定行数据
     */
    deleteTableRow: (type: string, value: any) => {
      // 兼容 $row$，其他都当做 $rowId$
      const newInnerDataSource = (innerDataSource || []).filter((row: any) => {
        if (type === '$row$') {
          return !Object.is(value, row);
        }
        return row[currentRowKey] !== value;
      });

      // 直接更新内部数据
      setInnerDataSource(newInnerDataSource);
    },

    editInlineRow: (editRowKey: any) => {
      // 指定行启用行内编辑操作
      innerEditInlineRow(editRowKey);
    },
    saveInlineRow: () => {
      // 强制保存行内编辑操作
      // 把数据存进去
      onRowSaveClick(null, null, true);
    },
    restoreInlineRow: () => {
      innerEditInlineRow(null);
    },
    validateTableData: (compId: string, callback: any = () => {}) => {
      validateFormAndScroll(compId, (err: any) => {
        callback(err, currentPageDataSource);
      });
    },
    validateTableRowData: (compId: string, callback: any = () => {}) => {
      validateFormAndScroll(compId, (err: any) => {
        callback(err);
      });
    },
    loadPrint,
  }));

  return {
    loading,
    colServiceData,
    colServiceDataForEdit,
  };
};

const useCommonCMDAction = (props: UseCommonCMDAction) => {
  const {
    ref,
    setTotal,
    setCurrent,
    setCurrentPage,
    selectedRows,
    selectedRowKeys,
    setSelectedRows,
    setSelectedRowKeys,
    setCurrentPageSelectedRows,
    setCurrentPageSelectedRowKeys,
    setSelectedRowsRule,
    onRowSelected,
    dataSourceLoading,
    innerDataSource,
    setInnerDataSource,
    setOuterDataSource,
  } = props;

  const [loading, setLoading] = useState(false);
  // 表格字段翻译绑定的服务对应的翻译数据
  const [colServiceData, setColServiceData] = useState({});

  useImperativeHandle(ref, () => ({
    /**
     * 加载字段翻译数据
     * @param serviceData
     */
    addColServiceData: (serviceData: any = {}) => {
      setColServiceData({
        ...(colServiceData || {}),
        ...serviceData,
      });
    },

    /**
     * 获取表格数据
     */
    getTableData: () => {
      return [...(innerDataSource || [])];
    },
    getTableSelected: () => {
      return [...(selectedRows || [])];
    },
    getTableSelectedKey: () => {
      return [...(selectedRowKeys || [])];
    },
    setSelectedRowKeys: (value: any) => {
      setSelectedRowsRule(value);
    },
    clearTableSelected: () => {
      onRowSelected([], false);
      setSelectedRowsRule(null);
    },
    setLoading: (_loading: boolean, reloadDataSource?: string) => {
      if (reloadDataSource && reloadDataSource === 'reloadDataSource') {
        if (dataSourceLoading) {
          setLoading(_loading);
        }
      } else {
        setLoading(_loading);
      }
    },
    clearData: () => {
      setInnerDataSource([]);
      setOuterDataSource([]);
      setTotal?.(0);
      setCurrent?.(1);
      setCurrentPage?.(1);
      setSelectedRowsRule?.(null);
      setSelectedRows?.([]);
      setSelectedRowKeys?.([]);
      setCurrentPageSelectedRows?.([]);
      setCurrentPageSelectedRowKeys?.([]);
    },
  }));

  return {
    loading,
    colServiceData,
  };
};

export default useCMDAction;
export { useCommonCMDAction };
