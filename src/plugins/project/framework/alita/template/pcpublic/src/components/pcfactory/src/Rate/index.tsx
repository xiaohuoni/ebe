/* eslint-disable @typescript-eslint/no-unused-vars */
import { LingxiForwardRef } from '@lingxiteam/types';
import { Rate as AntdRate } from 'antd';
import type { RateProps } from 'antd/lib/rate';
import { useCallback, useMemo } from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
} from '../utils';
import { useLocale } from '../utils/hooks/useLocale';

export interface MyRateProps {
  value?: string;
  visible?: boolean;
  onValueRelease?: any;
  onChange?: any;
  tooltips?: RateProps['tooltips'];
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
  style?: any;
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
  disabled: boolean;
  rules: any[];
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
}

interface BaseRatePropsType {
  tooltips: any;
  tooltipType?: 'none' | 'number' | 'custom';
  [key: string]: any;
}

const rateCls = 'ued-rateContainer';

const BaseRate = (props: BaseRatePropsType) => {
  const {
    value: originValue,
    tooltips,
    onChange,
    tooltipType = 'custom',
    ...restProps
  } = props;

  const value = useMemo(() => {
    return Number(originValue);
  }, [originValue]);

  const onStarChange = (newValue: number) => {
    if (onChange) {
      onChange(newValue);
    }
  };
  const rendeRrightTool = useCallback(() => {
    switch (tooltipType) {
      case 'number':
        return value;
      case 'none':
        return null;
      // 没有tooltipType代表存量数据，按照自定义展示，向上取整
      case 'custom':
      default:
        return value && tooltips && tooltips.length > value - 1
          ? tooltips[Math.ceil(+value) - 1]
          : '';
    }
  }, [value, tooltips, tooltipType]);
  const myTooltips = useMemo(() => {
    switch (tooltipType) {
      case 'number':
      case 'none':
        return [];
      // 没有tooltipType代表存量数据，按照自定义展示
      case 'custom':
      default:
        return tooltips;
    }
  }, [tooltips, tooltipType, restProps.count]);
  return (
    <div className={rateCls}>
      <AntdRate
        {...restProps}
        tooltips={myTooltips}
        value={value}
        onChange={(val) => onStarChange(val)}
      />
      <span className={`${rateCls}-rateText`}>{rendeRrightTool()}</span>
    </div>
  );
};

const Rate = LingxiForwardRef<any, MyRateProps>((props, ref) => {
  const {
    value,
    tooltips,
    onChange,
    onValueRelease,
    visible = true,
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
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    isFormChild,
    rules: externalRules = [],
    tipSize,
    tipWidth,
    tipHeight,
    getEngineApis,
    ...restProps
  } = props;

  const { getLocale, lang } = useLocale(getEngineApis());

  const { disabled, required, readOnly, formFieldsRef } =
    useCommonImperativeHandle(ref, props);

  const finalRules = useMemo(
    () => [
      {
        required,
        message: getLocale?.('notEmpty', { name }),
      },
    ],
    [required, name, lang],
  );

  return (
    <FormFields
      {...getFieldsProps(props)}
      ref={formFieldsRef}
      trigger="onChange"
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      rules={finalRules}
      handleFormValue={(val) => {
        if (val !== undefined) {
          return Number(val);
        }
        return val;
      }}
    >
      <BaseRate tooltips={tooltips} onChange={onChange} {...restProps} />
    </FormFields>
  );
});

export default Rate;
