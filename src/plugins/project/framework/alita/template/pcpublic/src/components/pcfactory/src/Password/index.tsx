import { Input } from 'antd';
import React from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
} from '../utils';
import { renderPassword } from '../utils/renderReadOnly';

export interface PassWordProps {
  value?: any;
  visible?: any;
  onChange?: any;
  onValueRelease?: any;
  defaultValue?: any;
  getCompPropMapState?: any;
  compId?: any;
  name?: any;
  fieldName?: any;
  required?: any;
  hidden?: any;
  regexp?: any;
  message?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  selfSpan?: any;
  colSpan?: any;
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
  readOnly: boolean;
  rules?: any[];
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
}
export interface WrapperInputPasswordProps {
  children: React.ReactElement;
}

const INPUTPASSWORD_WRAPPER_CLASSNAME = 'ued-inputPassword-wrap';
const WrapperInputPassword: React.FC<WrapperInputPasswordProps> = ({
  children,
}) =>
  React.cloneElement(children, {
    className: `${INPUTPASSWORD_WRAPPER_CLASSNAME} ${
      children.props.className || ''
    }`,
  });

const { Password: AntdPassword } = Input;

const Password: React.FC<PassWordProps> = React.forwardRef((props, ref) => {
  const { required, finalRules, disabled, formFieldsRef, readOnly } =
    useCommonImperativeHandle(ref, props);
  return (
    <FormFields
      {...getFieldsProps(props)}
      render={renderPassword}
      wrapperClassName={INPUTPASSWORD_WRAPPER_CLASSNAME}
      required={required}
      rules={finalRules}
      disabled={disabled}
      readOnly={readOnly}
      ref={formFieldsRef}
    >
      <AntdPassword
        {...props}
        onChange={(e: any) => {
          if (props.onChange) {
            props.onChange(e);
          }
        }}
      />
    </FormFields>
  );
});

export default Password;
export { INPUTPASSWORD_WRAPPER_CLASSNAME, WrapperInputPassword };
