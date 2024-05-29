import { LingxiForwardRef } from '@lingxiteam/types';
import React, { useMemo, useRef } from 'react';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
} from '../utils';
import { useLocale } from '../utils/hooks/useLocale';
import QuillEditorLoad from './loader';

const QuillEditor = LingxiForwardRef<unknown, any>((props, ref) => {
  const gridViewRef = useRef<any>(null);
  const { disabled, required, readOnly, formFieldsRef } =
    useCommonImperativeHandle(ref, props);

  const { getLocale, lang } = useLocale(props.engineApis);

  const finalRules = useMemo(
    () => [
      {
        required,
        message: getLocale?.('notEmpty', { name: props.name }),
      },
    ],
    [required, props.name, lang],
  );

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
      <QuillEditorLoad
        {...props}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        formFieldsRef={formFieldsRef}
        ref={gridViewRef}
      />
    </FormFields>
  );
});

export default QuillEditor;
