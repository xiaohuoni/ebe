import { Table } from 'antd';
import { LevelItem } from '../types/prop';
// 以下逻辑调整时需同步到packages/editor/src/Input/TableColorGroup/utils.ts
export const treeRootName = 'tree-root';
export const hiddenHeaderCellClass = 'ued-table-hidden-head-cell';
export type SingleRowInfo = {
  [rowIndex: number]: {
    rowIdAndTitleColMap: any;
    nextRowsChildren: any;
  };
};
// 获取分组名称，为空的向下补全
const findGroupName = (groupList: string[], startIndex: number) => {
  const list = groupList.slice(startIndex);
  return list.find((g) => !!g) || '';
};
export const handleMultiLevelHeader = (leftTree: any, column: any) => {
  const { fixed = '' } = column;
  let { group } = column;

  // 兼容旧版的分组数据
  if (typeof group === 'string') {
    group = [group];
  }

  // 兼容可能存在的空数据
  if (group === '' || group === null || group === undefined) {
    group = [''];
  }

  // 过滤掉空的配置
  // group = group.filter((g: any) => g);
  // // 保留一个空配置，以进入构造
  group = group.length === 0 ? [''] : group;

  const groupLen = group.length;
  if (Array.isArray(group) && groupLen > 0) {
    // 标记右树从哪个节点开始至最后一个都为空(undefined/null/'')
    let groupEmptyStartIndex = groupLen - 1;
    while (
      typeof group[groupEmptyStartIndex] === 'undefined' ||
      group[groupEmptyStartIndex] === null ||
      group[groupEmptyStartIndex] === ''
    ) {
      // 当分组数据遍历完成 或 下一个已经不为空时，退出循环
      if (groupEmptyStartIndex - 1 < 0 || group[groupEmptyStartIndex - 1]) {
        break;
      }
      groupEmptyStartIndex -= 1;
    }

    // 构造右树（记录左树每一层的最后一个节点）:
    let rightLevel = 1;
    const rightTree = {
      title: treeRootName,
    };
    const rightTreeLevelMap: any = {
      0: rightTree,
    };
    let tempRightTree: any = rightTree;
    // 从第一层开始，最后一层会接入列信息
    while (rightLevel <= groupLen) {
      // 从当前层到最后一层都为空时：直接接入列信息，并退出循环
      if (
        rightLevel === groupEmptyStartIndex + 1 &&
        !group[groupEmptyStartIndex]
      ) {
        // 将列数据放入最后一层分组最后一个节点的children，即再加最后一层
        tempRightTree.children = [column];
        // 记录最最后一层
        rightTreeLevelMap[rightLevel] = column;
        break;
      }

      const rightTreeCurrLevelLast: any = {
        title: findGroupName(group, rightLevel - 1), // 为空的话，强制设置为 ''
        // 当前层为第一层时，将parent指向左树的根节点，为后续合并做准备
        parent: tempRightTree.title === treeRootName ? leftTree : tempRightTree,
        //
        fixed,
        align: 'center',
      };
      tempRightTree.children = [rightTreeCurrLevelLast];
      tempRightTree = rightTreeCurrLevelLast;
      rightTreeLevelMap[rightLevel] = rightTreeCurrLevelLast;
      rightLevel += 1;

      // 构造到最后一层分组时：接入列信息，并退出循环
      if (rightLevel > groupLen) {
        // 将列数据放入最后一层分组最后一个节点的children，即再加最后一层
        rightTreeCurrLevelLast.children = [column];
        // 记录最最后一层
        rightTreeLevelMap[rightLevel] = column;
        break;
      }
    }

    // 分析左树（记录左树每一层的最后一个节点）：
    let leftLevel = 0;
    const leftTreeLevelMap = {
      [leftLevel]: leftTree,
    };
    let leftTreeCurrLevelLast = leftTree;
    // 遍历左树右边侧节点（生成数据结构记录节点情况）：
    while (leftTreeCurrLevelLast?.children) {
      leftLevel += 1;
      const leftTreeCurrLevelLastChildren = leftTreeCurrLevelLast.children;
      // 取左树当前层的最后一个
      leftTreeCurrLevelLast =
        leftTreeCurrLevelLastChildren[leftTreeCurrLevelLastChildren.length - 1];
      leftTreeLevelMap[leftLevel] = leftTreeCurrLevelLast;
    }

    // 遍历右树（i 表示右树的层级）：
    for (let i = 0; i <= groupLen; i += 1) {
      const leftTreeLast = leftTreeLevelMap[i]; // 左树第i层的最后一个
      const current = rightTreeLevelMap[i]; // 右树第 i 层的最后一个（唯一一个）
      if (i === 0) {
        if (!leftTreeLast.children) {
          leftTreeLast.children = [];
        }
        leftTreeLast.children.push(...(current?.children || []));
      } else if (
        current &&
        current?.title === leftTreeLast?.title &&
        current?.fixed === leftTreeLast?.fixed
      ) {
        current.colSpanStart = leftTreeLast?.colSpanStart || leftTreeLast;
        const colSpan = current?.colSpanStart?.colSpan || 1;
        current.colSpanStart.colSpan = colSpan + 1;
        // 被合并的单元格隐藏
        current.className = hiddenHeaderCellClass;
      }
      if (current) {
        current.colSpan = 1;
      }
    }
  }
};

// 合并上下相同的分组
export const handleMergeHeader = <
  T extends {
    title?: string;
    className?: string;
    children?: T[];
    colSpan?: number;
  },
>(
  columns?: Array<T>,
) => {
  const getRowSpan = (col: T) => {
    let span = 1;
    const newCol = { ...col };
    let current: T | null = newCol;
    while (current !== null) {
      if (current?.children?.length === 1) {
        const next: T = current.children?.[0];
        if (
          next.title === col?.title &&
          col?.title &&
          next.className !== hiddenHeaderCellClass &&
          col?.colSpan === next?.colSpan
        ) {
          // 分组名一致，上下合并
          span += 1;
          next.className = hiddenHeaderCellClass;
          current = next;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return {
      ...newCol,
      rowSpan: span,
    };
  };
  const recursive = (cols: T[]) => {
    return cols.map((col) => {
      if (col?.title) {
        const { rowSpan } = getRowSpan(col);
        if (rowSpan > 1) {
          return {
            ...col,
            rowSpan,
            // 重置一下子级，将相同的分组上下合并
          };
        }
      }
      if (col.children) {
        col.children = recursive(col.children);
      }
      return col;
    });
  };
  return recursive(columns || []);
};

export const handleExpandColumn = ({
  expandComponents,
  expandIconPositionRef,
  expandIconPosition,
  columns,
}: any) => {
  // 有设置扩展内容 且 存在行展开图标位置配置
  if (
    Array.isArray(expandComponents) &&
    expandComponents.length &&
    expandIconPositionRef
  ) {
    // 找到行展开图标位置 基准列的索引（有可能也是分组）
    const refColIndex = columns?.findIndex((c: any) => {
      if (c.dataIndex) {
        return c.dataIndex === expandIconPositionRef?.dataIndex;
      }

      if (c.title) {
        return c.title === expandIconPositionRef?.title;
      }

      return false;
    });

    // 说明存在基准列，则进一步定位左右侧
    if (refColIndex !== -1) {
      if (expandIconPosition === 'right') {
        columns.splice(refColIndex + 1, 0, Table.EXPAND_COLUMN);
      } else {
        // 否则为左侧
        columns.splice(refColIndex, 0, Table.EXPAND_COLUMN);
      }
    }
  }
};

export const createAutoKey = (seqId: any) => {
  return seqId.getId();
};

export const createTempRowKey = () => {
  return `LX_TEMP_${parseInt(`${Math.random() * 10000}`, 10)}`;
};

export const EMPTY_ROW_TEMP_KEY_ATTR = '_lxTempKey';
export const LATEST_EMPTY_ROW_FLAG_ATTR = '_latestCreation';

export const deleteTempRowProperties = (row: any) => {
  if (row) {
    delete row[LATEST_EMPTY_ROW_FLAG_ATTR];
  }
};

export const createEmptyRow = () => ({
  [LATEST_EMPTY_ROW_FLAG_ATTR]: true, // 最新创建的
  [EMPTY_ROW_TEMP_KEY_ATTR]: createTempRowKey(),
});

export const handleRecursiveParseColumns = (
  columnList: any[],
  rowIndex = 1,
  styleInfo?: {
    colorType: 'custom' | 'single';
    singleColorSetting?: {
      backgroundColor?: string;
      color?: string;
      fontWeight?: number;
      fontSize?: string;
    };
    customColorSetting?: {
      [id: string]: {
        backgroundColor?: string;
        color?: string;
        fontWeight?: number;
        fontSize?: string;
      };
    };
  },
) => {
  const colChildList: any[] = [];
  let colIdMap: { [id: string]: any } = {};
  let cols = columnList;
  if (Array.isArray(columnList) && columnList?.length) {
    cols = columnList.map((col: any) => {
      const newCol: any = {
        id: col?.id,
        title: col?.title,
        fixed: col?.fixed,
        style: col?.style,
      };
      if (col?.children) {
        const {
          cols: childColumns,
          colChildList: childCols,
          colIdMap: childColMap,
        } = handleRecursiveParseColumns(col.children, rowIndex + 1, styleInfo);
        newCol.children = childColumns;
        colChildList.push(...childCols);
        const dataColsStr = childCols.reduce(
          (p, n) => (p ? `${p}&${n.id}` : `${n.id}`),
          '',
        );
        const id = `group-${rowIndex}-${dataColsStr}`;
        col.id = id;
        newCol.id = id;
        colIdMap = {
          ...colIdMap,
          ...childColMap,
        };
      } else {
        // 当前层级无children的就是字段数据
        colChildList.push(col);
      }
      if (styleInfo) {
        const style =
          styleInfo?.colorType === 'single'
            ? styleInfo?.singleColorSetting
            : styleInfo?.customColorSetting?.[newCol?.id];
        col.style = style;
        newCol.style = style;
        // 给分组头部传递props
        if (col?.children) {
          col.onHeaderCell = () => ({
            style: newCol?.style,
          });
        }
      }
      colIdMap[newCol.id] = newCol.style;
      return newCol;
    });
  }
  return {
    cols,
    // 当前分组下最底层表格列字段
    colChildList,
    colIdMap,
  };
};

export const compareFn = (a: any, b: any) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  let prev = String(a || '');
  let next = String(b || '');
  // 匹配所有带单位的字符串数字
  const numberRegexp = /^(-)?(\d+(\.\d+)?)([a-zA-Z]+)?$/;
  const prevMatch = prev.match(numberRegexp) || [];
  const nextMatch = next.match(numberRegexp) || [];
  const [, prevNegative, , prevDecimal = '', prevUnit] = prevMatch;
  const [, nextNegative, , nextDecimal = '', nextUnit] = nextMatch;
  // 单位一致才比较，否则按字符串比
  // 其中有一个为空值时，也进行比较
  if (prevUnit === nextUnit || !a || !b) {
    if (prevNegative !== nextNegative) {
      // 一正一负,正的大
      return prevNegative ? -1 : 1;
    }
    if (prevNegative === nextNegative) {
      // 两数间最长的小数位长度
      const expandedLen =
        prevDecimal.length > nextDecimal?.length
          ? prevDecimal.length - 1
          : nextDecimal.length - 1;
      const expand = (decimal: string, len: number) => {
        // 小数部分内容
        const num = decimal.indexOf('.') === 0 ? decimal.slice(1) : decimal;
        // 长度不一的小数进行补位
        const zero =
          len - num.length > 0 ? new Array(len - num.length).fill('0') : [];
        return `${num}${zero.join('')}`;
      };
      // 小数时两个数字同时扩大
      const prevStr = prevDecimal
        ? prev.replace(prevDecimal, expand(prevDecimal, expandedLen))
        : prev;
      const nextStr = nextDecimal
        ? next.replace(nextDecimal, expand(nextDecimal, expandedLen))
        : next;
      if (prevNegative && nextNegative) {
        // 负数，调换位置
        prev = nextStr;
        next = prevStr;
      } else {
        prev = prevStr;
        next = nextStr;
      }
      if (prev?.length !== next?.length) {
        // 长度不一致时，长的大
        return prev?.length > next?.length ? 1 : -1;
      }
    }
  }
  return prev.localeCompare(next);
};

export function recursionDataSource<
  T extends Record<string, any>,
  U extends T = T,
>(
  dataSource: T[],
  parseNodeFn?: (node: T, parentPath?: U[]) => U | void,
  childrenKey: string = 'children',
  parentPath: U[] = [],
) {
  if (!Array.isArray(dataSource)) return dataSource;
  return dataSource.map((d) => {
    let data: Record<string, any> = {
      ...d,
    };

    if (parseNodeFn) {
      const newData = parseNodeFn(data as T, parentPath);
      if (newData) {
        data = newData;
      }
    }
    if (Array.isArray(data[childrenKey]) && data[childrenKey].length) {
      data[childrenKey] = recursionDataSource(
        data[childrenKey],
        parseNodeFn,
        childrenKey,
        [...parentPath, data as U],
      );
    }

    return data;
  });
}

// 根据选中节点由下往上计算包含父节点在内的选中key
export const getFullCheckedKeySet = <T extends {}>(params: {
  levelEntries: Map<number, LevelItem<T>[]>;
  maxLevel: number;
  currentCheckedKey: (string | number)[];
  disabledMap: Record<string | number, boolean>;
  checked?: boolean;
}) => {
  const { maxLevel, levelEntries, currentCheckedKey, checked, disabledMap } =
    params;
  // key格式做弱等类型判断
  const checkedLooseMap = currentCheckedKey.reduce((p, n) => {
    p[n] = n;
    return p;
  }, {} as Record<string | number, string | number>);
  const visitedKey = new Set();
  // 从下往上收集选中的父节点
  for (let level = maxLevel; level >= 0; level -= 1) {
    const levelList = levelEntries.get(level);
    levelList?.forEach((node) => {
      let allChecked = true;
      const parent = node.__parent__;
      if (
        parent &&
        (disabledMap[parent?.__key__] || visitedKey.has(parent.__key__))
      )
        return;
      if (disabledMap[node?.__key__]) return;
      const siblings = parent?.__children__?.filter(
        (c) => !disabledMap[c.__key__],
      );
      siblings?.forEach((child) => {
        // 子节点都选中，父节点也要选中
        if (allChecked && !checkedLooseMap[child.__key__]) {
          allChecked = false;
        }
      });
      // 反选子节点时去除之前勾选的父节点
      if (
        !checked &&
        parent &&
        !allChecked &&
        checkedLooseMap[parent.__key__]
      ) {
        delete checkedLooseMap[parent.__key__];
        visitedKey.add(parent?.__key__);
      }

      // 选中子节点时若父节点子级都选中，则补上父节点
      if (checked && parent && allChecked && !checkedLooseMap[parent.__key__]) {
        checkedLooseMap[parent.__key__] = parent.__key__;
        visitedKey.add(parent?.__key__);
      }
    });
  }
  return new Set(
    Object.keys(checkedLooseMap).reduce((p, n) => {
      p.push(checkedLooseMap[n]);
      return p;
    }, [] as (string | number)[]),
  );
};
