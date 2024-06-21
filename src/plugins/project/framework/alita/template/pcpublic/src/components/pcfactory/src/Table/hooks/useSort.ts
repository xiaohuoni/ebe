import { useMemo, useState } from 'react';
import { compareFn } from '../utils';

const useSort = (props: any) => {
  const { innerDataSource, onSortChange } = props;

  const hasSortEvent = typeof onSortChange === 'function'; // 是否配置表格排序事件

  // 开启了行合并后由前端进行排序
  const [sortOrder, setSortOrder] = useState<
    | {
        field: string;
        order?: string;
      }
    | undefined
  >();

  // 前端排序后的数据
  const sortDataSource = useMemo(() => {
    if (!sortOrder?.order) {
      return innerDataSource;
    }
    return [...innerDataSource].sort((a, b) => {
      if (sortOrder?.order === 'ascend') {
        return compareFn(a[sortOrder?.field], b[sortOrder?.field]);
      }
      return compareFn(b[sortOrder?.field], a[sortOrder?.field]);
    });
  }, [innerDataSource, sortOrder]);

  return {
    onSortChange,
    sortDataSource,
    setSortOrder,
    hasSortEvent,
  };
};

export default useSort;
