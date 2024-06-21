import type { ComponentItemType } from '@lingxiteam/types';
import { LingxiForwardRef } from '@lingxiteam/types';
import { CellClickedEvent, DomLayoutType } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { Skeleton } from 'antd-mobile-5';
import { isEqual } from 'lodash';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Empty } from '../BasicComponents';
import Icon from '../Icon';
import { leftDirection, rightDirection } from './assets/index';
import useCreateColumn from './hooks/useCreateColumn';
import './index.less';
// import { ListNoFound } from '@lingxiteam/icons';

const themeList = {
  segmentation: 'ag-theme-segmentation',
  zebra: 'ag-theme-zebra',
  border: 'ag-theme-border',
};

export interface MyDynamicTableProps {
  bordered: string; // 边框样式
  columns: any[]; // 内容列
  fixedLeft?: boolean; // 首列固定
  fixedRight?: boolean; // 尾列固定
  twoDimension: boolean; // 是否二维表格
  style: any;
  pagination: boolean;
  pageSize?: number;
  pageNum?: number;
  total?: number | string;
  showMore?: boolean;
  showHead: boolean;
  tableTitle?: string;
  dataSource?: any[];
  rowLines: number;
  $$componentItem: ComponentItemType;
  appId?: string;
  pageId?: string;
  rowKeyType: string;
  rowKey?: string;
  onPageChange?: (page: number, pageSize: number) => void;
  onRowClick?: (rowId: any, row: any, index: number | null) => void;
  onTableCellClick?: (
    row: Record<string, any>,
    cell: any,
    cellId: string,
  ) => void;
  status: string;
  dataSourceLoading?: boolean;
  className?: string;
  currentData: any[];
  setCurrentData: React.Dispatch<React.SetStateAction<any[]>>;
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  dataLoading: boolean;
  setDataLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const prefixCls = 'appDynamicTable';

const DynamicTable = LingxiForwardRef<any, MyDynamicTableProps>(
  (props, ref) => {
    const {
      bordered,
      // fixedLeft,
      // fixedRight,
      style,
      pagination,
      pageSize: currentPageSize,
      pageNum: currentPage = 1,
      total,
      showMore,
      rowLines,
      showHead,
      tableTitle,
      dataSource,
      getEngineApis,
      rowKeyType,
      rowKey,
      onPageChange,
      onRowClick,
      onTableCellClick,
      status,
      // dataSourceLoading = false,
      $$componentItem,
      className,
      currentData,
      setCurrentData,
      setPageNum,
      dataLoading,
      setDataLoading,
    } = props;

    // console.log('DynamicTable:', props);
    const gridRef = useRef<any>();
    const fatherViewRef = useRef<any>();
    const tableDataRef = useRef<any>({});

    const engineApis = getEngineApis?.();
    const [tableHeight, setTableHeight] = useState<any>({});
    // const [currentPage, setCurrentPage] = useState<any>(pageNum || 1);
    // const [currentPageSize, setCurrentPageSize] = useState<any>(pageSize);
    // const [myTotal, setMyTotal] = useState<number | string>();
    // @ts-ignore
    const [themeClass, setThemeClass] = useState<string>(themeList[bordered]);
    const [showAllData, setShowAllData] = useState<boolean>(false);
    const [gridLayout, setGridLayout] = useState<DomLayoutType>('normal');
    const tableRowKey = rowKeyType === 'auto' ? undefined : rowKey;
    const [reloadTable, setReloadTable] = useState<string>('');
    const [showOther, setShowOther] = useState<boolean>(false);
    // const [dataLoading, setDataLoading] = useState<boolean>(true);
    const [finalColumn, setFinalColumn] = useState<any>([]);

    const [headerColor, setHeaderColor] = useState<string>();
    const [headerBgColor, setHeaderBgColor] = useState<string>();
    const [firstColumnColor, setFirstColumnColor] = useState<string>();
    const [firstColumnBgColor, setFirstColumnBgColor] = useState<string>();

    const { getLocale, getLocaleEnv, dataState } = engineApis;
    const language = getLocaleEnv();

    const { myColumn, aggregate } = useCreateColumn({
      ...props,
      isEditor: false,
      data: Array.isArray(dataSource) ? dataSource : [],
      appId: $$componentItem?.appId || '',
      pageId: $$componentItem?.pageId || '',
      tableRowKey,
      setReloadTable,
      tableDataRef,
      firstColumnColor,
      firstColumnBgColor,
      headerColor,
      headerBgColor,
      sandBoxLoadModule: engineApis.sandBoxLoadModule,
      getEngineApis,
      renderIcon: (iconProps) => (
        <Icon
          {...iconProps}
          $$componentItem={$$componentItem}
          getEngineApis={getEngineApis}
        />
      ),
    });

    if (typeof currentPage !== 'undefined') {
      tableDataRef.current.currentPage = currentPage;
    }

    const allPages = useMemo(() => {
      return Math.ceil(Number(total) / Number(currentPageSize));
    }, [total, currentPageSize]);

    // 表格动作事件
    useImperativeHandle(ref, () => ({
      // setTableData: (data: any[]) => {
      //   tableDataRef.current.allData = data;
      //   resetCurrentPageData();
      // },
      // setTotal: (total: any) => {
      //   if (typeof total !== 'undefined') {
      //     setMyTotal(Number(total));
      //   }
      // },
      // setPageNum: (page: any) => {
      //   if (typeof page !== 'undefined') {
      //     tableDataRef.current.currentPage = Number(page);
      //     setCurrentPage(Number(page));
      //   }
      // },
      // setPageSize: (pageSize: any) => {
      //   if (typeof pageSize !== 'undefined') {
      //     setCurrentPageSize(Number(pageSize));
      //   }
      // },
      // setLoading:(loading: boolean, reloadDataSource?: string) => {
      //   if(reloadDataSource && reloadDataSource === 'reloadDataSource') {
      //     if(dataSourceLoading) {
      //       setDataLoading(loading);
      //     }
      //   } else {
      //     setDataLoading(loading);
      //   }
      // },
      // clearData: () => {
      //   tableDataRef.current.pageData = [];
      //   setCurrentData([]);
      // },
      // getCurrentPage: () => {
      //   return currentPage;
      // },
      // getcurrentData: () => {
      //   return currentData;
      // },
    }));

    const columnAutoSize = () => {
      // 宽度自适应
      const allColumnIds: any[] = [];
      gridRef?.current?.columnApi?.getColumns().forEach((column: any) => {
        // 只对没有设置宽度的数据进行宽度自适应
        if (!column?.userProvidedColDef?.width) {
          allColumnIds.push(column.getId());
        }
      });
      gridRef?.current?.columnApi.autoSizeColumns(allColumnIds, false);
      setTimeout(() => {
        const columnState = gridRef?.current?.columnApi?.getColumnState();
        let totalWidth = 0;
        columnState?.forEach?.((column: any) => {
          totalWidth += column.width;
        });
        if (totalWidth < fatherViewRef?.current?.offsetWidth - 2) {
          // 在数据列数比较少的时候，让表格内容充满宽度。
          gridRef.current?.api?.sizeColumnsToFit();
        }
        // console.log("Total Width:", totalWidth, fatherViewRef?.current?.offsetWidth);
      }, 100);
    };

    // 表格已准备好
    const onGridReady = useCallback(() => {
      // gridRef.current?.api?.sizeColumnsToFit();
      // setTimeout(() => {
      // columnAutoSize();
      // }, 10);
    }, []);

    // 行点击事件
    const onCellRowSelected = useCallback((event: CellClickedEvent) => {
      // 如果自定义cell有点击事件就不响应点击单元格事件和点击行事件
      if (onTableCellClick && !(event?.colDef as any)?.lxHasOwnCellClick) {
        onTableCellClick(event?.data, event?.value, event?.colDef?.field || '');
      }
      if (onRowClick && !(event?.colDef as any)?.lxHasOwnCellClick) {
        const rowId = tableRowKey
          ? event?.data?.[tableRowKey]
          : event?.node?.id;
        onRowClick(rowId, event?.data, event?.rowIndex);
      }
    }, []);

    // 页码改变事件
    const onPageChangeClick = (next: boolean) => {
      let page = currentPage;
      if (next) {
        // 下一页
        if (page >= allPages) {
          return;
        }
        page += 1;
      } else {
        // 上一页
        if (page <= 1) {
          return;
        }
        page -= 1;
      }
      tableDataRef.current.currentPage = page;
      setPageNum(page);
      if (onPageChange) {
        setDataLoading(true);
        onPageChange(page, Number(currentPageSize || 10));
      }
    };

    const NoData = () => <Empty dataState={dataState} getLocale={getLocale} />;
    // const NoData = () =>  <ListNoFound
    //     className='table-empty'
    //       description={(
    //         <div className='empty-tip'>
    //               暂无数据
    //           </div>
    //       )}
    //   />

    const noRowsOverlayComponent = useMemo(() => {
      return NoData;
    }, [currentData]);

    const onFirstDataRendered = useCallback(() => {
      const rowHeight = 40;
      let displayedRowCount;
      if (showMore && !pagination) {
        displayedRowCount = rowLines;
      } else {
        displayedRowCount = tableDataRef.current?.allData?.length;
      }
      if (typeof displayedRowCount === 'undefined' || displayedRowCount === 0) {
        setTableHeight({ flex: 1 });
      } else {
        let totalHeight = rowHeight * (displayedRowCount + 1) + 5;
        if (Object.keys(aggregate || {})?.length > 0) {
          // 底部有合计栏再增加一栏
          totalHeight += rowHeight;
        }
        setTableHeight({ height: `${totalHeight}px` });
      }

      gridRef?.current?.api?.sizeColumnsToFit();
      setTimeout(() => {
        columnAutoSize();
      }, 50);
    }, [aggregate]);

    // useEffect(() => {
    //   setCurrentPageSize(pageSize);
    // }, [pageSize, total]);

    useEffect(() => {
      // 设置合计数据将合计固定在表格底部
      if (currentData?.length > 0 && Object.keys(aggregate)?.length > 0) {
        const name = finalColumn?.[0]?.field;
        const aggregateData: any = {
          [name]: getLocale('DynamicTable.total', '合计'),
        };
        currentData.forEach((item: any) => {
          Object.keys(aggregate)?.forEach((c) => {
            aggregateData[c] =
              (Number(aggregateData?.[c]) || 0) + (Number(item?.[c]) || 0);
          });
        });
        gridRef?.current?.api?.setPinnedBottomRowData([aggregateData]);
      } else {
        gridRef?.current?.api?.setPinnedBottomRowData([]);
      }
    }, [aggregate, currentData, language]);

    // useEffect(() => {
    //   if (finalColumn.length > 1) {
    //     const state: any[] = [];
    //     if (fixedLeft) {
    //       state.push({ colId: finalColumn[0]?.field, pinned: 'left' });
    //     }
    //     if (fixedRight) {
    //       state.push({ colId: finalColumn[finalColumn.length - 1]?.field, pinned: 'right' });
    //     }
    //     gridRef?.current?.columnApi?.applyColumnState({
    //       state,
    //       defaultState: { pinned: null },
    //     });
    //   }
    // }, [fixedLeft, fixedRight, finalColumn]);

    useEffect(() => {
      if (gridRef?.current) {
        setTimeout(() => {
          // 刷新一下操作列的宽度
          gridRef?.current?.columnApi?.autoSizeColumn(
            '--Table-Action--',
            false,
          );
          // 刷新整表  传入{ rowNodes: rows }则刷新对应行
          gridRef.current?.api?.redrawRows();
        });
      }
    }, [finalColumn, reloadTable]);

    useEffect(() => {
      // @ts-ignore
      setThemeClass(themeList[bordered]);
    }, [bordered]);

    // 查看更多
    useEffect(() => {
      if (!showMore && showAllData) {
        setShowAllData(false);
      }
    }, [showMore]);

    useEffect(() => {
      // 首次数据加载完成后将表格底部设置设置下
      if (tableDataRef.current?.agTableReady) {
        setShowOther(true);
      }
    }, [currentData]);

    const resetCurrentPageData = () => {
      const list = tableDataRef.current?.allData;
      if (Array.isArray(list)) {
        tableDataRef.current.agTableReady = true;
        if (showMore && !showAllData && !pagination) {
          const myData =
            rowLines > list.length ? list : list.slice(0, rowLines);
          setCurrentData([...myData]);
          tableDataRef.current.pageData = [...myData];
        } else {
          setCurrentData([...list]);
          tableDataRef.current.pageData = [...list];
        }
        setDataLoading(false);
      } else {
        // dataSource为undefined时, 如果配置了onPageChange则自动请求一下数据
        // eslint-disable-next-line no-lonely-if
        // if (onPageChange && !tableDataRef.current?.agTableReady) {
        //   onPageChange(1, Number(currentPageSize || 10));
        //   tableDataRef.current.agTableReady = true;
        //   setDataLoading(true);
        // } else {
        //   // // 无数据
        //   // setCurrentData([]);
        //   // tableDataRef.current.pageData = [];
        //   // setDataLoading(false);
        // }
      }
    };

    useEffect(() => {
      resetCurrentPageData();
    }, [showMore, rowLines, showAllData, pagination]);

    useEffect(() => {
      tableDataRef.current.allData = dataSource;
      resetCurrentPageData();
    }, [dataSource]);

    useEffect(() => {
      if (dataLoading) {
        // 表格加载中---将表格的cellRender修改成鱼骨屏
        const columnList: any[] = [];
        myColumn.forEach((item: any) => {
          const style = {
            '--width': '100%',
            '--height': '12px',
            'margin-top': '14px',
          };
          const data = {
            field: item.field,
            headerName: item.headerName,
            width: item?.width,
            cellRenderer: () => <Skeleton.Title animated style={style} />,
          };
          columnList.push(data);
        });
        setThemeClass(themeList.zebra);
        setFinalColumn(columnList);
        // 模拟一些数据让loading能够显示
        if (currentData?.length === 0) {
          // 获取此时表格的高度
          let columnNumber = 3;
          const emptyData = [];
          if (fatherViewRef?.current?.offsetHeight) {
            columnNumber = Math.floor(fatherViewRef.current.offsetHeight / 40);
          }
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < columnNumber; i++) {
            emptyData.push('');
          }
          setCurrentData(emptyData);
        }
      } else {
        setFinalColumn(myColumn);
        // @ts-ignore
        setThemeClass(themeList[bordered]);
        if (!isEqual(currentData, tableDataRef?.current?.pageData)) {
          setCurrentData(tableDataRef.current.pageData || []);
        }
      }
    }, [myColumn, dataLoading]);

    useEffect(() => {
      if (style) {
        if (style?.height === 'auto') {
          setGridLayout('autoHeight');
        } else {
          setGridLayout('normal');
        }
        if (style?.titleColor) {
          setHeaderColor(style.titleColor);
        }
        if (style?.titleBackground) {
          setHeaderBgColor(style.titleBackground);
        }
        if (style?.leftBackground) {
          setFirstColumnBgColor(style.leftBackground);
        }
        if (style?.leftTitleColor) {
          setFirstColumnColor(style.leftTitleColor);
        }
      }
    }, [style]);

    return (
      <>
        {status === '1' && (
          <div className={`${prefixCls} ${className}`} style={style}>
            {showHead && tableTitle && (
              <div className="table-header">{tableTitle}</div>
            )}
            <div
              className="table-body"
              ref={fatherViewRef}
              style={
                {
                  '--dynamic-table-header-bg-color': headerBgColor,
                  '--dynamic-table-header-color': headerColor,
                  ...tableHeight,
                } as any
              }
            >
              <AgGridReact
                headerHeight={40}
                rowHeight={40}
                className={themeClass}
                ref={gridRef}
                // loadingOverlayComponent={loadingOverlayComponent} // 加载中页面
                // loadingOverlayComponentParams={loadingOverlayComponentParams} // 加载中页面传入参数
                noRowsOverlayComponent={noRowsOverlayComponent} // 无数据页面
                // noRowsOverlayComponentParams={loadingOverlayComponentParams}
                rowData={currentData}
                suppressMovableColumns // 禁止拖动
                columnDefs={finalColumn}
                onGridReady={onGridReady}
                suppressRowTransform // 支持行合并
                animateRows
                rowSelection="single"
                suppressRowClickSelection
                rowStyle={{ background: 'none' }} // 去除选中行颜色
                // onRowSelected={onCellRowSelected} //选中行
                onCellClicked={onCellRowSelected} // 点击行
                pagination={pagination} // 是否分页
                paginationPageSize={currentPageSize} // 分页大小
                suppressPaginationPanel // 隐藏默认分页符
                domLayout={gridLayout} // 自动高度
                onFirstDataRendered={onFirstDataRendered}
              />
            </div>
            {showOther &&
              showMore &&
              !showAllData &&
              !pagination &&
              tableDataRef.current?.allData && (
                <span
                  className="more-cell"
                  onClick={() => {
                    setShowAllData(true);
                    const height = `${
                      (tableDataRef.current?.allData?.length + 1) * 40
                    }px`;
                    setTableHeight({ height });
                  }}
                >
                  {getLocale('DynamicTable.more', '查看更多')}
                </span>
              )}
            {showOther &&
              pagination &&
              currentData.length > 0 &&
              tableDataRef.current?.allData && (
                <div className="table-footer">
                  <span
                    className="button"
                    onClick={() => onPageChangeClick(false)}
                  >
                    {leftDirection}
                  </span>
                  <div className="text">
                    <span className="current-page">{currentPage}</span>/
                    {allPages}
                  </div>
                  <span
                    className="button"
                    onClick={() => onPageChangeClick(true)}
                  >
                    {rightDirection}
                  </span>
                </div>
              )}
          </div>
        )}
      </>
    );
  },
);

export default DynamicTable;
