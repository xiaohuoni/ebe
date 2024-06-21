import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useRef } from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
} from '../utils';
import SuperSelectLoader from './loader';

export interface MySuperSelectProps {
  visible?: boolean;
  fieldName?: any;
  name?: any;
  hidden?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  selfSpan?: any;
  colSpan?: any;
  defaultValue?: any;
  value?: any;
  style?: React.CSSProperties;
  mode?: string;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  colon?: boolean;
  compId?: string;
  isFormChild?: boolean | undefined;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  comSelectRef?: any; // 懒加载入参
  formFieldsRef?: any; // 懒加载入参
  readOnly: boolean; // 懒加载入参
  disabled: boolean; // 懒加载入参
  required?: any; // 懒加载入参
}

interface WrapperSuperSelectProps {
  children: any;
}

const SUPERSELECT_WRAPPER_CLASSNAME = 'ued-superSelect-wrap';
const WrapperSuperSelect = ({ children }: WrapperSuperSelectProps) =>
  React.cloneElement(children, {
    className: `${SUPERSELECT_WRAPPER_CLASSNAME} ${
      children.props.className || ''
    }`,
  });

const SuperSelect = LingxiForwardRef<any, MySuperSelectProps>((props, ref) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    fieldName,
    name,
    hidden,
    label,
    labelCol,
    wrapperCol,
    selfSpan,
    colSpan,
    defaultValue,
    // value,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    compId,
    isFormChild,
    tipSize,
    tipWidth,
    tipHeight,
    ...restProps
  } = props;
  const comSelectRef = useRef<any>();
  const { formFieldsRef, required, readOnly, disabled, finalRules } =
    useCommonImperativeHandle(ref, props, {
      getSelectedData: () => {
        return comSelectRef.current?.getSelectedData();
      },
      reloadOptions: comSelectRef.current?.reloadOptions,
    });
  const customStyle = restProps.style || {};
  const {
    margin: customMargin,
    display: customDisplay,
    visibility: customVisibility,
    ...restCusStyles
  } = customStyle;

  return (
    <FormFields
      {...getFieldsProps(props)}
      ref={formFieldsRef}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      rules={finalRules}
      ignoreReadOnlyFlag
      defaultValue={
        props.mode === 'multiple' && typeof defaultValue === 'string'
          ? defaultValue.split(',')
          : defaultValue
      }
      label={label}
      style={restCusStyles}
    >
      <SuperSelectLoader
        fieldName={fieldName}
        {...restProps}
        comSelectRef={comSelectRef}
      />
    </FormFields>
  );
});

export default SuperSelect;
export { SUPERSELECT_WRAPPER_CLASSNAME, WrapperSuperSelect };
