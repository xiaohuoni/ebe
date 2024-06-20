import { DformImagePicker } from '@lingxiteam/dform';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DFormWrapper } from '../BasicComponents';
import { useFormItem, UseFormItemProps } from '../utils/hooks/useFormItem';
import UploadHandle from '../utils/upload';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EngineApisType, LingxiForwardRef } from '@lingxiteam/types';
// import { usePatchUploadImage } from './usePatchUploadImage';

// @ts-ignore
export interface ImagePickerProps extends UseFormItemProps {
  onUpload?: (file: any) => void;
  onDelete?: (i: any) => void;
  headers?: any;
  resAliaKeys?: string;
  credentials?: boolean;
  fileIdKey?: string;
  filePrefix?: string;
  value?: string;
  uploadType?: string;
  onImageClick?: (index: number, files: any, currentFiles: any) => void;
  isFilespreview: boolean; // 是否点击图片预览
  limitSize?: any;
  disableDelete?: boolean;
  maxLength?: any;
  capture?: string;
  selectable?: boolean;
  columns: any;
  getEngineApis?: () => EngineApisType;
  appId: any;
  fileName?: string;
  newDefaultValue?: any; // 添加id和url的文件数据
}
const ImagePicker = LingxiForwardRef<any, ImagePickerProps>((props, ref) => {
  const {
    // defaultValue,
    onChange,
    maxLength,
    fileName = 'file',
    headers,
    resAliaKeys,
    credentials,
    fileIdKey,
    filePrefix,
    // value,
    uploadType,
    capture = '',
    onImageClick,
    limitSize,
    isFilespreview = false,
    columns,
    getEngineApis,
    newDefaultValue = [],
    ...restProps
  } = props;
  const {
    api = '/app/file/uploadSingleFile',
    _source,
    _serviceId,
  } = columns || {};
  const uploadResultRef = useRef<any>();
  const [selectable, setSelectable] = useState(props.selectable);
  const engineApis = getEngineApis?.();

  const {
    disabled,
    val,
    onInputChange,
    required,
    getRules,
    readOnly,
    visible,
    // isForm,
  } = useFormItem(ref, { ...props, defaultValue: newDefaultValue });

  // const [imageList, setImageList] = useState<any>(val);
  // const { value, cache } = usePatchUploadImage({ isForm, defaultValue: val, fileIdKey });

  // 上传图片大小，支持MB和KB，存量数据默认是KB
  const imgLimitSize = useMemo(() => {
    if (typeof limitSize === 'string') {
      const num = parseInt(limitSize, 10);
      if (!isNaN(num)) {
        const [, unit] = limitSize?.split(`${num}`);
        if (unit === 'KB') {
          return num * 1024;
        }
        if (unit === 'MB') {
          return num * 1024 * 1024;
        }
      }
    }
    return +limitSize * 1024;
  }, [limitSize]);
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
        headers,
        fileIdKey,
        getLocale: engineApis.getLocale,
        // @ts-ignore
        request: engineApis?.http,
        // @ts-ignore
        filePrefix: filePrefix || engineApis?.downFieldPrefix(),
        credentials: 'include', // 跨越携带cookie
        withCredentials: true,
        extendUploadData: extendData,
        getAppFileUrlById: filePrefix ? null : engineApis?.getAppFileUrlById,
      });
    }
  }, []);
  useEffect(() => {
    if (uploadResultRef?.current) {
      uploadResultRef.current.setLocale(engineApis.getLocale);
    }
  }, [engineApis.getLocale]);
  useEffect(() => {
    // 修复当图片已选满，但是中途用户又用组件动作设置了图片数量，导致上传按钮不出现的问题
    if (val) {
      setSelectable(getSelectable(val));
    }
  }, [val]);
  const getSelectable = useCallback(
    (files) => {
      if (props.selectable === false) {
        return false;
      }
      if (maxLength && files?.length >= maxLength) {
        return false;
      }
      return true;
    },
    [maxLength, props.selectable],
  );

  const onUpload = async (file: any) =>
    new Promise((resolve, reject) => {
      uploadResultRef.current.setProps({
        file,
        hooks: {
          uploadAfter(opts: unknown) {
            resolve(opts);
          },
          uploadError: () => {
            setSelectable(true);
            reject();
          },
        },
      });
      uploadResultRef.current.sendRequest();
    });

  const getImgSize = (base64Str: string) => {
    if (base64Str) {
      if (base64Str.includes(',')) {
        const base64 = base64Str.split(',')[1].split('=')[0];
        const strLength = base64.length;
        const fileLength = strLength - (strLength / 8) * 2;
        const size = parseInt(`${fileLength}`, 10);
        return size;
      }
      return -1;
    }
    return -1;
  };

  // eslint-disable-next-line consistent-return
  const onDelete = (file: any) => {
    if (props.onDelete) {
      return props.onDelete(file);
    }
  };
  const onUploadChangeFile = async (files: any[]) => {
    let imgList = files;
    try {
      if (typeof imgList === 'string') {
        imgList = JSON.parse(imgList);
      }
    } catch (e) {
      //
      imgList = [];
    }
    // cache(imgList);
    setSelectable(getSelectable(imgList));
    onInputChange(imgList);
  };

  // 上传
  const handleUpload = (file: any, base64Url: any) => {
    setSelectable(false);
    // 当上传方式修改base64时，不需要上传图片，只需要将图片转换成base64String
    if (uploadType === 'base64StringType' && base64Url) {
      let size = -1;
      let url;
      if (typeof base64Url === 'string') {
        url = base64Url;
        size = getImgSize(url);
      }
      const base64String = {
        name: file?.name || '',
        data: url || '',
        size: size !== -1 ? size : 0,
        url,
        file,
      };
      let res: any;
      if (props.onUpload) {
        res = props.onUpload([base64String]);
      }
      return res?.url ? res : base64String;
    }
    return uploadResultRef.current.queue([onUpload], [file]).then(() => {
      const values = uploadResultRef.current.values();
      if (props.onUpload) {
        props.onUpload(values);
      }
      return values[0];
    });
  };

  const ImgPicker: any = DformImagePicker;

  const preview = useMemo(() => {
    // 如编排了点击图片事件，将不采用系统默认预览弹窗
    if (typeof onImageClick === 'function') {
      return false;
    }
    if (disabled) {
      // 禁用不允许预览
      return false;
    }
    return isFilespreview;
  }, [isFilespreview, onImageClick, disabled]);

  return (
    <DFormWrapper visible={visible} getEngineApis={getEngineApis}>
      {capture === 'camera' ? (
        <ImgPicker
          {...restProps}
          limitSize={imgLimitSize}
          onImageClick={(index: number, file: any, files: any) => {
            if (onImageClick) {
              onImageClick(index, files, file);
            }
          }}
          rules={getRules()}
          maxCount={maxLength}
          required={required}
          preview={preview}
          defaultValue={val}
          accept="image/*,image/heic"
          positionType="vertical"
          deletable={restProps.disableDelete}
          disabled={disabled}
          getLocale={(
            t: string,
            tempValue: Record<string, any> | undefined,
          ) => {
            return engineApis?.getLocale(
              `DformImagePicker.${t}`,
              '',
              tempValue,
            );
          }}
          selectable={selectable}
          onChange={onUploadChangeFile}
          capture="camera"
          upload={handleUpload}
          onDelete={onDelete}
          uploadType={uploadType}
          readonly={readOnly}
        />
      ) : (
        <ImgPicker
          {...restProps}
          comp
          rules={getRules()}
          maxCount={maxLength}
          preview={preview}
          limitSize={imgLimitSize}
          onImageClick={(index: number, file: any, files: any) => {
            if (onImageClick) {
              onImageClick(index, files, file);
            }
          }}
          required={required}
          defaultValue={val}
          accept="image/*,image/heic"
          deletable={restProps.disableDelete}
          positionType="vertical"
          selectable={selectable}
          disabled={disabled}
          upload={handleUpload}
          onChange={onUploadChangeFile}
          onDelete={onDelete}
          uploadType={uploadType}
          readonly={readOnly}
          getLocale={(
            t: string,
            tempValue: Record<string, any> | undefined,
          ) => {
            return engineApis?.getLocale(
              `DformImagePicker.${t}`,
              '',
              tempValue,
            );
          }}
        />
      )}
    </DFormWrapper>
  );
});

ImagePicker.displayName = 'dformImagePicker';

export default ImagePicker;
