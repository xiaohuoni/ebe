import { LingxiForwardRef } from '@lingxiteam/types';
import { useRef } from 'react';
import {
  filterHtmlNode,
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
} from '../utils';
import QuillEditorLoad from './loader';

const QuillEditor = LingxiForwardRef<unknown, any>((props, ref) => {
  const gridViewRef = useRef<any>(null);
  const { disabled, required, readOnly, formFieldsRef, finalRules } =
    useCommonImperativeHandle(ref, props);

  return (
    <FormFields
      {...getFieldsProps(props)}
      ref={formFieldsRef}
      trigger="onChange"
      required={required}
      disabled={disabled as any}
      readOnly={readOnly}
      rules={finalRules}
      render={(val: string) => {
        const newVal = filterHtmlNode(val);
        return (
          <span
            className="ued-input-readonly"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: newVal ?? '--' }}
          />
        );
      }}
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
