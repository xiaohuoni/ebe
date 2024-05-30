import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import moment, { Moment } from 'moment';
import { initMomentLocale } from '../utils/common';
import { renderDatePicker } from '../utils/renderReadOnly';
import { FormFields, getFieldsProps, useCommonImperativeHandle } from '../utils';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Rule } from 'antd/lib/form';
import { useLocale } from '../utils/hooks/useLocale';

export interface FormDatePickerProps {
  value?: any;
  onChange?: any;
  pickerType?: any;
  valueFormat?: any;
  timeMode?: any;
  showTime?: any;
  format?: any;
  defaultValue?: any;
  placeholder?: string | string[];
  disabledDate?: (v: Moment) => void;
  disabledTime?: (v: Moment) => void;
}

export interface DatePickerProps {
  value?: any;
  visible?: any;
  onChange?: any;
  onValueRelease?: any;
  getCompPropMapState?: any;
  compId?: any;
  hidden?: any;
  name?: any;
  fieldName?: any;
  required?: any;
  regexp?: any;
  message?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  selfSpan?: any;
  colSpan?: any;
  defaultValue?: any;
  isCurrent?: any;
  pickerType?: any;
  format?: any;
  validateStatus?: any;
  help?: any;
  style?: React.CSSProperties;
  showTime?: string;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  limitRange?: any;
  customExpression?: any;
  customTip?: any;
  startTime?: any;
  endTime?: any;
  colon?: boolean;
  isFormChild?: boolean | undefined;
  readOnly: boolean;
  separator?: any;
  rules?: any[];
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  valueFormat?: string; // 日期取值格式
  timeMode?: string;
}

export interface WrapperDatePickerProps {
  children: React.ReactElement;
}

// 标准格式对应值
const STANDARD_FORMAT: Record<string, string> = {
  date: 'YYYY-MM-DD',
  time: 'YYYY-MM-DD HH:mm:ss',
  month: 'YYYY-MM',
  year: 'YYYY',
};

const parseFormats = [
  'YYYY年MM月DD日 HH:mm:ss',
  'YYYY/MM/DD HH:mm:ss',
  'YYYY-MM-DD HH:mm:ss',
  'YYYYMMDD HH:mm:ss',
  'YYYY-MM-DD',
  'YYYY/MM/DD',
  'YYYY年MM月DD日',
  'YYYYMMDD',
  'DD/MM/YYYY',
  'MM/DD/YYYY',
  'DD.MM.YYYY',
  'MM/YYYY',
  'MM.YYYY',
  'DD/MM/YYYY HH:mm:ss',
  'DD.MM.YYYY HH:mm:ss',
];

const parseDateFromFormat = (val: string | Moment, format: string | string[]): Moment | null => {
  // 日期格式严格按照（取值+展示）格式转换，转换失败后再使用内置格式（标准）转换
  const date = moment(val, format, true)?.isValid() ? moment(val, format) : moment(val);
  return date.isValid() ? date : null;
};

const DATEPICKER_WRAPPER_CLASSNAME = 'ued-datePicker-wrap';
const WrapperDatePicker: React.FC<WrapperDatePickerProps> = ({ children }) =>
  React.cloneElement(children, {
    className: `${DATEPICKER_WRAPPER_CLASSNAME} ${children.props.className || ''}`,
  });
const { RangePicker } = AntdDatePicker;
const FormDatePicker: React.FC<FormDatePickerProps> = forwardRef((props, ref) => {
  const { value, onChange, pickerType, format, valueFormat, timeMode, showTime, placeholder, ...restProps } =
    props;
  const [time, setTime] = useState<any>();
  useEffect(() => {
    let v;
    if (pickerType === 'RangePicker') {
      // return Array.isArray(value) ? value.map(c => (moment(c, moment.ISO_8601)._isValid ? moment(c, moment.ISO_8601) : null)) : undefined;
      v = Array.isArray(value)
        ? value.map((c) =>
          parseDateFromFormat(c, [format, valueFormat]),
        )
        : undefined;
      // 时间控件初始化取值顺序  value--> defaultValue
      if (Array.isArray(value)) {
        v = value.map((c) =>
          parseDateFromFormat(c, [format, valueFormat])
        );
      } else {
        v = Array.isArray(restProps.defaultValue)
          ? restProps.defaultValue.map((c) =>
            parseDateFromFormat(c, [format, valueFormat])
          )
          : undefined;
      }
    } else {
      let _value;
      if (value) {
        _value = parseDateFromFormat(value, [format, valueFormat]);
      } else {
        _value = restProps.defaultValue
          ? parseDateFromFormat(restProps.defaultValue, [format, valueFormat])
          : undefined;
      }
      // const _value = value ? moment(value, format).format("YYYY-MM-DD HH:mm:ss") : undefined;
      // eslint-disable-next-line no-nested-ternary
      v = _value
        ? parseDateFromFormat(_value, [format, valueFormat])
        : undefined;
    }
    setTime(v);
  }, [value, format, valueFormat]);
  const CompPicker = pickerType === 'RangePicker' ? RangePicker : AntdDatePicker as any;

  initMomentLocale();

  const [mode, thisShowTime, picker] = useMemo(() => {
    let _mode = 'date'; // eslint-disable-line no-underscore-dangle
    let _showTime = false; // eslint-disable-line no-underscore-dangle
    let _timeMode; // eslint-disable-line no-underscore-dangle
    let _picker;
    if (timeMode) {
      _showTime = showTime ?? timeMode === 'time';
      _timeMode = timeMode === 'time' ? 'date' : timeMode;
      _mode = pickerType === 'RangePicker' ? [_timeMode, _timeMode] : _timeMode;
      _picker = _timeMode;
    }
    // 为不影响时间控件使用，当mode为date时，即默认值时，不特意添加mode属性
    return [_timeMode === 'date' ? {} : { mode: _mode }, _showTime, ['year', 'month'].includes(_picker) ? { picker: _picker } : {}];
  }, [pickerType, timeMode, showTime]);

  const [open, setOpen] = useState(false);

  return (
    <CompPicker
      {...restProps}
      format={format}
      placeholder={pickerType === 'RangePicker' ? undefined : placeholder ?? ''}
      value={time}
      open={open}
      // {...mode} mode为year/month时onChange无法触发获取到值，需走onPanelChange。但是month/year切换日历面板时也会走onPanelChange导致open为false。
      {...picker} // 改用picker正常选中走onChange方法，面板切换走onPanelChange。
      showTime={thisShowTime}
      onChange={(e: any, dateStr: any) => {
        // mode === 'date'
        let str = null;
        if (e) {
          if (pickerType === 'RangePicker') {
            str = e.map((m: any) => m.format(valueFormat));
          } else {
            str = e.format(valueFormat);
          }
        }
        setTime(e);
        if (onChange) {
          onChange(str);
        }
      }}
      // 切换日历面板不需要改变当前值，故屏蔽该逻辑
      // onPanelChange={(e: any, _mode: any) => {
      //   // mode  !== 'date'
      //   let str = null;
      //   if (e) {
      //     if (pickerType === 'RangePicker') {
      //       // 对于RangePicker，如果只选择其中一边，另一边是null，要做容错
      //       str = e.map((m: any) => m && m.format(valueFormat)).sort();
      //     } else {
      //       str = e.format(valueFormat);
      //     }
      //   }
      //   setTime(e);
      //   // if (Object.keys(mode).length !== 0) {
      //   //   setOpen(false);
      //   // }
      //   // setOpen(false);
      //   if (onChange) {
      //     onChange(str);
      //   }
      // }}
      onOpenChange={(status: boolean) => {
        setOpen(status);
        // 当时间范围为选择年、月时，偶尔会出现组件渲染限制条件失效情况（开始时间未限制小于结束时间），故手动排序
        if (
          !status &&
          pickerType === 'RangePicker' &&
          mode.mode &&
          Array.isArray(time) &&
          (time as []).length > 0
        ) {
          const diff = moment(time[1]).diff(
            moment(time[0]),
            `${mode.mode[0]}s` as moment.unitOfTime.Diff,
          );
          if (diff < 0) {
            setTime([time[1], time[0]]);
          }
        }
      }}
    />
  );
});

const DatePicker = LingxiForwardRef<any, DatePickerProps>((props, ref) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onChange,
    onValueRelease,
    getCompPropMapState,
    compId,
    hidden,
    name,
    fieldName: rawFieldName,
    regexp,
    message,
    label,
    labelCol,
    wrapperCol,
    selfSpan,
    colSpan,
    defaultValue: newDefaultValue,
    isCurrent: newIsCurrent,
    pickerType,
    format,
    validateStatus,
    help,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    limitRange,
    customExpression,
    customTip,
    startTime,
    endTime,
    isFormChild,
    tipSize,
    tipWidth,
    tipHeight,
    getEngineApis,
    value: originValue,
    valueFormat,
    ...restProps
  } = props;

  const { onlySyncValue } = getEngineApis() || {};

  const { getLocale, lang } = useLocale(getEngineApis?.() || {});

  // 展示格式
  const _format = useMemo(() => {
    let newFormat = format;
    if (!format) {
      newFormat = restProps.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    }
    if (typeof lang === 'string' && !['zh-CN', 'zh-HK'].includes(lang)) {
      let temFormatter = newFormat?.replace(/年|月/g, '/');
      temFormatter = temFormatter?.replace(/日/g, '');
      newFormat = temFormatter;
    }
    return newFormat;
  }, [restProps.showTime, lang]);

  // 取值格式
  const finalValueFormat: any = useMemo(() => {
    if (valueFormat === 'standard') {
      const mode = restProps.showTime ? 'time' : restProps.timeMode;
      return STANDARD_FORMAT[mode || 'date'] || _format;
    }
    return _format;
  }, [_format, valueFormat, restProps.showTime, restProps.timeMode]);

  // 这里做数据转化，编辑器校验及旧数据兼容
  const defaultValue = useMemo(() => {
    if (pickerType === 'RangePicker') {
      return Array.isArray(props.defaultValue) ? props.defaultValue : undefined;
    }
    return props.defaultValue ? parseDateFromFormat(props.defaultValue, [finalValueFormat, _format])?.format(finalValueFormat) : undefined;
  }, [props.defaultValue, finalValueFormat]);

  // onValueRelease等设值 出去的值转为string,而非 moment
  const handleValue = (val: any) => {
    if (!val) {
      return val;
    }
    if (Array.isArray(val)) {
      // 注意这里val里的元素可能不是moment对象而是null
      // _i：moment对象的内置变量，当这个moment对象是使用format解析出来的时候，会用_i存储原始字符串值
      return val.map((v) => (v?.isValid?.() ? v._i : v));
    }
    return val?.isValid?.() ? val._i : val; // eslint-disable-line no-underscore-dangle
  };

  const handleFormValue = (_val: any) => {
    if (_val !== undefined) {
      let formattedval;
      // string 转 moment 为了 format 数据
      if (pickerType === 'RangePicker') {
        formattedval = Array.isArray(_val) ?
          // @ts-ignore
          _val.map((c) => (parseDateFromFormat(c, [finalValueFormat, _format])?.format(finalValueFormat)))
          : undefined;
      } else {
        // @ts-ignore
        formattedval = parseDateFromFormat(_val, [finalValueFormat, _format])?.format(finalValueFormat); // eslint-disable-line no-underscore-dangle
      }

      // moment 转 string 为了取值正常
      formattedval = handleValue(formattedval || _val);
      return formattedval;
    }
    return undefined;
  };
  const { formFieldsRef, required, readOnly, disabled, finalRules: temRules } = useCommonImperativeHandle(ref, props, {
    clearValue() {
      if (pickerType === 'RangePicker') {
        onlySyncValue(undefined);
      } else {
        onlySyncValue('');
      }
    },
    get value() {
      return handleFormValue(props?.value);
    },
  });

  const finalRules = useMemo(() => {
    const rules: Rule[] = [];
    const rangeCheckValidator = (_: any, val: any, callback?: Function) => {
      // callback: Antd 3.x 风格的回调API，调用一下作为结果。对于Antd3来讲，这个callback必须调用
      switch (limitRange) {
        case 'afterToday':
          if (moment(val) < moment(new Date().setHours(0, 0, 0, 0))) {
            if (callback) {
              callback(customTip || getLocale('DatePicker.afterToday', { name }));
            }
            return Promise.reject(new Error(customTip || getLocale('DatePicker.afterToday', { name })));
          }
          break;
        case 'beforeToday':
          if (moment(val) > moment(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1)) {
            if (callback) {
              callback(customTip || getLocale('DatePicker.afterToday', { name }));
            }
            return Promise.reject(new Error(customTip || getLocale('DatePicker.afterToday', { name })));
          }
          break;
        case 'period':
          if (startTime && endTime && moment(startTime) <= moment(endTime)) {
            if (moment(val) < moment(startTime) || moment(val) > moment(endTime)) {
              if (callback) {
                callback(customTip || getLocale('DatePicker.period', { startTime, endTime, name }));
              }
              return Promise.reject(
                new Error(customTip || getLocale('DatePicker.period', { startTime, endTime, name })),
              );
            }
          }
          if (startTime && moment(val) < moment(startTime)) {
            if (callback) {
              callback(customTip || getLocale('DatePicker.after', { name, startTime }));
            }
            return Promise.reject(new Error(customTip || getLocale('DatePicker.after', { name, startTime })));
          }
          if (endTime && moment(val) > moment(endTime)) {
            if (callback) {
              callback(customTip || getLocale('DatePicker.before', { name, endTime }));
            }
            return Promise.reject(new Error(customTip || getLocale('DatePicker.before', { name, endTime })));
          }
          break;
        default:
      }
      // if (callback) {
      //   callback();
      // }
      return Promise.resolve();
    };
    rules.push({ validator: rangeCheckValidator });
    if (Array.isArray(temRules) && temRules.length > 0) {
      rules.push(...(temRules || []));
    }
    return rules;
  }, [temRules, required, name, customTip, endTime, startTime, limitRange, lang]);
  
  const value = useMemo(() => {
    return handleFormValue(originValue);
  }, [originValue, finalValueFormat]);

  return (
    <FormFields
      {...getFieldsProps(props)}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      ref={formFieldsRef}
      render={(val) => {
        if (val !== undefined) {
          return renderDatePicker(
            Array.isArray(val) ?
              val.map((v) => parseDateFromFormat(v, [finalValueFormat, _format])?.format(_format))
              : (parseDateFromFormat(val, [finalValueFormat, _format]))?.format(_format) as any,
            props.separator);
        }
        return '--';
      }}
      wrapperClassName={DATEPICKER_WRAPPER_CLASSNAME}
      rules={finalRules}
      value={value}
      defaultValue={defaultValue}
      handleFormValue={handleFormValue}
    >
      <FormDatePicker
        disabledDate={(current) => {
          const checkLimitList = ['afterToday', 'beforeToday', 'period'];
          if (!checkLimitList.includes(limitRange)) return false;
          let myStart = startTime;
          let myEnd = endTime;
          if (limitRange === 'afterToday') {
            myStart = moment().format('YYYY-MM-DD');
            myEnd = undefined;
            return current?.format('YYYY-MM-DD') < myStart;
          }
          if (limitRange === 'beforeToday') {
            myStart = undefined;
            myEnd = moment().format('YYYY-MM-DD');
            return current?.format('YYYY-MM-DD') > myEnd;
          }
          const _format = 'YYYY-MM-DD';
          // 将所有时间格式统一，进行比较
          const currentDate = current?.format(_format);
          const startTimeDate = parseDateFromFormat(myStart, parseFormats)?.format(_format);
          const endTimeDate = parseDateFromFormat(myEnd, parseFormats)?.format(_format);
          return moment(currentDate) < moment(startTimeDate) || moment(currentDate) > moment(endTimeDate);
        }}
        disabledTime={(current) => {
          const checkLimitList = ['afterToday', 'beforeToday', 'period'];
          if (!checkLimitList.includes(limitRange)) return undefined;
          const _format = 'YYYY-MM-DD HH:mm:ss';
          const _formaDay = 'YYYY-MM-DD';
          let myStart = startTime;
          let myEnd = endTime;
          if (limitRange === 'afterToday') {
            myStart = moment().format('YYYY-MM-DD');
            myEnd = undefined;
          }
          if (limitRange === 'beforeToday') {
            myStart = undefined;
            myEnd = moment().format('YYYY-MM-DD');
          }
          // 将所有时间格式统一，进行比较
          // 获取时分秒数据
          const startTimeDate = parseDateFromFormat(myStart, parseFormats)?.format(_format);
          const endTimeDate = parseDateFromFormat(myEnd, parseFormats)?.format(_format);
          // 获取日期
          const currentTimeDay = current?.format(_formaDay);
          const startTimeDay = moment(myStart, parseFormats, true)?.format(_formaDay);
          const endTimeDay = moment(myEnd, parseFormats, true)?.format(_formaDay);

          const startDate = new Date(startTimeDate!);
          const endDate = new Date(endTimeDate!);
          const currentDate = new Date(current?.format(_format));
          // 获取开始时间和结束时间的小时、分钟和秒钟
          const startHour = startDate.getHours();
          const startMinute = startDate.getMinutes();
          const startSecond = startDate.getSeconds();
          const endHour = endDate.getHours();
          const endMinute = endDate.getMinutes();
          const endSecond = endDate.getSeconds();

          const currentHour = currentDate?.getHours();
          const currentMinute = currentDate?.getMinutes();
          
          // eslint-disable-next-line eqeqeq
          if (startTimeDay == currentTimeDay) {
            // 如果当前小时大于开始小时
            if (currentHour > startHour) {
              return {
                disabledHours: () => startHour ? [...Array(startHour).keys()] : [], // 如果当前日期和startTime相同，禁止选择startTime之前的小时
                disabledMinutes: () => [],
                disabledSeconds: () => [],
              };
              // 如果当前小时等于开始小时，且当前分钟大于开始分钟
            } if (currentHour === startHour) {
              if (currentMinute > startMinute) {
                return {
                  disabledHours: () => startHour ? [...Array(startHour).keys()] : [], // 如果当前日期和startTime相同，禁止选择startTime之前的小时
                  disabledMinutes: () => startMinute ? [...Array(startMinute).keys()] : [], // 如果当前日期和startTime相同，禁止选择startTime之前的分钟
                  disabledSeconds: () => [],
                };
              }
            }
            // 否则就按照开始时间的小时、分钟、秒钟来禁用
            return {
              disabledHours: () => startHour ? [...Array(startHour).keys()] : [], // 如果当前日期和startTime相同，禁止选择startTime之前的小时
              disabledMinutes: () => startMinute ? [...Array(startMinute).keys()] : [], // 如果当前日期和startTime相同，禁止选择startTime之前的分钟
              disabledSeconds: () => startSecond ? [...Array(startSecond).keys()] : [], // 如果当前日期和startTime相同，禁止选择startTime之前的秒钟
            };
          }
          // eslint-disable-next-line eqeqeq
          if (endTimeDay == currentTimeDay) {
            // 当前小时小于结束小时
            if (currentHour < endHour) {
              return {
                disabledHours: () => endHour ? [...Array(24 - endHour - 1).keys()].map(h => h + endHour + 1) : [], // 如果当前日期和endTime相同，禁止选择endTime之后的小时
                disabledMinutes: () => [],
                disabledSeconds: () => [],
              };
              // 当当前小时等于结束小时，且当前分钟小于结束分钟
            } if (currentHour === endHour) {
              if (currentMinute < endMinute) {
                return {
                  disabledHours: () => endHour ? [...Array(24 - endHour - 1).keys()].map(h => h + endHour + 1) : [], // 如果当前日期和endTime相同，禁止选择endTime之后的小时
                  disabledMinutes: () => endMinute ? [...Array(60 - endMinute - 1).keys()].map(m => m + endMinute + 1) : [], // 如果当前日期和endTime相同，禁止选择endTime之后的分钟
                  disabledSeconds: () => [],
                };
              }
            }
            return {
              disabledHours: () => endHour ? [...Array(24 - endHour - 1).keys()].map(h => h + endHour + 1) : [], // 如果当前日期和endTime相同，禁止选择endTime之后的小时
              disabledMinutes: () => endMinute ? [...Array(60 - endMinute - 1).keys()].map(m => m + endMinute + 1) : [], // 如果当前日期和endTime相同，禁止选择endTime之后的分钟
              disabledSeconds: () => endSecond ? [...Array(60 - endSecond - 1).keys()].map(s => s + endSecond + 1) : [], // 如果当前日期和endTime相同，禁止选择endTime之后的秒钟
            };
          }
          return undefined;
        }}
        {...restProps}
        pickerType={pickerType}
        valueFormat={finalValueFormat}
        format={_format}
        onChange={(e: any) => {
          if (onChange) {
            const arr = [e];
            if (pickerType === 'RangePicker' && Array.isArray(e)) {
              arr.push(e[0]);
              arr.push(e[1]);
            }
            onChange(...arr);
          }
        }}
      />
    </FormFields>);
  // {checkResult ? null : <div className="noFormTip">{checkTip}</div>}
});

export default DatePicker;
export { DATEPICKER_WRAPPER_CLASSNAME, WrapperDatePicker };
