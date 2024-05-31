// 处理移动端显示隐藏的逻辑（除表单控件外）
const useMobileVisible = (
  visible: boolean | undefined | string | number,
  comName: string,
) => {
  // 2022.12.22:三个月后删除，为了兼容全量数据而做的特殊处理
  if (
    visible === undefined &&
    ['Calendar', 'DatePicker', 'Picker'].includes(comName)
  ) {
    return false;
  }
  if (typeof visible === 'boolean') {
    return visible;
  }
  if (typeof visible === 'string') {
    // 兼容PC 1是普通，2是隐藏的写法
    if (visible === '1') {
      return true;
    }
    if (visible === '2') {
      return false;
    }
    if (visible.toLowerCase() === 'false') {
      return false;
    }
    if (visible.toLowerCase() === 'true') {
      return true;
    }
  }
  if (typeof visible === 'number') {
    if (visible === 1) {
      return true;
    }
    if (visible === 2 || visible === 0) {
      return false;
    }
  }
  return true;
};

export default useMobileVisible;
