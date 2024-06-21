import React from 'react';

export const useRefs = () => {
  const refs = React.useRef<any>([]).current;

  const setRefs = (key: string, ref: any) => {
    const index = refs.findIndex((r: { key: string }) => r.key === key);
    if (index === -1) {
      refs.push({
        key,
        ref,
      });
    } else {
      refs[index] = {
        key,
        ref,
      };
    }
  };
  return {
    setRefs,
    refs,
  };
};
