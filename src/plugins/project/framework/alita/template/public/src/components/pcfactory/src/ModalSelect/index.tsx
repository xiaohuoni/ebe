// @ts-ignore
import { EngineApisType, LingxiForwardRef } from '@lingxiteam/types';
import type { ValidationRule } from 'antd/es/form';
import React, { useEffect, useMemo, useState } from 'react';
import CommIcon from '../Icon';
import { handleIsValidIconCfg } from '../Icon/hooks';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
} from '../utils';
import { useLocale } from '../utils/hooks/useLocale';
import BaseModalSelect from './BaseModalSelect';

export interface MyModalSelectProps {
  value?: any;
  visible?: any;
  onChange?: any;
  onValueRelease?: any;
  getCompPropMapState?: any;
  compId?: any;
  getFieldDecorator?: any;
  form?: any;
  name?: any;
  fieldName?: any;
  required?: any;
  regexp?: any;
  message?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  selfSpan?: any;
  hidden?: any;
  colSpan?: any;
  onIconClick?: any;
  defaultValue?: any;
  validateStatus?: any;
  help?: any;
  postfix?: any;
  postfixStyle?: any;
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
  className?: any;
  style?: React.CSSProperties;
  disabled?: boolean;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  minLength?: any;
  maxLength?: any;
  rules?: any[];
  colon?: boolean;
  allowClear?: any;
  clearIcon?: any;
  modalInfo?: any;
  appId?: any;
  pageId?: any;
  onClick?: any;
  postfixIcon?: any;
  postfixIconPosition?: any;
  size?: any;
  InputNumber?: any;
  mode?: any;
  isFormChild?: boolean | undefined;
  readOnly: boolean;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  engineApis?: EngineApisType;
  getEngineApis?: () => EngineApisType;
}
export interface WrapperModalSelectProps {
  children: React.ReactElement;
}
const MODALSELECT_WRAPPER_CLASSNAME = 'ued-input-wrap modalSelect';
const WrapperModalSelect: React.FC<WrapperModalSelectProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${MODALSELECT_WRAPPER_CLASSNAME} ${
      children.props.className || ''
    }`,
  });

const ModalSelect = LingxiForwardRef<any, MyModalSelectProps>((props, ref) => {
  const {
    value: originValue,
    // visible = true,
    onChange,
    onValueRelease,
    getCompPropMapState,
    compId,
    name,
    fieldName: rawFieldName,
    regexp,
    message,
    label,
    labelCol,
    wrapperCol,
    selfSpan,
    hidden,
    colSpan,
    onIconClick,
    defaultValue,
    validateStatus,
    help,
    postfix,
    compType,
    onSelectedRowsRelease,
    onSelectedRowKeysRelease,
    onSelectedKeysRelease,
    onEditingKeyRelease,
    onInlineEditRelease,
    onInlineSaveRelease,
    onSelectedDataRelease,
    postfixIconPosition,
    postfixStyle,
    postfixIcon,
    pageState,
    pagePublicState,
    className,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    minLength,
    maxLength,
    modalInfo,
    clearIcon,
    mode,
    isFormChild,
    tipSize,
    tipWidth,
    tipHeight,
    engineApis: receivedEngineApis,
    getEngineApis,
    ...restProps
  } = props;

  const engineApis = receivedEngineApis || getEngineApis?.() || {};
  const { openModal } = engineApis;

  const { getLocale } = useLocale(engineApis);

  const [options, setOptions] = useState([]);
  const [postfixStyleClsName, setPostfixStyleClsName] = useState<string>('');

  // 判断字符串能否json解析
  const isJsonString = (val: any) => {
    try {
      const obj = JSON.parse(val);
      if (obj && typeof obj === 'object') {
        return true;
      }
      return false;
    } catch (e) {
      // message.error('返回的格式不能进行解析');
      return false;
    }
  };

  const getValueOptions = (datas: any) => {
    const { conField, valField } = modalInfo || {};
    let valArray: any = [];
    const optionParams: any = [];
    let flag = true;
    const valueObj: any =
      typeof datas === 'string' && isJsonString(datas)
        ? JSON.parse(datas)
        : datas;
    if (valueObj instanceof Array) {
      valueObj.forEach((va: any) => {
        if (va[valField] || va.value) {
          const obj = {
            label: va[conField] || va.label,
            value: va[valField] || va.value,
          };
          valArray.push(obj.value);
          optionParams.push(obj);
        } else if (va) {
          flag = false;
          valArray.push(va);
        }
      });
      // 如果模式是单选的话，做一下选中值的筛选
      if (Array.isArray(valArray) && valArray.length && mode === 'normal') {
        valArray = valArray[0];
      }
    } else if (
      valueObj instanceof Object &&
      (valueObj[valField] || valueObj.value)
    ) {
      const obj = {
        label: valueObj[conField] || valueObj.label,
        value: valueObj[valField] || valueObj.value,
      };
      valArray = obj.value;
      optionParams.push(obj);
    } else if (['string', 'number'].includes(typeof valueObj)) {
      flag = false;
      valArray = valueObj;
    }
    if (flag) {
      setOptions(optionParams);
    }
    return { valArray, optionParams };
  };

  const handleFormValue = (val: any) => {
    // value 可能为数组，对象，字符串: 字符串解析
    if (val !== undefined) {
      const { valArray } = getValueOptions(val);
      return valArray;
    }
    return undefined;
  };

  const value = useMemo(() => {
    return handleFormValue(originValue);
  }, [JSON.stringify(originValue)]);

  const {
    formFieldsRef,
    disabled,
    readOnly,
    required,
    finalRules: temRules,
  } = useCommonImperativeHandle(ref, props, {
    clearValue: [],
    get value() {
      return value;
    },
  });

  // 设置前后缀样式
  useEffect(() => {
    switch (postfixStyle) {
      case '2':
        setPostfixStyleClsName('postfixGreyStyle');
        break;
      case '3':
        setPostfixStyleClsName('postfixBlueStyle');
        break;
      case '4':
        setPostfixStyleClsName('postfixNoBorderStyle');
        break;
      case '1':
      default:
        setPostfixStyleClsName('postfixWhiteStyle');
        break;
    }
    if (!postfixIcon?.theme && !postfixIcon?.type && !postfix) {
      setPostfixStyleClsName('');
    }
  }, [postfixStyle]);

  const getAddonAfterBtn = () => {
    const { disabled } = restProps;
    let after = null;

    if (handleIsValidIconCfg(postfixIcon)) {
      after = (
        <CommIcon
          className={disabled ? 'disabled' : ''}
          icon={postfixIcon}
          getEngineApis={getEngineApis}
          onClick={disabled || postfix ? null : onIconClick || undefined}
          $$componentItem={props?.$$componentItem}
        />
      );
    }

    if (postfix) {
      switch (postfixIconPosition) {
        case 'after':
          after = (
            <span
              className="postfix"
              onClick={disabled ? null : onIconClick || undefined}
            >
              {postfix}
              {after}
            </span>
          );
          break;
        case 'before':
        default:
          after = (
            <span
              className="postfix"
              onClick={disabled ? null : onIconClick || undefined}
            >
              {after}
              {postfix}
            </span>
          );
          break;
      }
    }
    return after;
  };

  // 清除图标
  const ClearIcon = () => {
    let clear = null;
    // 选择了图标
    if (value && props?.allowClear && handleIsValidIconCfg(clearIcon)) {
      clear = (
        <span onClick={() => handleChangeVal([])}>
          <CommIcon
            icon={clearIcon}
            className="anticon anticon-close-circle pcfactory-input-clear-icon-has-suffix pcfactory-input-clear-icon"
            $$componentItem={props?.$$componentItem}
            getEngineApis={getEngineApis}
          />
        </span>
      );
    }
    return clear;
  };

  // 非负整数
  const numReg = /^\d*$/;
  // 验证字符串是否是非负整数
  const checkNumber = (str: any) => {
    return numReg.test(str);
  };

  const handleChangeVal = (e: any) => {
    if (onChange) {
      onChange(e, options);
    }
  };

  // 弹框回调
  const handleModalOk = (res: any) => {
    const { valArray, optionParams } = getValueOptions(res);
    const modeOpts =
      mode === 'multiple'
        ? optionParams
        : optionParams.filter((v: any) => v?.value === valArray);
    if (onChange) {
      onChange(valArray, modeOpts);
    }
  };
  // 触发弹框弹出
  const handleClickVisible = () => {
    if (openModal && modalInfo?.pageId) {
      const respObj: any = {};
      modalInfo?.responseObj?.forEach((da: any) => {
        if (da.value) {
          respObj[da.code] = da.value;
        }
      });
      openModal({
        pageId: modalInfo.pageId,
        params: respObj,
        modalPath: modalInfo?.modalname,
        onOk: (res: any) => handleModalOk(res),
      });
    }
  };
  const lastValue: any = useMemo(() => {
    if (options?.length) {
      return options[options?.length - 1] && options[options?.length - 1];
    }
    return {};
  }, [options]);

  const finalRules = useMemo(() => {
    const rules: ValidationRule[] = [];
    let lengthRule;
    if (minLength === 0 && maxLength === 0) {
      lengthRule = undefined;
    } else if (
      checkNumber(minLength) &&
      checkNumber(maxLength) &&
      minLength < maxLength
    ) {
      lengthRule = {
        pattern: new RegExp(`^.{${minLength},${maxLength}}$`),
        message: getLocale?.('Input.lenRule', { minLength, maxLength }),
      };
    } else if (checkNumber(maxLength) && maxLength > 0) {
      lengthRule = {
        pattern: new RegExp(`^.{0,${maxLength}}$`),
        message: getLocale?.('Input.maxRule', { maxLength }),
      };
    } else if (checkNumber(minLength)) {
      lengthRule = {
        pattern: new RegExp(`^.{${minLength},}$`),
        message: getLocale?.('Input.minRule', { minLength }),
      };
    }
    if (lengthRule) {
      rules.push(lengthRule);
    }

    if (Array.isArray(temRules)) {
      rules.push(...temRules);
    }
    return rules;
  }, [required, minLength, name, regexp, maxLength, temRules]);

  return (
    <FormFields
      {...getFieldsProps(props)}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      ref={formFieldsRef}
      wrapperClassName={MODALSELECT_WRAPPER_CLASSNAME}
      rules={finalRules}
      value={value}
      handleFormValue={handleFormValue}
    >
      <BaseModalSelect
        className={className}
        postfixStyleClsName={postfixStyleClsName}
        restProps={restProps}
        mode={mode}
        ClearIcon={ClearIcon}
        options={options}
        handleChangeVal={handleChangeVal}
        handleClickVisible={handleClickVisible}
        lastValue={lastValue}
        onIconClick={onIconClick}
        getAddonAfterBtn={getAddonAfterBtn}
        propsOnChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        allowClear={props.allowClear}
        InputNumber={props.InputNumber}
      />
    </FormFields>
  );
});

export default ModalSelect;
export { MODALSELECT_WRAPPER_CLASSNAME, WrapperModalSelect };
