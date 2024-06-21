import { Form } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';
import { FormItem } from '../BasicComponents';
import { DFormContext } from '../utils/form';
import { withTransformProps } from '../utils/withTransformProps';
import type { FormFileProps } from './FormFile';
import FormFile from './FormFile';
import transformProps from './transformProps';

export type MyDformFileProps = FormFileProps;

const MyDformFile = LingxiForwardRef<any, MyDformFileProps>((props, ref) => {
  // @ts-ignore
  const { fieldProps, defaultValue, fieldName } = props;
  const { isForm } = React.useContext(DFormContext) || {};

  if (!isForm) {
    return (
      <FormItem>
        <FormFile {...props} ref={ref} />
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
      >
        <FormFile {...props} ref={ref} />
      </Form.DFormField>
    </FormItem>
  );
});

MyDformFile.displayName = 'DformFile';

export default withTransformProps(MyDformFile, transformProps);
