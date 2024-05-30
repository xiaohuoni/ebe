import { useEffect, useState } from 'react';
import { useExpandable as useTableExpandable } from '../../Table/hooks';

const useExpandable = (props: any) => {
  const {
    setInnerDataSource,
  } = props;

  const useTableExpandableReturn = useTableExpandable(props);
  const {
    childrenColumnName,
    expandable,
  } = useTableExpandableReturn;

  const [mode, setMode] = useState('all');

  const realExpandable = { ...expandable };
  realExpandable.expandIcon = (props: any) => {
    const { record } = props;

    // 当 record.isLeaf 为空时，先强制设置为非叶子节点
    let isLeaf = record?.isLeaf ?? false;

    // 当 record.isLeaf 为空时，需要区分当前数据属于什么场景
    if (record?.isLeaf === undefined) {
      if (mode !== 'sync') {
        if (
          record?.[childrenColumnName] === null ||
          record?.[childrenColumnName] === undefined ||
          !(childrenColumnName in record) ||
          (Array.isArray(record?.[childrenColumnName]) && record?.[childrenColumnName]?.length === 0)
        ) {
          // 为非异步场景，且没有下级数据，则修正为叶子节点
          isLeaf = true;
        }
      }
    }
    
    return expandable?.expandIcon({
      ...props,
      isLeaf,
    });
  };


  useEffect(() => {
    // 当模式为异步时，
    if (mode === 'sync') {
      // 为第一层节点加上 children，否则展开图标显示异常，会显示在复选框同一列
      setInnerDataSource((originDataSource: any) => {
        return originDataSource.map((r: any) => {
          r[childrenColumnName] = [];
          return r;
        });
      });
    }
  }, [mode]);

  return {
    ...useTableExpandableReturn,
    setMode,
    expandable: realExpandable,
  };
};

export default useExpandable;
