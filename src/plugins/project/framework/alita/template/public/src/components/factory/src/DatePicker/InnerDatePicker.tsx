import { LingxiForwardRef } from '@lingxiteam/types';
import DatePicker from 'antd-mobile-5/es/components/date-picker';
import Picker from 'antd-mobile-5/es/components/picker';
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { FormItem } from '../BasicComponents';
import {
  dateToFormatter,
  subtractDate,
  toDate,
  useLocaleFormatter,
} from '../utils/date';
import { useToggleBoolean } from '../utils/hooks/useToggleBoolean';

export interface MyDatePickerProps {
  name?: string;
  dateRange?: string;
  formatter?: string;
  minDate?: string;
  maxDate?: string;
  value?: string;
  onChange?: (e?: string) => void;
  visible: boolean;
  mode: 'datetime' | 'date' | 'month' | 'year' | 'time';
  title: string;
}

const MyDatePicker = LingxiForwardRef<any, MyDatePickerProps>((props, ref) => {
  const {
    name,
    value,
    dateRange,
    onChange,
    formatter: newFormatter = 'YYYY-MM-DD HH:mm:ss',
    visible = false,
    minDate: tempMinDate,
    maxDate: tempMaxDate,
    mode,
    getEngineApis,
    title,
    ...restProps
  } = props;
  const { getLocale, getLocaleEnv } = getEngineApis?.() || {};
  const [show, setShow] = useToggleBoolean(visible);
  const [hourMinuteData, setHourMinuteData] = useState<any[]>([]);
  const [hourMinuteValue, setHourMinuteValue] = useState<any[]>([0, 0]);
  const lanv = getLocaleEnv?.();
  const { showFormat: formatter } = useLocaleFormatter(newFormatter, lanv);

  useImperativeHandle(ref, () => ({
    visible: show,
    setVisible: setShow,
  }));

  const labelRenderer = useCallback((type: string, data: number) => {
    switch (type) {
      case 'year':
        return getLocale('DformRangePicker.year', `${data}年`, {
          year: `${data}`,
        });
      case 'month':
        return getLocale('DformRangePicker.month', `${data}月`, {
          month: `${data}`,
        });
      case 'day':
        return getLocale('DformRangePicker.day', `${data}日`, {
          day: `${data}`,
        });
      case 'hour':
        return getLocale('DformRangePicker.hour', `${data}时`, {
          hour: `${data}`,
        });
      case 'minute':
        return getLocale('DformRangePicker.minute', `${data}分`, {
          minute: `${data}`,
        });
      case 'second':
        return getLocale('DformRangePicker.second', `${data}秒`, {
          second: `${data}`,
        });
      default:
        return data;
    }
  }, []);

  const [minDate, maxDate] = useMemo(() => {
    if (dateRange === 'custom') {
      let min: any = props.minDate;
      let max: any = props.maxDate;
      if (min === 'new Date();') {
        min = new Date();
      } else {
        min = toDate(min);
      }
      if (max === 'new Date();') {
        max = new Date();
      } else {
        max = toDate(max);
      }
      return [min, max];
    }
    return [subtractDate(new Date(), dateRange, 'months'), new Date()];
  }, [dateRange, props.maxDate, props.minDate]) as any;

  const precision = useMemo(() => {
    let value = '';
    // eslint-disable-next-line default-case
    switch (mode) {
      case 'datetime':
        value = 'minute';
        break;
      case 'date':
        value = 'day';
        break;
      case 'month':
        value = 'month';
        break;
      case 'year':
        value = 'year';
        break;
      case 'time':
        value = 'minuteHour';
        break;
    }
    return value;
  }, [mode]);

  const onClose = () => {
    setShow(false);
  };

  useEffect(() => {
    if (precision === 'minuteHour') {
      const hours = [];
      const minutes = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 24; i++) {
        hours.push({
          label: getLocale('DformRangePicker.hour', `${i}时`, { hour: `${i}` }),
          value: i,
        });
      }
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 60; i++) {
        minutes.push({
          label: getLocale('DformRangePicker.minute', `${i}分`, {
            minute: `${i}`,
          }),
          value: i,
        });
      }
      setHourMinuteData([hours, minutes]);

      if (value) {
        let myValue: any = dateToFormatter('HH:mm', toDate(value));
        myValue = myValue?.split(':');
        if (Array.isArray(myValue) && myValue.length > 1) {
          setHourMinuteValue([Number(myValue[0]), Number(myValue[1])]);
        }
      }
    }
  }, [precision]);

  return (
    <FormItem>
      {/* <DatePicker
        {...restProps}
        visible={show}
        value={toDate(value)}
        minDate={minDate}
        maxDate={maxDate}
        onDismiss={onClose}
        onOk={(val: Date) => {
          onClose();
          if (onChange) {
            onChange(dateToFormatter(formatter, val));
          }
        }}
      /> */}
      {precision !== 'minuteHour' && (
        <DatePicker
          {...restProps}
          visible={show}
          title={title}
          value={toDate(value)}
          // @ts-ignore
          precision={precision}
          cancelText={getLocale?.('cancelText', '取消')}
          confirmText={getLocale?.('confirm', '确定')}
          min={minDate}
          max={maxDate}
          onClose={onClose}
          renderLabel={labelRenderer}
          onConfirm={(val: Date) => {
            onClose();
            if (onChange) {
              onChange(dateToFormatter(formatter, val));
            }
          }}
        />
      )}
      {precision === 'minuteHour' && (
        <Picker
          columns={hourMinuteData}
          visible={show}
          onClose={onClose}
          title={title}
          cancelText={getLocale?.('cancelText', '取消')}
          confirmText={getLocale?.('confirm', '确定')}
          value={hourMinuteValue}
          onConfirm={(val: any) => {
            setHourMinuteValue(val);
            let date: any = dateToFormatter('yyyy-MM-DD', new Date());
            date = `${date} ${val[0]}:${val[1]}`;
            date = toDate(date);
            onClose();
            if (onChange) {
              onChange(dateToFormatter(formatter, date));
            }
          }}
        />
      )}
    </FormItem>
  );
});

MyDatePicker.displayName = 'InnerDatePicker';

export default MyDatePicker;
