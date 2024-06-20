import { DformRadio, INomarRadioProps } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import React from 'react';
import { DFormWrapper, FormItem } from '../BasicComponents';
import { useFormItem } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import transformProps from './transformProps';

export interface MyDformInputProps extends INomarRadioProps {
  dataSource: any[];
  allowUnChecked: boolean;
  inputTextAlign: string;
  visible: boolean;
  readOnly: boolean;
  title: string;
}
const MyDformRadio = LingxiForwardRef<any, MyDformInputProps>((props, ref) => {
  const {
    defaultValue,
    onChange,
    dataSource,
    allowUnChecked = false,
    inputTextAlign = 'left',
    selectedType = 'roundDot',
    getEngineApis,
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
  } = useFormItem(ref, props, {
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
  });
  const [data, setData] = React.useState<MyDformInputProps['dataSource']>([]);

  React.useEffect(() => {
    if (dataSource) {
      setData(dataSource);
    }
  }, [JSON.stringify(dataSource)]);

  return (
    <FormItem>
      <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
        <DformRadio
          {...restProps}
          // @ts-ignore
          inputTextAlign={inputTextAlign}
          textAlign="left"
          selectedType={selectedType}
          radioType={
            restProps.positionType === 'horizontal'
              ? 'horizontal'
              : restProps.radioType
          }
          radioPosition={
            restProps.positionType === 'horizontal'
              ? 'left'
              : restProps.radioPosition
          }
          allowUnChecked={allowUnChecked}
          defaultValue={val}
          required={required}
          rules={getRules()}
          validateTrigger="onChange"
          disabled={disabled}
          data={data}
          onChange={(v: any) => onInputChange(v)}
          readonly={readOnly}
          getLocale={(
            t: string,
            tempValue: Record<string, any> | undefined,
          ) => {
            return getLocale(`DformRadio.${t}`, '', tempValue);
          }}
        />
      </DFormWrapper>
    </FormItem>
  );
});

MyDformRadio.displayName = 'dformRadio';

export default withTransformProps(MyDformRadio, transformProps);
