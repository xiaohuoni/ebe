import { useEffect, useRef, useState } from 'react';

type SetStateCompileFn<T> = (data: T) => void;

type SetStateAction<T> = (state: T, fn?: SetStateCompileFn<T>) => void;

function useSyncState<T>(state: T): [T, SetStateAction<T>];

function useSyncState(initial: any) {
  const fnRef = useRef<SetStateCompileFn<any> | undefined | null>(); // 用来保存函数
  const [state, setState] = useState(initial); // 更新组件状态

  useEffect(() => {
    if (fnRef.current) {
      fnRef.current(state);
      fnRef.current = null;
    }
  }, [state]);

  const setSyncState = (data: any, callback?: SetStateCompileFn<any>) => {
    fnRef.current = callback;
    setState(data);
  };

  return [state, setSyncState];
}

export default useSyncState;
