import { DependencyList, useEffect, useRef } from 'react';

interface LifeCycleOptions {
  mountCond: () => boolean;
  monutDeps: DependencyList;
  stateDeps: DependencyList;
}

const useLifeCyle = (options: LifeCycleOptions) => {
  const { mountCond = () => true, monutDeps, stateDeps } = options;

  const lifeCycleCbRef = useRef({
    mount: () => {},
    unmounted: () => {},
    stateChange: () => {},
  });

  const todoStateChanageRef = useRef(() => {});

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
    if (didMountRef.current) {
      lifeCycleCbRef.current.stateChange();
    }
  }, stateDeps);

  // 页面卸载
  useEffect(
    () => () => {
      lifeCycleCbRef.current.unmounted();
    },
    [],
  );

  /**
   * 页面加载完成
   * @param callback
   */
  const useMount = (callback: () => void) => {
    lifeCycleCbRef.current.mount = callback;
  };

  const useUnmounted = (callback: () => void) => {
    lifeCycleCbRef.current.unmounted = callback;
  };

  const useStateUpdate = (callback: () => void) => {
    // 还没挂载的时候，保存一下state的callback回调，等页面加载完成 触发一次state
    if (!didMountRef.current) {
      todoStateChanageRef.current = callback;
    }
    lifeCycleCbRef.current.stateChange = callback;
  };

  return {
    useMount,
    useUnmounted,
    useStateUpdate,
  };
};

export default useLifeCyle;
