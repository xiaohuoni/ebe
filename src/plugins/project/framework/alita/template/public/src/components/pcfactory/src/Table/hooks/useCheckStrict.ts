import { useMemo } from 'react';
import { useCreation } from '../../utils/ahooks';
import { recursionDataSource, getFullCheckedKeySet } from '../utils';
import { LevelItem } from '../types/prop';

interface CheckStrictlyParams<T> {
  rowSelectType?: 'checkbox' | 'radio',
  checkLoosed?: boolean,
  dataSource: T[];
  currentRowKey: string;
  childrenKey?: string
}

function useCheckStrict<T extends {children?: T[], [key: string]: unknown}> (params: CheckStrictlyParams<T>) {
  const { rowSelectType, checkLoosed = false, dataSource, currentRowKey, childrenKey = 'children' } = params;
  // 父子数据是否关联选择，默认不关联
  const checkStrictly = useMemo(() => !(rowSelectType === 'checkbox' && checkLoosed), [checkLoosed, rowSelectType]);

  // 标记节点是否禁用
  const { relatedDisabledMap, markDisable, getLevelDataMap, getRecordByKey } = useCreation(() => {
    const relatedDisabledMap: Record<string, boolean> = {};
    const markDisable = (node: T, flag: boolean = false) => {
      if (!checkStrictly) {
        relatedDisabledMap[node[currentRowKey] as string] = flag;
        if (flag && node[childrenKey]) {
          recursionDataSource<T>(node[childrenKey] as T[], (n) => {
            relatedDisabledMap[n[currentRowKey] as string] = flag;
          }, childrenKey);
        }
      }
    };
    const levelDataMap: Map<number, LevelItem<T>[]> = new Map();
    let maxLevel = 0;
    // 按数据层级收集映射数据
    const getLevelDataMap = () => {
      if (levelDataMap.size > 0) {
        return {
          levelDataMap,
          maxLevel,
        };
      }
      recursionDataSource<T, LevelItem<T>>(dataSource, (node, parentPath) => {
        const level = parentPath?.length || 0;
        maxLevel = Math.max(maxLevel, level);
        const n = {
          ...node,
          __key__: node[currentRowKey] as string,
          __parent__: level && parentPath ? parentPath[level - 1] : undefined,
          __children__: node[childrenKey] as LevelItem<T>[],
        };
        if (levelDataMap.get(level)) {
          levelDataMap.get(level)?.push(n);
        } else {
          levelDataMap.set(level, [n]);
        }
        return n;
      }, '__children__');
      return {
        levelDataMap,
        maxLevel,
      };
    };

    // 记录数据映射
    const dataCacheMap: Record<string, T> = {};
    // extraData 之前选中过的跨页数据不存在当前dataSource中
    const getRecordByKey = (key: string | number, extraData?: T[]) => {
      if (dataCacheMap[key]) {
        return dataCacheMap[key];
      }
      recursionDataSource([...dataSource, ...(extraData || [])], (n) => {
        dataCacheMap[n[currentRowKey] as string] = n;
      }, childrenKey);
      return dataCacheMap[key];
    };

    return {
      markDisable,
      relatedDisabledMap,
      getLevelDataMap,
      getRecordByKey,
    };
  }, [dataSource, checkStrictly, currentRowKey, childrenKey]);


  // 获取单个勾选/反选时的选中项
  const triggerSingleSelection = (originSelectRow: T[], selectRow: T) => {
    const key = selectRow[currentRowKey];
    const checked = originSelectRow.findIndex((c) => c[currentRowKey] === key) === -1;
    const selectionList = checked
      ? [...originSelectRow, selectRow]
      : originSelectRow.filter((c) => c[currentRowKey] !== key);
    if (checkStrictly) {
      return selectionList;
    }
    const { levelDataMap, maxLevel } = getLevelDataMap();
    const keys = selectionList.map((c) => c[currentRowKey] as string);
    // 基于当前选中数据获取上层所有选中key
    const checkedSet = getFullCheckedKeySet({
      levelEntries: levelDataMap,
      maxLevel,
      currentCheckedKey: keys,
      disabledMap: relatedDisabledMap,
      checked,
    });
    const childrenRow: T[] = [];
    recursionDataSource(selectRow?.[childrenKey] as T[] || [], (n) => {
      if (!relatedDisabledMap[n[currentRowKey] as string]) {
        if (checked) {
          childrenRow.push(n);
        }
        // 过滤选中集合中的部分
        checkedSet.delete(n[currentRowKey] as string);
      }
    }, childrenKey);
    const checkedRows = [...checkedSet].map((k) => getRecordByKey(k, selectionList));
    return [...checkedRows, ...childrenRow];
  };

  // 根据当前选中项收集最终选中key
  const triggerFullSelection = (checkedKeys: (string|number)[]) => {
    if (checkStrictly) {
      return checkedKeys;
    }
    const { levelDataMap, maxLevel } = getLevelDataMap();
    const checkedSet = getFullCheckedKeySet({
      levelEntries: levelDataMap,
      maxLevel,
      currentCheckedKey: checkedKeys,
      disabledMap: relatedDisabledMap,
      checked: true,
    });
    return [...checkedSet];
  };

  return {
    checkStrictly,
    relatedDisabledMap,
    markDisable,
    triggerSingleSelection,
    triggerFullSelection,
  };
}

export default useCheckStrict;
