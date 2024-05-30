import { useEffect, useMemo, useRef, useState } from 'react';

const useScroll = (props: any) => {
  const {
    initLoadColWidth,
    finalcolumns,
    columnWidth,
    adjustModel,
    scroll: tableScroll,
  } = props;

  const tableWrapRef = useRef<any>();
  const initTableWrapWidthRef = useRef<any>();
  const preTablePosition = useRef<any>(); // 缓存上次计算位置的表格位置
  const [tableScrollY, setTableScrollY] = useState(0);

  /**
   * 适配 scroll，主要是 scroll.x
   * antd 4.x 在设置横向滚动时，表格宽度最好大于列宽度（如果有设置的话）总和，否则会出现列被挤压的情况
   */
  const realScroll = useMemo(() => {
    if (
      tableScroll &&
      typeof tableScroll === 'object' &&
      !Array.isArray(tableScroll)
    ) {
      if (finalcolumns && finalcolumns.length) {
        const colWidths = finalcolumns.reduce(
          // 没有配置宽度的，计算时，默认给一个缺省值100
          (prev: any, next: any) => Number(prev) + Number(next.width || 100),
          [0],
        );
        const tableScrollX = tableScroll.x || 0;

        return {
          ...tableScroll,
          x: colWidths > tableScrollX ? colWidths : tableScrollX,
        };
      }

      return tableScroll;
    }
    return {};
  }, [finalcolumns, tableScroll]);

  const getTableWrapWidth = () => {
    return columnWidth.reduce((acc: number, width: number) => acc + width, 0);
  };

  const computedTablePosition = () => {
    if (tableWrapRef.current && !tableScroll?.y && adjustModel === 'fill') {
      // 当前表格所在位置
      const tableWrapPosition =
        tableWrapRef?.current?.getClientRects?.()?.[0] || {};
      // 表格位置超过屏幕 1/2不自适应
      if (tableWrapPosition.y <= window.innerHeight / 2) {
        const tableHeight = window.innerHeight - tableWrapPosition.y;
        // 分页高度
        let paginationHeight = 0;
        let tableHeaderHeight = 0;
        const paginationRef = tableWrapRef?.current?.querySelector?.(
          '.pcfactory-pagination',
        );
        const theadRef = tableWrapRef?.current?.querySelector?.('thead');
        if (paginationRef && paginationRef.offsetHeight) {
          paginationHeight = paginationRef.offsetHeight;
        }
        if (theadRef && theadRef.offsetHeight) {
          tableHeaderHeight = theadRef.offsetHeight;
        }
        // 表格内容区域高度
        const tableContainerHeight = tableHeight - paginationHeight - 50;
        const tableScrollHeight = tableContainerHeight - tableHeaderHeight;
        // 表格区域设置固定高度 填充剩余页面
        tableWrapRef.current.querySelector(
          '.pcfactory-table',
        ).style.height = `${tableContainerHeight}px`;
        setTableScrollY(tableScrollHeight);
        // 保存当前表格位置
        preTablePosition.current = tableWrapPosition.y;
      }
    }
  };

  useEffect(() => {
    const top = (tableWrapRef?.current?.getClientRects?.()?.[0] || {}).y;
    // 位置变化了
    if (preTablePosition.current && preTablePosition.current !== top) {
      computedTablePosition();
    }
  });

  useEffect(() => {
    if (tableWrapRef.current) {
      initTableWrapWidthRef.current = tableWrapRef.current.offsetWidth;
      computedTablePosition();
    }
  }, [tableWrapRef.current]);

  const scroll: any = initLoadColWidth
    ? { ...tableScroll, x: getTableWrapWidth() }
    : realScroll;
  if (
    tableWrapRef.current &&
    !tableScroll?.y &&
    adjustModel === 'fill' &&
    tableScrollY > 0
  ) {
    scroll.y = tableScrollY;
  }

  return {
    scroll,
    tableWrapRef,
    initTableWrapWidthRef,
    getTableWrapWidth,
  };
};

export default useScroll;
