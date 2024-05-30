/* eslint-disable @typescript-eslint/no-shadow */
import React, { FC } from 'react';

import { Checkbox, CheckboxProps } from 'antd';
import { FormFields, getFieldsProps, useCommonImperativeHandle } from '../utils';

const CHECKBOX_WRAPPER_CLASSNAME = 'ued-checkbox-wrap';
const WrapperCheckbox = ({ children }: { children: JSX.Element }) =>
  React.cloneElement(children, {
    className: `${CHECKBOX_WRAPPER_CLASSNAME} ${children.props.className || ''}`,
  });

export interface MyCheckboxProps {
  value?: any;
  visible?: boolean;
  onChange?: (value: any) => void;
  onValueRelease?: (value: any) => void;
  getCompPropMapState?: (id: string, type: string) => any;
  compId?: string;
  name?: string;
  fieldName: string;
  required?: any;
  hidden?: boolean;
  regexp?: any;
  message?: any;
  defaultChecked?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  text?: any;
  selfSpan?: number;
  colSpan?: number;
  style?: React.CSSProperties;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  colon?: boolean;
  isFormChild?: boolean | undefined;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
}

export interface CheckboxItemProps extends CheckboxProps {
  value: CheckboxProps['checked'];
}

// 组件识别checked， 导致form.setFieldValue不生效 拆出来让组件识别value
const CheckboxItem: FC<CheckboxItemProps> = props => {
  return (
    <Checkbox
      {...props}
      checked={props.value}
    />
  );
};

const MyCheckbox = React.forwardRef<any, MyCheckboxProps>((props, ref) => {
  const {
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onChange,
    onValueRelease,
    getCompPropMapState,
    compId,
    name,
    fieldName,
    hidden,
    regexp,
    message,
    label,
    labelCol,
    wrapperCol,
    text,
    selfSpan,
    colSpan,
    defaultChecked,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    isFormChild,
    tipSize,
    tipWidth,
    tipHeight,
    ...restProps
  } = props;

  const customStyle = restProps.style || {};
  const { margin: customMargin, display: customDisplay, visibility: customVisibility, ...restCusStyles } = customStyle;

  const { formFieldsRef, readOnly, required, disabled, finalRules } = useCommonImperativeHandle(ref, props);

  const rProps = { ...restProps, style: restCusStyles };

  return (
    <FormFields
      {...getFieldsProps(props)}
      defaultValue={defaultChecked}
      wrapperClassName={CHECKBOX_WRAPPER_CLASSNAME}
      readOnly={readOnly}
      required={required}
      disabled={disabled}
      ref={formFieldsRef}
      rules={finalRules}
      handleFormValue={value => {
        if (value === 'false') {
          return false;
        }
        return value;
      }}
    >
      <CheckboxItem
        {...rProps}
        value={value === 'false' ? false : value}
        onChange={e => {
          if (onChange) {
            onChange(e.target.checked);
          }
        }}
      >
        {text}
      </CheckboxItem>
    </FormFields>
  );
});

export default MyCheckbox;
export { CHECKBOX_WRAPPER_CLASSNAME, WrapperCheckbox };
