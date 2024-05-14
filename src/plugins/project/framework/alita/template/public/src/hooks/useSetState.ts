import { useCallback, useRef, useState } from 'react';
import isFunction from 'lodash/isFunction';

const nextTick = () => {
  return Promise.resolve();
};

export type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state?: Pick<S, K> | null,
  complete?: () => void,
) => void;

const useSetState = <S extends Record<string, any>>(
  initialState?: S | (() => S) | undefined,
): [S | undefined, SetState<S>] => {
  const [, forceUpdate] = useState({});
  const stateRef = useRef<any>(
    isFunction(initialState) ? initialState() : initialState,
  );

  /**
   * 更新数据
   */
  const setMergeState = useCallback((patch: any, complete?: () => void) => {
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
    nextTick().then(complete);
  }, []);

  return [stateRef.current, setMergeState];
};

export default useSetState;
