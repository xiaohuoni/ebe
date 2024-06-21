import {
  BaseCalendarType,
  Calendar,
  CalendarType,
} from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useImperativeHandle, useMemo } from 'react';
import {
  dateToFormatter,
  subtractDate,
  toDate,
  useLocaleFormatter,
} from '../utils/date';
import { useListenToggleBoolean } from '../utils/hooks/useToggleBoolean';
import { getCalendarLocale } from '../utils/i18n';

interface CalendarStyle extends React.CSSProperties {
  themeColor: string;
}

export interface MyCalendarProps {
  dateRange?: string;
  title?: BaseCalendarType['title'];
  formatter: string;
  onChange?: (date?: string | string[]) => void;
  style: CalendarStyle;
  type: CalendarType;
  visible?: string;
  minDate?: string;
  maxDate?: string;
}

const MyCalendar = LingxiForwardRef<any, MyCalendarProps>((props, ref) => {
  const {
    dateRange,
    title,
    formatter: newFormatter = 'YYYY-MM-DD HH:mm:ss',
    onChange,
    style,
    type,
    visible = false,
    getEngineApis,
  } = props;

  const { themeColor } = style;
  const [show, setShow] = useListenToggleBoolean(visible);
  const { getLocale, getLocaleEnv } = getEngineApis();
  const lanEnv = getLocaleEnv();
  const { showFormat: formatter } = useLocaleFormatter(newFormatter, lanEnv);
  useImperativeHandle(ref, () => ({
    visible: show,
    setVisible: setShow,
  }));

  const [minDate, maxDate] = useMemo(() => {
    if (dateRange === 'custom') {
      let afterMinDate: any = props.minDate;
      let afterMaxDate: any = props.maxDate;
      if (afterMinDate === 'new Date();') {
        afterMinDate = new Date();
      } else {
        afterMinDate = toDate(afterMinDate);
      }
      if (afterMaxDate === 'new Date();') {
        afterMaxDate = new Date();
      } else {
        afterMaxDate = toDate(afterMaxDate);
      }
      return [afterMinDate, afterMaxDate];
    }
    return [subtractDate(new Date(), dateRange, 'months'), new Date()];
  }, [dateRange, props.maxDate, props.minDate]);

  const formatterDate = (val: Date | Date[]) => {
    if (!Array.isArray(val)) {
      // 单选直接输出
      return dateToFormatter(formatter, val);
    }
    return val.map((d) => dateToFormatter(formatter, d));
  };

  const onClose = () => {
    setShow(false);
  };

  const CalendarComp = Calendar;

  return (
    <CalendarComp
      type={type}
      minDate={minDate}
      maxDate={maxDate}
      poppable
      show={show}
      title={title}
      color={themeColor}
      onClose={onClose}
      onConfirm={(val: Date | Date[]) => {
        console.log('====val', val);
        if (onChange) {
          /** @ts-ignore */
          onChange(formatterDate(val));
        }
        onClose();
      }}
      confirmText={getLocale('confirm')}
      confirmDisabledText={getLocale('confirm')}
      getLocale={(t, tempValue) => {
        return getCalendarLocale(getLocale, t, tempValue);
      }}
    />
  );
});

MyCalendar.displayName = 'InnerCalendar';

export default MyCalendar;
