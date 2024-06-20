import { useMemo } from 'react';

export const useJsonToParse = (data: any) => {
  return useMemo(() => {
    let t = data;
    try {
      // 目前暂时只将数组json转译
      if (typeof t === 'string' && typeof JSON.parse(t) === 'object') {
        t = JSON.parse(t);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    return t;
  }, [JSON.stringify(data)]);
};
