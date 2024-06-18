// 页面上下文配置
const pageVar = {
  urlParam: {
    type: 'Record<string, any>',
    default: '{}',
  },
  clearActionTimer: {
    type: '(timerName: string) => void',
  },
  addActionTimer: {
    type: '(type: "interval" | "timeout" | undefined, timerName: string, callback: () => void, time?: number) => void',
  },
  getFormValue: {
    type: '(compId: string) => Promise<any>',
  },
};

export default pageVar;
