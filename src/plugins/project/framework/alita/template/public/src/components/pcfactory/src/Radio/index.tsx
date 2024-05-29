import { LingxiForwardRef } from '@lingxiteam/types';
import { Radio as AntdRadio } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
} from '../utils';
import { useLocale } from '../utils/hooks/useLocale';
import renderReadOnly from '../utils/renderReadOnly';

export interface RadioProps {
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
  dataSource?: any;
  radioType?: any;
  selfSpan?: any;
  colSpan?: any;
  rangeLimit?: any;
  defaultOptions?: any;
  optionMarginRight?: any;
  valueKey?: any;
  labelKey?: any;
  options?: any;
  style?: React.CSSProperties;
  attr?: any;
  staticService?: any;
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
  readOnly: boolean;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
}

export interface RadioWrapperProps {
  children: React.ReactElement;
}

const RADIO_WRAPPER_CLASSNAME = 'ued-radio-wrap';

export const WrapperRadio: React.FC<RadioWrapperProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${RADIO_WRAPPER_CLASSNAME} ${children.props.className || ''}`,
  });

const { Group, Button } = AntdRadio;

const typeFn: any = {
  string: String,
  number: Number,
  boolean: Boolean,
};

/**
 * 处理数据
 * @param dataSource 数据源
 * @param valueKey
 * @param labelKey
 * @returns
 */
export const handleDataSource = (
  dataSource: any[],
  valueKey?: string,
  labelKey?: string,
) => {
  const valueKeys: any = [];
  const newDataSoure: any[] = [];
  if (Array.isArray(dataSource)) {
    dataSource.forEach((v: any) => {
      const label = v?.[labelKey || 'label'];
      const value = v?.[valueKey || 'value'] || v?.key;
      if (value) {
        valueKeys.push(value);
        newDataSoure.push({
          ...v,
          label,
          value,
        });
      }
    });
  }
  return newDataSoure;
};
const Radio = LingxiForwardRef<any, RadioProps>((props, ref) => {
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
    radioType,
    selfSpan,
    colSpan,
    rangeLimit,
    defaultOptions,
    optionMarginRight,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    labelKey = 'label',
    valueKey = 'value',
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    rules: externalRules = [],
    isFormChild,
    tipSize,
    tipWidth,
    tipHeight,
    getEngineApis,
    dataSource: newDataSoure,
    ...restProps
  } = props;
  const { getLocale, lang } = useLocale(getEngineApis());
  const [dataSource, setDataSource] = useState<any[]>([]);
  const { formFieldsRef, disabled, readOnly, required } =
    useCommonImperativeHandle(ref, props, {
      clearValue: undefined,
      // 清空选项
      clearOptions() {
        setDataSource([]);
      },
      setDataWithLabelAndValue(data: any) {
        setLKey(data.labelKey);
        setVKey(data.valueKey);
        const newData = handleDataSource(
          data.dataSource,
          data.valueKey,
          data.labelKey,
        );
        setDataSource(newData);
      },
    });

  const [lKey, setLKey] = useState(labelKey);
  const [vKey, setVKey] = useState(valueKey);

  const transformValueType = (v: any, curVal: any) => {
    const realValueType = typeof (curVal ?? '');
    if (typeFn[realValueType]) {
      try {
        return typeFn[realValueType](v);
      } catch (error) {
        return v;
      }
    }
    return v;
  };

  // 处理列表数据
  useEffect(() => {
    const newData = Array.isArray(newDataSoure)
      ? handleDataSource(newDataSoure, vKey, lKey)
      : [];
    setDataSource([...(defaultOptions || []), ...newData]);
  }, [JSON.stringify(defaultOptions), JSON.stringify(newDataSoure)]);

  // 需要判断自己是否处于表单内，处于表单内的话不能用value

  const Opt = radioType === 'Radio' ? AntdRadio : Button;

  const finalRules = useMemo(() => {
    const rules = [{ required, message: getLocale?.('notEmpty', { name }) }];

    if (Array.isArray(externalRules)) {
      rules.push(...externalRules);
    }
    return rules;
  }, [required, lang]);

  return (
    <FormFields
      {...getFieldsProps(props)}
      readOnly={readOnly}
      required={required}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      ref={formFieldsRef}
      wrapperClassName={RADIO_WRAPPER_CLASSNAME}
      rules={finalRules}
      render={(value: string) => {
        const item = dataSource.filter((c: any) => {
          // eslint-disable-next-line eqeqeq
          return c.value == value;
        });
        if (Array.isArray(item) && item.length > 0) {
          return renderReadOnly(item?.[0].label || value || '--');
        }
        return renderReadOnly(value || '--');
      }}
    >
      <Group
        {...restProps}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      >
        {(dataSource || []).map((c) => (
          <Opt
            value={transformValueType(c.value, value)}
            key={c.value}
            disabled={
              rangeLimit &&
              rangeLimit.length > 0 &&
              !rangeLimit.includes(+c.value)
            }
            style={{
              marginRight:
                radioType === 'Radio.Button' && optionMarginRight
                  ? optionMarginRight
                  : '',
            }}
          >
            {c.label}
          </Opt>
        ))}
      </Group>
    </FormFields>
  );
});

export default Radio;
