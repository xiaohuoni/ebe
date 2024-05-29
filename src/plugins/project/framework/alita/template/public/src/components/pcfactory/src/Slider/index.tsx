import { InputNumber, Slider as AntdSlider } from 'antd';
import classNames from 'classnames';
import React, { CSSProperties, useMemo } from 'react';
import CommonIcon from '../Icon';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
} from '../utils';

interface BaseSliderPropsType {
  step: any;
  showLabel: any;
  labelPlacement: any;
  range: boolean | undefined;
  disabled?: boolean | undefined;
  direction: any;
  options: any;
  className: any;
  minIcon: any;
  maxIcon: any;
  max: any;
  min: any;
  style: CSSProperties;
  showInput: any;
  getEngineApis?: any;
  value?: any;
  onChange?: (value: any) => void;
  onMouseEnter: any;
  onMouseLeave: any;
  onClick: any;
}

export interface MySliderProps extends Omit<BaseSliderPropsType, 'options'> {
  defaultValue: any;
  showMarks: any;
  marks: any;
  stepNull: any;
  included: any;
  labelPlacement: any;
  draggableTrack: any;
  readOnly: any;
  required: any;
  visible: any;
  showWrapperContainer?: any;
  selfSpan?: any;
  colSpan?: any;
  label?: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  regexp?: any;
  message?: any;
  hidden?: any;
  compId?: any;
  labelCol?: any;
  wrapperCol?: any;
  colon?: any;
  fieldName?: any;
  onValueRelease?: any;
  getCompPropMapState?: any;
  wrapperContainer?: any;
  isFormChild?: boolean | undefined;
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  getEngineApis?: any;
}

const prefixCls = 'slider';

const BaseSlider = (props: BaseSliderPropsType) => {
  const {
    step,
    showLabel,
    labelPlacement,
    range,
    disabled,
    direction,
    options,
    className,
    minIcon,
    maxIcon,
    max,
    min,
    style,
    showInput,
    getEngineApis,
    value,
    onChange,
    ...restProps
  } = props;

  const curValue = useMemo(() => {
    // 单滑动时，设置了默认值，防止滑动到0时，会跳动到默认值上
    let newVal = typeof value === 'number' && value === 0 ? 0 : value || 0;
    if (range) {
      // 双滑块
      newVal = Array.isArray(newVal) ? newVal : [newVal, newVal];
    } else if (!range && Array.isArray(newVal)) {
      newVal = newVal[1];
    }

    return newVal;
  }, [value, range]);

  const mid = Number(((max - min) / 2).toFixed(5));

  let isMinIconHL = false;
  let isMaxIconHL = false;
  if (!range && !disabled) {
    isMinIconHL = direction === 'reverse' ? curValue > mid : curValue <= mid;
    isMaxIconHL = direction === 'reverse' ? curValue <= mid : curValue > mid;
  }

  const renderIconFont = (info: any, color: any) => {
    if (info) {
      return (
        <div>
          {/** @ts-ignore */}
          <CommonIcon
            icon={info}
            isUsePrimary={color}
            style={{
              width: 16,
              height: 16,
              fontSize: '16px',
              fill: color ? undefined : 'rgba(28, 36, 46, 0.25)',
              color: color ? undefined : 'rgba(28, 36, 46, 0.25)',
            }}
            getEngineApis={getEngineApis}
          />
        </div>
      );
    }
    return undefined;
  };

  return (
    <div
      className={classNames({
        className,
        [`${prefixCls}_wrap`]: true,
        [`${prefixCls}_wrap_vertical ${className}`]: options?.vertical,
        [`${prefixCls}_wrap_icon ${className}`]: !!minIcon || !!maxIcon,
        [`${prefixCls}_wrap_vertical_icon ${className}`]:
          (!!minIcon || !!maxIcon) && options?.vertical,
      })}
      style={style}
      {...restProps}
    >
      {minIcon && renderIconFont(minIcon, isMinIconHL)}
      <div className={`${prefixCls}-inputbox`}>
        <AntdSlider
          {...options}
          value={curValue}
          tooltipPlacement={labelPlacement}
          tooltipVisible={showLabel ? undefined : false}
          disabled={disabled}
          onChange={(e: any) => {
            if (onChange) {
              onChange(e);
            }
          }}
        />
      </div>
      {showInput && (
        <div className={`${prefixCls}_inputNumber`}>
          <InputNumber
            min={min}
            max={range ? curValue[1] : max}
            value={range ? curValue[0] : curValue}
            disabled={disabled}
            step={step}
            onChange={(e: any) => {
              if (onChange) {
                onChange(range ? [e, curValue[1]] : e);
              }
            }}
          />
          {range && (
            <>
              <span className={`${prefixCls}_line`} />
              <InputNumber
                min={curValue[0]}
                max={max}
                step={step}
                value={curValue[1]}
                disabled={disabled}
                onChange={(e: any) => {
                  if (onChange) {
                    onChange(range ? [curValue[0], e] : e);
                  }
                }}
              />
            </>
          )}
        </div>
      )}
      {maxIcon && renderIconFont(maxIcon, isMaxIconHL)}
    </div>
  );
};

const Slider = React.forwardRef<any, MySliderProps>((props, ref) => {
  const {
    showMarks,
    marks,
    stepNull,
    included,
    className,
    style,
    range = false,
    defaultValue,
    direction,
    step,
    value,
    minIcon,
    maxIcon,
    max,
    min,
    wrapperContainer: WrapperContainer,
    showInput,
    showLabel,
    labelPlacement,
    draggableTrack,
    onChange,
    showWrapperContainer,
    selfSpan,
    colSpan,
    label,
    tipContent,
    regexp,
    message,
    hidden,
    compId,
    tipIcon,
    tipLocation,
    titleTip,
    tipPlacement,
    labelCol,
    wrapperCol,
    colon,
    fieldName: rawFieldName,
    onValueRelease,
    getCompPropMapState,
    isFormChild,
    getEngineApis,
    tipSize,
    tipWidth,
    tipHeight,
    ...restProps
  } = props;

  const { disabled, required, readOnly, formFieldsRef, finalRules } =
    useCommonImperativeHandle(ref, props);

  const options = useMemo(() => {
    const params: any = {
      range,
      step,
      vertical: direction === 'vertical',
      reverse: direction === 'reverse',
    };
    const marksAttr = marks?.filter((mark: any) => mark.checked);
    if (showMarks && marks?.length) {
      // 显示刻度
      const marksObj: any = {};
      marksAttr.forEach((mark: any) => {
        const { key, unit, fontFamily } = mark || {};
        marksObj[key] = {
          style: {
            color: mark.color,
            fontWeight: fontFamily?.includes('bold') ? 'bold' : undefined,
            fontStyle: fontFamily?.includes('italic') ? 'italic' : undefined,
          },
          label: unit,
        };
      });
      params.marks = marksObj;
      if (!included) {
        params.included = included;
      }
      if (stepNull) {
        params.step = null;
      }
    }
    if (range && draggableTrack) {
      params.range = {
        draggableTrack,
      };
    }
    return params;
  }, [range, step, direction, marks, stepNull, draggableTrack]);

  return (
    <FormFields
      {...getFieldsProps(props)}
      ref={formFieldsRef}
      required={required}
      disabled={disabled as any}
      readOnly={readOnly}
      rules={finalRules}
      handleFormValue={(val) => {
        if (val !== undefined) {
          // 绑定内容有可能返回number类型或者是array类型，全部转换为string类型处理
          const valueArr = (
            typeof val === 'number' || val ? val.toString() : val
          )
            ?.replace(/\[|]/g, '')
            ?.split(',')
            ?.filter((v: any) => !!v);
          const _valueArr = valueArr?.map((v: any) => (v && Number(v)) || 0);
          const _value =
            range && Array.isArray(_valueArr) && _valueArr?.length > 1
              ? _valueArr.sort((a, b) => a - b)
              : (_valueArr && _valueArr[0]) || 0;

          return _value;
        }

        return val;
      }}
    >
      <BaseSlider
        step={step}
        showLabel={showLabel}
        labelPlacement={labelPlacement}
        range={range}
        direction={direction}
        options={options}
        className={className}
        minIcon={minIcon}
        maxIcon={maxIcon}
        max={max}
        min={min}
        style={style}
        showInput={showInput}
        getEngineApis={getEngineApis}
        onChange={onChange}
        onMouseEnter={restProps.onMouseEnter}
        onMouseLeave={restProps.onMouseLeave}
        onClick={restProps.onClick}
      />
    </FormFields>
  );
});

export default Slider;
