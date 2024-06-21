import { Form } from '@lingxiteam/dform';
import React from 'react';
import { AppForwardRef, FormItem } from '../BasicComponents';
import { dateToFormatter } from '../utils/date';
import { DFormContext } from '../utils/form';
import { withTransformProps } from '../utils/withTransformProps';
import type { DatePickerProps } from './RangePicker';
import RangePicker from './RangePicker';
import transformProps from './transformProps';

interface DformRangePickerProps extends DatePickerProps {
  title: string;
  defaultCurrent?: any;
  fieldName?: string;
}

const DformRangePicker = AppForwardRef<DformRangePickerProps>((props, ref) => {
  const { defaultValue, fieldProps, fieldName } = props;
  const { isForm } = React.useContext(DFormContext) || {};

  const formateDate = () => {
    if (Array.isArray(defaultValue)) {
      const targetDefault = defaultValue.map((item: any) => {
        if (item instanceof Date) {
          // 兼容数据为日期类型
          return dateToFormatter(props?.formatter || 'YYYY-MM-DD', item);
        }
        return item;
      });
      return targetDefault;
    }

    return [];
  };
  if (!isForm) {
    return (
      <FormItem>
        {/** @ts-ignore */}
        <RangePicker ref={ref} {...props} defaultValue={formateDate()} />
      </FormItem>
    );
  }
  return (
    <FormItem>
      {/* 统一由AddressPicker组件的hidden校验 */}
      <Form.DFormField
        name={fieldProps || fieldName}
        initialValue={defaultValue}
        params={{ formFlag: true, hidden: true }}
      >
        {/** @ts-ignore */}
        <RangePicker
          {...props}
          ref={ref}
          defaultValue={formateDate()}
          fieldProps={fieldProps || fieldName}
        />
      </Form.DFormField>
    </FormItem>
  );
});

export default withTransformProps(DformRangePicker, transformProps);
