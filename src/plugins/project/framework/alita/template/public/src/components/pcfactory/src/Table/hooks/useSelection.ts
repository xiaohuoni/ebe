import { useEffect, useMemo, useRef, useState } from 'react';
import { MyTableProps } from '../types/prop';
import useCheckStrict from './useCheckStrict';
import { TableRowSelection } from 'antd/lib/table/interface';
import { recursionDataSource } from '../utils';


type selectionProps<T> = {
  innerDataSource: T[],
  currentRowKey: string,
  currentPageDataSource: T[],
  checkIfHiddenRow?: Function,
  hasPageChangeEvent?: boolean,
  funcExpExecute: Function,
}
const useSelection = <T extends {[key: string]: unknown}, >(props: MyTableProps & selectionProps<T>) => {
  const {
    innerDataSource,
    currentRowKey,
    currentPageDataSource,
    checkIfHiddenRow,
    page,
    hasPageChangeEvent,
    rowSelection,
    rowSelectionDisabled,
    onSelectChange,
    funcExpExecute,
    checkLoosed,
    expandable,
  } = props;

  const { childrenColumnName = 'children' } = expandable || {};


  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [currentPageSelectedRows, setCurrentPageSelectedRows] = useState<any[]>([]);
  const [currentPageSelectedRowKeys, setCurrentPageSelectedRowKeys] = useState<any[]>([]);
  const { checkStrictly, relatedDisabledMap, markDisable, triggerSingleSelection, triggerFullSelection } = useCheckStrict<T>({
    dataSource: innerDataSource,
    currentRowKey,
    rowSelectType: rowSelection?.type,
    checkLoosed,
    childrenKey: childrenColumnName,
  });


  // 记录动作+操作选中的keys，包括跨页和非法的key
  const combineSelectedRowKeysRef = useRef<any[]>([]);
  const hiddenKeysRef = useRef<any[]>([]);
  const updateCombineKeys = (keys: string[], action = false) => {
    // 通过动作设置选中数据时，是追加而非覆盖
    const curKeys = action ? combineSelectedRowKeysRef.current : keys;
    if (action) {
      // hiddenKeysRef记录的是动作设置的，string类型的，且不在当前页面展示的选中key，等数据被加载后需要显示选中
      hiddenKeysRef.current = keys;
    } else {
      // 当更新当前selectedKeys时，从hiddenKeys中过滤掉页面上已展示过的
      // 配置时兼容key为数字or字符串的情况
      const currentMap: Record<string | number, boolean> = keys.reduce((p, n) => { p[n] = true; return p; }, {} as any);
      hiddenKeysRef.current = hiddenKeysRef.current.filter((k) => !currentMap[k]);
    }
    // 更新表格所有的选中key
    combineSelectedRowKeysRef.current = [...new Set([...curKeys, ...hiddenKeysRef.current])];
  };

  // 给动作专用
  const [actionSetSelectRowsObject, updateSelectRowsObject] = useState<any>();

  /**
   * 判断可选表格某行是否允许界面选中
   * @param row 某行数据对象
   * @param index 某行所处当前页行索引
   * @returns
   */
  const handleIsRowSelectDisabled = (row: any, index?: number) => {
    // 存量：配置态生成的DSL是包含的完整代码的对象
    if (rowSelectionDisabled?.code) {
      return funcExpExecute(rowSelectionDisabled.code, [
        {
          key: 'row',
          value: row,
        },
        {
          key: 'index',
          value: index,
        },
      ]);
    } if (rowSelectionDisabled) {
      /**
       * 新版：配置态生成的DSL就是一个$$包含函数的表达式
       * 但会经过预处理移除 $$
       */
      return funcExpExecute(rowSelectionDisabled, [
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

    return false;
  };

  /**
 * 获取所有页选中行数据
 * @param _selectedRows 当前选中的行数据
 * @returns
 */
  const handleAllPageSelectedRows = (_selectedRows: any[] = []) => {
    // 当 未配置页面回调事件 时，认为是前端分页，此时，_selectedRows 就代表所有页选中行数据
    if (!hasPageChangeEvent) {
      return _selectedRows;
    }

    // 当 配置页面回调事件 时，认为是后端分页，此时，_selectedRows 代表当前页选中数据，需要特殊处理
    if (currentRowKey) {
      // 移除当前所有页行选中中，当前页对应的选中
      const otherPageSelectedRows = selectedRows.filter((selectedRow) => {
        return !innerDataSource.some((row: any) => row[currentRowKey] === selectedRow[currentRowKey]);
      });

      // 重新补回最新的当前页的选中数据，返回所有页选中行数据
      return [...otherPageSelectedRows, ..._selectedRows];
    }

    return _selectedRows;
  };

  /**
   * 获取当前页选中行数据
   * @param selectedRows 当前最新的选中的行数据
   * @returns
   */
  const handleCurrentPageSelectedRows = (selectedRows: any[] = []) => {
    let currentPageSeletedRows = [];

    if (currentRowKey) {
      const currentPageKey = new Set<string>();
      // 记录当前页数据（包括层级数据）的主键集合
      recursionDataSource(currentPageDataSource, (n) => {
        currentPageKey.add(n[currentRowKey] as string);
      }, childrenColumnName);
      // 在当前最新的选中的行数据中，找到属于当前页的、且可选中数据
      currentPageSeletedRows = selectedRows.filter((selectedRow) => {
        return currentPageKey.has(selectedRow[currentRowKey]);
      });
    }

    return currentPageSeletedRows;
  };

  /**
   * 处理复选框、单选按钮选中
   * @param _selectedRows 当前选中的行数据（在dataSource中真正有的行数据）
   * 注：selectedRowKeys 中不在 dataSource 的，rows 不包含
   */
  const handleSelect = (_selectedRows: any[]) => {
    // 单选
    if (rowSelection?.type === 'radio') {
      onRowSelected(
        _selectedRows,
        true,
        _selectedRows,
      );
    } else {
      // 多选
      const allPageSelectedRows = handleAllPageSelectedRows(_selectedRows);

      let currentPageSelectedRows;

      /**
       * 1、当 配置页面回调事件 时，认为是后端分页，此时，_selectedRows 就代表当前页选中数据
       * 2、当 未配置页面回调事件（前端分页） 且 未开启分页 时，认为只有一页，此时，_selectedRows 就代表当前页选中数据
       */
      if (hasPageChangeEvent || !page) {
        currentPageSelectedRows = _selectedRows;
      }

      onRowSelected(
        allPageSelectedRows,
        true,
        currentPageSelectedRows,
      );
    }
  };

  const onRowSelected = (
    _sltrows: any[],
    doOnSelectChange: boolean,
    _currentPageSelectedRows?: any[],
  ) => {
    const sltrows: any = currentRowKey ? _sltrows : [];

    const sltkeys: any = sltrows.map((row: any) => row[currentRowKey]);

    setSelectedRows(sltrows);
    updateCombineKeys(sltkeys);
    setSelectedRowKeys(sltkeys);

    let newCurrentPageSelectedRows: any = currentRowKey ? _currentPageSelectedRows : [];
    let newCurrentPageSelectedRowKeys = newCurrentPageSelectedRows?.map((r: any) => r[currentRowKey]);

    if (!_currentPageSelectedRows) {
      newCurrentPageSelectedRows = currentRowKey ? handleCurrentPageSelectedRows(sltrows) : [];
      newCurrentPageSelectedRowKeys = newCurrentPageSelectedRows.map((r: any) => r[currentRowKey]);
    }

    // 更新当前页选中数据
    setCurrentPageSelectedRows(newCurrentPageSelectedRows);
    setCurrentPageSelectedRowKeys(newCurrentPageSelectedRowKeys);

    if (typeof onSelectChange === 'function' && doOnSelectChange) {
      const oldSelectedKeys = selectedRowKeys.sort();
      const newSelectedKeys = sltkeys.sort();

      // 当选中数据变更时，才需要触发选中回调
      if (JSON.stringify(oldSelectedKeys) !== JSON.stringify(newSelectedKeys)) {
        onSelectChange(sltkeys, sltrows);
      }
    }
  };

  const onRowSelectClick = (record: any, index?: number) => {
    // 行禁用，不允许界面选中
    if (rowSelection && !handleIsRowSelectDisabled(record, index)) {
      if (selectedRowKeys.includes(record[currentRowKey])) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        rowSelection.type === 'radio'
          ? onRowSelected([record], true)
          : onRowSelected(
            triggerSingleSelection(selectedRows, record),
            true,
          );
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        rowSelection.type === 'radio'
          ? onRowSelected([record], true)
          : onRowSelected(
            triggerSingleSelection(selectedRows, record),
            true,
          );
      }
    }
  };

  // 设置选中行动作设置的默认选中
  const handleUpdateSelectedRows = (selectedRowsRule: string | string[] | T[]) => {
    let actionSetSelectedKeys: any = [];
    // 记录设置选中行时配置的对象格式格数据
    const rowsObject = new Map();
    if (selectedRowsRule) {
      if (!['string', 'object'].includes(typeof selectedRowsRule)) {
      // TODO: (2022.7.27 与国永沟通)，废弃旧版本在表格内部对 $$ 表达式的解析
        console.warn('请检查配置数据，现有版本只支持(行id字符串或数组、行对象)');
        updateSelectRowsObject(rowsObject);
        return;
      }

      // '1' / '1,2,3' / 1,2,3 代表选中行的行id
      if (typeof selectedRowsRule === 'string') {
        actionSetSelectedKeys = selectedRowsRule?.split(',').map((k) => k.trim()) || [];
      }

      // 处理 [{ [rowId]: '1'} ...] 或 ['1', '2'] 或 [1, 2]
      if (Array.isArray(selectedRowsRule)) {
        actionSetSelectedKeys = selectedRowsRule.map((one) => {
          if (['string', 'number'].includes(typeof one)) {
            return one;
          }

          if (typeof one === 'object' && !Array.isArray(one) && one) {
            const rowKey = one[currentRowKey];
            if (rowKey) {
              rowsObject.set(rowKey, one);
            }
            return rowKey;
          }

          return undefined;
        }).filter(one => !!one);
      }

      // 代表行数据对象
      if (!Array.isArray(selectedRowsRule) && typeof selectedRowsRule === 'object') {
        const selectedRowKey = selectedRowsRule[currentRowKey];
        if (selectedRowKey) {
          rowsObject.set(selectedRowKey, selectedRowsRule);
        }
        actionSetSelectedKeys = selectedRowKey ? [selectedRowKey] : [];
      }
    }

    updateCombineKeys(actionSetSelectedKeys, true);
    updateSelectRowsObject(rowsObject);
  };

  // 可选表格当前页不允许选择的行数据
  const currentPageDisabledRows = useMemo(() => {
    return currentPageDataSource.filter((row: any, index: number) => handleIsRowSelectDisabled(row, index));
  }, [currentPageDataSource]);

  useEffect(() => {
    if (currentRowKey) {
      const keySet: Record<string|number, unknown> = {};
      const map: any = {};
      // 数据源变更需要更新当前选中行的数据，保证获取时能获取到当前最新的数据详情
      recursionDataSource<{[k: string]: any, children?: any[]}>(innerDataSource as [], (n) => {
        map[n[currentRowKey]] = n;
      }, childrenColumnName);
      
      const rows = [];
      selectedRows.forEach((selectedRow) => {
        const key = selectedRow[currentRowKey];
        if (!map[key]) {
          map[key] = selectedRow;
        }
      });

      const actionRows: any[] = [];
      const collectSelectedRow = (key: string | number, childFlag = false) => {
        if (!keySet[key]) {
          const row = map[key] || actionSetSelectRowsObject.get(key);
          const canSelected = childFlag ? !relatedDisabledMap[row[currentRowKey]] : true;
          // 通过动作设置选中的禁用节点，允许选中
          // 通过动作设置选中父节点时，非禁用的子级数据也需要选中
          if (row && canSelected) {
            keySet[key] = row;
            actionRows.push(row);
            if (row?.[childrenColumnName]?.length && !checkStrictly) {
              recursionDataSource<{[k: string]: any}>(row[childrenColumnName], (n) => {
                if (n[currentRowKey]) {
                  collectSelectedRow(n[currentRowKey], true);
                }
              }, childrenColumnName);
            }
          }
        }
      };
      const fullKeys = triggerFullSelection(combineSelectedRowKeysRef.current || []);
      // 遍历所有选中keys，组装当前选中行
      fullKeys.forEach((key: string | number) => {
        collectSelectedRow(key);
      });
      rows.push(...actionRows);
      onRowSelected(rows, true);
    }
  }, [actionSetSelectRowsObject, currentRowKey, innerDataSource, childrenColumnName]);

  // 分页更新时，更新当前页选中数据
  useEffect(() => {
    const newCurrentPageSelectedRows = handleCurrentPageSelectedRows(selectedRows);
    const newCurrentPageSelectedRowKeys = newCurrentPageSelectedRows.map((r: any) => r[currentRowKey]);
    setCurrentPageSelectedRows(newCurrentPageSelectedRows);
    setCurrentPageSelectedRowKeys(newCurrentPageSelectedRowKeys);
  }, [
    selectedRows,
    currentRowKey,
    currentPageDataSource,
  ]);

  return {
    rowSelection: rowSelection ? {
      type: rowSelection.type,
      selectedRowKeys,
      checkStrictly,
      onChange: (_: any, sltrows: any[]) => handleSelect(sltrows),
      getCheckboxProps: (record: T) => {
        const props: ReturnType<Required<TableRowSelection<unknown>>['getCheckboxProps']> = {
          disabled: relatedDisabledMap[record[currentRowKey] as string],
        };

        /**
         * 决定可选表格某行是否可选
         * 由于此接口不支持索引 index 操作，所以 index 定位行逻辑放在 currentPageDisabledRows，以此兼容
         */
        const isRowSelectDisabled = handleIsRowSelectDisabled(record) ||
          !!currentPageDisabledRows.find(row => row[currentRowKey] === record[currentRowKey]);

        if (isRowSelectDisabled || checkIfHiddenRow?.(record[currentRowKey])) {
          props.disabled = true;
        }

        // 开启checkLoosed模式时，父禁用子也禁用
        markDisable(record, props.disabled || false);

        return props;
      },
    } : undefined,
    selectedRows,
    selectedRowKeys,
    currentPageSelectedRows,
    currentPageSelectedRowKeys,
    setSelectedRows,
    setSelectedRowKeys,
    setCurrentPageSelectedRows,
    setCurrentPageSelectedRowKeys,
    setSelectedRowsRule: handleUpdateSelectedRows,
    onRowSelected,
    onRowSelectClick,
    checkStrictly,
  };
};

export default useSelection;
