import { InboxOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Modal, Radio, Upload } from 'antd';
import React, { forwardRef, useEffect, useMemo, useState, useRef } from 'react';
import type { UploadProps } from 'antd/lib/upload';
import { createRandomStr, getAfterString } from '../utils/common';
import renderReadOnly from '../utils/renderReadOnly';
import DownloadProgress from '../StdUpload/DownloadProgress';
import { FormFields, getFieldsProps } from '../utils';
import { LingxiForwardRef } from '@lingxiteam/types';
import { useLocale } from '../utils/hooks/useLocale';

const { Dragger } = Upload;

const UPLOAD_WRAPPER_CLASSNAME = 'ued-upload-wrap';

interface FormUploadProps {
  onChange: (list?: any) => void;
  onFinishUpload?: (file: any) => void;
  onListenDownloading?: (file: File) => void;
  onFileNameClick?: (file: any) => void;
  draggable?: boolean;
  acceptExtension?: UploadProps['accept'];
  value?: any;
  disabled?: boolean;
  readOnly?: boolean;
  precheckService?: any;
  numberLimit?: number;
  downloadable?: boolean;
  fileNameEncode?: boolean;
  isWatermark?: boolean;
  optionalFile?: boolean;
  // accept?: any;
  action?: string;
  getSimpleFileList?: any;
  singleFileMode?: boolean;
  uploadTimeout?: number;
  appId: string;
  pageId: string;
  showUploadList?: any;
  columns?: any;
  acceptType?: any;
  getEngineApis?: any;
}

const FormUpload: React.FC<FormUploadProps> = forwardRef((props, ref) => {
  const {
    onChange,
    onFinishUpload,
    onListenDownloading,
    onFileNameClick,
    children,
    draggable,
    // accept,
    acceptExtension,
    getSimpleFileList,
    value,
    disabled,
    readOnly,
    singleFileMode,
    precheckService,
    numberLimit = 0,
    downloadable = true,
    fileNameEncode = false,
    isWatermark = false,
    optionalFile = false,
    appId,
    uploadTimeout = 30000,
    columns,
    acceptType,
    getEngineApis,
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};
  const { getLocale } = useLocale(engineApis);

  const { api = '' } = columns || {};
  const [action, setAction] = useState<any>(api);
  useEffect(() => {
    if (api) {
      setAction(api);
    } else {
      (async () => {
        setAction(engineApis?.service?.uploadSingleFile);
      })();
    }
  }, [api]);

  const defaultShowUploadList = {
    showRemoveIcon: true,
    showDownloadIcon: downloadable,
  };

  const [fileList, setFileList] = useState<any[]>([]);
  const [showUploadList, setShowUploadList] = useState<any>(
    props.showUploadList === false ? false : defaultShowUploadList,
  ); // showUploadList 默认为null
  const [forbidden] = useState(null);
  const [storeArr, setStoreArr] = useState<any[]>([]);
  const [optionalVisible, setOptionalVisible] = useState<boolean>(false);
  const [okLoading, setOkLoading] = useState<boolean>(false);
  const [downloadWay, setdDownloadWay] = useState<string>('1');
  const [curFile, setCurFile] = useState<any>();
  const [downloadProVisible, setDownloadProVisible] = useState<any>({});
  const progressRef = useRef<any>({});
  const handleRemoveCallback = useRef<any>();

  const handleRemove = async (file: { uid: any; }, isRefresh?: any) => {
    if (singleFileMode || isRefresh) {
      const restFileList = fileList.filter((f) => f.uid !== file.uid);
      setFileList(restFileList);
      if (singleFileMode) {
        restFileList.length === 0 ? onChange(null) : onChange(restFileList);
      }
    }
  };
  handleRemoveCallback.current = handleRemove;


  const previewFile = async (fileId: any) => {
    if (typeof engineApis?.BannerModal?.open === 'function') {
      let fileIndex: number = 0;
      const fileData = fileList?.map((f, i) => {
        const { response } = f;
        const { resultObject } = response || {};
        if (resultObject?.fileId === fileId) {
          fileIndex = i;
        }
        return ({
          appId,
          fileId: resultObject?.fileId,
          pageId: props.pageId,
          downloadClick: handleDownload,
          showDownLoad: !!showUploadList?.showDownloadIcon,
          showDelete: !!showUploadList?.showRemoveIcon,
          deleteClick: (f: any) => {
            // 避免因闭包问题导致上传列表删除被旧fileList数据覆盖
            if (typeof handleRemoveCallback?.current === 'function') {
              handleRemoveCallback?.current(f, true);
            }
          },
          file: {
            ...f,
            ...resultObject,
          },
        });
      });
      engineApis.BannerModal.open({
        fileIndex,
        fileList: fileData,
      });
    } else if (typeof engineApis?.previewFile === 'function') {
      try {
        engineApis.previewFile({ fileId });
      } catch (e) {
        console.error(e);
      }
    }
  };

  // 文件名为全路径时，拆分出实际文件名
  const handleFileName = (_fileName: string) =>
    _fileName ? _fileName.split('\\').pop() : _fileName;

  useEffect(() => {
    if (value && value !== '[]' && value !== '[null]' && value !== '[{}]' && value !== undefined) {
      try {
        let fileName = null;
        if (
          singleFileMode &&
          value &&
          Number(value).toString() !== 'NaN' &&
          !storeArr.includes(`${value}`)
        ) {
          engineApis?.service?.qryDownloadFileInfo({ fileId: value }).then((res: any) => {
            setStoreArr([...storeArr, `${value}`]);
            fileName = res?.fileName;
            const singleList = [
              {
                response: {
                  resultObject: {
                    fileId: value,
                    fileName,
                  },
                },
                uid: value,
                name: handleFileName(fileName),
                status: value ? 'done' : 'stop',
                url: engineApis?.service?.getAppFileUrlById(value),
              },
            ];
            downloadable
              ? setFileList(singleList)
              : setFileList(
                singleList.map((f) => {
                  const { response, uid, name, status } = f;
                  return {
                    response,
                    uid,
                    name,
                    status,
                  };
                }),
              );
          });
        } else {
          let list = [];
          // value 绑定的内容，是个数组的情况，数据兼容
          if (Array.isArray(value)) {
            list = [...value];
          } else {
            list = JSON.parse(value);
          }
          if (list && Array.isArray(list) && list.length > 0 && list[0]) {
            let isDone = true;
            const newFileList = list.map((li) => {
              if (!li) {
                isDone = false;
                return false;
              }
              return {
                response: {
                  resultObject: {
                    fileId: li?.fileId,
                    fileName: handleFileName(li?.fileName),
                  },
                },
                uid: li?.fileId,
                name: handleFileName(li?.fileName),
                status: li?.fileId ? 'done' : 'stop',
                url: engineApis?.service?.getAppFileUrlById(li?.fileId),
              };
            });
            if (isDone) {
              downloadable
                ? setFileList(newFileList)
                : setFileList(
                  newFileList.map((f: any) => {
                    const { response, uid, name, status } = f;
                    return {
                      response,
                      uid,
                      name,
                      status,
                    };
                  }),
                );
            }
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [value]);

  useEffect(() => {
    const { length } = fileList;
    if (numberLimit > 0 && length >= numberLimit) {
      fileList.length = numberLimit;
    }
    const simpleFileList = JSON.stringify(
      (fileList || []).map((f: any) => {
        if (f.response) {
          return {
            fileId: f.response?.resultObject?.fileId,
            fileName: f.response?.resultObject?.fileName,
          };
        }
        return undefined;
      }),
    );
    if (getSimpleFileList) {
      getSimpleFileList(simpleFileList);
    }
    if (singleFileMode) {
      if (Array.isArray(fileList) && fileList.length > 0) {
        if (fileList[0].response && fileList[0].response.resultMsg === 'success') {
          const { resultObject } = fileList[0].response;
          const { fileId } = resultObject;
          // onChange(parseInt(fileId, 10));
          onChange(fileId);
        }
      }
    } else {
      onChange(simpleFileList);
    }
  }, [fileList]);

  const handleOnChange = (e: any) => {
    try {
      const files = e.fileList.map((f: any, index: number) => {
        if (f.response) {
          const { resultObject, resultCode } = f.response;
          const fileId = resultObject?.fileId || -index;
          const { status } = f;
          if (onFinishUpload) {
            onFinishUpload(resultObject);
          }
          return {
            ...f,
            ...resultObject,
            name: handleFileName(f.name),
            status: +resultCode === -1 ? 'error' : status,
            url: engineApis?.service?.getAppFileUrlById(fileId),
          };
        }
        return f;
      });
      downloadable
        ? setFileList(files)
        : setFileList(
          files.map((f: any) => {
            const { response, uid, name, status } = f;
            return {
              response,
              uid,
              name,
              status,
            };
          }),
        );

      if (files[0] && files[0].status !== 'uploading') {
        const { resultCode, resultMsg } = files[0].response || {};
        if (+resultCode === -1 && resultMsg) {
          message.error(resultMsg);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePreview = async (file: any) => {
    const { fileId, uid } = file;
    previewFile(fileId || uid);
    if (onFileNameClick) {
      onFileNameClick(file);
    }
  };

  const getDownloadName = (suffix: any, file: any) => {
    const suf = suffix || getAfterString(file.name, '.') || '';
    return fileNameEncode
      ? `${createRandomStr(20).toUpperCase()}.${suf}`
      : file.name.replace(/\.\w+$/, `.${suf}`);
  };

  // 支持图片、pdf直接下载
  const downloadFile = async (file: any) => {
    if (onListenDownloading) {
      const res = await onListenDownloading(file);
      if (String(res) === 'false') {
        return;
      }
    }
    let downUrl = file.url;
    try {
      // 如果有field 优先通过field拼接
      if (file.fileId) {
        const addWaterMark = isWatermark && (!optionalFile || downloadWay === '2');
        downUrl = engineApis?.service?.getAppFileUrlById({
          addWaterMark,
          fileId: file.fileId,
        });
      }
    } catch (error) {
      console.error(error);
    }
    if (window.XMLHttpRequest) {
      setDownloadProVisible({ ...downloadProVisible, [file.fileId]: true });
      const xhr = new XMLHttpRequest(); // ActiveXObject只存在于IE7及以下，无需兼容
      xhr.timeout = uploadTimeout; // 设置超时时间（秒）
      xhr.open('GET', downUrl, true);
      xhr.responseType = 'blob'; // 设置接受类型
      xhr.setRequestHeader('Content-Type', 'application/json'); // 设置请求头参数
      // xhr.setRequestHeader('X-B-TARGET-ID', props.pageId);
      // xhr.setRequestHeader('X-B-AUTH', '1');
      // xhr.setRequestHeader('APP-ID', appId);
      xhr.onload = () => {
        const data = xhr.response; // 获取响应体数据
        // @ts-ignore
        const suffix = getAfterString(xhr.getResponseHeader('Content-Disposition'), '.');
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = window.URL.createObjectURL(data); // 获取blob地址
        a.download = getDownloadName(suffix, file);
        a.click();
        document.body.removeChild(a);
        setDownloadProVisible({ ...downloadProVisible, [file.fileId]: false });
      };
      // 下载进度条
      xhr.onprogress = (event: any) => {
        if (event.lengthComputable) {
          progressRef.current?.[file.fileId]?.setPercent(Math.round(event.loaded * 100 / event.total));
        }
      };
      xhr.ontimeout = () => {
        setDownloadProVisible({ ...downloadProVisible, [file.fileId]: false });
        xhr.abort(); // 取消请求
      };
      xhr.send();
      xhr.onerror = () => {
        setDownloadProVisible({ ...downloadProVisible, [file.fileId]: false });
      };
    }
  };

  const handleDownload = async (file: any) => {
    if (downloadProVisible[file.fileId]) {
      message.warn(getLocale?.('Upload.download'));
      return;
    }
    if (isWatermark && optionalFile) {
      // 支持选择源文件下载or加水印下载
      setCurFile(file);
      setOptionalVisible(true);
    } else {
      downloadFile(file);
    }
  };

  const onDownloadWayCancel = () => {
    setdDownloadWay('1');
    setOptionalVisible(false);
  };

  const onDownloadWayOk = () => {
    setOkLoading(true);
    try {
      downloadFile(curFile);
    } finally {
      onDownloadWayCancel();
      setOkLoading(false);
    }
  };

  const handleBeforeUpload = async (file: any, _fileList: any) => {
    if (precheckService) {
      const res = await fetch(action, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'APP-ID': appId,
          'X-B-AUTH': '1',
          'X-B-TARGET-ID': props.pageId,
        },
      }).then((response) => response.json());
      if (res.resultCode === '-1' || res.resultCode === -1) {
        setShowUploadList(false);
        return false;
      }
    }
    if (!action) {
      message.warn(getLocale?.('Upload.actionStrict'));
      return false;
    }
    if (numberLimit) {
      const { length } = fileList;
      if (length >= numberLimit) {
        message.warn(getLocale?.('Upload.fileLimit', { num: singleFileMode ? 1 : numberLimit }));
        return false;
      }
      if (singleFileMode && length > 0) {
        message.warn(getLocale?.('Upload.singleStrict'));
        return false;
      }
    }
    return true;
  };
  const accept = acceptType?.join(',') || '';
  const commonConfig: any = {
    disabled: forbidden || disabled || readOnly,
    action,
    accept: acceptExtension || accept,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    beforeUpload: (file: any, fileList: any) => handleBeforeUpload(file, fileList),
    fileList,
    onRemove: (file: { uid: any; }) => handleRemove(file),
    onChange: (e: any) => handleOnChange(e),
    showUploadList: {
      ...showUploadList,
      downloadIcon: (file: any) => {
        if (downloadProVisible[file.fileId]) {
          return <DownloadProgress ref={(r: any) => { progressRef.current[file.fileId] = r; }} />;
        }
        return null;
      },
    },
    onPreview: (file: any) => handlePreview(file),
    onDownload: (file: any) => handleDownload(file),
    headers: {
      'X-B-TARGET-ID': props.pageId,
      'X-B-AUTH': 1,
      'APP-ID': appId,
    },
    withCredentials: true,
  };

  if (readOnly && fileList.length <= 0) {
    return renderReadOnly('--');
  }

  return (
    <>
      {draggable ? (
        <Dragger {...restProps} {...commonConfig}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined rev="" />
          </p>
          <p className="ant-upload-text">{getLocale?.('Upload.uploadPlaceholder')}</p>
        </Dragger>
      ) : (
        <div className={disabled || readOnly ? `${UPLOAD_WRAPPER_CLASSNAME}-hidden` : ''}>
          <Upload {...restProps} {...commonConfig}>
            {children}
          </Upload>
        </div>
      )}
      <Modal
        title={getLocale?.('Upload.downloadType')}
        visible={optionalVisible}
        width={420}
        onCancel={onDownloadWayCancel}
        footer={
          <Button type="primary" onClick={onDownloadWayOk} loading={okLoading}>
            {getLocale?.('Upload.downloadText')}
          </Button>
        }
      >
        <Radio.Group onChange={(e) => setdDownloadWay(e.target.value)} value={downloadWay}>
          <Radio value="1">{getLocale?.('Upload.origin')}</Radio>
          <Radio value="2">{getLocale?.('Upload.waterMark')}</Radio>
        </Radio.Group>
      </Modal>
    </>
  );
});

export interface MyUploadProps {
  value?: any;
  visible?: boolean;
  onChange?: (e: any) => void;
  onValueRelease?: (value: any) => void;
  getCompPropMapState?: (id: string, type: string) => any;
  compId?: string;
  name?: string;
  fieldName: string;
  hidden?: boolean;
  regexp?: any;
  message?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  uploadText?: any;
  selfSpan?: number;
  colSpan?: number;
  style?: React.CSSProperties;
  fileName?: string;
  action?: string;
  multiple?: boolean;
  listType?: string;
  singleFileMode?: boolean;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  colon?: boolean;
  isFormChild?: boolean | undefined;
  uploadProps: any;// 懒加载入参
  formFieldsRef: any;// 懒加载入参
  disabled: boolean;// 懒加载入参
  readOnly: boolean;// 懒加载入参
  required: boolean;// 懒加载入参
}

const MyUpload = LingxiForwardRef<any, MyUploadProps>((props, ref) => {
  const {
    value,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onChange,
    onValueRelease,
    getCompPropMapState,
    compId,
    name,
    fieldName,
    regexp,
    label,
    labelCol,
    wrapperCol,
    uploadText,
    hidden,
    selfSpan,
    colSpan,
    fileName,
    action,
    multiple,
    listType,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    isFormChild,
    uploadProps,
    formFieldsRef,
    disabled,
    readOnly,
    required,
    ...restProps
  } = props;
  // const customStyle = restProps.style || {};
  // const {
  //   margin: customMargin,
  //   display: customDisplay,
  //   visibility: customVisibility,
  // } = customStyle;
  const engineApis = props?.getEngineApis?.() || {};
  const { getLocale } = useLocale(engineApis);

  // const [uploadProps, setUploadProps] = useState<MyUploadProps['uploadProps']>();

  // const { formFieldsRef, disabled, readOnly, required } = useCommonImperativeHandle(ref, props, {
  //   setUploadProps: (_props: any) => {
  //     setUploadProps(_props);
  //   }
  // });

  const extraProps = useMemo(() => {
    const { method, ...data } = uploadProps || {};
    const extra: any = {
      name: fileName,
      method,
      data,
    };
    if (action) {
      extra.action = action;
    }
    return extra;
  }, [fileName, uploadProps, action]);

  const finalRules = useMemo(() => {
    const rules = [{ required, message: getLocale?.('notEmpty', { name }) }];
    return rules;
  }, [required]);

  return (
    <FormFields
      {...getFieldsProps(props)}
      ref={formFieldsRef}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      rules={finalRules}
      ignoreReadOnlyFlag
      handleFormValue={(val) => {
        if (val !== undefined) {
          return props?.singleFileMode ? val : val || [];
        }
        return undefined;
      }}
    >
      <FormUpload
        {...restProps}
        {...extraProps}
        value={value}
        appId={props.$$componentItem.appId}
        pageId={props.$$componentItem.pageId}
        getSimpleFileList={(v: string) => {
        // if (props.singleFileMode) {
        //   if (v) {
        //     const arr = JSON.parse(v) || [];
        //     if (arr.length > 0 && arr[0]) {
        //       // eslint-disable-next-line radix
        //       if (form?.setFieldsValue) {
        //         // form.setFieldsValue({ [fieldName]: parseInt(arr[0].fileId, 10) });
        //         form.setFieldsValue({ [fieldName]: arr[0].fileId });
        //       }
        //     }
        //   }
        // } else if (form?.setFieldsValue) {
        //   form.setFieldsValue({ [fieldName]: v });
        // }
        }}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      >
        {listType === 'picture-card' ? (
          <div>
            <PlusOutlined rev="" />
            <div>{uploadText}</div>
          </div>
        ) : (
          <Button>
            <UploadOutlined rev="" />
            {uploadText}
          </Button>
        )}
      </FormUpload>
    </FormFields>);
});

export default MyUpload;
