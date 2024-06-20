import { useCallback, useState } from 'react';
import { useListenProps } from './useListenState';

/**
 * 布尔值切换
 * @param defaultValue 默认值
 * @returns
 */
export const useToggleBoolean = (
  defaultValue: any,
): [boolean, (val: boolean | 'toggle') => void] => {
  const [state, setState] = useState<boolean>(defaultValue);
  const setToggleState = useCallback(
    (val: boolean | 'toggle') => {
      setState(val === 'toggle' ? !state : val);
    },
    [state],
  );
  return [state, setToggleState];
};

export const useListenToggleBoolean = (
  defaultValue: any,
): [boolean, (val: boolean | 'toggle') => void] => {
  const [state, setState] = useListenProps<boolean>(defaultValue);
  const setToggleState = useCallback(
    (val: boolean | 'toggle') => {
      setState(val === 'toggle' ? !state : val);
    },
    [state],
  );
  return [state, setToggleState];
};
