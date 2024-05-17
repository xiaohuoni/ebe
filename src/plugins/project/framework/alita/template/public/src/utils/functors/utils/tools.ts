export const getGreenText = (text: string) => `<font color="rgb(76, 175, 80)">${text}</font>`;

/**
 * 目标数组是否包含某个数组中的某一项
 * @param targetArr 目标数组
 * @param contained 被包含内容
 * @returns
 */
export const includes = (targetArr: (string | number)[], contained: any) => {
  if (!Array.isArray(contained)) {
    return targetArr.includes(contained);
  }
  return targetArr.findIndex(target => contained.includes(target)) > -1;
};
