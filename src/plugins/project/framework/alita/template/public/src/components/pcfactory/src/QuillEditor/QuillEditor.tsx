import { LingxiForwardRef } from '@lingxiteam/types';
import type { FormItemProps } from 'antd/lib/form';
import classnames from 'classnames';
import React, { useEffect, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useInitReactQuill from '../utils/hooks/useInitReactQuill';

export interface MyQuillEditorProps extends FormItemProps {
  visible?: boolean;
  disabled?: boolean;
  value?: string;
  height?: any;
  getCompPropMapState?: any;
  compId?: any;
  onChange?: (value: string) => void;
  onValueRelease?: (value: string) => void;
  className?: any;
  name?: string;
  fieldName?: string;
  required: boolean;
  regexp?: any;
  hidden?: boolean;
  message?: string;
  selfSpan?: number;
  colSpan?: number;
  imageType?: string;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  style?: React.CSSProperties;
  isFormChild?: boolean | undefined;
  heightType?: string;
  maxHeight?: string | number;
  minHeight?: string | number;
  readOnly: boolean;
  rules: any[];
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  getEngineApis?: any;
  formFieldsRef: any; // 懒加载ref
}

interface BaseQuillEditorPropsType {
  value?: string;
  disabled?: boolean;
  className: string;
  imageType?: string;
  // heightStyle?: CSSProperties;
  heightType: string;
  minHeight?: string | number;
  maxHeight?: string | number;
  height?: number;
  engineApis: any;
  onChange?: Function;
}

const quillEditorPrefix = 'ued-quill-editor';

const BaseQuillEditor = React.forwardRef(
  (props: BaseQuillEditorPropsType, ref) => {
    const {
      value,
      disabled,
      className,
      imageType,
      heightType,
      minHeight,
      maxHeight,
      height,
      engineApis,
      onChange,
    } = props;

    const inputting = useRef<boolean>(false);

    const heightStyle = useMemo(
      () => (heightType === 'auto' ? { minHeight, maxHeight } : { height }),
      [heightType, height, maxHeight, minHeight],
    );

    const [quillRef, modules] = useInitReactQuill({
      engineApis,
    });

    const quillModules = useMemo(() => {
      if (imageType && imageType === 'base64') {
        return {
          toolbar: [...modules.toolbar.container],
        };
      }
      return modules;
    }, [imageType, modules]);

    const convertBase64UrlToBlob = (urlData: string) => {
      const imgSrc = urlData.match(/<img src="data:.*?(?:>|\/>)/gi);
      if (!imgSrc || !imgSrc[0]) return null;
      const imgData = imgSrc[0].split('"')[1];
      // 去掉url的头，并转换为byte
      const bytes = window.atob(imgData.split(',')[1]);
      // 处理异常,将ascii码小于0的转换为大于0
      const ab = new ArrayBuffer(bytes.length);
      const ia = new Uint8Array(ab);
      ia.forEach((i, index) => {
        ia[index] = bytes.charCodeAt(index);
      });
      return new Blob([ia], {
        type: imgData.split(',')[0].split(':')[1].split(';')[0],
      });
    };

    useEffect(() => {
      if (inputting.current) {
        inputting.current = false;
      } else {
        // quillRef.current?.getEditor().setText(value || '');
      }
    }, [value]);

    return (
      <ReactQuill
        ref={quillRef}
        readOnly={disabled}
        modules={quillModules}
        style={heightStyle}
        value={typeof value === 'number' ? `${value}` : value}
        className={classnames(quillEditorPrefix, className)}
        onChange={async (v: string) => {
          // 刚执行了清空值操作，不需要调用onChange
          if (v === '<p><br></p>' && value === '') {
            return;
          }
          inputting.current = true;
          let newValue = v;
          let blobV = null;
          if (imageType !== 'base64') {
            blobV = convertBase64UrlToBlob(v);
            if (blobV) {
              const formData = new FormData();
              formData.append('attach', blobV, 'tmpfile');
              const res = await engineApis?.service?.uploadFileByFetch(
                formData,
              );
              if (res?.fileId) {
                const link = engineApis?.getAppFileUrlById(res?.fileId);
                // TODO 后续做appid的数据隔离时候，需要改造
                newValue = v.replace(
                  /<img src="data:.*?(?:>|\/>)/gi,
                  `<img src="${link}" />`,
                );
              }
            }
          }
          if (!blobV && onChange) {
            onChange(newValue);
          }
        }}
      />
    );
  },
);

const QuillEditor = LingxiForwardRef<any, MyQuillEditorProps>((props, ref) => {
  const {
    height,
    onChange,
    className,
    imageType,
    heightType = 'fixed',
    maxHeight,
    minHeight,
    getEngineApis,
    value,
    disabled,
  } = props;
  const engineApis = getEngineApis?.() || {};

  return (
    <BaseQuillEditor
      engineApis={engineApis}
      className={className}
      imageType={imageType}
      height={height}
      disabled={disabled}
      heightType={heightType}
      maxHeight={maxHeight}
      minHeight={minHeight}
      onChange={onChange}
      value={value}
    />
  );
});

export default QuillEditor;
