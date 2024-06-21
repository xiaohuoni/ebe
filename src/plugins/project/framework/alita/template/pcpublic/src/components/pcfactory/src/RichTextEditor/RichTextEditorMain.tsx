import { useRef } from 'react';
import { useCommonImperativeHandle } from '../utils';
import RichTextEditorLoad from './loader';

import { LingXiFC } from '@lingxiteam/types';

export interface RichTextEditorProps {
  height: number;
  rootRef: any;
}

const RichTextEditorMain: LingXiFC<RichTextEditorProps> = (props) => {
  const { rootRef: ref } = props;
  const gridViewRef = useRef<any>(null);
  const richTextRef = useRef<any>(null);
  const { disabled, required, readOnly, formFieldsRef } =
    useCommonImperativeHandle(ref, props, {
      setValue: (val: string) => {
        if (richTextRef.current) {
          richTextRef.current.setHTML(val);
        }
      },
    });

  const language = props.getEngineApis().getLocaleEnv();

  return (
    <RichTextEditorLoad
      {...props}
      disabled={disabled}
      language={language}
      required={required}
      readOnly={readOnly}
      formFieldsRef={formFieldsRef}
      ref={gridViewRef}
      richTextRef={richTextRef}
    />
  );
};

export default RichTextEditorMain;
