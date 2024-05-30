export const findItemsSumThanNum = (array: string[] | any[], targetSum: number) => {
  let next = 0;
  const result: any[][] = [];
  if (array && Array.isArray(array)) {
    const newArray = array.filter(item => item).map(num => parseInt(num, 10));
    newArray.forEach((item) => {
      if (next <= newArray.length && item) {
        let sum = newArray[next];
        let endIndex = next + 1;
        if (sum >= targetSum) { // 当前这个值超过最大值
          result.push(newArray.slice(next, endIndex));
          next = endIndex;
        } else {
          while (endIndex < newArray.length && sum < targetSum) {
            sum += newArray[endIndex];
            endIndex += 1;
          }
          if (sum === targetSum) { // 刚好等于的情况，则要包含下一个位置
            result.push(newArray.slice(next, endIndex));
            next = endIndex;
          } else if (sum > targetSum) { // 超过最大值，则只要取前面的位置值
            result.push(newArray.slice(next, endIndex - 1));
            next = endIndex - 1;
          } else if (endIndex === newArray.length) {
            // 最后一个值如果是小于最大值，则自动分成一个数组
            result.push(newArray.slice(next, endIndex));
            next = endIndex;
          }
        }
      }
    });
  }
  return result;
};
export const pxToNum = (span: string) => {
  if (span && span.indexOf('px')) {
    return parseInt(span.split('px')[0], 10);
  }
  return 16;
};
