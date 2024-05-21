/**
 * 从原先指令：exportCustomData中抽出的逻辑
 */
// 当某列数据分组层级与其他分组不一致时，补全层级，即让后端处理为表头行合并
const appendColumnLevel = (columnParams: any) => {
  const { maxLen, lastLevel, column } = columnParams || {};
  const times = new Array(maxLen - lastLevel).fill('0');
  const newColumn = { ...column };
  times.reduce((p) => {
    p.isRowSpan = 'T';
    const col = { ...column, isRowSpan: 'T' };
    // 非最后的导出列部分需要去掉key和index数据
    delete p.key;
    delete p.index;
    p.children = [col];
    return p.children[0];
  }, newColumn);
  return newColumn;
};

// 表头分组的处理保持与表格组件一致
const treeRootName = 'tree-root';
export const handleMultiLevelHeader = (params: any) => {
  const { column, leftTree, parentTreeNode, maxGroupLen } = params;
  const { group } = params;
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
      // eslint-disable-next-line no-plusplus
      groupEmptyStartIndex--;
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
        let col = column;
        // 当最后一级时，为了拉平与其他分组的层级，需要补全列数据节点的层级
        if (rightLevel < maxGroupLen) {
          col = appendColumnLevel({
            maxLen: maxGroupLen,
            column,
            lastLevel: rightLevel,
          });
        }
        // 将列数据放入最后一层分组最后一个节点的children，即再加最后一层
        tempRightTree.children = [col];
        // 记录最最后一层
        rightTreeLevelMap[rightLevel] = col;
        break;
      }

      const rightTreeCurrLevelLast: any = {
        title: group[rightLevel - 1] || '', // 为空的话，强制设置为 ''
        // parent: tempRightTree.title === treeRootName ? leftTree : tempRightTree,
      };
      // 当前层为第一层时，将parent指向左树的根节点，为后续合并做准备
      parentTreeNode.set(
        rightTreeCurrLevelLast,
        tempRightTree.title === treeRootName ? leftTree : tempRightTree,
      );
      tempRightTree.children = [rightTreeCurrLevelLast];
      tempRightTree = rightTreeCurrLevelLast;
      rightTreeLevelMap[rightLevel] = rightTreeCurrLevelLast;
      // eslint-disable-next-line no-plusplus
      rightLevel++;

      // 构造到最后一层分组时：接入列信息，并退出循环
      if (rightLevel > groupLen) {
        let col = column;
        // 当最后一级时，为了拉平与其他分组的层级，需要补全列数据节点的层级
        if (rightLevel < maxGroupLen) {
          col = appendColumnLevel({
            maxLen: maxGroupLen,
            column,
            lastLevel: rightLevel,
          });
        }
        // 将列数据放入最后一层分组最后一个节点的children，即再加最后一层
        rightTreeCurrLevelLast.children = [col];
        // 记录最最后一层
        rightTreeLevelMap[rightLevel] = col;
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
      // eslint-disable-next-line no-plusplus
      leftLevel++;
      const leftTreeCurrLevelLastChildren = leftTreeCurrLevelLast.children;
      // 取左树当前层的最后一个
      leftTreeCurrLevelLast =
        leftTreeCurrLevelLastChildren[leftTreeCurrLevelLastChildren.length - 1];
      leftTreeLevelMap[leftLevel] = leftTreeCurrLevelLast;
    }

    // 遍历右树（i 表示右树的层级）：
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= groupLen + 1; i++) {
      const leftTreeLast = leftTreeLevelMap[i]; // 左树第i层的最后一个
      const current = rightTreeLevelMap[i]; // 右树第 i 层的最后一个（唯一一个）

      // 当前层相同组名相同
      if (current?.title === leftTreeLast?.title) {
        // 需要进一步比较下一层组名是否相同
        const currentNext = rightTreeLevelMap[i + 1];
        const leftTreeNextLast = leftTreeLevelMap[i + 1]; // 左树第i层的最后一个

        // 如果相同 且 右树下一层非最后一层(即，有 children)，则continue，直接进行下一层处理
        if (
          currentNext?.title === leftTreeNextLast?.title &&
          currentNext?.children &&
          Array.isArray(currentNext?.children)
        ) {
          // eslint-disable-next-line no-continue
          continue;
        } else {
          // 如果不相同，则直接将右树的下一层接入左树的下一层
          if (leftTreeLast?.children) {
            leftTreeLast.children.push(...current.children);
          } else {
            leftTreeLast.children = [...current.children];
          }
          // 退出循环，等待合并下一列右树
          break;
        }
      } else {
        const parent = parentTreeNode.get(leftTreeLast);
        if (parent) {
          // 当前层组名不同，则直接将右树，并入左树
          parent.children.push(current);
        }
        break;
      }
    }
  }
};
export const handleParseGroups = (params: any) => {
  const { list, groupMap, nameMap } = params;
  const keys = Object.keys(groupMap || {});
  if (!groupMap || !keys?.length) {
    // 分组为空时，不处理
    return undefined;
  }
  const finalGroup: any = {};
  // 实际层级数，包含列数据级
  let maxGroupLevel = 1;
  keys.forEach((k) => {
    let group = groupMap[k];
    // 兼容旧版的分组数据
    if (typeof group === 'string') {
      group = [group];
    }
    // 兼容可能存在的空数据
    if (group === '' || group === null || group === undefined) {
      group = [''];
    }
    // 过滤掉空的配置
    group = group.filter((g: any) => g);
    // 保留一个空配置，以进入构造
    group = group.length === 0 ? [''] : group;
    maxGroupLevel = Math.max(maxGroupLevel, group.length + 1);
    finalGroup[k] = group;
  });
  // 用于表格头分组的数据结构：左树根节点，为第0层
  const leftTree: any = {
    title: treeRootName,
  };
  // 记录子级对应的父级
  const parentTreeNode = new WeakMap();
  list.forEach((col: any, i: number) => {
    const group = finalGroup[col];
    handleMultiLevelHeader({
      leftTree,
      column: { title: nameMap[col], key: col, index: col?.sort || i },
      group,
      parentTreeNode,
      maxGroupLen: maxGroupLevel,
    });
  });
  if (leftTree?.children?.length) {
    return [...leftTree?.children];
  }
  // 为空时不传出分组字段
  return undefined;
};
