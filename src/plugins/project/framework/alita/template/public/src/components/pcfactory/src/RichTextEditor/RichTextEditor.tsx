import RichText from '@lingxiteam/richtext';
import { LingxiForwardRef } from '@lingxiteam/types';
import type { FormItemProps } from 'antd/lib/form';
import classnames from 'classnames';
import React, { CSSProperties, useMemo } from 'react';
import { FormFields, getFieldsProps } from '../utils';
import { useLocale } from '../utils/hooks/useLocale';

export interface MyRichTextEditorProps extends FormItemProps {
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
  richTextRef: any; // 富文本Ref
  language: string;
}

interface BaseRichTextEditorPropsType {
  value?: string;
  //   disabled?: boolean;
  className: string;
  imageType?: string;
  heightStyle?: CSSProperties;
  heightType: string;
  minHeight?: string | number;
  maxHeight?: string | number;
  height?: number;
  engineApis: any;
  onChange?: Function;
  language: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  richTextRef: any;
}

const richTextEditorPrefix = 'ued-richText-editor';

const BaseRichTextEditor = React.forwardRef(
  (props: BaseRichTextEditorPropsType, ref) => {
    const {
      value,
      imageType,
      className,
      heightType,
      minHeight,
      maxHeight,
      height,
      engineApis,
      onChange,
      language,
      disabled,
      style,
      richTextRef,
    } = props;
    engineApis;

    const heightStyle = useMemo(
      () =>
        heightType === 'auto'
          ? {
              minHeight: minHeight ? `${minHeight}px` : '',
              maxHeight: maxHeight ? `${maxHeight}px` : '',
              height: 'auto',
            }
          : { height: height ? `${height}px` : '' },
      [heightType, height, maxHeight, minHeight],
    );
    const richTextProps: any = {};
    if (onChange) {
      richTextProps.onChange = onChange;
    }

    const isBase64 = (src: string) => {
      // 检查是否以 base64 数据格式开始
      return src.startsWith('data:image/');
    };

    const getQueryParams = (url: string) => {
      const queryParams: any = {};
      // 使用 URLSearchParams 解析查询字符串
      const urlParams = new URLSearchParams(url.split('?')[1]);

      // 遍历所有查询参数，添加到结果对象中
      for (const [key, value] of urlParams) {
        queryParams[key] = value;
      }

      return queryParams;
    };

    return (
      <div
        className={classnames(richTextEditorPrefix, className)}
        style={style}
      >
        <RichText
          ref={richTextRef}
          {...richTextProps}
          {...heightStyle}
          autofocus={!disabled}
          disabled={disabled}
          value={value}
          language={language}
          antPrefix="pcfactory"
          style={style}
          customImgUrl={(imgUrl: string) => {
            if (!isBase64(imgUrl)) {
              const urlParams = getQueryParams(imgUrl);
              if (urlParams.fileId) {
                const url = engineApis?.getAppFileUrlById(urlParams.fileId);
                return url;
              }
            }
            return imgUrl;
          }}
          addImageBlobHook={async (blob, callback) => {
            if (imageType !== 'base64') {
              const formData = new FormData();
              formData.append('attach', blob, 'tmpfile');
              const res = await engineApis?.service?.uploadFileByFetch(
                formData,
              );
              if (res?.fileId) {
                const link = engineApis?.getAppFileUrlById(res?.fileId);
                callback(link, '');
              }
            } else {
              const reader = new FileReader();

              reader.onload = ({ target }) =>
                callback(target!.result as string);
              reader.readAsDataURL(blob);
            }
          }}
        />
      </div>
    );
  },
);

const RichTextEditor = LingxiForwardRef<any, MyRichTextEditorProps>(
  (props, ref) => {
    const {
      height,
      onChange,
      className,
      imageType,
      heightType = 'fixed',
      maxHeight,
      minHeight,
      getEngineApis,
      name,
      disabled,
      required,
      readOnly,
      formFieldsRef,
      language,
      style,
      richTextRef,
    } = props;
    const engineApis = getEngineApis?.() || {};
    const { getLocale, lang } = useLocale(engineApis);

    const finalRules = useMemo(
      () => [
        {
          required,
          message: getLocale?.('notEmpty', { name }),
        },
      ],
      [required, name, lang],
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
        <BaseRichTextEditor
          richTextRef={richTextRef}
          engineApis={engineApis}
          className={className}
          imageType={imageType}
          height={height}
          heightType={heightType}
          maxHeight={maxHeight}
          minHeight={minHeight}
          onChange={onChange}
          language={language}
          style={style}
        />
      </FormFields>
    );
  },
);

export default RichTextEditor;
