import { Form } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';
import { FormItem } from '../BasicComponents';
import { DFormContext } from '../utils/form';
import { withTransformProps } from '../utils/withTransformProps';
import type { FormInputNumberProps } from './FormInputNumber';
import FormInputNumber from './FormInputNumber';
import transformProps from './transformProps';

export type MyDformInputProps = FormInputNumberProps;

const MyDformInput = LingxiForwardRef<any, MyDformInputProps>((props, ref) => {
  const { defaultValue, fieldProps, fieldName } = props;
  const { isForm } = React.useContext(DFormContext) || {};
  if (!isForm) {
    return (
      <FormItem>
        <FormInputNumber {...props} ref={ref} defaultValue={defaultValue} />
      </FormItem>
    );
  }

  return (
    <FormItem>
      {/* 统一由AddressPicker组件的hidden校验 */}
      <Form.DFormField
        name={fieldProps || fieldName}
        initialValue={defaultValue}
        params={{ formFlag: true, hidden: true }}
        validateTrigger="onBlur"
      >
        <FormInputNumber {...props} ref={ref} />
      </Form.DFormField>
    </FormItem>
  );
});

MyDformInput.displayName = 'dformInputNumber';

export default withTransformProps(MyDformInput, transformProps);
