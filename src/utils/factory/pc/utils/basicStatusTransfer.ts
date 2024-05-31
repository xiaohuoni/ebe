// 把数字状态转换成对应的实际props
const basicStatusTransfer = (basicStatusValue: number | string) => {
  switch (+basicStatusValue) {
    case 2: // 隐藏
      return {
        // disabled: false,
        visible: false,
        // readOnly: false,
      };
    case 3: // 禁用
      return {
        disabled: true,
        visible: true,
        // readOnly: false,
      };
    case 4: // 只读
      return {
        // disabled: false,
        visible: true,
        readOnly: true,
      };
    case 1: // 默认情况
    default:
      return {
        // disabled: false,
        visible: true,
        // readOnly: false,
      };
  }
};

export default basicStatusTransfer;
