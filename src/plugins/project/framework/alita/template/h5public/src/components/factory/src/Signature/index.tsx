import { Signature, SignatureType } from '@lingxiteam/antd-mobile-plus';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Toast } from 'antd-mobile-5';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { dataURLtoFile } from '../utils';
import useHiddenStyle from '../utils/hooks/useHiddenStyle';
import UploadHandle from '../utils/upload';

export interface SignatureProps extends SignatureType {
  resAliaKeys?: any;
  onChange: (e: any) => void;
  fileName: string;
  headers?: any;
  credentials: boolean;
  uploadType?: string;
  visible: boolean;
  columns: any;
}

export interface SignatureRef {
  value?: () => any;
  clearValue?: () => void;
}
const MySignature = LingxiForwardRef<SignatureRef, SignatureProps>(
  (props, ref) => {
    const uploadResultRef = React.useRef<any>();
    const {
      onChange,
      fileName = 'file',
      headers,
      resAliaKeys,
      credentials,
      uploadType,
      style,
      visible = true,
      columns,
      getEngineApis,
      className,
      $$componentItem,
      type = 'image/png',
      encoderOptions = 0.92,
      clear,
      footerNode,
      ...restProps
    } = props;
    const { api = '', _source, _serviceId } = columns || {};
    // @ts-ignore
    const { contentBackground, contentBorderRadius, ...resStyle } = style || {};
    const { http, downFieldPrefix, getLocale, getAppFileUrlById } =
      getEngineApis() || {};
    const hiddenStyle = useHiddenStyle(visible);
    let canvasRef = useRef<React.MutableRefObject<null>>(null);

    const getCanvasRef = (ref: React.MutableRefObject<null>) => {
      canvasRef = ref;
    };
    useEffect(() => {
      if (!uploadResultRef.current) {
        const extendData: any = {};
        if (_source === 'std') {
          extendData['ORCHESTRATION.appId'] = $$componentItem?.appId;
          extendData['ORCHESTRATION.serviceVersionId'] = _serviceId;
        }
        uploadResultRef.current = new UploadHandle({
          request: http,
          alias: resAliaKeys,
          filePrefix: downFieldPrefix(),
          fileName,
          getLocale,
          url: api,
          headers,
          onChange: (v) => {
            if (onChange) {
              onChange(v);
            }
          },
          credentials: credentials === true ? 'include' : 'same-origin',
          extendUploadData: extendData,
          getAppFileUrlById,
        });
      }
    }, []);
    useEffect(() => {
      if (uploadResultRef?.current) {
        uploadResultRef.current.setLocale(getLocale);
      }
    }, [getLocale]);
    const getSigin = (dataURI: string) => {
      if (uploadType === 'base64StringType') {
        // 不做图片上传，将图片base64数据返回
        if (onChange) {
          onChange(dataURI);
        }
      } else {
        uploadResultRef.current.setProps({
          file: dataURLtoFile(dataURI, 'png'),
          hooks: {
            uploadAfter: () => {
              Toast.show({
                content: getLocale('Upload.success'),
                icon: 'success',
              });
            },
            uploadError: () => {
              Toast.show({
                content: getLocale('Upload.failed'),
                icon: 'fail',
              });
            },
          },
        });
        uploadResultRef.current.sendRequest();
      }
    };

    useImperativeHandle(ref, () => ({
      get value() {
        if (uploadType === 'base64StringType') {
          if (canvasRef) {
            return (canvasRef as any).canvas.drawing.toDataURL(
              type,
              encoderOptions,
            );
          }
          return uploadResultRef?.current?.value?.();
        }
        return uploadResultRef?.current?.value?.();
      },
      clearValue() {
        if (canvasRef) {
          (canvasRef as any).clear();
          clear && clear();
        }
      },
    }));

    const renderFooterNode = () => {
      if (footerNode === true) {
        return <></>;
      }
      // 使用内部的footerNode
      return undefined;
    };
    return (
      <Signature
        {...restProps}
        style={{
          width: `${style?.width ? style.width : '100%'}`,
          height: `${style?.height ? style.height : '100%'}`,
          ...resStyle,
          ...hiddenStyle,
        }}
        footerNode={renderFooterNode()}
        className={className}
        contentBackground={contentBackground}
        contentBorderRadius={contentBorderRadius}
        getSigin={getSigin}
        getCanvasRef={getCanvasRef}
        clear={clear}
        type={type}
        encoderOptions={encoderOptions}
        okText={getLocale('confirm')}
        clearText={getLocale('clearText')}
      />
    );
  },
);

export default MySignature;
