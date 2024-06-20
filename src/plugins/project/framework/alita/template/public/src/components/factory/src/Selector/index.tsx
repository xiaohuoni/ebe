import Field from '@lingxiteam/dform/es/components/Field';
import { LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';
import { FormItem } from '../BasicComponents';
import { DFormContext } from '../utils/form';
import LxSelector from './LxSelector';

export interface SelectorProps {
  options: any;
  style: any;
  showCheckMark?: boolean;
  defaultValue?: any;
  multiple?: boolean;
  className?: string;
  columns?: string;
  customize?: number; // 自定义列数
  src?: string;
  fileCode?: string;
  backgroundType: any;
  status?: string;
  onChange?: any;
  min?: number;
  max?: number;
  value?: any;
  fieldProps: string;
  name?: string;
}
const MySelector = LingxiForwardRef<any, SelectorProps>((props, ref) => {
  const { fieldProps, name } = props;

  const { isForm } = React.useContext(DFormContext) || {};

  if (!isForm) {
    return (
      <FormItem>
        <LxSelector {...props} ref={ref} />
      </FormItem>
    );
  }
  return (
    <FormItem>
      <Field
        required={false}
        title={name}
        name={fieldProps}
        params={{ formFlag: true, hidden: true }}
      >
        <LxSelector {...props} ref={ref} />
      </Field>
    </FormItem>
  );
});

export default MySelector;
