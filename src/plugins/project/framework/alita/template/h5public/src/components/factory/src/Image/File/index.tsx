import { LingxiForwardRef } from '@lingxiteam/types';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Spin } from '../../BasicComponents';
import { transformFile } from '../../utils';
import UploadHandle from '../../utils/upload';
import './index.less';

export interface FileProps {
  value?: string;
  fileName?: string;
  headers?: Record<string, any>;
  resAliaKeys?: string;
  credentials?: boolean;
  visible?: boolean;
  accept?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  onChange?: (file: any) => void;
  uploadType?: string;
  onBeforeUpload?: (file: any) => boolean;
  columns?: any;
  onInputValue?: any;
  onCheckUpload?: () => Promise<any> | any;
  compressMethod?: string;
  compressRatio?: number;
  triggerConditons?: number;
  compressSize?: number;
}

interface UploadCallbackType {
  success?: (data: any, file: any) => void;
  fail?: (err?: any) => void;
}

const prefixCls = 'lcdp-file';
const File = LingxiForwardRef<any, FileProps>((props, ref) => {
  const {
    style = {},
    hidden = false,
    value,
    fileName = 'file',
    uploadType,
    headers,
    resAliaKeys,
    credentials,
    onInputValue,
    visible = true,
    onBeforeUpload,
    columns,
    onCheckUpload,
    getEngineApis,
    accept,
    compressMethod = 'compressRatio',
    compressRatio,
    triggerConditons,
    compressSize,
    ...restProps
  } = props;
  const {
    api = '/app/file/uploadSingleFile',
    _source,
    _serviceId,
  } = columns || {};
  const engineApis = getEngineApis?.();
  const [fileProps, setFileProps] = useState(restProps);
  const uploadCallbackRef = useRef<UploadCallbackType>({});
  const uploadResultRef = useRef<any>();
  const FileRef = useRef<HTMLInputElement>(null);
  const [selectImg, setSelectImg] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [showStopRender, setShowStopRender] = useState(false);
  const { getLocale } = engineApis;

  useEffect(() => {
    if (onCheckUpload && typeof onCheckUpload === 'function') {
      setShowStopRender(true);
    }
  }, [onCheckUpload]);

  const cStyle = useMemo(() => {
    if (hidden) {
      return {
        width: 0,
        height: 0,
        display: 'none',
        overflow: 'hidden',
      };
    }
    const temObject = {
      ...style,
    };
    if (selectImg || value) {
      temObject.backgroundImage = `url(${selectImg || value})`;
    }
    return temObject;
  }, [hidden, selectImg, value, style]);

  const uploadAfter = async (options: { resultObject: any; file: any }) => {
    setSpinning(false);
    const { resultObject: fileObj, file } = options;
    if (uploadCallbackRef.current.success) {
      uploadCallbackRef.current.success(fileObj, file);
    }
    setSelectImg(engineApis.getAppFileUrlById(fileObj.fileId));
  };

  useImperativeHandle(ref, () => ({
    upload(
      opts = {},
      success: ((data: any, file: any) => void) | undefined,
      fail: any,
    ) {
      setFileProps((prevProps) => ({ ...prevProps, ...opts }));
      uploadCallbackRef.current.success = success;
      uploadCallbackRef.current.fail = fail;
      setTimeout(() => {
        if (FileRef.current) {
          FileRef.current.click();
        }
      }, 0);
    },
    get value() {
      return uploadResultRef?.current?.value() || selectImg || value;
    },
    setSrc(src: string) {
      setSelectImg(src);
    },
    setCompFileId: (fileId: string) => {
      setSelectImg(engineApis.getAppFileUrlById(fileId));
    },
  }));

  /**
   * 文件流上传方式
   * @param targetFile
   */
  const uploadFileReq = (targetFile: any) => {
    setSpinning(true);
    uploadResultRef.current.setProps({
      file: targetFile,
      hooks: {
        uploadAfter,
        uploadError: () => {
          setSpinning(false);
        },
      },
    });
    uploadResultRef.current.sendRequest();
  };

  /**
   * base64上传方式
   */
  const uploadFileFromBase64 = (targetFile: any) => {
    const reader = new FileReader();
    reader.onload = (ev: any) => {
      setSelectImg(ev.target.result);
      if (props?.onChange) {
        props.onChange(ev.target.result);
      }
    };
    reader.readAsDataURL(targetFile);
  };

  const onChange = async (e: { currentTarget: any; target: any }) => {
    const { files } = e.currentTarget || e.target;

    if (typeof onBeforeUpload === 'function') {
      const exit = await onBeforeUpload(files[0]);
      console.log(exit);
      if (exit) {
        return;
      }
    }
    let targetCompressRation: number | undefined;
    const fileSizeToKB = files[0].size / 1024; // 统一转换成KB进行换算
    let maxSizeKB: number | undefined;
    if (
      compressMethod === 'custom' &&
      typeof triggerConditons === 'number' &&
      typeof compressSize === 'number' &&
      fileSizeToKB > triggerConditons &&
      triggerConditons >= compressSize
    ) {
      // 压缩方式自定义:图片大小大于触发条件且大于指定压缩大小时进行压缩
      // 压缩至指定大小， 初始1开始，内部会进行递归压缩
      targetCompressRation = 1;
      maxSizeKB = compressSize;
    } else if (compressMethod === 'compressRatio') {
      // 按照自定义压缩率压缩
      targetCompressRation = compressRatio;
    }
    if (targetCompressRation) {
      const newFile = await transformFile(
        files[0],
        targetCompressRation,
        maxSizeKB,
      );
      // 当上传方式修改base64时，不需要上传图片，只需要将图片转换成base64String
      if (uploadType === 'base64StringType') {
        uploadFileFromBase64(newFile);
      } else {
        uploadFileReq(newFile);
      }
    } else if (uploadType === 'base64StringType') {
      uploadFileFromBase64(files[0]);
    } else {
      uploadFileReq(files[0]);
    }
  };

  useEffect(() => {
    if (!uploadResultRef.current) {
      const extendData = {};
      if (_source === 'std') {
        // @ts-ignore
        extendData['ORCHESTRATION.appId'] = props?.appId;
        // @ts-ignore
        extendData['ORCHESTRATION.serviceVersionId'] = _serviceId;
      }
      uploadResultRef.current = new UploadHandle({
        alias: resAliaKeys,
        fileName,
        url: api,
        // @ts-ignore
        request: engineApis?.http,
        getLocale: engineApis.getLocale,
        headers,
        onChange: (v) => {
          if (props.onChange) {
            props.onChange(v);
          }
        },
        credentials: credentials === true ? 'include' : 'same-origin',
        extendUploadData: extendData,
        getAppFileUrlById: engineApis?.getAppFileUrlById,
        filePrefix: engineApis?.downFieldPrefix(),
      });
    }
  }, []);

  useEffect(() => {
    if (uploadResultRef?.current) {
      uploadResultRef.current.setLocale(engineApis.getLocale);
    }
  }, [engineApis.getLocale]);
  // 模拟点击
  const onSimulatedClick = () => {
    if (FileRef.current) {
      FileRef.current?.click();
    }
  };

  // 模拟点击出发布局
  const renderClickDiv = () => {
    return (
      <div
        className={`${prefixCls}-stop`}
        onClick={async (e) => {
          e.stopPropagation();
          if (onCheckUpload) {
            const isCheck = await onCheckUpload();
            // eslint-disable-next-line
            if (isCheck == 0) {
              // 不操作
            } else {
              onSimulatedClick();
            }
          }
        }}
      />
    );
  };

  if (!visible) {
    return <></>;
  }
  return (
    <div className={prefixCls} style={cStyle}>
      <Spin
        spinning={spinning}
        tip={`${getLocale('uploading', '正在上传')}...`}
      >
        <input
          {...fileProps}
          ref={FileRef}
          accept={accept}
          type="file"
          onChange={onChange}
          className={`${prefixCls}-input`}
        />
        {showStopRender && renderClickDiv()}
      </Spin>
    </div>
  );
});

export default File;
