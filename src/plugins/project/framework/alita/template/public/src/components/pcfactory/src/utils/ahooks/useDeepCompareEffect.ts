import { isEqual } from 'lodash';
import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const depsEqual = function depsEqual(
  aDeps: DependencyList,
  bDeps?: DependencyList,
) {
  let bDepsList = bDeps;
  if (bDepsList === undefined) {
    bDepsList = [];
  }

  return isEqual(aDeps, bDepsList);
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
