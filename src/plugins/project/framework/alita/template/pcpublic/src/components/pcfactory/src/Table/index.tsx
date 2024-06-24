/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { Form, Table } from 'antd';
import classnames from 'classnames';
import React, { useMemo, useRef } from 'react';
import { PrintContainer, usePrintMode } from '../utils';
import { useCreation } from '../utils/ahooks';
import EmptyComp from '../utils/Empty';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import { useLocale } from '../utils/hooks/useLocale';
import BodyCell from './BodyCell';
import HeaderCell from './HeaderCell';
import {
  useCMDAction,
  useColumns,
  useCommon,
  useDataSource,
  useExpandable,
  useFilter,
  usePagination,
  useRowEdit,
  useRowMerge,
  useScroll,
  useSelection,
  useSort,
} from './hooks';
import TableHead from './TableHead';
import TableSummaryRow from './TableSummaryRow';
import type { MyTableProps } from './types/prop';

const components = {
  body: {
    cell: BodyCell,
  },
  header: {
    cell: HeaderCell,
  },
};

// const prefixCls = 'table';

const MyTable = React.forwardRef<any, MyTableProps>((props, ref) => {
  const {
    dataSource: boundDataSource,
    visible = true,
    style: styles,
    className,
    onChange,
    $$componentItem,
    getEngineApis,
    ...restProps
  } = props;

  const { uid: compId } = $$componentItem;
  const {
    size,
    sortDirections,
    sticky,
    summary,
    tableLayout,
    title,
    rowClassName,
  } = restProps || {};
  const tableProps = {
    size,
    sortDirections,
    sticky,
    summary,
    tableLayout,
    title,
    rowClassName,
  } as any;
  const [form] = Form.useForm();

  const engineApis = getEngineApis?.();
  const { sandBoxSafeRun, renderBusiComponent, dataState } = engineApis || {};

  const { getLocale } = useLocale(engineApis || {});

  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun as any, getLocale);

  const appId = props?.appId || $$componentItem?.appId;
  const pageId = props?.pageId || $$componentItem?.pageId;

  const {
    // state, // TODO: 不知道啥时候用的，eval？
    currentRowKey,
    isBordered,
    innerClassName,
  } = useCommon(props);

  const {
    page,
    pagination,
    hasPageChangeEvent,
    setCurrent,
    setTotal,
    setCurrentPage,
    setCurrentPageSize,
    onPageChange,
  } = usePagination(props);

  const {
    innerDataSource,
    setInnerDataSource,
    outerDataSource,
    outerDataSourceRef,
    setOuterDataSource,
    currentPageDataSource,
  } = useDataSource({
    ...props,
    compId,
    currentRowKey,
    boundDataSource,
    page,
    pagination,
    hasPageChangeEvent,
    getLocale,
  });

  const {
    filters,
    filterDropdownOpen,
    checkIfHiddenRow,
    renderFilterDropDown,
    onFilterDropdownVisibleChange,
    filterDataSource,
  } = useFilter({
    compId,
    innerDataSource,
    currentRowKey,
    getLocale,
    outerDataSourceRef,
  });

  const { sortDataSource, setSortOrder, onSortChange, hasSortEvent } = useSort({
    ...props,
    innerDataSource: filterDataSource,
  });

  const { expandable: realExpandable } = useExpandable({
    ...props,
    dataSource: sortDataSource,
    currentRowKey,
    renderExpandComponents: renderBusiComponent,
    sandBoxSafeRun,
    funcExpExecute,
    engineApis,
  });

  const {
    rowSelection,
    selectedRows,
    selectedRowKeys,
    currentPageSelectedRows,
    currentPageSelectedRowKeys,
    setSelectedRows,
    setSelectedRowKeys,
    setCurrentPageSelectedRows,
    setCurrentPageSelectedRowKeys,
    setSelectedRowsRule,
    onRowSelected,
    onRowSelectClick,
  } = useSelection({
    ...props,
    innerDataSource,
    currentRowKey,
    currentPageDataSource,
    checkIfHiddenRow,
    page,
    hasPageChangeEvent,
    funcExpExecute,
    expandable: realExpandable,
  });

  const {
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
    onRowClick,
    onRowDoubleClick,
    handleIsRowEditableCanUse,
  } = useRowEdit({
    ...props,
    funcExpExecute,
    innerDataSource,
    outerDataSource,
    setInnerDataSource,
    currentRowKey,
    selectedRows,
    onRowSelected,
  });

  const { rowSpanColMap, rowSpanMap, rowClassMap } = useRowMerge({
    ...props,
    sortDataSource,
    nowInlineEditKey,
    currentRowKey,
  });

  const { showPrintContainer, loadPrint, selectorKey, printData } =
    usePrintMode(props.$$componentItem.uid);

  const { loading, colServiceData, colServiceDataForEdit } = useCMDAction({
    ...props,
    ref,
    form,
    currentRowKey,
    innerDataSource,
    setInnerDataSource,
    setOuterDataSource,
    currentPageDataSource,
    setCurrent,
    setCurrentPage,
    setTotal,
    editInlineRow,
    setNowEditingData,
    setNowInlineEditKey,
    selectedRows,
    selectedRowKeys,
    currentPageSelectedRows,
    currentPageSelectedRowKeys,
    setSelectedRows,
    setSelectedRowKeys,
    setCurrentPageSelectedRows,
    setCurrentPageSelectedRowKeys,
    setSelectedRowsRule,
    page,
    pagination,
    onRowSelected,
    onRowSaveClick,
    loadPrint,
  });

  // 根据id获取真实的下标，避免过滤和排序后影响下标
  const { getRealIndexById } = useCreation(() => {
    const indexMap = new Map<string | number, number>();
    return {
      getRealIndexById: (id: string | number) => {
        if (indexMap.has(id)) {
          return indexMap.get(id);
        }
        const index = (innerDataSource || []).findIndex(
          (c: any) => c[currentRowKey] === id,
        );
        if (index !== -1) {
          indexMap.set(id, index);
        }
        return index;
      },
    };
  }, [innerDataSource, currentRowKey]);

  const {
    tableRef,
    finalcolumns,
    customizableCols,
    customSelectedCols,
    setCustomSelectedCols,
    setColCustomOrder,
    columnWidth,
    setColumnWidth,
    initLoadColWidth,
    printColumns,
    fixedAction,
  } = useColumns({
    ...props,
    sandBoxSafeRun,
    funcExpExecute,
    engineApis,
    form,
    appId,
    pageId,
    compId,
    innerDataSource,
    currentRowKey,
    nowInlineEditKey,
    nowEditingData,
    colServiceData,
    colServiceDataForEdit,
    hasSortEvent,
    page,
    pagination,
    rowSpanMap,
    rowClassMap,
    rowSpanColMap,
    onRowDetailClick,
    onRowDeleteClick,
    onRowEditClick,
    onRowSaveClick,
    onRowCancelClick,
    onRowAttrValsChange,
    loading,
    handleIsRowEditableCanUse,
    filters,
    filterDropdownOpen,
    onFilterDropdownVisibleChange,
    renderFilterDropDown,
    rowSelection,
    getLocale,
    getRealIndexById,
  });

  const {
    scroll,
    tableWrapRef,
    // initTableWrapWidthRef,
    // getTableWrapWidth,
  } = useScroll({
    ...props,
    initLoadColWidth,
    finalcolumns,
    columnWidth,
    setColumnWidth,
  });

  const superSelectTranslationMapRef: any = useRef(); // 防止state更新不及时，导致翻译无法获取翻译数据
  if (!superSelectTranslationMapRef.current) {
    superSelectTranslationMapRef.current = {};
  }

  const innerTableStyle: any = {};
  if (styles?.overflowY) {
    // 通过自定义样式给表格设置y轴滚动时， 认为希望只有表格滚动，但分页栏固定在底部
    innerTableStyle.overflowY = styles.overflowY;
  }

  const handleTableChange = (
    newPagination: any,
    newFilters: any,
    newSorter: any,
    newExtra: any,
  ) => {
    if (typeof onChange === 'function') {
      onChange(newPagination, newFilters, newSorter, newExtra);
    }

    if (newExtra.action === 'paginate') {
      if (hasPageChangeEvent) {
        onPageChange(
          newPagination?.current,
          newPagination?.pageSize,
          newSorter?.order === 'ascend' ? newSorter?.field : undefined,
          newSorter?.order === 'descend' ? newSorter?.field : undefined,
        );
        return;
      }

      setCurrentPage(newPagination?.current);
      setCurrentPageSize(newPagination?.pageSize);
    }

    if (newExtra.action === 'sort' && hasSortEvent) {
      // order 取值 ['ascend', 'descend']
      const { field: colName, order } = newSorter;
      if (order === 'ascend') {
        onSortChange(colName, undefined, newPagination?.pageSize);
      } else if (order === 'descend') {
        onSortChange(undefined, colName, newPagination?.pageSize);
      } else {
        onSortChange(undefined, undefined, newPagination?.pageSize);
      }
    } else if (Object.keys(rowSpanColMap).length > 0) {
      if (newSorter?.field) {
        setSortOrder(newSorter);
      }
    }
  };

  // 表格宽度需要根据列宽度赋值
  // 2024.04.09, 表格开启拖拽后宽度不能伸缩，屏蔽表格宽度计算
  // const finalStyles = useMemo(() => {
  //   const tmpStyle = { ...styles };
  //   const tableWidth = getTableWrapWidth();
  //   if (tableWrapRef.current && tableWidth) {
  //     const realTableWidth = tableWidth >= initTableWrapWidthRef.current - 10 ? initTableWrapWidthRef.current - 9 : tableWidth;
  //     tmpStyle.width = `${realTableWidth}px`;
  //   }
  //   return tmpStyle;
  // }, [columnWidth]);

  const eleProps = {
    appId,
    pageId,
    'data-compid': (props as any)?.['data-compid'],
  };

  const isEmptyLoading = useMemo(
    () => loading && sortDataSource?.length === 0,
    [loading, sortDataSource],
  );

  return visible ? (
    <Form form={form}>
      <div
        {...eleProps}
        style={styles}
        className={classnames('ued-table-wrap', className)}
        ref={tableWrapRef}
      >
        <TableHead
          {...restProps}
          source="engine"
          columns={customizableCols}
          selectedCols={customSelectedCols}
          setSelectedCols={setCustomSelectedCols}
          setColOrder={setColCustomOrder}
          sandBoxSafeRun={sandBoxSafeRun}
        />
        <Table
          // {...restProps} // TODO: 不要这么透传，需要什么传什么，先注释，之后缺什么再补
          {...tableProps}
          locale={{
            emptyText: (
              <EmptyComp dataState={dataState} getLocale={getLocale} />
            ),
          }}
          ref={tableRef}
          // loading={loading}
          bordered={isBordered}
          className={innerClassName}
          style={innerTableStyle}
          components={components}
          columns={finalcolumns.map((item, index) => {
            // 固定列最后一项宽度根据本身计算返回
            if (fixedAction && finalcolumns.length - 1 === index) {
              return item;
            }
            item.width = columnWidth[index] || item.width;
            return item;
          })}
          rowKey={currentRowKey}
          scroll={scroll}
          onChange={handleTableChange}
          onRow={(record) => {
            return {
              onClick: (event) => {
                const hasOnRowClick = onRowClick(
                  event,
                  record,
                  getRealIndexById(record[currentRowKey]),
                );
                !hasOnRowClick &&
                  onRowSelectClick(
                    record,
                    getRealIndexById(record[currentRowKey]),
                  );
              }, // 点击行
              onDoubleClick: (event) => {
                onRowDoubleClick(
                  event,
                  record,
                  getRealIndexById(record[currentRowKey]),
                );
              },
              onContextMenu: (event) => {},
              onMouseEnter: (event) => {}, // 鼠标移入行
              onMouseLeave: (event) => {},
            };
          }}
          rowSelection={rowSelection}
          // loading没有数据的时候模拟3个数据,当数据为空时依然展示骨架屏
          dataSource={isEmptyLoading ? [{}, {}, {}] : sortDataSource}
          expandable={realExpandable}
          pagination={isEmptyLoading ? false : page && pagination}
          summary={(pageData: any[]) => (
            <Table.Summary fixed={!!props?.scroll}>
              <TableSummaryRow
                columns={finalcolumns}
                dataSource={pageData as any[]}
                summary={props.summary}
                summaryConfig={props?.summaryTotal}
                selectionType={rowSelection?.type}
              />
            </Table.Summary>
          )}
        />
      </div>
      {showPrintContainer && (
        <PrintContainer
          containerProps={{
            style: styles,
            className: classnames('ued-table-wrap', className),
            ...selectorKey,
          }}
        >
          <TableHead
            source="engine"
            // @ts-ignore
            columns={customizableCols}
            selectedCols={customSelectedCols}
            setSelectedCols={setCustomSelectedCols}
            setColOrder={setColCustomOrder}
            sandBoxSafeRun={sandBoxSafeRun}
            {...restProps}
            headExtends={[]}
            engineApis={engineApis}
          />
          {/** @ts-ignore */}
          <Table
            {...restProps}
            bordered={isBordered}
            className={innerClassName}
            style={innerTableStyle}
            components={components}
            columns={printColumns.map((item, index) => {
              item.width = columnWidth[index] || item.width;
              return item;
            })}
            rowKey={currentRowKey}
            dataSource={
              printData?.dataSource?.length > 0
                ? printData.dataSource
                : sortDataSource
            }
            expandable={realExpandable}
            pagination={false}
            summary={(pageData: readonly any[]) => (
              <Table.Summary fixed={!!props?.scroll}>
                <TableSummaryRow
                  columns={finalcolumns}
                  dataSource={pageData as any[]}
                  summary={props.summary}
                  summaryConfig={props?.summaryTotal}
                  selectionType={rowSelection?.type}
                />
              </Table.Summary>
            )}
          />
        </PrintContainer>
      )}
    </Form>
  ) : null;
});

export default MyTable;
