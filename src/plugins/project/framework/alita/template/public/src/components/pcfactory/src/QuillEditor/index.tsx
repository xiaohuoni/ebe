import React, { useRef } from 'react';
import { LingxiForwardRef } from '@lingxiteam/types';
import QuillEditorLoad from './loader';
import { FormFields, getFieldsProps, useCommonImperativeHandle } from '../utils';

const QuillEditor = LingxiForwardRef<unknown, any>((props, ref) => {
  const gridViewRef = useRef<any>(null);
  const { disabled, required, readOnly, formFieldsRef, finalRules } = useCommonImperativeHandle(ref, props);


  return (
    <FormFields
      {...getFieldsProps(props)}
      ref={formFieldsRef}
      trigger="onChange"
      required={required}
      disabled={disabled as any}
      readOnly={readOnly}
      rules={finalRules}
    >
      <QuillEditorLoad {...props} disabled={disabled} required={required} readOnly={readOnly} formFieldsRef={formFieldsRef} ref={gridViewRef} />
    </FormFields>
  );
});

export default QuillEditor;
