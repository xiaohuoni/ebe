import { MultiplePicker } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useEffect, useState } from 'react';
import { DFormWrapper, FormItem } from '../BasicComponents';
import { MyIconProps } from '../Icon';
import useDefaultValue from '../utils/hooks/useDefaultValue';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';

export interface MyIMultiplePickerProps extends UseFormItemProps {
  regexp?: any[];
  dataSource?: any[];
  postfix?: any;
  icon?: MyIconProps;
  postfixIconPosition?: string;
  iconColor?: string;
  valueType?: any;
  maxValueLength?: any;
  max?: number;
  leftContent?: string;
  rightContent?: string;
}

const MyMultiplePicker = LingxiForwardRef<any, MyIMultiplePickerProps>(
  (props, ref) => {
    const {
      defaultValue,
      onChange,
      dataSource,
      regexp,
      maxValueLength,
      getEngineApis,
      leftContent,
      rightContent,
      ...restProps
    } = props;
    const { getLocale } = getEngineApis?.() || {};
    const { disabled, val, onInputChange, required, readOnly, visible } =
      useFormItem(
        ref,
        {
          ...props,
          defaultValue: useDefaultValue(defaultValue, restProps?.max),
        },
        {
          setDataWithLabelAndValue: (params: {
            dataSource: any[];
            labelKey?: string;
            valueKey?: string;
          }) => {
            const temDataSoure = params.dataSource?.map((item) => {
              if (params.labelKey && params.valueKey) {
                if (item[params.labelKey]) {
                  return {
                    ...item,
                    label: item[params.labelKey],
                    value: item[params.valueKey],
                  };
                }
              }
              return item;
            });
            setData(temDataSoure);
          },
        },
      );
    const [data, setData] = useState<MyIMultiplePickerProps['dataSource']>([]);
    const dealProps = {
      icon: {
        isIconFont: false,
        theme: 'outlined',
        type: 'right',
      },
      ...restProps,
    };
    if (!restProps?.valueType) {
      dealProps.valueType = 'ellipsis';
    }
    useEffect(() => {
      if (Array.isArray(dataSource)) {
        setData(dataSource);
      }
    }, [JSON.stringify(dataSource)]);

    return (
      <FormItem>
        <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
          <MultiplePicker
            {...dealProps}
            defaultValue={val}
            maxValueLength={restProps?.max}
            required={required}
            disabled={disabled}
            data={data || []}
            onChange={(v: any) => onInputChange(v)}
            readonly={readOnly}
            rightContent={rightContent ?? getLocale?.('confirm')}
            leftContent={leftContent ?? getLocale?.('cancelText')}
            getLocale={(
              t: string,
              tempValue: Record<string, any> | undefined,
            ) => {
              return getLocale(`DMultiplePicker.${t}`, '', tempValue);
            }}
          />
        </DFormWrapper>
      </FormItem>
    );
  },
);

MyMultiplePicker.displayName = 'multiplePicker';

export default withTransformProps(MyMultiplePicker, transformProps);
