import { useRef, useEffect, MouseEventHandler } from 'react';

export interface DoubleClickProps {
  events: Record<string, MouseEventHandler<HTMLElement> | undefined>;
  clickName: string;
  doubleClickName: string;
}

/**
 * 双击事件处理逻辑
 */
const useDoubleClick = ({ events = {}, clickName = 'onClick', doubleClickName = 'onDoubleClick' }: DoubleClickProps) => {
  const clickTimerRef = useRef<any>(null);
  const recordClickTimesRef = useRef(0);

  // 不存在双击事件时，单击事件不做任何处理
  if (!events[doubleClickName]) {
    return {
      [clickName]: events[clickName],
      [doubleClickName]: events[doubleClickName],
    };
  }

  // 重置点击参数
  const resetClickParams = () => {
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
      recordClickTimesRef.current = 0;
    }
  };

  useEffect(() => resetClickParams, []);


  // 存在双击事件
  const target: DoubleClickProps['events'] = {
    [clickName]: (...args) => {
      recordClickTimesRef.current += 1;

      if (!clickTimerRef.current && recordClickTimesRef.current === 1) {
        clickTimerRef.current = setTimeout(() => {
          if (recordClickTimesRef.current === 1) {
            // 如果在一定时间内只点击了一次，则认为是单击事件
            events[clickName]?.(...args);
            resetClickParams();
          }
        }, 300); // 延迟时间
      }

      if (recordClickTimesRef.current === 2) {
        events[doubleClickName]?.(...args);
      }
    },
  };

  
  return target;
};

export default useDoubleClick;
