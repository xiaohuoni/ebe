import { DformCheckBox } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useEffect } from 'react';
import { DFormWrapper, FormItem } from '../BasicComponents';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';

import useDefaultValue from '../utils/hooks/useDefaultValue';

export interface MyDCheckboxProps extends UseFormItemProps {
  title: string;
  dataSource: any[];
  min: number;
  max: number;
}

const DCheckbox = LingxiForwardRef<any, MyDCheckboxProps>((props, ref) => {
  const {
    defaultValue,
    onChange,
    dataSource,
    getEngineApis,
    min,
    max,
    ...restProps
  } = props;
  const { getLocale } = getEngineApis?.() || {};
  const {
    disabled,
    val,
    getRules,
    onInputChange,
    required,
    readOnly,
    visible,
  } = useFormItem(
    ref,
    {
      ...props,
      defaultValue: useDefaultValue(defaultValue),
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

  const [data, setData] = React.useState<any[]>([]);

  useEffect(() => {
    if (dataSource) {
      setData(dataSource);
    }
  }, [JSON.stringify(dataSource)]);
  return (
    <FormItem>
      <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
        <DformCheckBox
          {...restProps}
          defaultValue={val}
          required={required}
          rules={getRules({ compName: 'DCheckbox' })}
          data={data || []}
          max={max}
          min={min}
          // @ts-ignore
          validateTrigger="onChange"
          disabled={disabled}
          onChange={(v: any[]) => onInputChange(v)}
          readonly={readOnly}
          getLocale={(
            t: string,
            tempValue: Record<string, any> | undefined,
          ) => {
            return getLocale?.(`DCheckbox.${t}`, '', tempValue);
          }}
        />
      </DFormWrapper>
    </FormItem>
  );
});

DCheckbox.displayName = 'dformCheckBox';
export default withTransformProps(DCheckbox, transformProps);
