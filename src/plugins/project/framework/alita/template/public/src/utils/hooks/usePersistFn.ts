import { useRef, useCallback } from 'react';

const usePersistFn = (fn: any) => {
  const ref = useRef(fn);
  ref.current = fn;

  const persistFn = useCallback((...args) => {
    if (ref.current) {
      return ref.current.apply(this, args);
    }
    return undefined;
  }, []);

  return persistFn;
};

export default usePersistFn;
