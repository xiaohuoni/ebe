import { RangeDatePicker } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useState } from 'react';
import { DFormWrapper } from '../BasicComponents';
import Icon from '../Icon';
import { dateToFormatter, toDate, useLocaleFormatter } from '../utils/date';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import './index.less';

const prefixCls = 'lcdp-dform-rangepicker';
export interface DatePickerProps extends UseFormItemProps {
  minDate?: any;
  maxDate?: any;
  formatter?: string;
  name: string;
  titleIcon?: any; // 标题图标
  hasTitleIcon?: string;
  modeType?: 'year' | 'month' | 'date' | 'onlyTime' | 'time';
  valueFormat?: 'standard' | 'show';
}

const RangePicker = LingxiForwardRef<any, DatePickerProps>((props, ref) => {
  const {
    defaultValue,
    onChange,
    minDate,
    maxDate,
    formatter: newFormatter = 'YYYY-MM-DD',
    fieldProps = '',
    name,
    modeType,
    hasTitleIcon = 'none',
    titleIcon,
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
      mode: modeType,
    },
  );

  const onDateChange = (v?: string[]) => {
    onInputChange(
      Array.isArray(v)
        ? v.map((va) => dateToFormatter(showFormat, va, finalValueFormat))
        : undefined,
    );
  };

  const {
    disabled,
    required,
    getRules,
    readOnly,
    visible,
    val,
    onInputChange,
    form,
    isForm,
  } = useFormItem(
    ref,
    {
      ...props,
      defaultValue:
        modeType === 'onlyTime'
          ? defaultValue
          : defaultValue?.map((v: string | Date | undefined) =>
              dateToFormatter(showFormat, v, finalValueFormat),
            ),
    } as any,
    {
      get value() {
        const v = isForm ? form?.getFieldValue(fieldProps) : val;
        return Array.isArray(v)
          ? v.map((va) => dateToFormatter(showFormat, va, finalValueFormat))
          : undefined;
      },
    },
  );
  const [afterMinDate, setAfterMinDate] = useState<any>();
  const [afterMaxDate, setAfterMaxDate] = useState<any>();
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

  const renderIcon = (iconInfo: any, cName: string, onClick: any) => {
    if (!iconInfo) {
      return null;
    }
    let iconView = null;
    if (iconInfo && iconInfo?.prefixIconIconFileInfo) {
      iconView = (
        <span
          className={cName}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: iconInfo?.iconFileInfo?.svgContent,
          }}
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        />
      );
    } else {
      const { type, theme, isIconFont, fontAddress } = iconInfo;
      iconView = (
        <span className={cName}>
          {/** @ts-ignore */}
          <Icon
            type={type}
            theme={theme}
            isIconFont={isIconFont}
            fontAddress={fontAddress}
            onClick={() => {
              if (onClick) {
                onClick();
              }
            }}
            getEngineApis={getEngineApis}
            $$componentItem={props.$$componentItem}
            name="时间段选择"
          />
        </span>
      );
    }
    return iconView;
  };
  return (
    <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
      <RangeDatePicker
        {...restProps}
        titleExtension={
          hasTitleIcon === 'hasIcon' && titleIcon && titleIcon?.type
            ? renderIcon(titleIcon, `${prefixCls}-icon`, null)
            : null
        }
        defaultValue={val as any}
        value={val}
        fieldProps={fieldProps}
        timeMode={modeType}
        format={showFormat}
        required={required}
        rules={getRules()}
        getLocale={(t: string, tempValue: Record<string, any> | undefined) => {
          return getLocale(`DformRangePicker.${t}`, '', tempValue);
        }}
        disabled={disabled}
        minDate={afterMinDate}
        maxDate={afterMaxDate}
        onChange={(v: any) => {
          // ['2022-22','2023-04']
          onDateChange(v);
        }}
        readonly={readOnly}
      />
    </DFormWrapper>
  );
});

RangePicker.displayName = 'RangePicker';

export default RangePicker;
