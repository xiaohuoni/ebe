import useSafeState from "./useSafeState";
import useUpdateEffect from "./useUpdateEffect";

function useListenProps<T>(propsValue: T): [T, (data: T) => void] {
  const [value, setValue] = useSafeState(propsValue);

  useUpdateEffect(() => {
    setValue(propsValue);
  }, [JSON.stringify(propsValue)]);

  return [value, setValue];
}

export default useListenProps;