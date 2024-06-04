import { LingxiForwardRef } from '@lingxiteam/types';
import { useState } from 'react';
import { useCommonImperativeHandle } from '../utils';
import UploadLoader from './loader';
import type { MyUploadProps } from './Upload';

const Upload = LingxiForwardRef<unknown, any>((props, ref) => {
  const [uploadProps, setUploadProps] =
    useState<MyUploadProps['uploadProps']>();

  const { formFieldsRef, disabled, readOnly, required } =
    useCommonImperativeHandle(ref, props, {
      setUploadProps: (_props: any) => {
        setUploadProps(_props);
      },
    });
  return (
    <UploadLoader
      {...props}
      uploadProps={uploadProps}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      formFieldsRef={formFieldsRef}
    />
  );
});

export default Upload;
