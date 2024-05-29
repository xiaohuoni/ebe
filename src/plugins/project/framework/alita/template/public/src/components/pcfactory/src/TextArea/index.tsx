import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
} from '../utils';
import { useUpdateEffect } from '../utils/ahooks';
import { checkNumber } from '../utils/common';
import ForIETextArea from './ForIETextArea';

export interface TextAreaProps {
  value?: any;
  visible?: any;
  onChange?: any;
  onValueRelease?: any;
  defaultValue?: any;
  getCompPropMapState?: any;
  compId?: any;
  getFieldDecorator?: any;
  form?: any;
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
  compType?: any;
  onSelectedRowsRelease?: any;
  onSelectedRowKeysRelease?: any;
  onSelectedKeysRelease?: any;
  onEditingKeyRelease?: any;
  onInlineEditRelease?: any;
  onInlineSaveRelease?: any;
  onSelectedDataRelease?: any;
  pageState?: any;
  pagePublicState?: any;
  maxLength?: any;
  minLength?: any;
  style?: React.CSSProperties;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  rules?: any[];
  colon?: boolean;
  isFormChild?: boolean | undefined;
  readOnly?: boolean;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
}

export interface WrapperTextAreaProps {
  children: React.ReactElement;
}

interface BaseTextAreaPropsType {
  maxLength: number;
  [key: string]: any;
}

const TEXTAREA_WRAPPER_CLASSNAME = 'ued-textarea-wrap';
const WrapperTextArea: React.FC<WrapperTextAreaProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${TEXTAREA_WRAPPER_CLASSNAME} ${
      children.props.className || ''
    }`,
  });

const { TextArea: AntdTextArea } = Input;

const BaseTextArea = (props: BaseTextAreaPropsType) => {
  const { maxLength, ...restProps } = props;

  // @ts-ignore
  const WrapText =
    window.ActiveXObject || 'ActiveXObject' in window
      ? ForIETextArea
      : AntdTextArea;
  const [num, setNum] = useState(0);

  const handleOnInput = (e: React.FormEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setNum(Math.min(target.value.length, maxLength));
  };

  // 只读状态时，不展示该样式，且输入文字刚好到文字展示的位置，要求不可遮挡其位置
  const renderNumLimit = () =>
    maxLength ? (
      <span
        style={{
          position: 'absolute',
          right: '15px',
          bottom: '1px', // UI 要求样式保持和配置一致
          color: 'rgba(28, 36, 46, .45)',
          fontSize: '12px',
          zIndex: '99',
          height: '18px',
          lineHeight: '18px',
          width: 'calc(100% - 16px)',
          textAlign: 'right',
          background: '#fff',
        }}
      >
        {num > maxLength ? (
          <>
            <span style={{ color: '#FF7474' }}>{num}</span> / {maxLength}
          </>
        ) : (
          `${num} / ${maxLength}`
        )}
      </span>
    ) : null;

  useEffect(() => {
    if (props.defaultValue || props.value) {
      setNum(
        Math.min(
          props?.value?.length || props?.defaultValue?.length || 0,
          maxLength,
        ),
      );
    }
  }, []);
  useUpdateEffect(() => {
    if (props.value !== undefined) {
      setNum(Math.min(props?.value?.length || 0, maxLength));
    }
  }, [props.value]);

  return (
    <div style={{ position: 'relative' }}>
      <WrapText {...restProps} onInput={handleOnInput} maxLength={maxLength} />
      {renderNumLimit()}
    </div>
  );
};

const TextArea = React.forwardRef<any, TextAreaProps>((props, ref) => {
  const {
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onValueRelease,
    defaultValue,
    getCompPropMapState,
    compId,
    name,
    fieldName: rawFieldName,
    hidden,
    regexp,
    message,
    label,
    labelCol,
    wrapperCol,
    selfSpan,
    colSpan,
    compType,
    onSelectedRowsRelease,
    onSelectedRowKeysRelease,
    onSelectedKeysRelease,
    onEditingKeyRelease,
    onInlineEditRelease,
    onInlineSaveRelease,
    onSelectedDataRelease,
    pageState,
    pagePublicState,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rules: externalRules = [],
    isFormChild,
    tipSize,
    tipWidth,
    tipHeight,
    maxLength,
    minLength,
    ...restProps
  } = props;

  const {
    disabled,
    required,
    formFieldsRef,
    readOnly,
    finalRules,
    setExtendRules,
  } = useCommonImperativeHandle(ref, props);

  useEffect(() => {
    let lengthRule;
    if (minLength === 0 && maxLength === 0) {
      lengthRule = undefined;
    } else if (
      checkNumber(minLength) &&
      checkNumber(maxLength) &&
      minLength < maxLength
    ) {
      lengthRule = {
        pattern: new RegExp(`^[\\s\\S]{${minLength},${maxLength}}$`),
        message: `内容长度须大于等于${minLength}且小于等于${maxLength}`,
      };
    } else if (checkNumber(maxLength) && maxLength > 0) {
      lengthRule = {
        pattern: new RegExp(`^[\\s\\S]{0,${maxLength}}$`),
        message: `内容长度须小于等于${maxLength}`,
      };
    } else if (checkNumber(minLength)) {
      lengthRule = {
        pattern: new RegExp(`^[\\s\\S]{${minLength},}$`),
        message: `内容长度须大于等于${minLength}`,
      };
    }
    if (lengthRule) {
      setExtendRules([lengthRule]);
    }
  }, [minLength, maxLength]);

  return (
    <FormFields
      {...getFieldsProps(props)}
      trigger="onChange"
      wrapperClassName={TEXTAREA_WRAPPER_CLASSNAME}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      ref={formFieldsRef}
      rules={finalRules}
      validateTrigger="onBlur"
    >
      <BaseTextArea
        maxLength={maxLength}
        defaultValue={defaultValue}
        {...restProps}
      />
    </FormFields>
  );
});

export default TextArea;
export { WrapperTextArea, TEXTAREA_WRAPPER_CLASSNAME };
