import { isUndefined } from 'lodash';
import { useRef } from 'react';
import { useUpdateEffect } from '../utils/ahooks';
import { StatusType } from '../utils/formUtils/FormContext';
import useMonitor from './useMonitor';

export type FormStatusType = {
  [key in StatusType]?: unknown;
};

const useSubscriptionStatus = (options: {
  run: (type: StatusType, v: unknown) => void;
  type: StatusType;
  listened: unknown;
}) => {
  const { run, type, listened } = options;
  useUpdateEffect(() => {
    if (!isUndefined(listened)) {
      run(type, listened);
    }
  }, [listened]);
};

/**
 * 表单状态管理
 */
export const useFormStatus = (value: FormStatusType) => {
  const refValue = useRef<FormStatusType>({});
  refValue.current = value;

  const { addListener, removeListener, execListeners } = useMonitor();

  const run = (type: StatusType, v: unknown) => {
    refValue.current[type] = v;
    execListeners(v, type);
  };

  useSubscriptionStatus({ run, type: 'disabled', listened: value.disabled });
  useSubscriptionStatus({ run, type: 'readonly', listened: value.readonly });

  return {
    addListener,
    removeListener,
    run,
    status: refValue.current,
  };
};
