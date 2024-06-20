import { Form } from '@lingxiteam/dform';
import React, { useMemo } from 'react';
import { AppForwardRef, FormItem } from '../BasicComponents';
import { DFormContext } from '../utils/form';
import { UseFormItemProps } from '../utils/hooks/useFormItem';
import { withTransformProps } from '../utils/withTransformProps';
import ImagePicker from './ImagePicker';
import transformProps from './transformProps';

export interface MyDformImagePickerProps extends UseFormItemProps {
  upload?: (file: any) => void;
  fieldName?: string;
  fileIdKey?: string;
}

const MyDformImagePicker = AppForwardRef<MyDformImagePickerProps>(
  (props, ref) => {
    const {
      upload,
      defaultValue,
      fieldProps,
      fieldName,
      fileIdKey,
      getEngineApis,
    } = props;
    const { isForm } = React.useContext(DFormContext) || {};
    const engineApis = getEngineApis?.();

    // 处理图片数据提前，修复在表单下有初始值的情况下，initialValue 取的是该页面设置的值，而非Core包的当中设置的初值值
    const newDefaultValue = useMemo(() => {
      if (defaultValue !== undefined && Array.isArray(defaultValue)) {
        const mDefValue: any[] = [];
        for (let index = 0; index < defaultValue.length; index += 1) {
          const fileItem = defaultValue[index];
          const mFile = { ...fileItem } as any;
          const key = fileIdKey || 'fileId';
          if (mFile?.[key]) {
            // 如果key值局势base64的url
            if (
              typeof mFile?.[key] === 'string' &&
              mFile?.[key].startsWith('data:')
            ) {
              mFile.url = mFile?.[key];
              mFile.id = mFile?.[key];
            } else if (engineApis?.getAppFileUrlById) {
              mFile.url = engineApis.getAppFileUrlById(mFile?.[key]);
              mFile.id = mFile?.[key];
            }
          }
          mDefValue.push(mFile);
        }
        return mDefValue;
      }
      return defaultValue;
    }, [JSON.stringify(defaultValue)]);

    if (!isForm) {
      return (
        <FormItem>
          {/** @ts-ignore */}
          <ImagePicker
            ref={ref}
            {...props}
            onUpload={upload}
            newDefaultValue={newDefaultValue}
          />
        </FormItem>
      );
    }
    return (
      <FormItem>
        {/* 统一由AddressPicker组件的hidden校验 */}
        <Form.DFormField
          name={fieldProps || fieldName}
          initialValue={newDefaultValue}
          params={{ formFlag: true, hidden: true }}
        >
          {/** @ts-ignore */}
          <ImagePicker
            {...props}
            fieldProps={fieldProps || fieldName}
            ref={ref}
            onUpload={upload}
            newDefaultValue={newDefaultValue}
          />
        </Form.DFormField>
      </FormItem>
    );
  },
);

export default withTransformProps(MyDformImagePicker, transformProps);
