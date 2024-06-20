import React, { useMemo } from 'react';
import Row from './Row';

interface LayoutOptions {
  children: React.ReactNode;
  layoutOptions: {
    grid: number;
    colSpan: string;
    colSpace: string;
    rowSpace: string;
  };
}

const useLayout = (props: LayoutOptions) => {
  const items = React.Children.toArray(props.children);
  if (items.length === 0) {
    return props.children;
  }
  const { layoutOptions } = props;
  const { grid = 12, colSpan = '', colSpace, rowSpace } = layoutOptions || {};

  /**
   *
   * 一段javascript算法。
   * 以下有个目标数组。帮助目标数组划分二维数组，每个小数组之和不大于基数。
   * 示例1：
   * 输入：[12, 10, 1, 10, 9] 基数：12;
   * 输出：[[12], [10, 1], [10], [9]];
   *
   * 示例2：
   * 输入：[6, 6] 基数：12
   * 输出：[[6, 6]]
   */
  const rowData = useMemo(() => {
    const colSpanArr = colSpan.split(':').map((it) => Number(it ?? 0));

    const base = Number(grid);
    const rows: { span: number; index: number }[][] = [];
    let cols: { span: number; index: number }[] = [];
    let currentSum = 0;
    for (let i = 0; i < colSpanArr.length; i += 1) {
      const element = colSpanArr[i];

      if (currentSum + element <= base) {
        cols.push({ span: element, index: i });
        currentSum += element;
      } else {
        rows.push(cols);
        cols = [{ span: element, index: i }];
        currentSum = element;
      }
    }

    if (cols.length > 0) {
      rows.push(cols);
    }

    return rows;
  }, [grid, colSpan]);

  return useMemo(() => {
    return rowData.map((cols, index) => {
      return (
        <Row
          key={`${index}`}
          index={index}
          gutter={[rowSpace, colSpace]}
          cols={cols}
          render={(item) => {
            const { index } = item;
            return items[index];
          }}
          base={grid}
        />
      );
    });
  }, [items, rowData]);
};

export default useLayout;
