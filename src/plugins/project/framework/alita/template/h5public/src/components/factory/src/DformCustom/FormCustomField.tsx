import { Form } from '@lingxiteam/dform';
import { EngineApisType } from '@lingxiteam/types';
import { isFunction } from 'lodash';
import React, { FC, useMemo } from 'react';
import { useDeepCompareEffect } from '../utils/ahooks';
import { useDformCustom } from './Context';
import './index.less';

interface FormCustomFieldType {
  children: React.ReactElement;
  showError?: boolean;
  trigger?: string;
  valuePropName?: string;
  getEngineApis?: () => Required<EngineApisType>;
}

interface ErrorBlockType {
  error: any;
}

const ErrorBlock: FC<ErrorBlockType> = ({ error }) => {
  return error ? (
    <div className="lcdp-dform-custom-error-text">{error}</div>
  ) : null;
};

const FormCustomField: FC<FormCustomFieldType> = (props) => {
  const {
    children,
    showError,
    valuePropName = 'value',
    trigger = 'onChange',
    getEngineApis,
  } = props;
  const formContext = useDformCustom();
  const { compatConfig } = getEngineApis?.() || {};
  if (!formContext.inCustomForm) {
    return children;
  }

  const { name, error, disabled, onChange, getRules, visible, message, form } =
    formContext;

  // 兼容表单行容器没有放到表单内，拖拽画布出现bug，导致存在这种数据。
  if (!form) {
    return children;
  }

  const childProps = children.props || {};
  const { disabled: childDisabled } = childProps;
  const triggerHandle = childProps[trigger];
  const value = childProps[valuePropName];

  useDeepCompareEffect(() => {
    form?.setFieldValue(name, value);
  }, [value]);

  const rules = useMemo(() => {
    if (visible) {
      // 小于3.3.1 不进行校验，目前就图片需要传入
      if (compatConfig?.dfromAllDisabled === true) {
        return [];
      }
      return getRules();
    }
    return [];
  }, [visible]);
  return (
    <>
      <Form.DFormField
        name={name}
        rules={rules}
        valuePropName={valuePropName}
        trigger={trigger}
      >
        {React.cloneElement(children, {
          [trigger]: (...e: any[]) => {
            if (isFunction(triggerHandle)) {
              triggerHandle(...e);
            }
            if (isFunction(onChange)) {
              onChange(...e);
            }
          },
          [valuePropName]: value,
          disabled: disabled || childDisabled,
          rules: visible ? getRules() : [],
        })}
      </Form.DFormField>
      {showError && (
        <ErrorBlock error={error?.[name] ? message || error?.[name] : ''} />
      )}
    </>
  );
};

export default FormCustomField;
