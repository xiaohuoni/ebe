import React from 'react';
import { AppForwardRef } from '../BasicComponents';
import DformCustom from '../DformCustom';
import BasicInput from './BasicInput';
import BasicTextArea from './BasicTextArea';

export interface MyInputProps {
  textarea?: boolean; // 是否为多行输入
  style?: React.CSSProperties & {
    borderBottomType: 'none' | 'solid' | 'dashed';
    borderBottomColor: string;
  };
}

const { Item } = DformCustom;

const Input = AppForwardRef<MyInputProps>((props, ref) => {
  const { textarea = false, ...restProps } = props;

  const Ele = textarea ? (
    <BasicTextArea {...restProps} ref={ref} />
  ) : (
    // @ts-ignore
    <BasicInput {...restProps} ref={ref} />
  );

  return <Item showError>{Ele}</Item>;
});

Input.displayName = 'Input';

export default Input;
