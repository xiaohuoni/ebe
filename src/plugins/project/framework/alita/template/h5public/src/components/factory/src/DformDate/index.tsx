import { Form } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';
import { FormItem } from '../BasicComponents';
import { DFormContext } from '../utils/form';
import { withTransformProps } from '../utils/withTransformProps';
import type { DatePickerProps } from './DatePicker';
import DatePicker from './DatePicker';
import transformProps from './transformProps';

export interface MyDformDateProps extends DatePickerProps {
  title: string;
  theme?: any;
  type?: string;
  postfix?: string;
  postfixIconPosition?: string;
  isIconFont?: any;
  fontAddress?: any;
  fieldName: string;
  fieldProps: string;
}

const DformDate = LingxiForwardRef<any, MyDformDateProps>((props, ref) => {
  const { defaultValue, fieldProps, fieldName } = props;
  const { isForm } = React.useContext(DFormContext) || {};
  if (!isForm) {
    return (
      <FormItem>
        <DatePicker ref={ref} {...props} defaultValue={defaultValue} />
      </FormItem>
    );
  }
  return (
    <FormItem>
      {/* // 统一由AddressPicker组件的hidden校验 */}
      <Form.DFormField
        name={fieldProps || fieldName}
        initialValue={defaultValue}
        params={{ formFlag: true, hidden: true }}
      >
        <DatePicker {...props} ref={ref} fieldProps={fieldProps || fieldName} />
      </Form.DFormField>
    </FormItem>
  );
});

export default withTransformProps(DformDate, transformProps);
