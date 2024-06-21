import { ComponentItemType, EngineApisType } from '@lingxiteam/types';
import isEqual from 'lodash/isEqual';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { getRules as getAppRules } from '..';
import {
  useDeepCompareEffect,
  useMemoizedFn,
  usePrevious,
  useSafeState,
} from '../ahooks/index';
import { DFormContext, MonitorFn } from '../form';

export interface UseFormItemProps {
  defaultValue?: string | string[] | boolean | any;
  required?: boolean;
  visible: boolean;
  disabled?: boolean;
  title: string;
  regexp?: any[];
  fieldProps?: string;
  rules?: any[];
  $$componentItem: ComponentItemType;
  readOnly: boolean;
  onChange?: (value: any, ...args: any[]) => void;
  getEngineApis: () => EngineApisType;
}

/**
 * 属性值变化调用方法更新
 * @param value
 * @param setValue
 */
function useListenState<T>(propsValue: T): [T, (data: T) => void] {
  const [value, setValue] = useSafeState(propsValue);
  const preValue = usePrevious(propsValue);
  const memoValue = useMemo(() => {
    // 外部属性值改变优先使用
    if (preValue !== propsValue) {
      return propsValue;
    }
    return value;
  }, [propsValue, value]);

  return [memoValue, setValue];
}

export const useFormItem = (
  ref: any,
  props: UseFormItemProps,
  handle?: any,
) => {
  const {
    defaultValue,
    required: defaulrequired,
    readOnly: defaulReadonly,
    disabled: defaultDisabled,
    title,
    regexp,
    onChange,
    rules: defaultRules,
    fieldProps,
    visible,
    $$componentItem,
    getEngineApis,
  } = props;

  const { getLocale, onlySyncValue, compatConfig } = getEngineApis?.() || {};
  const {
    isForm,
    form,
    allDisabled: tempAllDisabled,
    error,
    statusMonitor,
    uploadChildRelation,
  } = React.useContext(DFormContext) || {};
  const [rules, setRules] = useListenState(defaultRules);
  const [required, setRequired] = useListenState(defaulrequired);
  const [disabled, setDisabled] = useListenState(defaultDisabled);
  const [readOnly, setReadOnly] = useListenState(defaulReadonly);
  const { uid, type } = $$componentItem || {};

  const setExtendRules = (newRules: any[], isAppendLastTime: boolean) => {
    if (Array.isArray(newRules)) {
      if (isAppendLastTime === true) {
        setRules([...(rules || []), ...newRules]);
      } else {
        setRules(newRules);
      }
    }
  };
  const allDisabled = useMemo(() => {
    // 小于3.3.1 Dform 有个allDisabled ，后续废除改功能
    if (tempAllDisabled === true && compatConfig.dfromAllDisabled === true) {
      return true;
    }
    return false;
  }, [tempAllDisabled]);
  useEffect(() => {
    if (uid && fieldProps && typeof uploadChildRelation === 'function') {
      uploadChildRelation(uid, fieldProps);
    }
  }, [uid, fieldProps]);
  // 忽略首次渲染
  const isMounted = useRef(false);
  useDeepCompareEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else if (isForm && fieldProps) {
      const fieldVlaue = form?.getFieldValue(fieldProps);
      if (!isEqual(fieldVlaue, defaultValue)) {
        form?.setFieldsValue({ [fieldProps]: defaultValue });
      }
    }
  }, [defaultValue, isForm, fieldProps]);

  const getRules = useCallback(
    ({ compName }: any = {}) => {
      const finalRules = getAppRules({
        required,
        // message: `${compName === 'DCheckbox' ? '请选择' : '请输入'}${title}`,
        message: getLocale?.(
          `${compName || type}.selectPlaceholder`,
          '请输入',
          { title },
        ),
        regexp,
      });
      if (Array.isArray(rules)) {
        finalRules.push(...rules);
      }
      return finalRules as any;
    },
    [regexp, required, title, rules],
  );

  const onInputChange = useMemoizedFn((value: any, ...args: any[]) => {
    if (onChange) {
      onChange(value, ...args);
    }
  });
  useImperativeHandle(ref, () => ({
    setRequired: (v: boolean | 'toggle') => {
      setRequired(v === 'toggle' ? !required : v);
    },
    clearValue: () => {
      if (onlySyncValue) {
        onlySyncValue(undefined);
      }
    },
    setDisabled: (v: boolean | 'toggle') => {
      setDisabled(v === 'toggle' ? !disabled : v);
    },

    /**
     *  追加rules
     * @param newRules
     * @param isAppendLastTime 是否累计上一次的
     */
    appendRules: (newRules: any[], isAppendLastTime: boolean = true) => {
      setExtendRules(newRules, isAppendLastTime);
    },

    /**
     * 零代码使用
     */
    get rules() {
      return rules;
    },

    /**
     * 零代码使用
     */
    removeRulesWithIndex: (index: number, deleteCount: number = 1) => {
      if (Array.isArray(rules) && rules.length >= index) {
        const temp = rules;
        temp.splice(index, deleteCount);
        setRules(temp);
      }
    },
    remmoveAllRules: () => {
      setRules([]);
    },
    setEditor: (v: boolean) => {
      if (v) {
        setDisabled(false);
        setReadOnly(false);
      }
    },

    get disabled() {
      return disabled;
    },
    get required() {
      return required;
    },

    /**
     * 需要重写获取值，因为表单设置值后不会同步到hoc的vlaue
     */
    get value() {
      if (isForm && fieldProps) {
        return form?.getFieldValue(fieldProps);
      }
      return defaultValue;
    },
    setReadOnly: (v: boolean | 'toggle') => {
      setReadOnly(v === 'toggle' ? !readOnly : v);
    },
    readOnly,
    ...handle,
  }));

  useEffect(() => {
    const fn: MonitorFn = (value, type) => {
      if (type === 'disabled') {
        setDisabled(!!value);
      } else if (type === 'readonly') {
        setReadOnly(!!value);
      }
    };
    if (isForm) {
      statusMonitor?.addListener?.(fn);
      return () => {
        statusMonitor?.removeListener(fn);
      };
    }
    return () => {};
  }, []);

  return {
    error,
    isForm,
    form,
    disabled: allDisabled || disabled,
    val: defaultValue,
    getRules,
    visible,
    onInputChange,
    required,
    readOnly,
    setExtendRules,
  };
};
