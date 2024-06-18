import { parse } from 'qs';
import { useMemo, useRef } from 'react';

/**
 * 生成基础上下文
 * @param baseContext
 */
const useGenerateContext = (
  props: Record<string, any>,
  baseContext: Record<string, any> = {},
  options: Record<string, any> = {},
) => {
  // 指令定时器存储
  const actionTimerRef = useRef<Record<string, any>>({
    timeout: {},
    interval: {},
  });

  // 清除定时器
  const clearActionTimer = (timerName: string) => {
    const actionTimer = actionTimerRef.current;
    if (actionTimer.interval?.[timerName]) {
      clearInterval(actionTimer.interval[timerName]);
      actionTimer.interval[timerName] = null;
    }
    if (actionTimer.timeout?.[timerName]) {
      clearTimeout(actionTimer.timeout[timerName]);
      actionTimer.timeout[timerName] = null;
    }
  };

  // 增加指令定时器
  const addActionTimer = (
    type: 'interval' | 'timeout' = 'timeout',
    timerName: string,
    callback: () => void,
    time: number = 0,
  ) => {
    const actionTimer = actionTimerRef.current;
    clearActionTimer(type);
    const delay = time > 0 ? +time : 0;
    if (type === 'interval') {
      actionTimer.interval[timerName] = setInterval(() => {
        callback?.();
      }, delay);
    }
    if (type === 'timeout') {
      actionTimer.interval[timerName] = setTimeout(() => {
        callback?.();
      }, delay);
    }
  };

  /**
   * url参数
   */
  const urlParam = useMemo(() => {
    const queryParams = parse((location?.search ?? '?')?.split('?')[1]);
    return {
      ...queryParams,
      ...props.urlParam,
    };
  }, [props.urlParam]);

  return {
    ...baseContext,
    urlParam,
    clearActionTimer,
    addActionTimer,
  };
};

export default useGenerateContext;
