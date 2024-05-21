import { useEffect } from 'react';
import type { Component } from '@lingxiteam/types';
import { useSetState, useUpdateEffect } from './hooks/index';
import { throttle, isEqual, get } from 'lodash';
import { useUpdateDeepEffect } from './hooks/useUpdateDeepEffect';
import { useStateListener } from './StateListener'



const isFunction = (val: unknown): val is Function =>
    typeof val === 'function';
/**
 * 同步inputValue数据
 * @param e 新值
 * @param preValue 旧值
 * @param setValue 同步函数
 */
 const syncInputValue = (e: unknown, preValue: unknown, setValue: (v: unknown) => void) => {
    if (!isEqual(e, preValue)) {
      setValue(e);
      return true;
    }
    return false;
  };
  

export const useComponentHoc = (
  componentProps: Record<string, any>,
  context: {
    config: Component;
    fieldPropsChange: () => void;
  }
) => {
  const { config, fieldPropsChange } = context;
  const { fieldProps } = config;

  const { visible = true, $$componentItem } = componentProps;
  const propsValue = get(componentProps, fieldProps?.valuePropName || '');
  const propsTrigger = get(componentProps, fieldProps?.trigger || '');

  const [state, setState] = useSetState<{ visible: boolean; value?: unknown }>(() => ({
    visible,
    value: propsValue,
  }));


  const compValue = state.value;

  useUpdateEffect(() => {
    setState({
      visible,
    });
  }, [visible]);

  useStateListener($$componentItem.pageId, $$componentItem.uid, 'visible', state.visible);

  // 1. 赋默认值
  useUpdateDeepEffect(() => {
    // 忽略首次渲染
    syncInputValue(propsValue, state.value, (v) => setState({ value: v }));
  }, propsValue);

  // 2. 拦截onChange事件
  const onChangeHandle = (() => {
    if (!fieldProps?.trigger) {
      return undefined;
    }
    return throttle((v, ...resetProps) => {
      const val = v?.target?.[fieldProps?.valuePropName] ?? v;
      const syncComplete = syncInputValue(val, state.value, (v) => setState({ value: v }));
      if (syncComplete) {
        if (isFunction(propsTrigger)) {
          propsTrigger(v, ...resetProps);
        }
      }
    }, 20);
  })();
  
  // 3. 每次value变化触发对应事件刷新
  useEffect(() => {
    if (fieldProps?.trigger) {
      fieldPropsChange();
    }
  }, [compValue]);

  return {
    state,
    setState,
    onChangeHandle,
    compValue,
  };
};
