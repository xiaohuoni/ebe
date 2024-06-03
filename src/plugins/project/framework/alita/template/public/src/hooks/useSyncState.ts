import isFunction from 'lodash/isFunction';
import { useCallback, useRef, useState } from 'react';

const nextTick = () => {
  return Promise.resolve();
};

const useSyncState = <S>(initialState: S): [S, (patch: S) => Promise<S>] => {
  const [state, setState] = useState(initialState);
  const stateRef = useRef<S>(initialState);

  stateRef.current = state;

  /**
   * 更新数据
   */
  const setMergeState = useCallback((patch: any) => {
    const prevState = stateRef.current;
    stateRef.current = isFunction(patch) ? patch(prevState) : patch;
    setState(stateRef.current);
    return nextTick().then(() => stateRef.current);
  }, []);

  return [stateRef.current, setMergeState];
};

export default useSyncState;
