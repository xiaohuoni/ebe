import { useCallback, useRef } from 'react';
import type { MonitorFn, StatusType } from '../utils/form';

const useMonitor = () => {
  const monitor = useRef<MonitorFn[]>([]).current;

  /**
   * 增加监听事件
   */
  const addListener = useCallback((fn: MonitorFn) => {
    if (!monitor.includes(fn)) {
      monitor.push(fn);
    }
  }, []);

  /**
   * 移除监听事件
   */
  const removeListener = useCallback((fn: MonitorFn) => {
    const index = monitor.findIndex((v) => v === fn);
    if (index > -1) {
      monitor.splice(index, 1);
    }
  }, []);

  /**
   * 执行监听事件
   */
  const execListeners = useCallback((v: unknown, type: StatusType) => {
    monitor.forEach((fn) => fn(v, type));
  }, []);

  return {
    addListener,
    removeListener,
    execListeners,
  };
};

export default useMonitor;
