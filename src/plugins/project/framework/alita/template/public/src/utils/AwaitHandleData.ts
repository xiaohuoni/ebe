class AwaitHandleData {
  queue: Map<string, Map<string, any[]>> = new Map();

  /**
   * 添加到等待队列
   * @param compId 控件id
   * @param functionName 方法名称
   * @param data 入参数据
   */
  addToAwaitQueue(compId: string, functionName: string, ...data: any) {
    const queue = this.queue.get(compId) || new Map();
    let oldData = queue.get(functionName);
    // 存在相同的事件，执行不同的参数的时候
    if (Array.isArray(oldData) && oldData.length > 0) {
      oldData.push(data);
    } else {
      oldData = [data];
    }
    queue.set(functionName, oldData);
    this.queue.set(compId, queue);
  }

  /**
   * 执行控件指令缓存的方法队列
   * @param compId 控件id
   * @param refs
   */
  runQueue(compId: string, refs: any) {
    const queue = this.queue.get(compId);
    if (refs[compId] && queue) {
      const keys = [...queue.keys()];
      keys.forEach((key) => {
        if (typeof refs[compId][key] === 'function') {
          const dataQueue = queue.get(key);
          dataQueue?.forEach((item) => {
            refs[compId][key](...item);
          });
        }
      });
      // 执行完方法移除队列
      this.queue.delete(compId);
    }
  }
}

export default AwaitHandleData;
