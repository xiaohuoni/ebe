// 循环容器id和当前id的分隔符
export const idSeparator = '@@@';

// 当前组件id和itemId的分隔符
export const itemIdSeparator = '&&&';

// 循环容器组件之间的分割区分
export const fatherSeparator = '---';

/**
 * 获取uid
 * @param loopId 循环容器的id
 * @param itemId
 * @param id
 * @returns
 */
export const getUid = (loopId: string, itemId: string, id: string) => {
  if (!loopId) {
    return id;
  }

  // 查看父节点是否是已经包含在容器内了
  const inLoop =
    loopId.includes(idSeparator) && loopId.includes(itemIdSeparator);

  let finialLoopId = loopId;
  // 在循环容器内
  if (inLoop) {
    finialLoopId = `${loopId}${fatherSeparator}`;
  }

  return `${finialLoopId}${idSeparator}${id}${itemIdSeparator}${itemId}`;
};
