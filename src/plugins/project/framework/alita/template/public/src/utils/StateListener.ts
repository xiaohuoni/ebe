import { useEffect } from 'react';

class StateListener {
  static inst: Map<string, StateListener> = new Map();

  static getInst(id: string): StateListener {
    if (!this.inst.get(id)) {
      this.inst.set(id, new StateListener());
    }
    return this.inst.get(id) as StateListener;
  }

  propsListener: Map<string, Set<((value: any) => void)>> = new Map();

  emit(compId: string, propsKey: string, value: string) {
    const cbList = this.propsListener.get(`${compId}_${propsKey}`);
    if (cbList) {
      cbList.forEach(cb => {
        cb?.(value);
      });
    }
  }

  addSubscribe(compId: string, propsKey: string, cb: any) {
    const _key = `${compId}_${propsKey}`;
    const cbList = this.propsListener.get(_key) || new Set();
    cbList.add(cb);

    this.propsListener.set(_key, cbList);
    return () => {
      this.propsListener.get(_key)?.delete(cb);
    };
  }
}

export const useStateListener = (pageId: string, compId: string, propsKey: string, value: any) => {
  const instance = StateListener.getInst(pageId);

  useEffect(() => {
    instance.emit(compId, propsKey, value);
  }, [value]);
};

export const useStateSubscribe = (pageId: string, compId: string, propsKey: string, cb: any) => {
  const instance = StateListener.getInst(pageId);

  useEffect(() => {
    const unmount = instance.addSubscribe(compId, propsKey, cb);
    return () => {
      unmount?.();
    };
  }, []);
};


export const getStateListener = (pageId: string) => {
  const instance = StateListener.getInst(pageId);
  return (compId: string, propsKey: string, cb: any) => instance.addSubscribe(compId, propsKey, cb);
};
