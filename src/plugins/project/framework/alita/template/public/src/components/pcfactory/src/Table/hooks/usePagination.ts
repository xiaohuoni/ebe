import { useEffect, useMemo, useState } from 'react';
import { useListenProps } from '../../utils';
import classNames from 'classnames';
import { useLocale } from '../../utils/hooks/useLocale';

const usePagination = (props: any) => {
  const {
    size,
    showQuickJumper,
    showSizeChanger,
    pageSizeOptions,
    page,
    current: originCurrent,
    total: originTotal,
    pageSize: originPageSize,
    showTotal,
    onPageChange,
  } = props;

  // TODO: 有咩有判断是否是前端分页更好的方式？
  const hasPageChangeEvent = typeof onPageChange === 'function'; // 是否配置页码改变回调事件（是：后端分页，否：前端分页）

  const { getLocale } = useLocale(props?.getEngineApis?.());

  const [currentPage, setCurrentPage] = useState(originCurrent || 1);
  const [currentPageSize, setCurrentPageSize] = useState(originPageSize || 10);
  const [total, setTotal] = useListenProps(originTotal);
  const [current, setCurrent] = useListenProps(originCurrent);
  const [pageSize] = useListenProps(originPageSize);

  // 解析分页选择器配置
  const parsedPageSizeOptions = useMemo(() => {
    if (pageSizeOptions) {
      try {
        const arr = JSON.parse(pageSizeOptions);
        if (Array.isArray(arr)) {
          return arr.map((s) => String(s));
        }
        return [];
      } catch (e) {
        console.error('条数可选值 pageSizeOptions 必须配置为数字数组字符串'); // eslint-disable-line no-console
      }
    }
    return [];
  }, [pageSizeOptions]);

  // current为空时默认为1
  const paginationCurrent = (current ? +current : current) || 1;
  const paginationPageSize = (pageSize ? +pageSize : pageSize) || 10;
  const pagination = {
    showTotal: showTotal ? (total: number) => getLocale('Pagination.showTotal', { tol: total }) : undefined,
    // TODO: 这里目前存在一个问题，若配置了空的分页事件，自动认为是后端分页，实际上
    current: (hasPageChangeEvent ? paginationCurrent : currentPage),
    pageSize: (hasPageChangeEvent ? paginationPageSize : currentPageSize),
    total: Number(total) || undefined,
    showQuickJumper,
    showSizeChanger,
    pageSizeOptions: parsedPageSizeOptions,
    size: 'default',
    className: classNames('ued-table-page', `ued-table-page-${size}`),
    // onChange: (newCurrent: React.SetStateAction<number>, newPageSize: number) => {
    //   if (hasPageChangeEvent) {
    //     onPageChange(newCurrent, newPageSize);
    //     return;
    //   }
    //   setCurrentPage(newCurrent);
    //   setCurrentPageSize(newPageSize);
    // },
  };


  useEffect(() => {
    // 前端分页时，若传入的分页信息有变更且有效，需要更新内部维护的分页数据
    if (!hasPageChangeEvent) {
      if (
        typeof current === 'number' ||
        (typeof current === 'string' && !isNaN(Number(current)))
      ) {
        setCurrentPage(Number(current));
      }

      if (
        typeof pageSize === 'number' ||
        (typeof pageSize === 'string' && !isNaN(Number(pageSize)))
      ) {
        setCurrentPageSize(Number(pageSize));
      }
    }
  }, [
    current,
    pageSize,
  ]);

  return {
    pagination,
    page,
    hasPageChangeEvent,
    setCurrent,
    setCurrentPage,
    setCurrentPageSize,
    setTotal,
    onPageChange,
  };
};

export default usePagination;
