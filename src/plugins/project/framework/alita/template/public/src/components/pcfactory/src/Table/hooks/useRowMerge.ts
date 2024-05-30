import { useMemo } from 'react';

const useRowMerge = (props: any) => {
  const {
    sortDataSource,
    columns,
    nowInlineEditKey,
    currentRowKey,
  } = props;

  // 记录所有设置了行合并的列
  const rowSpanColMap = useMemo(() => {
    const map: any = {};
    columns.forEach((c: any) => {
      if (c.isRowSpan) {
        map[c.dataIndex] = true;
      }
    });
    return map;
  }, [columns]);

  /**
   * 表格数据、行合并信息以及行合并后最后一个td格子的样式
   * 表格原数据不设置多余变量，请求外系统服务时多余参数可能会导致报错
   */
  const [rowSpanMap, rowClassMap] = useMemo(() => {
    const tableRowSpan = new WeakMap();
    const tableRowClass = new WeakMap();
    // 记录负责合并行的主行
    const recursiveSet = (arr: any[]) => {
      const parentSpanRowsMap: any = {};
      const newData = (arr || []).map((d, i) => {
        const newD = d;

        const __rowSpan: any = {};
        const __rowClass: any = {};

        if (newD?.children?.length > 0) {
          newD.children = recursiveSet(newD.children);
        }
        // 正在编辑的或者有子节点的不算入合并行计算中
        if (
          (nowInlineEditKey && currentRowKey && nowInlineEditKey === d[currentRowKey]) ||
          newD?.children?.length > 0
        ) {
          return newD;
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
              if (i === arr.length - 1) {
                // 只设置最后一个td格的样式，防止边框表格时出现重复的边线
                __rowClass[rowIndex] = 'last-td';
              }
            } else {
              parentSpanRowsMap[rowIndex].row = newD;
            }
            parentSpanRowsMap[rowIndex].preIndex = i;
          }
        });
        
        tableRowSpan.set(newD, __rowSpan);
        tableRowClass.set(newD, __rowClass);

        return newD;
      });
      return newData;
    };
    recursiveSet(sortDataSource);
    // // loading没有数据的时候模拟3个数据
    // if(loading && d?.length === 0) {
    //   d = [{}, {}, {}];
    // }
    return [tableRowSpan, tableRowClass];
  }, [sortDataSource, rowSpanColMap, nowInlineEditKey, currentRowKey]);

  return {
    rowSpanColMap,
    rowSpanMap,
    rowClassMap,
  };
};

export default useRowMerge;
