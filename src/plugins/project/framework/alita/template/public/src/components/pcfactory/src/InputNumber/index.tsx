import { InputNumber as AntdInputNumber, Tooltip } from 'antd';
// @ts-ignore
// import type { ValidationRule } from 'antd/es/form';
import React, { useState, useMemo } from 'react';
import { FormFields, getFieldsProps, useCommonImperativeHandle } from '../utils';
import { useLocale } from '../utils/hooks/useLocale';

export interface InputNumberProps {
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
  validateStatus?: any;
  help?: any;
  style?: React.CSSProperties;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  formatting?: any;
  formatterFunc?: any;
  parserFunc?: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  rules?: any[];
  isFormChild?: boolean | undefined;
  readOnly: boolean;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  getEngineApis?: any;
  trigger?: string;
  [key: string]: any;
}
export interface WrapperInputNumberProps {
  children: React.ReactElement;
}
const INPUTNUMBER_WRAPPER_CLASSNAME = 'ued-inputNumber-wrap';
const WrapperInputNumber: React.FC<WrapperInputNumberProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${INPUTNUMBER_WRAPPER_CLASSNAME} ${children.props.className || ''}`,
  });
const TOOLTIP_CLASSNAME = 'ued-inputNumber-tooltip-wrap';
const TOOLTIP_CLASSNAME_NO_FORM = `${TOOLTIP_CLASSNAME} no-form`;

const InputNumber = React.forwardRef<any, InputNumberProps>((props, ref) => {
  const {
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onChange,
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
    validateStatus,
    help,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    formatting,
    formatterFunc,
    parserFunc,
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
    getEngineApis,
    trigger,
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};
  const { sandBoxSafeRun } = engineApis;
  
  const { getLocale } = useLocale(engineApis);
  const { disabled, required, formFieldsRef, finalRules, readOnly } = useCommonImperativeHandle(ref, props);

  const [digitText, setDigitText] = useState('');

  const digits = [
    '',
    '',
    '',
    getLocale?.('hundred'),
    getLocale?.('k'),
    getLocale?.('w'),
    getLocale?.('10w'),
    getLocale?.('100w'),
    getLocale?.('1000w'),
    getLocale?.('100m'),
    getLocale?.('b'),
    getLocale?.('10b'),
    getLocale?.('100b'),
    getLocale?.('t'),
    getLocale?.('10t'),
    '',
  ];

  const formatter = (va: any) => {
    let val = va;
    try {
      if (va.length > 14) {
        val = va.substring(0, 14);
      }
      if (val.indexOf('.') > -1 && !Number.isNaN(+val)) {
        setDigitText(digits[val.indexOf('.')]);
      } else if (!Number.isNaN(+val)) {
        setDigitText(digits[val.length]);
      }

      if (formatting === 'percent') {
        if (val.length > 10) {
          val = val.substring(0, 10);
        }
        const p = val.length - val.indexOf('.');
        // eslint-disable-next-line no-mixed-operators
        return `${(parseInt(`${val * 10 ** p}`, 10) * 100) / 10 ** p}%`;
      }
      if (formatting === 'word') {
        return val;
      }
      const withComma = (str: string) => str.split('').reverse().join('').replace(/(\d{1,3})/g, ',$1')
        .split('')
        .reverse()
        .join('')
        .replace(/,$/, '');
      // 只有小数点前的部分需要千位分隔符
      if (formatting === 'comma' && val.indexOf('.') > -1) {
        return (
          withComma(val.substring(0, val.indexOf('.'))) +
          val.substring(val.indexOf('.'))
        );
      }
      if (formatting === 'comma') {
        return withComma(`${val}`);
      }
      if (formatting === 'custom' && formatterFunc && parserFunc) {
        // eslint-disable-next-line no-eval
        return sandBoxSafeRun(formatterFunc);
      }
    } catch (error) {
      console.error(error);
    }
    return val;
  };

  const parser = (val: any) => {
    try {
      if (formatting === 'percent') {
        return parseFloat((val.replace('%', '') / 100).toFixed(10));
      }
      if (formatting === 'word') {
        return val;
      }
      if (formatting === 'comma') {
        return val.replace(/(,*)/g, '');
      }
      if (formatting === 'custom' && formatterFunc && parserFunc) {
        // eslint-disable-next-line no-eval
        return sandBoxSafeRun(parserFunc);
      }
    } catch (error) {
      console.error(error);
    }
    return val;
  };

  const inputNumberProps = useMemo(() => {
    const targetProps = { ...restProps };
    if (formatting && formatting !== '') {
      targetProps.formatter = formatter;
      targetProps.parser = parser;
      delete targetProps.precision;
    }
    return targetProps;
  }, [formatting, restProps]);

  return (
    <>
      {formatting === 'word' && digitText ? (
        <Tooltip
          overlayClassName={TOOLTIP_CLASSNAME_NO_FORM}
          placement="topLeft"
          title={digitText}
          visible
        />
      ) : null}
      <FormFields
        {...getFieldsProps(props)}
        rules={finalRules}
        wrapperClassName={INPUTNUMBER_WRAPPER_CLASSNAME}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        ref={formFieldsRef}
        validateTrigger="onBlur"
        trigger={trigger}
      >
        <AntdInputNumber
          {...inputNumberProps}
          defaultValue={defaultValue}
          value={value}
          onChange={(e: any) => {
            if (onChange) {
              onChange(e);
            }
          }}
        />
      </FormFields>
    </>
  );
});

InputNumber.defaultProps = {
  trigger: 'onChange',
};

export default InputNumber;
export { WrapperInputNumber, INPUTNUMBER_WRAPPER_CLASSNAME };
