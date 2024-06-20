import { Form } from '@lingxiteam/dform';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useMemo, useRef } from 'react';
import { FormItem } from '../BasicComponents';
import useDefaultValue from '../utils/hooks/useDefaultValue';
import { useFormItem } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import AddressPicker from './AddressPicker';
import transformProps from './transformProps';

export interface MyDAddressPickerProps {
  title: string;
  dataSource?: any[];
  required?: boolean;
  fieldProps: string;
  defaultValue?: any;
  fieldName?: string;
  placeholderList: any;
  visible: boolean;
  readOnly: boolean;
  disabled: boolean;
}

const MyDAddressPicker = LingxiForwardRef<any, MyDAddressPickerProps>(
  (props, ref) => {
    const {
      dataSource,
      title,
      fieldProps,
      fieldName,
      defaultValue: newDefaultValue,
      ...restProps
    } = props;
    const imperativeHandleRef = useRef({});
    const defaultValue = useDefaultValue(newDefaultValue);
    const formItem = useFormItem(
      ref,
      { ...props, defaultValue },
      imperativeHandleRef.current,
    );
    const { isForm, error } = formItem;
    // 应该加载的内置默认的服务
    const shouldDefaultData = useMemo(
      () => !dataSource || dataSource?.length === 0,
      [dataSource?.length],
    );
    if (!isForm) {
      return (
        <AddressPicker
          {...restProps}
          fieldProps={fieldProps || fieldName}
          title={title}
          defaultValue={defaultValue}
          shouldDefaultData={shouldDefaultData}
          ref={ref}
          imperativeHandleRef={imperativeHandleRef}
          dataSource={dataSource}
          formItem={formItem}
        />
      );
    }
    return (
      <FormItem>
        <Form.DFormField
          name={fieldProps || fieldName}
          initialValue={defaultValue}
          valuePropName="defaultValue"
          rules={formItem.getRules()}
          params={{ formFlag: true, hidden: formItem.visible }} // 统一由AddressPicker组件的hidden校验
        >
          <AddressPicker
            {...restProps}
            fieldProps={fieldProps || fieldName}
            dataSource={dataSource}
            defaultValue={defaultValue}
            title={title}
            shouldDefaultData={shouldDefaultData}
            ref={ref}
            error={error}
            imperativeHandleRef={imperativeHandleRef}
            formItem={formItem}
          />
        </Form.DFormField>
      </FormItem>
    );
  },
);

MyDAddressPicker.displayName = 'addressPicker';

export default withTransformProps(MyDAddressPicker, transformProps);
