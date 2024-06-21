import { EngineApisType, EngineBaseProps } from '@lingxiteam/types';
import {
  CellClassParams,
  ICellRendererParams,
  RowSpanParams,
  ValueFormatterParams,
  ValueGetterParams,
} from 'ag-grid-community';
import cloneDeep from 'lodash/cloneDeep';
import { useEffect, useMemo, useRef, useState } from 'react';
import TypeCells from '../components/TypeCells';

export interface CreateColumnProps {
  columns: any[];
  data: any[];
  isEditor: boolean; // true编辑器  false运行态
  twoDimension: boolean;
  fixedLeft?: boolean;
  fixedRight?: boolean;
  bordered: string;
  appId?: string;
  pageId?: string;
  tableRowKey?: string;
  setReloadTable?: any;
  tableDataRef?: any;
  firstColumnBgColor?: string;
  firstColumnColor?: string;
  headerColor?: string;
  headerBgColor?: string;
  sandBoxLoadModule: EngineApisType['sandBoxLoadModule'];
  $$componentItem: EngineBaseProps['$$componentItem'];
  showExtend?: boolean;
  hiddenAction?: boolean;
  fixedAction?: boolean;
  extend?: any[];
  extendNum?: number;
  getEngineApis?: any;
  renderIcon: (props: any) => JSX.Element;
}

const useCreateColumn = (props: CreateColumnProps) => {
  const {
    columns,
    data,
    isEditor,
    twoDimension,
    fixedLeft,
    fixedRight,
    bordered,
    appId = '',
    pageId = '',
    tableRowKey,
    setReloadTable,
    tableDataRef,
    firstColumnBgColor,
    firstColumnColor,
    headerColor,
    headerBgColor,
    sandBoxLoadModule,
    $$componentItem,
    showExtend,
    hiddenAction,
    fixedAction,
    extend,
    extendNum,
    getEngineApis,
  } = props;

  // 合计数据统计
  const [aggregate, setAggregate] = useState<any>();
  // 静态编码
  const [staticAttrNbrs, setStaticAttrNbrs] = useState<any[]>([]);
  const [columnList, setColumnList] = useState<any[]>([]);
  const attrMapRef = useRef<any>();

  const rowSpan = (params: RowSpanParams) => {
    const key = params?.column?.getColId();
    const index = Number(params?.node?.rowIndex);
    const numberObject = rowSpanNumber[index];
    if (numberObject?.[key] > 1) {
      return numberObject[key];
    }
    return 1;
  };

  const tableCellClass = (params: CellClassParams) => {
    // console.log('cellClass', params);
    const key = params?.column?.getColId();
    const index = Number(params?.node?.rowIndex);
    const numberObject = rowSpanNumber[index];
    if (numberObject?.[key] > 1) {
      return `${bordered}-span-cell`;
    }
    return null;
  };

  const cellValueFormatter = (
    params: ValueFormatterParams,
    options: [{ value?: string; label?: string }],
  ) => {
    const oldValue = params?.value;
    const translateValue = options.find(
      (item: any) => item?.value === oldValue,
    );
    return translateValue ? translateValue?.label : oldValue;
  };

  // 静态编码回来的数据
  useEffect(() => {
    const engineApis = getEngineApis?.();
    if (staticAttrNbrs?.length && engineApis && !isEditor) {
      (async () => {
        const res = await engineApis.service?.batchGetAppStaticAttr({
          attrCodes: staticAttrNbrs,
        });
        attrMapRef.current = res;
        setReloadTable('reload');
      })();
    }
  }, [staticAttrNbrs]);

  const cellValueFormatterWithAttrMap = (
    params: ValueFormatterParams,
    attr: { childKeys?: any[]; attrNbr: string },
  ) => {
    const oldValue = params?.value;
    let translateList = attrMapRef?.current?.[attr.attrNbr];
    let translateValue;
    if (translateList?.length) {
      // 设定了范围，就拿范围里的数据
      if (attr?.childKeys?.length) {
        translateList = translateList.filter?.(
          (item: any) =>
            attr?.childKeys?.includes(item?.attrValue) ||
            attr?.childKeys?.includes(item?.attrValueCode),
        );
      }
      if (Array.isArray(oldValue)) {
        // 翻译字段里面的值如果是数组的话，分开进行翻译
        const newValue: any[] = [];
        oldValue.forEach((itemValue) => {
          const item = translateList?.find?.(
            (c: any) => String(c?.attrValue) === String(itemValue),
          );
          if (item) {
            newValue.push(item?.attrValueName || itemValue);
          } else {
            newValue.push(itemValue);
          }
        });
        translateValue = newValue.length ? newValue : oldValue;
      } else {
        translateValue = translateList?.find?.(
          (c: any) => String(c?.attrValue) === String(oldValue),
        );
        translateValue = translateValue?.attrValueName;
      }
    }
    return translateValue || oldValue;
  };

  const cellRenderer = (
    params: ICellRendererParams,
    item: any,
    extendActions?: Record<string, any>,
  ) => {
    return (
      <TypeCells
        params={params}
        item={item}
        isEditor={isEditor}
        appId={appId}
        pageId={pageId}
        tableRowKey={tableRowKey}
        sandBoxLoadModule={sandBoxLoadModule}
        extendActions={extendActions}
        getEngineApis={getEngineApis}
        $$componentItem={$$componentItem}
        renderIcon={props.renderIcon}
      />
    );
  };

  // 自增数据列
  const valueGetter = (params: ValueGetterParams) => {
    const currentPage = tableDataRef?.current?.currentPage || 1;
    const currentPageSize = params.api.paginationGetPageSize();
    const index = params?.node?.rowIndex || 0;
    if (params?.node?.rowPinned === 'bottom') {
      return params?.data?.[params?.colDef?.field || '-'];
    }
    return index + 1 + (currentPage - 1) * currentPageSize;
  };

  // 记录所有设置了行合并的列
  const rowSpanColMap = useMemo(() => {
    const map: any = {};
    columnList.forEach((c: any) => {
      if (c.isRowSpan) {
        map[c.dataIndex] = true;
      }
    });
    return map;
  }, [columnList]);

  const rowSpanNumber = useMemo(() => {
    const tableRowSpan = new WeakMap();
    const rowNumber: any[] = [];
    // 记录负责合并行的主行
    const recursiveSet = (arr: any[]) => {
      const parentSpanRowsMap: any = {};
      (arr || []).forEach((d, i) => {
        const newD = d;
        const __rowSpan: any = {};
        if (newD?.children?.length > 0) {
          // newD.children = recursiveSet(newD.children);
          recursiveSet(newD.children);
        }
        Object.keys(rowSpanColMap).forEach((rowIndex) => {
          __rowSpan[rowIndex] = 1;
          if (!parentSpanRowsMap[rowIndex]) {
            parentSpanRowsMap[rowIndex] = {
              preIndex: i,
              row: newD,
            };
          } else {
            const { preIndex, row } = parentSpanRowsMap[rowIndex];
            // 当且仅当相邻行内容相同时才进行合并，否则把之前的主行换成当前行
            if (preIndex === i - 1 && row[rowIndex] === newD[rowIndex]) {
              const curRowSpan = tableRowSpan.get(row);
              curRowSpan[rowIndex] += 1;
              // 合并当前行
              __rowSpan[rowIndex] = 0;
            } else {
              parentSpanRowsMap[rowIndex].row = newD;
            }
            parentSpanRowsMap[rowIndex].preIndex = i;
          }
        });
        tableRowSpan.set(newD, __rowSpan);
        rowNumber.push(__rowSpan);
      });
    };
    if (Array.isArray(data)) {
      recursiveSet(cloneDeep(data));
    }
    return rowNumber;
  }, [data, columnList]);

  const myColumn = useMemo(() => {
    // console.log('column:', columns, twoDimension, bordered);
    const hasAggregatedData: any = {};
    const translateAttrs: any[] = [];
    if (Array.isArray(columns)) {
      const myColumnList: any[] = [];
      const finalColumn: any[] = [];

      columns.forEach((item: any, index: number) => {
        // 解析动态列配置，根据动态列数据源，得到真正的列配置数组数据
        if (item?.type === 'dynamicCol' && Array.isArray(item?.dataSource)) {
          item.dataSource.forEach((c: any) => {
            const data: any = cloneDeep(item);
            data.dataIndex = c?.[item?.dataIndex] || '';
            data.title = c?.[item?.title] || '';
            delete data.type;
            delete data.dataSource;
            myColumnList.push(data);
          });
        } else {
          const data: any = cloneDeep(item);
          myColumnList.push(data);
        }
      });
      setColumnList(myColumnList);
      myColumnList.forEach((item: any, index: number) => {
        // 将数据字段转换一下
        const c: any = {
          field: item?.dataIndex || '',
          headerName: item?.title || '',
          width: item?.width,
          pinned: null,
        };
        // 有设置宽度的列设置不被自动宽度方法影响。
        if (typeof item?.width !== 'undefined') {
          c.suppressSizeToFit = true;
        }
        if (item?.type === 'orderCol') {
          // 自增序列
          c.valueGetter = valueGetter;
        }

        // item?.aggregatedData 数据合计
        if (item?.aggregatedData) {
          hasAggregatedData[item.dataIndex] = 0;
        }
        // item?.isRowSpan 行合并
        if (item?.isRowSpan) {
          c.rowSpan = rowSpan;
          c.cellClass = tableCellClass;
        }
        // item?.colorFormatInfo 单元格内容
        if (
          item?.colorFormatInfo?.length > 0 ||
          item?.customRendering?.length > 0
        ) {
          c.cellRenderer = (params: ICellRendererParams) =>
            cellRenderer(params, item);
          const hasOwnClick = item?.colorFormatInfo?.filter(
            (c: any) => c?.clickType,
          );
          // lxHasOwnCellClick 用来标识自定义cell是否有点击事件
          if (hasOwnClick?.length) {
            c.lxHasOwnCellClick = true;
          } else {
            c.lxHasOwnCellClick = false;
          }
        }
        // 字段翻译 item?.attr---静态编码  item?.options ---自定义
        // c.valueFormatter 用此方法进行字段翻译
        if (Array.isArray(item?.options)) {
          c.valueFormatter = (params: ValueFormatterParams) =>
            cellValueFormatter(params, item.options);
        }
        if (item?.attr) {
          translateAttrs.push(item?.attr?.attrNbr);
          c.valueFormatter = (params: ValueFormatterParams) =>
            cellValueFormatterWithAttrMap(params, item.attr);
        }

        if (index === 0) {
          // 二维表格将第一列数据背景颜色修改成和表头颜色一致
          if (twoDimension) {
            c.cellStyle = { color: headerColor, background: headerBgColor };
          } else if (firstColumnColor || firstColumnBgColor) {
            c.cellStyle = {
              color: firstColumnColor,
              background: firstColumnBgColor,
            };
          }
          // 固定左右列
          if (fixedLeft) {
            c.pinned = 'left';
          }
        }
        if (index === myColumnList.length - 1 && fixedRight) {
          c.pinned = 'right';
        }
        finalColumn.push(c);
      });
      // 开启了操作列的话
      if (showExtend && !hiddenAction) {
        const extendActions: any = {};
        // 将操作项按钮事件集合下
        Object.keys(props)?.forEach((key: string) => {
          // 详情、编辑、删除为固定方法名
          if (['onRowDetail', 'onRowEdit', 'onRowDelete'].includes(key)) {
            extendActions[key] = (props as any)[key];
          } else if (key.includes('onClickBtn_')) {
            extendActions[key] = (props as any)[key];
          }
        });
        finalColumn.push({
          field: '--Table-Action--',
          headerName: '操作列',
          pinned: fixedAction ? 'right' : null,
          cellRenderer: (params: ICellRendererParams) =>
            cellRenderer(
              params,
              { extendInfo: { extend, extendNum } },
              extendActions,
            ),
        });
      }
      setStaticAttrNbrs([...new Set(translateAttrs)]);
      setAggregate(hasAggregatedData);
      return finalColumn;
    }
    return [];
  }, [
    columns,
    twoDimension,
    bordered,
    headerBgColor,
    headerColor,
    firstColumnColor,
    firstColumnBgColor,
    fixedRight,
    fixedLeft,
    hiddenAction,
    fixedAction,
    showExtend,
    extend,
    extendNum,
  ]);

  return {
    myColumn,
    aggregate,
  };
};

export default useCreateColumn;
