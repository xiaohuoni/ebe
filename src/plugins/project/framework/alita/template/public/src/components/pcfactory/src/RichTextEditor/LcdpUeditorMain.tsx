import { FormFields, getFieldsProps, useCommonImperativeHandle } from '../utils';
import { useLocale } from '../utils/hooks/useLocale';
import { renderRichText } from '../utils/renderReadOnly';
import LcdpUeditor from '@lingxiteam/lcdp-ueditor-react';
import { ILcdpUeditorInst } from '@lingxiteam/lcdp-ueditor-react/es/type';
import { LingXiFC } from '@lingxiteam/types';
import React, { useMemo, useRef } from 'react';

const LcdpUeditorMain: LingXiFC <{[key: string]: any}> = (props => {
  const { value, onChange, style, className, rootRef: ref } = props;
  const editorRef = useRef<ILcdpUeditorInst | null>(null);

  const engineApis = props.getEngineApis();
  const { getLocale, lang } = useLocale(engineApis);

  const { disabled, required, readOnly, formFieldsRef } = useCommonImperativeHandle(ref, props, {
    setValue: (val:string) => {
      if (editorRef.current) {
        editorRef.current.setContent(val);
      }
    },
  });

  const finalRules = useMemo(
    () => [
      {
        required,
        message: getLocale?.('notEmpty', { name }),
      },
    ],
    [required, name, lang]
  );

  const getLang = useMemo<any>(() => {
    const langStr = lang.toLowerCase();
    switch (langStr) {
      case 'zh-hk':
        return 'zh-tw';
      case 'en-us':
        return 'en';
      default:
        return 'zh-cn';
    }
  }, [lang]);

  return (
    <FormFields
      {...getFieldsProps(props)}
      ref={formFieldsRef}
      trigger="onChange"
      required={required}
      disabled={disabled as any}
      readOnly={readOnly}
      rules={finalRules}
      render={renderRichText}
    >
      <LcdpUeditor
        lang={getLang}
        style={style}
        onMount={(inst) => {
          editorRef.current = inst;
        }}
        className={className}
        disabled={disabled}
        value={value}
        onChange={onChange}
        config={{
          imageType: props.imageType,
          height: props.height,
        }}
        uploadFunction={async (file) => {
          const formData = new FormData();
          formData.append('attach', file, file.name);
          const res: any = await engineApis?.service?.uploadFileByFetch(formData);
          if (res?.fileId) {
            const link = engineApis?.getAppFileUrlById(res?.fileId);
            console.log(link, res.fileId);
            return new Promise((resolve, reject) => {
              resolve({
                state: 'SUCCESS',
                url: link,
                title: file.name,
                original: file.name,
              });
            });
          }
          return new Promise((resolve, reject) => {
            resolve({
              state: 'FAIL',
            });
          });
        }}
      />
    </FormFields>

  );
});

export default LcdpUeditorMain;
