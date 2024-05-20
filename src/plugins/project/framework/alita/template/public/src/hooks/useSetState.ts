import isFunction from 'lodash/isFunction';
import { useCallback, useRef, useState } from 'react';

const nextTick = () => {
  return Promise.resolve();
};

export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state?: Pick<S, K> | null,
) => Promise<S>;

const useSetState = <S extends Record<string, any>>(
  initialState?: S | (() => S) | undefined,
): [S | undefined, SetState<S>] => {
  const [, forceUpdate] = useState({});
  const stateRef = useRef<any>(
    typeof initialState === 'function' ? initialState() : initialState,
  );

  /**
   * 更新数据
   */
  const setMergeState = useCallback((patch: any) => {
    const prevState = stateRef.current;
    if (!stateRef.current) {
      stateRef.current = {};
    }
    const newState = isFunction(patch) ? patch(prevState) : patch;
    if (newState) {
      Object.keys(newState).forEach((key) => {
        stateRef.current[key] = newState[key];
      });
      forceUpdate({});
    }
    return nextTick().then(() => stateRef.current);
  }, []);

  return [stateRef.current, setMergeState];
};

export default useSetState;
