import { LingxiForwardRef } from '@lingxiteam/types';
import { Switch as AntdSwitch } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import CommIcon from '../Icon';
import { handleIsValidIconCfg } from '../Icon/hooks';
import { FormFields, useCommonImperativeHandle, useForm } from '../utils';
import { getFieldsProps } from '../utils/formUtils/FormFields';

export interface SwitchProps {
  value?: any;
  visible?: any;
  onChange?: any;
  onValueRelease?: any;
  defaultChecked?: boolean;
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
  style?: any;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  colon?: boolean;
  switchStyle?: string;
  checkedChildren?: string;
  unCheckedChildren?: string;
  checkedChildrenIcon?: any;
  unCheckedChildrenIcon?: any;
  size?: any;
  isFormChild?: boolean | undefined;
  rules?: any[];
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  getEngineApis?: any;
}

const Switch = LingxiForwardRef<any, SwitchProps>((props, ref) => {
  const {
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onChange,
    unCheckedChildrenIcon,
    checkedChildrenIcon,
    onValueRelease,
    defaultChecked,
    getCompPropMapState,
    compId,
    name,
    fieldName: rawFieldName,
    hidden,
    switchStyle = '',
    regexp,
    message,
    label,
    labelCol,
    wrapperCol,
    selfSpan,
    colSpan,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    isFormChild,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rules: externalRules = [],
    tipSize,
    tipWidth,
    tipHeight,
    getEngineApis,
    ...restProps
  } = props;

  const customStyle = restProps.style || {};
  const { margin, display, visibility, ...restCusStyles } = customStyle;

  const [loading, setLoading] = useState(false);

  const { inForm } = useForm();
  const { disabled, required, formFieldsRef, finalRules } =
    useCommonImperativeHandle(ref, props, {
      setLoading: (_loading: boolean) => {
        setLoading(_loading);
      },
    });

  // 渲染开关开启/关闭文案或图标
  const renderSwitchStyle = useCallback(
    (type: string) => {
      if (switchStyle) {
        let Comp = null;
        if (switchStyle === 'font') {
          Comp = (props as any)[type];
        } else if (switchStyle === 'icon') {
          const iconInfo = (props as any)[`${type}Icon`];
          if (handleIsValidIconCfg(iconInfo)) {
            Comp = (
              <CommIcon
                icon={iconInfo}
                getEngineApis={getEngineApis}
                $$componentItem={props?.$$componentItem}
                className=""
              />
            );
          }
        }
        if (Comp) {
          return props.size === 'small' ? (
            <div
              className="ued-switch-children"
              ref={(r) => {
                if (r) {
                  // 小号时把内容缩小80%
                  const clientInfo = r.getBoundingClientRect();
                  const { width = 0 } = clientInfo || {};
                  const margin = `-${width / 4}px`;
                  if (value) {
                    r.style.marginLeft = margin;
                    r.style.marginRight = '0';
                  } else {
                    r.style.marginLeft = '0';
                    r.style.marginRight = margin;
                  }
                }
              }}
            >
              {Comp}
            </div>
          ) : (
            Comp
          );
        }
        return undefined;
      }
      return undefined;
    },
    [
      switchStyle,
      props.checkedChildren,
      props.unCheckedChildren,
      props.size,
      unCheckedChildrenIcon,
      checkedChildrenIcon,
      value,
    ],
  );

  const checkedChildrenComp = useMemo(
    () => renderSwitchStyle('checkedChildren'),
    [renderSwitchStyle],
  );
  const unCheckedChildrenComp = useMemo(
    () => renderSwitchStyle('unCheckedChildren'),
    [renderSwitchStyle],
  );

  return (
    <FormFields
      {...getFieldsProps(props)}
      disabled={disabled}
      required={required}
      ref={formFieldsRef}
      defaultValue={props.defaultChecked}
      rules={finalRules}
      handleFormValue={(val) => {
        if (val !== undefined) {
          if (typeof val === 'string') {
            if (val === 'true') {
              return true;
            }
            return true;
          }
        }
        return val;
      }}
    >
      <AntdSwitch
        {...restProps}
        loading={loading}
        checkedChildren={checkedChildrenComp}
        unCheckedChildren={unCheckedChildrenComp}
        defaultChecked={!!defaultChecked}
        style={inForm ? restCusStyles : props.style}
        // eslint-disable-next-line no-nested-ternary
        checked={
          typeof value === 'string'
            ? value.toLowerCase() === 'false'
              ? false
              : !!value
            : !!value
        }
        onChange={(e: any) => {
          if (onChange) {
            onChange(e);
          }
        }}
      />
    </FormFields>
  );
});

export default Switch;
