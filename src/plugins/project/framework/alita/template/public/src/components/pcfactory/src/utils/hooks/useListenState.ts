import { usePrevious, useSafeState, useUpdateEffect } from '../ahooks';


/**
 * 属性值变化调用方法更新
 * @param value
 * @param setValue
 */
export function useListenState<T>(propsValue: T): [T, (data: T) => void] {
  const [value, setValue] = useSafeState(propsValue);

  const preValue = usePrevious(propsValue);

  return [preValue !== propsValue ? propsValue : value, setValue];
}

export default useListenState;

export function useListenProps<T>(propsValue: T): [T, (data: T) => void] {
  const [value, setValue] = useSafeState(propsValue);

  useUpdateEffect(() => {
    setValue(propsValue);
  }, [JSON.stringify(propsValue)]);

  return [value, setValue];
}
