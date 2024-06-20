import { isEqual } from 'lodash';
import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const depsEqual = function depsEqual(
  aDeps: DependencyList,
  bDeps?: DependencyList,
) {
  if (bDeps === undefined) {
    // eslint-disable-next-line no-param-reassign
    bDeps = [];
  }

  return isEqual(aDeps, bDeps);
};

export const useDeepCompareEffect = (
  effect: EffectCallback,
  deps: DependencyList,
) => {
  const ref = useRef<DependencyList>();
  const signalRef = useRef(0);
  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }
  useEffect(effect, [signalRef.current]);
};
