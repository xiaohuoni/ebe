import { useMemo } from 'react';
import { SummaryConfig } from '../types/prop';
import { TableColumnProps } from 'antd';

export type ColItem = {

  /**
   * 总结行类型 sub 合计
   */
  'operateType': 'sub',

  /**
   * 总结行涉及列key集合
   */
  'group': string[]
}

export type Column = {key?: string; dataIndex: string; type?: string;
  fixed?: TableColumnProps<any>['fixed'];
  align?: TableColumnProps<any>['align'], children?: Array<Column>}
export interface SummaryProps<T> {
  summaryConfig?: SummaryConfig,
  readonly dataSource?: Array<T>;
  columns?: Array<Column>
}
const useSummaryCol = <T, >(props: SummaryProps<T>) => {
  const { summaryConfig, dataSource, columns } = props;
  const { summaryType, summaryGroup } = useMemo(() => {
    if (!summaryConfig) {
      return {
        summaryType: 'none',
        summaryGroup: [],
      };
    }
    const { type } = summaryConfig;
    return {
      summaryType: type,
      summaryGroup: type === 'single' ? summaryConfig?.col : summaryConfig?.group,
    };
  }, [summaryConfig]);

  const summaryColIndexMap = useMemo(() => {
    const map = new Map<string, {
      index: number,
      operateType: ColItem['operateType']
    }>();
    if (summaryType === 'none') {
      return map;
    }
    summaryGroup?.forEach(({ group, operateType }, index) => {
      if (group?.length) {
        group.forEach((g: string) => {
          map.set(g, {
            operateType,
            index,
          });
        });
      }
    });
    return map;
  }, [summaryGroup, summaryType]);

  /**
   * 1. 勾选相邻的，按顺序渲染，多列时进行合并
   * 2. 勾选不相邻时，空出来的填充空白单元格
   * 3. 勾选不相邻，位置存在交叉的，交叉的作为单独计算项
   */
  const summaryColList = useMemo(() => {
    if (summaryColIndexMap.size === 0) return [];
    const col: Array<{
      title: string | number,
      colSpan?: number,
      dataIndexList?: string[],
      operateType?: ColItem['operateType'],
      prev?: {
        index: number;
        fixed?: TableColumnProps<T>['fixed'];
      };
      align?: TableColumnProps<T>['align']
    }> = [];
      // 标记当前已经记录的总结列
    const currentSummaryColMap: Record<number, (typeof col)[number]> = {};
    columns?.forEach((c, i) => {
      if (i === 0 && c.type === 'orderCol' && summaryConfig?.name) {
        col.push({
          title: summaryConfig?.name,
          align: c.align,
        });
      } else {
        let item: (typeof col)[number] = {
          title: '',
          dataIndexList: [],
          align: c.align,
        };
        const { key, dataIndex } = c;
        const summaryCol = summaryColIndexMap.get(key || '');
        if (summaryCol) {
          const { index, operateType } = summaryCol;
          if (currentSummaryColMap[index]) {
            const prevItem = currentSummaryColMap[index];
            if (prevItem?.prev && i === prevItem?.prev?.index + 1 && prevItem?.prev?.fixed === c?.fixed) {
              // 勾选列是相邻的，则允许合并
              item = prevItem;
            } else {
              // 单独一列
              col.push(item);
            }
          } else {
            currentSummaryColMap[index] = item;
            // 合并分组
            col.push(item);
          }
          item?.dataIndexList?.push?.(dataIndex);
          item.colSpan = (item.colSpan || 0) + 1;
          if (item.colSpan > 1) {
            item.align = 'center';
          }
          item.prev = {
            index: i,
            fixed: c?.fixed,
          };
          item.operateType = operateType;
          return;
        }
        // 没有配置的单独一列作为空白单元格存在
        col.push(item);
      }
    });
    const dataMap:Record<string, any[]> = {};
    dataSource?.forEach((v) => {
      Object.keys(v || {}).forEach((key: string) => {
        if (!dataMap[key]) {
          dataMap[key] = [];
        }
        dataMap[key].push((v as any)[key]);
      });
    });
    return col.map((c) => {
      const { operateType, dataIndexList = [] } = c;
      const item = {
        ...c,
      };
      switch (operateType) {
        case 'sub': {
          // 计算合计
          const sub = dataIndexList.reduce((p, dataIndex) => {
            const data = dataMap[dataIndex] || [];
            let val = p;
            if (isNaN(val)) {
              // 转换失败不合计
              return NaN;
            }
            data.forEach((v) => { val += Number(v); });
            return val;
          }, 0);
          item.title = isNaN(sub) ? '' : sub.toFixed(summaryConfig?.decimal || 0);
          break;
        }
        default:
      }
      return item;
    });
  }, [dataSource, summaryConfig?.name, summaryConfig?.decimal, columns, summaryColIndexMap]);
  return {
    summaryColList,
  };
};

export default useSummaryCol;
