/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { Table, Form } from 'antd';
import classnames from 'classnames';
import React, { useMemo, useRef } from 'react';
import BodyCell from '../Table/BodyCell';
import HeaderCell from '../Table/HeaderCell';
import TableHead from '../Table/TableHead';
import { useFuncExpExecute } from '../utils/hooks/useFuncExpExecute';
import {
  useColumns,
  useSelection,
  useDataSource,
  useRowEdit,
  useCommon,
  useScroll,
} from '../Table/hooks';
import { useCMDAction, useExpandable } from './hooks';
import type { MyTableProps } from '../Table/types/prop';
import { customLocale } from '../utils/Empty/customLocale';
import { useLocale } from '../utils/hooks/useLocale';

const components = {
  body: {
    cell: BodyCell,
  },
  header: {
    cell: HeaderCell,
  },
};

const TreeTable = React.forwardRef<any, MyTableProps>((props, ref) => {
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
  const [form] = Form.useForm();

  const engineApis = getEngineApis?.();
  const {
    sandBoxSafeRun,
  } = engineApis || {};

  const { getLocale } = useLocale(engineApis);

  const funcExpExecute = useFuncExpExecute(sandBoxSafeRun as any, getLocale);

  const appId = props?.appId || $$componentItem?.appId;
  const pageId = props?.pageId || $$componentItem?.pageId;

  const {
    currentRowKey,
    isBordered,
    innerClassName,
  } = useCommon(props);

  const {
    innerDataSource,
    setInnerDataSource,
    outerDataSource,
    setOuterDataSource,
    currentPageDataSource,
  } = useDataSource({
    ...props,
    compId,
    currentRowKey,
    boundDataSource,
  });

  const {
    rowSelection,
    selectedRows,
    selectedRowKeys,
    setSelectedRows,
    setSelectedRowKeys,
    setSelectedRowsRule,
    onRowSelected,
    onRowSelectClick,
  } = useSelection({
    ...props,
    innerDataSource,
    currentRowKey,
    currentPageDataSource,
    funcExpExecute,
  });

  const {
    onRowDeleteClick,
    onRowEditClick,
    onRowDetailClick,
    onRowClick,
    onRowDoubleClick,
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

  const {
    expandable: realExpandable,
    childrenColumnName,
    setChildrenColumnName,
    setMode,
  } = useExpandable({
    ...props,
    innerDataSource,
    setInnerDataSource,
    currentRowKey,
    sandBoxSafeRun,
    funcExpExecute,
    engineApis,
    isTree: true,
  });

  const {
    loading,
    colServiceData,
  } = useCMDAction({
    ref,
    currentRowKey,
    childrenColumnName,
    innerDataSource,
    setInnerDataSource,
    setOuterDataSource,
    selectedRows,
    selectedRowKeys,
    setSelectedRows,
    setSelectedRowKeys,
    setSelectedRowsRule,
    setChildrenColumnName,
    onRowSelected,
    setMode,
  });


  const {
    tableRef,
    finalcolumns,
    columnWidth,
    setColumnWidth,
    initLoadColWidth,
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
    colServiceData,
    onRowDetailClick,
    onRowDeleteClick,
    onRowEditClick,
    loading,
    rowSelection,
    getLocale,
  });

  const {
    scroll,
    tableWrapRef,
    initTableWrapWidthRef,
    getTableWrapWidth,
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
  };

  // 表格宽度需要根据列宽度赋值
  const finalStyles = useMemo(() => {
    const tmpStyle = { ...styles };
    const tableWidth = getTableWrapWidth();
    if (tableWrapRef.current && tableWidth) {
      const realTableWidth = tableWidth >= initTableWrapWidthRef.current - 10 ? initTableWrapWidthRef.current - 9 : tableWidth;
      tmpStyle.width = `${realTableWidth}px`;
    }
    return tmpStyle;
  }, [columnWidth]);

  return visible ? (
    <Form form={form}>
      <div
        // appId={appId} // TODO:先注释，不知道什么场景用到
        // pageId={pageId} // TODO:先注释，不知道什么场景用到
        data-compid={(props as any)?.['data-compid']}
        style={finalStyles}
        className={classnames(
          'ued-table-wrap',
          className,
        )}
        ref={tableWrapRef}
      >
        <TableHead
          {...restProps} // 涉及到不确定的事件，所以要这么传
          source="engine"
          columns={[]}
          sandBoxSafeRun={sandBoxSafeRun}
          engineApis={engineApis}
        />
        <Table
          locale={customLocale}
          ref={tableRef}
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
          onRow={(record, index?: number) => {
            return ({
              onClick: (event) => {
                const hasOnRowClick = onRowClick(event, record, index);
                !hasOnRowClick && onRowSelectClick(record, index);
              }, // 点击行
              onDoubleClick: (event) => {
                onRowDoubleClick(event, record, index);
              },
              onContextMenu: (event) => { },
              onMouseEnter: (event) => { }, // 鼠标移入行
              onMouseLeave: (event) => { },
            });
          }}
          rowSelection={rowSelection}
          dataSource={innerDataSource}
          expandable={realExpandable}
          pagination={false}
        />
      </div>
    </Form>
  ) : null;
});

export default TreeTable;
