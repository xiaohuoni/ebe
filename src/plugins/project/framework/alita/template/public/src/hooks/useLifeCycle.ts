import { useEffect, DependencyList, useRef } from "react"

interface LifeCycleOptions { 
  mountCond: () => boolean;
  monutDeps: DependencyList;
  stateDeps: DependencyList;
}

const useLifeCyle = (options: LifeCycleOptions) => { 
  const { mountCond = () => true, monutDeps, stateDeps } = options;

  const lifeCycleCbRef = useRef({
    mount: () => { },
    unmounted: () => { },
    stateChange: () => { },
  });

  const todoStateChanageRef = useRef(() => { });

  const didMountRef = useRef(false);
  
  // 执行生命周期逻辑
  useEffect(() => {
    if (mountCond()) {
      if (!didMountRef.current) {
        lifeCycleCbRef.current.mount();
        didMountRef.current = true;

        // 页面加载完成后 执行一次组件状态变更
        todoStateChanageRef.current();

      }
    }
  }, monutDeps);

  // 组件状态变化
  useEffect(() => {
    if (!didMountRef.current) {
      // 页面没有加载完成的时候，暂时不走组件状态变更，等页面加载完成后再执行
      todoStateChanageRef.current = lifeCycleCbRef.current.stateChange;
    } else {
      lifeCycleCbRef.current.stateChange();
    }
  }, stateDeps);

  // 页面卸载
  useEffect(() => () => { 
    lifeCycleCbRef.current.unmounted();
  }, [])

  /**
   * 页面加载完成
   * @param callback 
   */
  const useMount = (callback: () => void) => { 
    lifeCycleCbRef.current.mount = callback;
  }

  const useUnmounted = (callback: () => void) => { 
    lifeCycleCbRef.current.unmounted = callback;
  }

  const useStateChange = (callback: () => void) => { 
    lifeCycleCbRef.current.stateChange = callback;
  }


  return {
    useMount,
    useUnmounted,
    useStateChange,
  }
}

export default useLifeCyle;