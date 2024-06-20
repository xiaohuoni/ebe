import { isEqual } from 'lodash';
import { useEffect, useMemo, useRef } from 'react';
import { SetState, useSetState } from '../ahooks';

const useAsyncState = <S extends Record<string, any>>(
  depth: S,
): [S, SetState<S>] => {
  const [state, setState] = useSetState(depth);

  const preDepthRef = useRef<any[]>([]);

  const depthList = useMemo(() => {
    const values: any[] = [];
    Object.keys(depth).forEach((key) => {
      values.push(key);
    });

    if (isEqual(preDepthRef.current, values)) {
      return preDepthRef.current;
    }

    preDepthRef.current = values;
    return values;
  }, [depth]);

  useEffect(() => {
    setState(depth);
  }, depthList);

  return [state, setState];
};

export default useAsyncState;
