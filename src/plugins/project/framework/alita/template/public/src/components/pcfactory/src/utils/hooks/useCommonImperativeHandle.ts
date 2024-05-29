import React, { useEffect, useImperativeHandle } from 'react';
import { MonitorFn, useForm } from '../formUtils/FormContext';
import { FormFieldsHooks } from '../formUtils/FormFields';
import { useListenProps } from './useListenState';
import { useLocale } from './useLocale';
import useRules from './useRules';

/**
 *
 * @param ref ref
 * @param handle 额外的方法
 * @param depends 依赖监听
 */
export const useCommonImperativeHandle = (
  ref: any,
  props: any,
  handle: any = {},
) => {
  const {
    disabled: propsDisabled,
    required: propsRequired,
    readOnly: propsReadOnly,
    getEngineApis,
  } = props;

  const engineApis = getEngineApis();

  const formContext = useForm();

  const formFieldsRef = React.createRef<FormFieldsHooks>();

  // 控件禁用状态
  const [disabled, setDisabled] = useListenProps<boolean>(propsDisabled);

  // 设置必填
  const [required, setRequired] = useListenProps<boolean>(propsRequired);

  const [readOnly, setReadOnly] = useListenProps<boolean>(propsReadOnly);

  const { getLocale, lang } = useLocale(engineApis);

  // 通用规则生成
  const [finalRules, setExtendRules] = useRules(
    {
      required,
      regexp: props.regexp,
      rules: props.rules,
      message: props.message,
      name: props.name,
    },
    getLocale,
    lang,
  );

  const clearValue = () => {
    let initValue: any = '';
    if (handle && handle.hasOwnProperty('clearValue')) {
      // 如果存在clearValue 并且clearValue 是方法的时候执行, 否则就是值
      if (typeof handle.clearValue === 'function') {
        handle.clearValue();
        return;
      }
      // 说明是值的情况
      initValue = handle.clearValue;
    }
    // 默认清空成空字符串
    if (typeof engineApis?.onlySyncValue === 'function') {
      engineApis?.onlySyncValue(initValue);
    } else {
      props?.onChange(initValue);
    }
  };

  useImperativeHandle(ref, () => ({
    disabled,
    setDisabled: (val: boolean | 'toggle') => {
      setDisabled(val === 'toggle' ? !disabled : val);
    },
    required,
    setRequired: (val: boolean | 'toggle') => {
      setRequired(val === 'toggle' ? !required : val);
    },
    readOnly,
    setReadOnly: (val: boolean | 'toggle') => {
      setReadOnly(val === 'toggle' ? !readOnly : val);
    },
    changeValidateStatus: formFieldsRef.current?.changeValidateStatus,
    ...handle,
    clearValue,
    // 同步hoc vlaue使用，目前在设置表单数据的时候需要同步使用
    onlySyncValue: (initValue: any) => {
      if (typeof engineApis?.onlySyncValue === 'function') {
        engineApis?.onlySyncValue(initValue);
      }
    },
  }));

  /**
   * 表单被设置禁用 只读时同步更新子组件状态
   */
  useEffect(() => {
    const fn: MonitorFn = (value, type) => {
      if (type === 'disabled') {
        setDisabled(!!value);
      } else if (type === 'readonly') {
        setReadOnly(!!value);
      }
    };
    if (formContext.inForm && formContext.statusMonitor) {
      formContext.statusMonitor.addListener(fn);
      return () => {
        formContext.statusMonitor.removeListener(fn);
      };
    }
    return () => {};
  }, []);

  return {
    disabled,
    required,
    formFieldsRef,
    finalRules,
    setExtendRules,
    readOnly: formContext.inForm && formContext.printMode ? true : readOnly,
  };
};

export default useCommonImperativeHandle;
