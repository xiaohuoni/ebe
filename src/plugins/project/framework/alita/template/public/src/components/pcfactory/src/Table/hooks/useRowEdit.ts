import { useState } from 'react';
import { deleteTempRowProperties, EMPTY_ROW_TEMP_KEY_ATTR, LATEST_EMPTY_ROW_FLAG_ATTR } from '../utils';
import { EDIT_COMPONENT_STOP_PROPAGATION_CLS } from '../constant';

const useRowEdit = (props: any) => {
  const {
    funcExpExecute,
    outerDataSource,
    innerDataSource,
    setInnerDataSource,
    currentRowKey,
    selectedRows,
    onRowSelected,

    dataSourceFromDataSourceConfig,
    editMode,
    rowEditableRule,

    onRowEdit,
    onRowDetail,
    onRowDelete,
    onRowClick,
    onRowDoubleClick,
    onBeforeInlineEdit,
    onBeforeInlineSave,
  } = props;

  const [nowInlineEditKey, setNowInlineEditKey] = useState<string | null>();
  const [nowEditingData, setNowEditingData] = useState<any | null>();

  const onRowSaveClick = (row: any, index: number | null, isForce: any) => {
    // 保存行内编辑行方法
    // 这个同时处理用于自带的行内编辑保存按钮，和指令的强制保存的情况
    // isForce:来源于事件动作的“saveInlineRow”指令的保存，这种保存不需要触发beforeSaveInlineRow回调
    if (!nowInlineEditKey) {
      return;
    }

    // 如果存在保存前回调，那么认为用户希望手动控制保存
    // 这个时候只有isForce强制保存可以保存【也不会触发该回调】
    if (!isForce && onBeforeInlineSave) {
      // nowEditingData:当前保存行数据
      // rowId:当前行Id
      // index:当前行索引
      // 添加传参，使方法配置更灵活
      onBeforeInlineSave(nowEditingData, row[currentRowKey], index);
      return;
    }

    const trow: any = innerDataSource.find((i: any) => i[currentRowKey] === nowInlineEditKey);
    Object.assign(trow, nowEditingData);
    deleteTempRowProperties(trow);

    // 单行保存编辑时，需要将修改后的值同步到绑定的数据源
    const syncPropsDataSourceRow = props.dataSource?.find((r: any) => r[currentRowKey] === nowInlineEditKey);
    Object.assign(syncPropsDataSourceRow, nowEditingData);
    deleteTempRowProperties(syncPropsDataSourceRow);

    setInnerDataSource([...innerDataSource]);

    setNowInlineEditKey(null);
    setNowEditingData(null);

    editInlineRow(null);
  };

  const editInlineRow = (editkey: React.SetStateAction<string | null | undefined>) => {
    // 开始行内编辑行方法
    if (editkey === undefined) {
      return;
    }

    const trow: any = innerDataSource.find((i: any) => i[currentRowKey] === editkey);
    if (onBeforeInlineEdit) {
      // 如果有这个回调，先触发这个回调
      // 预留坑：如果要判断该行不允许编辑之类的，可以在这里做准备
      onBeforeInlineEdit(trow);
    }

    if (trow) {
      setNowEditingData({ ...trow });
    }

    setNowInlineEditKey(editkey);
  };

  const onRowCancelClick = (row: any) => {
    setNowEditingData(null);
    setNowInlineEditKey(null);
    // 取消编辑的时候，如果当前行是刚刚新增的空白行，则过滤当前行
    const isLatestCreationTempRow = row?.[LATEST_EMPTY_ROW_FLAG_ATTR] && row?.[EMPTY_ROW_TEMP_KEY_ATTR];
    setInnerDataSource(innerDataSource
      .filter((i: any) => isLatestCreationTempRow ? row?.[EMPTY_ROW_TEMP_KEY_ATTR] !== i?.[EMPTY_ROW_TEMP_KEY_ATTR] : true));


    // 同样的，需要移除选中数据中的当前行
    if (isLatestCreationTempRow) {
      onRowSelected(selectedRows.filter((r: any) => row?.[currentRowKey] !== r?.[currentRowKey]), false);
    }

    // 倘若绑定了数据源，需要通过引用的方式，移除对应的临时数据
    if (isLatestCreationTempRow && dataSourceFromDataSourceConfig) {
      const targetIndex = innerDataSource.findIndex((i: any) => row?.[EMPTY_ROW_TEMP_KEY_ATTR] === i?.[EMPTY_ROW_TEMP_KEY_ATTR]);
      (outerDataSource as any)?.splice(targetIndex, 1);
    }
  };

  const onRowDeleteClick = (row: any, index: number | null) => {
    if (typeof onRowDelete === 'function') {
      if (row?._createrow) {
        let ds = [...innerDataSource];
        ds = ds.filter((i, idx) => idx !== index);
        setInnerDataSource(ds);
      }
      onRowDelete(currentRowKey ? row[currentRowKey] : row, row, index);
    }
  };

  const onRowEditClick = (row: any, index: number | null) => {
    if (typeof onRowEdit === 'function') {
      if (nowInlineEditKey) {
        // 未保存上一行，编辑其他行时，看作取消编辑上一行，并过滤空白行
        setInnerDataSource(innerDataSource.filter((i: any) => !i._emptyrow));
      }
      onRowEdit(currentRowKey ? row[currentRowKey] : row, row, index);
    }
  };

  const onRowDetailClick = (row: any, index: number | null) => {
    if (typeof onRowDetail === 'function') {
      onRowDetail(currentRowKey ? row[currentRowKey] : row, row, index);
    }
  };

  const onRowAttrValsChange = (row: any, attr: string, newAttrVal: any, otherAttrVals: any) => {
    if (editMode === 'multiple') {
      const editRow = innerDataSource.find((r: any) => r[currentRowKey] === row[currentRowKey]);
      // 整表编辑时，需要将修改后的值同步到绑定的数据源
      const syncPropsDataSourceRow = outerDataSource?.find((r: any) => r[currentRowKey] === row[currentRowKey]);

      editRow[attr] = newAttrVal;
      syncPropsDataSourceRow[attr] = newAttrVal;

      Object.keys(otherAttrVals).forEach((op) => {
        editRow[op] = otherAttrVals[op];
        syncPropsDataSourceRow[op] = otherAttrVals[op];
      });
      setInnerDataSource([...innerDataSource]);
      return;
    }

    nowEditingData[attr] = newAttrVal;
    Object.keys(otherAttrVals).forEach((op) => {
      nowEditingData[op] = otherAttrVals[op];
    });
    setNowEditingData({ ...nowEditingData });
  };

  const onRowClickHandle = (event: any, record: any, index?: number) => {
    let target = event.target as HTMLBaseElement;
    const curentTarget = event.currentTarget as HTMLTableRowElement;

    // 当处于编辑状态时，需要过滤来自编辑控件内部触发的 click
    while (target?.className !== curentTarget?.className) {
      if (
        typeof target?.className === 'string' &&
        target.className.includes(EDIT_COMPONENT_STOP_PROPAGATION_CLS)
      ) {
        return true;
      }
      target = target.parentNode as HTMLBaseElement;
    }

    if (onRowClick) {
      onRowClick(currentRowKey ? record[currentRowKey] : record, record, index);
      return true;
    }

    return false;
  };

  const onRowDoubleClickHandle = (event: any, record: any, index?: number) => {
    if (onRowDoubleClick) {
      let target = event.target as HTMLBaseElement;
      const curentTarget = event.currentTarget as HTMLTableRowElement;

      // 当处于编辑状态时，需要过滤来自编辑控件内部触发的 doubleclick
      let stopDoubleClick = false;
      while (target?.className !== curentTarget?.className) {
        if (
          typeof target?.className === 'string' &&
          target.className.includes(EDIT_COMPONENT_STOP_PROPAGATION_CLS)
        ) {
          stopDoubleClick = true;
          break;
        }
        target = target.parentNode as HTMLBaseElement;
      }

      if (!stopDoubleClick) {
        onRowDoubleClick(currentRowKey ? record[currentRowKey] : record, record, index);
      }
    }
  };

  /**
 * 判断表格可编辑时，里面是否可以操作
 * @param row 某行数据对象
 * @param index 某行所处当前页行索引
 * @returns
 */
  const handleIsRowEditableCanUse = (row: any, index?: number) => {
    // 存量：配置态生成的DSL是包含的完整代码的对象
    if (funcExpExecute && rowEditableRule?.code) {
      return funcExpExecute(rowEditableRule.code, [
        {
          key: 'row',
          value: row,
        },
        {
          key: 'index',
          value: index,
        },
      ]);
    } if (funcExpExecute && rowEditableRule) {
      /**
       * 新版：配置态生成的DSL就是一个$$包含函数的表达式
       * 但会经过预处理移除 $$
       */
      return funcExpExecute(rowEditableRule, [
        {
          key: 'row',
          value: row,
        },
        {
          key: 'index',
          value: index,
        },
      ]);
    }

    return true;
  };

  return {
    nowInlineEditKey,
    nowEditingData,
    editInlineRow,
    setNowEditingData,
    setNowInlineEditKey,
    onRowAttrValsChange,
    onRowSaveClick,
    onRowCancelClick,
    onRowDeleteClick,
    onRowEditClick,
    onRowDetailClick,
    onRowClick: onRowClickHandle,
    onRowDoubleClick: onRowDoubleClickHandle,
    handleIsRowEditableCanUse,
  };
};

export default useRowEdit;
