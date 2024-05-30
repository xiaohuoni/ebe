import { useImperativeHandle } from 'react';
import { useCommonCMDAction } from '../../Table/hooks';

const useCMDAction = (props: any) => {
  const {
    ref,
    currentRowKey,
    childrenColumnName,
    innerDataSource,
    setInnerDataSource,
    setOuterDataSource,
    setChildrenColumnName,
    setMode,
  } = props;

  const {
    loading,
    colServiceData,
  } = useCommonCMDAction(props);

  useImperativeHandle(ref, () => ({

    /**
     * 加载树形表格数据（加载完之后，表格就脱离了数据源的控制了）
     */
    reloadTreeTableData: (data: { dataSource: any[]; childrenKey: string; childrenSync: boolean; }) => {
      /**
       * 注意，不是直接使用 setInnerDataSource
       * 而是通过 setOuterDataSource 间接驱动 -> setInnerDataSource
       * 因为需要对数据进行初始化
       */
      setOuterDataSource(data?.dataSource || []);
      setChildrenColumnName(data?.childrenKey);
      setMode(data?.childrenSync ? 'sync' : 'all');
    },

    /**
     * 加载子节点数据
     * 理论上，只更新内部数据
     */
    reloadTreeTableChildData: (data: { children: any[]; expandRowKey: string }) => {
      const {
        children,
        expandRowKey,
      } = data;

      // 异步加载限制为 children
      const realChildrenColumnName = childrenColumnName || 'children';

      const findChild = (data: any[]) => {
        if (Array.isArray(data)) {
          for (let i = 0; i < data.length; i += 1) {
            const row = data[i];
            if (row?.[currentRowKey] === expandRowKey) {
              // 没有数据才加载
              if (!row?.[realChildrenColumnName]?.length) {
                row[realChildrenColumnName] = children;
                row.isLeaf = children?.length === 0;
              }
              break;
            }
            
            if (Array.isArray(row?.[realChildrenColumnName])) {
              findChild(row[realChildrenColumnName]);
            }
          }
        }
      };

      findChild(innerDataSource);
      // 触发一下表格刷新
      setInnerDataSource([...innerDataSource]);
    },
  }));

  return {
    loading,
    colServiceData,
  };
};

export default useCMDAction;
