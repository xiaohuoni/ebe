import { DformDatePicker } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useState } from 'react';
import { DFormWrapper } from '../BasicComponents';
import { dateToFormatter, toDate, useLocaleFormatter } from '../utils/date';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';

export interface DatePickerProps extends UseFormItemProps {
  minDate?: string;
  maxDate?: string;
  formatter?: string;
  error?: any;
  postfix?: any;
  theme?: string;
  isIconFont?: boolean;
  fontAddress?: any;
  postfixIconPosition?: string;
  iconColor?: string;
  fieldProps: string;
  value: any;
  valueFormat?: 'standard' | 'show';
  modeType?: any;
}

const DatePicker = LingxiForwardRef<any, DatePickerProps>((props, ref) => {
  const {
    defaultValue,
    onChange,
    minDate,
    maxDate,
    formatter: newFormatter = 'YYYY-MM-DD HH:mm:ss',
    value,
    fieldProps,
    getEngineApis,
    valueFormat,
    ...restProps
  } = props;

  const { getLocale, getLocaleEnv } = getEngineApis?.() || {};
  const lanEnv = getLocaleEnv();
  const { showFormat, valueFormat: finalValueFormat } = useLocaleFormatter(
    newFormatter,
    lanEnv,
    {
      valueFormat,
      mode: props.modeType,
      extendStandardFormat: {
        time: 'HH:mm',
      },
    },
  );

  const {
    isForm,
    disabled,
    form,
    val,
    onInputChange,
    getRules,
    required,
    readOnly,
    visible,
  } = useFormItem(
    ref,
    {
      ...props,
      defaultValue: dateToFormatter(showFormat, defaultValue, finalValueFormat),
    },
    {
      get value() {
        return isForm
          ? dateToFormatter(
              showFormat,
              form?.getFieldValue(props.fieldProps),
              finalValueFormat,
            )
          : dateToFormatter(showFormat, val, finalValueFormat);
      },
      setVal: (v: string) => {
        onInputChange(dateToFormatter(showFormat, v, finalValueFormat));
        if (isForm) {
          form?.setFieldsValue({
            [props.fieldProps]: dateToFormatter(
              showFormat,
              v,
              finalValueFormat,
            ),
          });
        }
      },
    },
  );
  const [afterMinDate, setAfterMinDate] = useState<any>();
  const [afterMaxDate, setAfterMaxDate] = useState<any>();
  const onDateChange = (v?: Date) => {
    onInputChange(dateToFormatter(finalValueFormat, v));
  };
  useEffect(() => {
    if (maxDate === 'new Date();') {
      setAfterMaxDate(new Date());
    } else {
      setAfterMaxDate(toDate(maxDate));
    }

    if (minDate === 'new Date();') {
      setAfterMinDate(new Date());
    } else {
      setAfterMinDate(toDate(minDate));
    }
  }, [maxDate, minDate]);
  return (
    <DFormWrapper visible={visible} getEngineApis={props.getEngineApis}>
      <DformDatePicker
        {...restProps}
        fieldProps={fieldProps}
        minDate={afterMinDate}
        maxDate={afterMaxDate}
        defaultValue={val}
        rules={getRules()}
        disabled={disabled}
        format={showFormat}
        required={required}
        replaceName={{
          [`${getLocale('DatePicker.year', '年', { year: '' }) || '年'}`]: '-',
          [`${getLocale('DatePicker.month', '月', { month: '' }) || '月'}`]:
            '-',
          [`${getLocale('DatePicker.day', '日', { day: '' }) || '日'}`]: '',
        }}
        onChange={onDateChange}
        readonly={readOnly}
        getLocale={(t: string, tempValue: Record<string, any> | undefined) => {
          return getLocale(`DatePicker.${t}`, '', tempValue);
        }}
      />
    </DFormWrapper>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
