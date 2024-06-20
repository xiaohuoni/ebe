import { LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';
import { DFormWrapper, FormItem } from '../BasicComponents';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import {
  DFormCustomContextProviderType,
  DFormCustomProvider,
  useDformCustom,
} from './Context';
import FormCustomField from './FormCustomField';

export interface MyDformCustomProps extends UseFormItemProps {
  style?: React.CSSProperties;
  regexp: any;
  message: string;
  children: any;
  title: any;
  supportComps: any;
  compNameKey: any;
  onChange: () => void;
}

const DformCustom = LingxiForwardRef<any, MyDformCustomProps>((props, ref) => {
  const {
    style,
    fieldProps,
    getEngineApis,
    // supportComps = ['Star', 'Image', 'Calendar', 'DatePicker', 'Picker', 'Input'],
  } = props;

  // 这个禁用可能来自表单
  const {
    disabled,
    visible = true,
    onInputChange,
    error,
    getRules,
    val,
    form,
  } = useFormItem(ref, props);

  const values: DFormCustomContextProviderType = {
    inCustomForm: true,
    name: fieldProps!,
    error,
    onChange: onInputChange,
    disabled,
    getRules: visible ? getRules : () => [],
    visible,
    value: val,
    message: props.message,
    form: form!,
  };

  return (
    <FormItem>
      <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
        <div id={`lcdp-form-item-${fieldProps}`} style={style}>
          <DFormCustomProvider value={values}>
            {props.children}
          </DFormCustomProvider>
        </div>
      </DFormWrapper>
    </FormItem>
  );
});

DformCustom.displayName = 'dformCustom';

(DformCustom as any).useDformCustom = useDformCustom;
(DformCustom as any).Item = FormCustomField;

const instance = DformCustom as typeof DformCustom & {
  useDformCustom: typeof useDformCustom;
  Item: typeof FormCustomField;
};

export default instance as any;
