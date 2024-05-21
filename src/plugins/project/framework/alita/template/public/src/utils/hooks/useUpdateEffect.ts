import { useEffect, useRef } from 'react';

/**
 * 首次渲染不执行
 * @param effect
 * @param deps
 */
export const useUpdateEffect = (effect: () => any, deps: any[]) => {
  const isLoad = useRef<boolean>(false);

  useEffect(() => {
    if (!isLoad.current) {
      isLoad.current = true;
      return undefined;
    }
    return effect();
  }, deps);
};
