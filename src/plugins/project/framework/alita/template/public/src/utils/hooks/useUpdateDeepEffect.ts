import { isEqual } from 'lodash';
import { useRef } from 'react';
import { useUpdateEffect } from './useUpdateEffect';

const ObjectIsEqual = (pre: any, next: any) => {
  // 值相等，引用值相等， 或者真实值相等 都无需刷新
  if (isEqual(pre, next)) {
    return true;
  }
  return false;
};

export const useUpdateDeepEffect = (effect: () => any, dep: any) => {
  const memoPrevRef = useRef();

  useUpdateEffect(() => {
    if (!ObjectIsEqual(memoPrevRef.current, dep)) {
      effect();
    }
    memoPrevRef.current = dep;
  }, [dep]);
};
