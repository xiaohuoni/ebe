import React, { useState, useMemo } from 'react';
import { Pagination } from 'antd';

export interface MyPaginationProps {
  size: any,
  style?: any;
  className?: any;
  visible: boolean,
  disabled: boolean,
  simple: boolean,
  pageSize: number,
  total?: number;
  current?: number;
  pagination?: any;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  pageSizeOptions?: string;
  onPageChange?: (page: React.SetStateAction<number>, size: number) => void;
  getEngineApis?: any;
}

// const prefixCls = 'pagination';

const MyPagination: React.FC<MyPaginationProps> = props => {
  const {
    visible, size, disabled, simple, style, className,
    current, pageSize, total, showQuickJumper, showSizeChanger, pageSizeOptions,
    onPageChange,
    getEngineApis,
  } = props;

  const [currentPage, setCurrentPage] = useState(current || 1);
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);

  const hasPageChangeEvent = typeof onPageChange === 'function'; // 是否配置页码改变回调事件（是：后端分页，否：前端分页）
  const realCurrent = (hasPageChangeEvent ? current : currentPage) || 1;
  const realPageSize = (hasPageChangeEvent ? pageSize : currentPageSize) || 10;
  
  // 解析分页选择器配置
  const parsedPageSizeOptions = useMemo(() => {
    if (pageSizeOptions) {
      try {
        const arr = JSON.parse(pageSizeOptions);
        if (Array.isArray(arr)) {
          return arr.map((s) => String(s));
        }
        return undefined;
      } catch (e) {
        console.error('条数可选值 pageSizeOptions 必须配置为数字数组字符串'); // eslint-disable-line no-console
      }
    }
    return undefined;
  }, [pageSizeOptions]);

  const paginationProps: any = {
    size,
    disabled,
    simple,
    current: +realCurrent,
    pageSize: realPageSize,
    total: Number(total) || 0,
    showQuickJumper,
    showSizeChanger,
    pageSizeOptions: parsedPageSizeOptions,
    showTotal: (tol: any) => getEngineApis?.()?.getLocale?.('Pagination.showTotal', undefined, { tol }),
    onShowSizeChange: (newCurrent: number, newPageSize: number) => {
      if (hasPageChangeEvent) {
        onPageChange(newCurrent, newPageSize);
        return;
      }
      setCurrentPage(newCurrent);
      setCurrentPageSize(newPageSize);
    },
    onChange: (newCurrent: React.SetStateAction<number>, newPageSize: number) => {
      if (hasPageChangeEvent) {
        onPageChange(newCurrent, newPageSize);
        return;
      }
      setCurrentPage(newCurrent);
    },
  };

  return visible ? (
    <Pagination
      {...paginationProps}
      style={style}
      className={className}
    />
  ) : null;
};


export default MyPagination;
