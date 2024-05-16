export declare type RenderId = string;

const getSaleEventName = (eventName: any) => {
  const sale =
    /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(eventName) &&
    !/^(?:abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)$/.test(
      eventName,
    );
  return sale ? eventName : `event_${eventName}`;
};

class customFuncMapping {
  private mapping: Map<RenderId, Record<string, Function>> = new Map();

  /**
   * 移除记录
   * @param routerId 路由id
   * @param engineId 引擎id
   */
  remove(renderId: RenderId) {
    if (!renderId) {
      this.mapping.delete(renderId);
    } else {
      console.error('renderId为空');
    }
  }
  get(renderId: string) {
    if (renderId) {
      return this.mapping.get(renderId) || {};
    } else {
      console.error('renderId为空');
      return {};
    }
  }
  add(renderId: RenderId, functions: Record<string, Function>) {
    this.mapping.set(renderId, functions);
  }
  callCustomFunc(renderId: string | undefined, funcName: string, ...args: any) {
    if (renderId) {
      const eventName = getSaleEventName(funcName);
      const customActionMapRef = this.get(renderId);
      if (typeof customActionMapRef?.[eventName] === 'function') {
        customActionMapRef?.[eventName](...args);
      } else {
        console.error(`${eventName}不存在`);
      }
    } else {
      console.error('renderId不能为空');
    }
  }
}

export default new customFuncMapping();
