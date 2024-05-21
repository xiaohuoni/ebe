import { useCallback, useRef } from 'react';
import useUpdate from './useUpdate';

/**
 * 通过ref的引用值更新组件，一般用于性能优化。
 */
export type SetRefState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | undefined,
) => void;

const useRefState = <S extends Record<string, any>>(
  initialState: S,
): [S, SetRefState<S>] => {
  const stateRef = useRef<S>(initialState);
  const update = useUpdate();

  const setState = useCallback((patch) => {
    stateRef.current = patch;
    update();
  }, []);

  return [stateRef.current, setState];
};

export default useRefState;
