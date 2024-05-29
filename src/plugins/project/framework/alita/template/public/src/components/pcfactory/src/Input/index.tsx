import { Input as AntdInput } from 'antd';
// @ts-ignore
import { LingxiForwardRef } from '@lingxiteam/types';
import type { ValidationRule } from 'antd/es/form';
import classnames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import CommIcon from '../Icon';
import { handleIsValidIconCfg } from '../Icon/hooks';
import type { IconCfg } from '../Icon/PropsType';
import {
  FormFields,
  getFieldsProps,
  getRegexpRules,
  useCommonImperativeHandle,
  useDataMask,
} from '../utils';
import { checkNumber } from '../utils/common';
import { useLocale } from '../utils/hooks/useLocale';
import renderReadOnly from '../utils/renderReadOnly';

export interface MyInputProps {
  value?: any;
  icon?: IconCfg;
  prefixIcon?: any; // 图标
  visible?: any;
  onChange?: any;
  onValueRelease?: any;
  getCompPropMapState?: any;
  compId?: any;
  name?: any;
  fieldName?: any;
  required?: any;
  readOnly?: boolean;
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
  compType?: any;
  prefixStyle?: any;
  prefixWord?: any;
  prefixIconPosition?: any;
  postfixIconPosition?: any;
  postfixStyle?: any;
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
  isFormChild?: boolean | undefined;
  dataMask?: string | Function;
  dataMaskUtil?: any; // 工具类
  type?: string;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  getEngineApis?: any;
  trigger?: string;
}
export interface WrapperInputProps {
  children: React.ReactElement;
}

const INPUT_WRAPPER_CLASSNAME = 'ued-input-wrap';

const WrapperInput: React.FC<WrapperInputProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${INPUT_WRAPPER_CLASSNAME}`,
  });
const Input = LingxiForwardRef<any, MyInputProps>((props, ref) => {
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
    prefixStyle,
    prefixWord,
    prefixIconPosition,
    postfixIconPosition,
    postfixStyle,
    onSelectedRowsRelease,
    onSelectedRowKeysRelease,
    onSelectedKeysRelease,
    onEditingKeyRelease,
    onInlineEditRelease,
    onInlineSaveRelease,
    onSelectedDataRelease,
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
    rules: externalRules,
    isFormChild,
    icon = {},
    prefixIcon = {},
    dataMask,
    dataMaskUtil,
    tipSize,
    tipWidth,
    tipHeight,
    getEngineApis,
    $$componentItem,
    trigger,
    ...restProps
  } = props;

  const { disabled, required, formFieldsRef, readOnly } =
    useCommonImperativeHandle(ref, props);

  const { getLocale, lang } = useLocale(getEngineApis?.());
  // Input控件值需要经过水印处理
  const { disableMastStatus, maskData } = useDataMask({
    getEngineApis,
    defaultValue,
    value,
    dataMask,
  });

  const { type, theme } = icon || {};
  const {
    prefixIconIconFileInfo,
    prefixIconIsIconFont,
    prefixIconType,
    prefixIconTheme,
    prefixIconFontAddress,
    prefixIconiconFile,
  } = prefixIcon;

  const ignoreReadOnlyFlag = useMemo(() => {
    // 只读模式并且 控件存在图标配置和事件
    if (!readOnly) {
      return false;
    }
    // 旧数据 type 为后缀图标
    if (
      (props.icon?.type || props?.type || props?.postfix) &&
      typeof props.onIconClick === 'function'
    ) {
      return true;
    }
    return false;
  }, [readOnly]);

  const [prefixStyleClsName, setPrefixStyleClsName] = useState<string>('');
  const [postfixStyleClsName, setPostfixStyleClsName] = useState<string>('');

  // 设置前后缀样式
  useEffect(() => {
    switch (prefixStyle) {
      case '2':
        setPrefixStyleClsName('greyStyle');
        break;
      case '3':
        setPrefixStyleClsName('blueStyle');
        break;
      case '1':
      default:
        setPrefixStyleClsName('whiteStyle');
        break;
    }
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
    if (!theme && !type && !postfix) {
      setPostfixStyleClsName('');
    }
  }, [prefixStyle, postfixStyle]);

  const getAddonBeforeBtn = () => {
    let before = null;

    const resolvedPrefixIcon = {
      type: prefixIconType,
      theme: prefixIconTheme,
      isIconFont: prefixIconIsIconFont,
      fontAddress: prefixIconFontAddress,
      iconFile: prefixIconiconFile,
      iconFileInfo: prefixIconIconFileInfo,
    };
    if (handleIsValidIconCfg(resolvedPrefixIcon)) {
      before = (
        <CommIcon
          className={disabled ? 'disabled' : ''}
          icon={resolvedPrefixIcon}
          getEngineApis={getEngineApis}
          $$componentItem={$$componentItem}
        />
      );
    }

    if (prefixWord) {
      switch (prefixIconPosition) {
        case 'after':
          before = (
            <span className="postfix">
              {prefixWord}
              {before}
            </span>
          );
          break;
        case 'before':
        default:
          before = (
            <span className="postfix">
              {before}
              {prefixWord}
            </span>
          );
          break;
      }
    }
    return before;
  };

  const getAddonAfterBtn = () => {
    let after = null;

    if (handleIsValidIconCfg(icon)) {
      after = (
        <CommIcon
          icon={icon}
          className={disabled ? 'disabled' : ''}
          getEngineApis={getEngineApis}
          onClick={disabled || postfix ? null : onIconClick || undefined}
          $$componentItem={$$componentItem}
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

  const finalRules = useMemo(() => {
    if (dataMask === 'service') {
      return [];
    }
    const rules: ValidationRule[] = [
      {
        required: required || (checkNumber(minLength) && minLength !== 0),
        message: getLocale?.('notEmpty', { name }),
      },
      ...getRegexpRules(regexp, getLocale),
    ];
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

    if (Array.isArray(externalRules || [])) {
      rules.push(...(externalRules || []));
    }
    return rules;
  }, [required, lang, externalRules]);

  const showCount = useMemo(
    () => maxLength && checkNumber(maxLength),
    [maxLength],
  );

  return (
    <FormFields
      {...getFieldsProps(props)}
      rules={finalRules}
      handleFormValue={(val) => {
        return Number.isNaN(val) ? '' : val;
      }}
      trigger={trigger}
      ignoreReadOnlyFlag={ignoreReadOnlyFlag}
      render={() => {
        const val = maskData.isMask ? maskData.maskValue : value;
        return renderReadOnly(val || '--');
      }}
      defaultValue={defaultValue}
      value={value}
      onValueChange={() => {
        // 用户主动输入设置脱敏失效
        disableMastStatus();
      }}
      wrapperClassName={INPUT_WRAPPER_CLASSNAME}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      ref={formFieldsRef}
      validateTrigger="onBlur"
      maskData={maskData}
    >
      <AntdInput
        {...restProps}
        maxLength={maxLength === 0 ? undefined : maxLength}
        showCount={showCount}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
        className={classnames(
          prefixStyleClsName,
          postfixStyleClsName,
          className,
        )}
        addonBefore={getAddonBeforeBtn()}
        addonAfter={getAddonAfterBtn()}
      />
    </FormFields>
  );
});

Input.defaultProps = {
  trigger: 'onChange',
};

export default Input;
export { WrapperInput, INPUT_WRAPPER_CLASSNAME };
