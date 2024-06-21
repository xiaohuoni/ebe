import { LingxiForwardRef } from '@lingxiteam/types';
import { Checkbox } from 'antd';
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { FormFields, getFieldsProps } from '../utils';
import useCommonImperative from '../utils/hooks/useCommonImperativeHandle';
import { useLocale } from '../utils/hooks/useLocale';
import { renderCommonList } from '../utils/renderReadOnly';

export interface MyCheckboxGroupProps {
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
  defaultValue?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  text?: any;
  selfSpan?: number;
  colSpan?: number;
  rangeLimit?: any;
  dataSource?: any;
  valueKey?: string;
  labelKey?: string;
  attr?: any;
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
  max?: number;
  min?: number;
  checkedAll?: boolean;
  checkAllText?: any;
  classNameCheck?: any;
  className?: any;
  disabled?: boolean;
  isFormChild?: boolean | undefined;
  readOnly: boolean;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
}

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
// const prefixCls = 'checkboxGroup';

const CheckboxGroup = LingxiForwardRef<any, MyCheckboxGroupProps>(
  (props, ref) => {
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
      text,
      selfSpan,
      colSpan,
      rangeLimit,
      labelKey = 'label',
      valueKey = 'value',
      showWrapperContainer,
      wrapperContainer: WrapperContainer,
      titleTip,
      tipIcon,
      tipLocation,
      tipContent,
      tipPlacement,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      rules: externalRules = [],
      max,
      min,
      checkedAll,
      checkAllText,
      classNameCheck,
      className,
      isFormChild,
      tipSize,
      tipWidth,
      tipHeight,
      getEngineApis,
      dataSource: newDataSoure,
      ...restProps
    } = props;

    const engineApis = getEngineApis();
    const customStyle = restProps.style || {};
    const [dataSource, setDataSource] = useState<any[]>([]);
    const [lKey, setLKey] = useState(labelKey);
    const [vKey, setVKey] = useState(valueKey);

    const {
      margin: customMargin,
      display: customDisplay,
      visibility: customVisibility,
      ...restCusStyles
    } = customStyle;

    const {
      formFieldsRef,
      required,
      disabled,
      readOnly,
      finalRules,
      setExtendRules,
    } = useCommonImperative(ref, props, {
      clearValue: [],
      setDataWithLabelAndValue: (data: {
        dataSource: any[];
        labelKey: string;
        valueKey: string;
      }) => {
        setLKey(data.labelKey);
        setVKey(data.valueKey);
        const newData = handleDataSource(
          data.dataSource,
          data.valueKey,
          data.labelKey,
        );
        setDataSource(newData);
      },
      clearOptions: () => {
        setDataSource([]);
      },
    });
    const { getLocale, lang } = useLocale(engineApis);

    const dfValue =
      defaultValue && typeof defaultValue === 'string'
        ? defaultValue.split(',')
        : undefined;
    // 处理列表数据
    useEffect(() => {
      let newData = Array.isArray(newDataSoure)
        ? handleDataSource(newDataSoure, vKey, lKey)
        : [];
      if (rangeLimit && rangeLimit.length > 0) {
        // 根据联动规则过滤出可选范围
        newData = newData.map((c: any) => ({
          ...c,
          disabled: !rangeLimit.includes(+c.value),
        }));
      }
      setDataSource(newData);
    }, [JSON.stringify(newDataSoure), rangeLimit]);

    const getRules = () => {
      if (!min && !max) {
        return [];
      }
      const minMsg: any = [];
      const maxMsg: any = [];
      if (min) {
        minMsg.push({
          type: 'array',
          min,
          message: getLocale?.('CheckboxGroup.minRule', { min }),
        });
      }
      if (max) {
        maxMsg.push({
          type: 'array',
          max,
          message: getLocale?.('CheckboxGroup.maxRule', { max }),
        });
      }
      return [...minMsg, ...maxMsg];
    };

    useLayoutEffect(() => {
      const extendRules = getRules();
      setExtendRules(extendRules, false);
    }, [min, max, lang]);

    // indeterminate: 已选但未全选，checkAll：全选/全不选，isAllDisabled：是否选项全部禁用
    const [indeterminate, checkAll, isAllDisabled] = useMemo(() => {
      const curValue = dataSource
        ?.filter((c) => (value || [])?.includes(c?.value))
        ?.map((v) => v?.value);
      const valLen = curValue?.length || 0;
      const dataLen = dataSource?.length || 0;
      const disableLen = dataSource?.filter((o) => o?.disabled)?.length;
      return [
        !!valLen && valLen < dataLen,
        !!dataLen && dataLen === valLen,
        !!dataLen && disableLen === dataLen,
      ];
    }, [value, checkedAll, dataSource]);

    const onCheckAllChange = (e: any) => {
      const { checked } = e.target;
      let newVal: any = [];
      if (checked) {
        newVal = dataSource?.map((v: any) => v.value);
      }
      if (onChange) {
        onChange(newVal);
      }
    };

    const renderItem = () => {
      const rProps = {
        ...restProps,
        style: restCusStyles,
        defaultValue: dfValue,
        disabled,
      };
      return checkedAll && dataSource?.length > 0 ? (
        <>
          <Checkbox
            className={classNameCheck}
            indeterminate={indeterminate}
            disabled={rProps?.disabled || isAllDisabled}
            checked={checkAll}
            onChange={(e) => onCheckAllChange(e)}
          >
            {checkAllText || getLocale?.('all')}
          </Checkbox>
          <Checkbox.Group
            {...rProps}
            value={value}
            options={dataSource}
            className={`ued-checkboxgroup-wrap ${className}`}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
            }}
          />
        </>
      ) : (
        <Checkbox.Group
          {...rProps}
          className={`ued-checkboxgroup-wrap ${className}`}
          value={value}
          options={dataSource}
          onChange={(e: any) => {
            if (onChange) {
              onChange(e);
            }
          }}
        />
      );
    };

    return (
      <FormFields
        {...getFieldsProps(props)}
        handleFormValue={(value) => {
          return value && typeof value === 'string' ? value.split(',') : value;
        }}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        render={(val) => renderCommonList(val, dataSource)}
        rules={finalRules}
        defaultValue={dfValue}
        ref={formFieldsRef}
      >
        {renderItem()}
      </FormFields>
    );
  },
);

export default CheckboxGroup;
