import {
  CloudUploadOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { LingxiForwardRef } from '@lingxiteam/types';
import { Button, message, Modal, Radio, Upload } from 'antd';
import { UploadType } from 'antd/lib/upload/interface';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import CommIcon from '../Icon';
import type { IconCfg } from '../Icon/PropsType';
import {
  FormFields,
  getFieldsProps,
  useCommonImperativeHandle,
  useForm,
  useListenProps,
} from '../utils';
import {
  convertToBytes,
  createRandomStr,
  getAfterString,
} from '../utils/common';
import { useLocale } from '../utils/hooks/useLocale';
import renderReadOnly from '../utils/renderReadOnly';
import DownloadProgress from './DownloadProgress';
import UploadItem from './UploadItem';

const { Dragger } = Upload;
export interface MyFormUploadProps {
  onChange?: (list?: any[]) => void;
  onFinishUpload?: (
    file: File,
    fileList: any[],
    fileResponseList: any[],
  ) => void;
  onFileListChange?: (fileList: any[], fileResponseList: any[]) => void;
  onFileRemove?: (file: File, fileList: any[]) => void;
  // draggable?: boolean;
  value?: any;
  disabled?: boolean;
  readOnly?: boolean;
  precheckService?: any;
  numberLimit?: number;
  singleFileMaxSize?: string;
  singleFileMinSize?: string;
  // downloadable?: boolean;
  fileNameEncode?: boolean;
  isWatermark?: boolean;
  optionalFile?: boolean;
  onListenUploading?: (
    file: File,
    fileList: any[],
    fileResponseList: any[],
  ) => void;
  onListenDownloading?: (file: any) => void;
  onFileNameClick?: (file: File) => void;
  accept?: any;
  // acceptType?: any;
  // acceptExtension?: any;
  // showUploadList?: boolean;
  action?: string;
  listType?: UploadType;
  uploadText?: string;
  defaultFileList?: any[];
  uploadStyle?: string;
  icon?: IconCfg;
  deleteIcon?: any;
  downloadIcon?: any;
  previewIcon?: any;
  appId: string;
  pageId: string;
  iconFile?: any;
  uploadTimeout?: number;
  onCheckUpload?: () => any;
  headers?: any;
  columns?: any;
  uploadAccepType?: any;
  viewMode: 'newTab' | 'popUp' | 'window';
  modalWidth?: number;
  modalHeight?: number;
}

const FormUpload = LingxiForwardRef<any, MyFormUploadProps>((props, ref) => {
  const {
    onChange,
    onFinishUpload,
    onFileListChange,
    onFileRemove,
    children,
    // draggable,
    // acceptType,
    // acceptExtension,
    value,
    disabled = false,
    readOnly = false,
    precheckService,
    numberLimit = 5,
    singleFileMaxSize,
    singleFileMinSize,
    // downloadable = true,
    fileNameEncode = false,
    isWatermark = false,
    optionalFile = false,
    onListenUploading,
    onListenDownloading,
    onFileNameClick,
    // showUploadList,
    uploadText,
    listType,
    uploadStyle,
    deleteIcon,
    downloadIcon,
    previewIcon,
    appId,
    pageId,
    uploadTimeout = 30000,
    onCheckUpload,
    headers,
    icon = {},
    columns,
    uploadAccepType,
    viewMode,
    modalWidth,
    modalHeight,
    getEngineApis,
    className,
    ...restProps
  } = props;

  const engineApis = getEngineApis?.() || {};

  const { getLocale } = useLocale(engineApis);

  const { api = '' } = columns || {};
  const [action, setAction] = useState<any>(api);
  const [optionalVisible, setOptionalVisible] = useState<boolean>(false);
  const [okLoading, setOkLoading] = useState<boolean>(false);
  const [downloadWay, setdDownloadWay] = useState<string>('1');
  const [curFile, setCurFile] = useState<any>();
  const [downloadProVisible, setDownloadProVisible] = useState<any>({});
  const progressRef = useRef<any>({});
  const uploadDivRef = useRef<any>(null);
  const handleRemoveCallback = useRef<any>();

  useEffect(() => {
    if (api) {
      setAction(engineApis?.resolveApiPath?.(api));
    } else {
      // @ts-ignore
      setAction(engineApis?.service?.uploadSingleFile());
    }
  }, [api]);

  const uploadList = {
    showPreviewIcon: previewIcon?.showPreviewIcon,
    previewIcon: previewIcon?.previewIconType ? (
      <CommIcon
        icon={{
          type: previewIcon?.previewIconType,
          theme: previewIcon?.previewIconTheme,
          isIconFont: previewIcon?.previewIconIsIconFont,
          fontAddress: previewIcon?.downloadIconFontAddress,
          iconFile: previewIcon?.iconFile,
          iconFileInfo: previewIcon?.previewIconIconFileInfo,
        }}
        $$componentItem={props.$$componentItem}
        getEngineApis={getEngineApis}
        className=""
      />
    ) : (
      <CommIcon
        icon={{
          type: 'eye',
          theme: 'outlined',
          isIconFont: false,
        }}
        $$componentItem={props.$$componentItem}
        getEngineApis={getEngineApis}
        className=""
      />
    ),
    showDownloadIcon: downloadIcon?.showDownloadIcon,
    downloadIcon: (file: any) => {
      if (downloadProVisible[file.fileId]) {
        return (
          <DownloadProgress
            ref={(r: any) => {
              progressRef.current[file.fileId] = r;
            }}
          />
        );
      }
      return downloadIcon?.downloadIconType ? (
        <CommIcon
          icon={{
            type: downloadIcon?.downloadIconType,
            theme: downloadIcon?.downloadIconTheme,
            isIconFont: downloadIcon?.downloadIconIsIconFont,
            fontAddress: previewIcon?.downloadIconFontAddress,
            iconFile: downloadIcon?.iconFile,
            iconFileInfo: downloadIcon?.downloadIconIconFileInfo,
          }}
          $$componentItem={props.$$componentItem}
          getEngineApis={getEngineApis}
          className=""
        />
      ) : (
        <CommIcon
          icon={{
            type: 'download',
            theme: 'outlined',
            isIconFont: false,
          }}
          getEngineApis={getEngineApis}
          $$componentItem={props.$$componentItem}
          className=""
        />
      );
    },
    showRemoveIcon: !(disabled || readOnly) && deleteIcon?.showRemoveIcon,
    removeIcon: deleteIcon?.deleteIconType ? (
      <CommIcon
        icon={{
          type: deleteIcon?.deleteIconType,
          theme: deleteIcon?.deleteIconTheme,
          isIconFont: deleteIcon?.deleteIconIsIconFont,
          fontAddress: deleteIcon?.deleteIconFontAddress,
          iconFile: deleteIcon?.iconFile,
          iconFileInfo: deleteIcon?.deleteIconIconFileInfo,
        }}
        $$componentItem={props.$$componentItem}
        getEngineApis={getEngineApis}
        className=""
      />
    ) : (
      <CommIcon
        icon={{
          type: 'delete',
          theme: 'outlined',
          isIconFont: false,
        }}
        $$componentItem={props.$$componentItem}
        className=""
        getEngineApis={getEngineApis}
      />
    ),
  };

  const [fileList, setFileList] = useState<any[]>();

  // 文件名为全路径时，拆分出实际文件名
  const handleFileName = (_fileName: string) =>
    _fileName ? _fileName.split('//').pop() : _fileName;

  const updateDefaultFileList = (srcList: any) => {
    if (srcList && Array.isArray(srcList)) {
      const defaultList = JSON.parse(JSON.stringify(srcList));
      setFileList(
        defaultList.map((file: any) => {
          const { fileUrl, url, filePathInServer, fileId } = file;
          let effectDownUrl = fileUrl || url;
          if (
            !effectDownUrl &&
            filePathInServer?.match(/^(http:|https:|\/\/)/)
          ) {
            effectDownUrl = filePathInServer;
          }
          return {
            ...file,
            url:
              effectDownUrl || engineApis?.service?.getAppFileUrlById(fileId),
            name: file.fileName,
            uid: `-${file.fileId || file.id || effectDownUrl || file.uid}`, // 添加uid
            status: file?.status || 'done', // 后台已存在文件状态为已完成
          };
        }),
      );
    } else {
      setFileList([]);
    }
  };

  // 监听value值变化
  useEffect(() => {
    updateDefaultFileList(value);
  }, [value]);

  let beforeUploadCounter = 0; // 当前一次选择的待上传文件个数
  let allFilesLength = 0; // 待上传文件个数 + 当前文件列表个数
  let continueUpload = true; // 是否继续上传

  const handleOnChange = (e: any) => {
    beforeUploadCounter = 0;
    if (!continueUpload) {
      return;
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { file, fileList } = e;
      const { percent, status } = file;
      if (onListenUploading) {
        onListenUploading(
          file,
          fileList,
          fileList?.map((file: any) =>
            file?.fileId ? file : file?.response?.resultObject,
          ),
        );
      }
      if (fileList && onFileListChange) {
        onFileListChange(
          fileList,
          fileList?.map((file: any) =>
            file?.fileId ? file : file?.response?.resultObject,
          ),
        );
      }
      // 上传完成的标识
      let flag = true;
      let files = fileList.map((f: any) => {
        // 存在上传中的文件时，视为未完成
        if (
          f.status === 'uploading' ||
          (!(f.response && typeof f.response === 'object') &&
            f.status !== 'done')
        ) {
          flag = false;
        }
        if (f.response && typeof f.response === 'object') {
          const { resultObject, resultCode } = f.response;
          if (resultObject) {
            const {
              fileId,
              filePathInServer = undefined,
              fileUrl = undefined,
              url = undefined,
            } = resultObject;
            const { status } = f;
            let effectDownUrl = fileUrl || url;
            if (
              !effectDownUrl &&
              filePathInServer?.match(/^(http:|https:|\/\/)/)
            ) {
              effectDownUrl = filePathInServer;
            }
            return {
              ...f,
              ...resultObject,
              name: handleFileName(f.name),
              status: +resultCode !== 0 ? 'error' : status,
              url:
                effectDownUrl || engineApis?.service?.getAppFileUrlById(fileId),
            };
          }
        }
        return f;
      });
      // 所有文件上传完成后才触发值回调
      if (flag) {
        // 只设置成功的列表
        files = files.filter((file: any) => {
          const { resultCode, resultMsg } = file?.response || {};
          if (+resultCode !== 0 && resultMsg) {
            message.error(resultMsg);
            return false;
          }
          return true;
        });
        // 结束后才执行值回调
        let fileResponseList = files;
        if (typeof onChange === 'function') {
          fileResponseList = files
            ?.map((file: any) => {
              if (file?.error) {
                message.error(file.error?.message);
                return false;
              }
              if (file?.fileId) {
                const {
                  fileId,
                  fileName = undefined,
                  url = undefined,
                  filePathInServer,
                  fileUrl,
                  name,
                } = file;
                return {
                  filePathInServer,
                  fileUrl,
                  fileId,
                  fileName: fileName || name,
                  url,
                };
              }
              return file;
            })
            .filter((file: any) => file); // 提交文件列表时，过滤掉异常(未上传成功)的文件);
          onChange(fileResponseList);
        }
        if (onFinishUpload && percent === 100 && status === 'done') {
          onFinishUpload(file, fileList, fileResponseList);
        }
        setFileList(files);
      } else {
        setFileList(files);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async (file: any) => {
    beforeUploadCounter = 0;
    continueUpload = true;
    const { fileId } = file;
    const list = (fileList || []).filter((_file) => _file.fileId !== fileId);
    if (onChange) {
      setFileList(list);
      onChange(list);
    }
    if (onFileRemove) {
      onFileRemove(file, list);
    }
  };

  handleRemoveCallback.current = handleRemove;

  const getDownloadName = (suffix: any, file: any) => {
    const suf = suffix || getAfterString(file.name, '.') || '';
    return fileNameEncode
      ? `${createRandomStr(20).toUpperCase()}.${suf}`
      : file.name.replace(/\.\w+$/, `.${suf}`);
  };

  const createDownLink = (data: Blob, downloadName: string) => {
    if (typeof (window?.navigator as any)?.msSaveOrOpenBlob === 'function') {
      // 兼容ie11下载
      (window.navigator as any).msSaveOrOpenBlob(data, downloadName);
    } else {
      const url = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = url; // 获取blob地址
      a.download = downloadName;
      a.click();
      document.body.removeChild(a);
    }
  };

  // 支持图片、pdf直接下载
  const downloadFile = async (file: any) => {
    let downUrl = file.url;

    try {
      // 如果有field 优先通过field拼接
      if (file.fileId) {
        const addWaterMark =
          isWatermark && (!optionalFile || downloadWay === '2');

        downUrl = engineApis?.service?.getAppFileUrlById({
          addWaterMark,
          fileId: file.fileId,
        });
      }
    } catch (error) {
      console.error(error);
    }
    if (onListenDownloading) {
      const res = await onListenDownloading(file);
      if (String(res) === 'false') {
        return;
      }
      if (typeof res === 'string' && res !== 'true') {
        // 退出事件中返回值为非空和非true的字符串时，都是视为下载地址
        downUrl = res;
      }
    }
    // 是否直接url下载
    if (window.XMLHttpRequest) {
      setDownloadProVisible({ ...downloadProVisible, [file.fileId]: true });
      const xhr = new XMLHttpRequest(); // ActiveXObject只存在于IE7及以下，无需兼容
      xhr.open('GET', downUrl, true);
      xhr.timeout = uploadTimeout; // 设置超时时间（秒）
      xhr.responseType = 'blob'; // 设置接受类型
      xhr.setRequestHeader('Content-Type', 'application/json'); // 设置请求头参数
      // xhr.setRequestHeader('X-B-TARGET-ID', pageId);
      // xhr.setRequestHeader('X-B-AUTH', '1');
      // xhr.setRequestHeader('APP-ID', appId);
      xhr.withCredentials = true;
      if (headers) {
        Object.keys(headers || {}).forEach((headerKey: string) => {
          xhr.setRequestHeader(headerKey, headers[headerKey]);
        });
      }
      xhr.onload = () => {
        // @ts-ignore
        const suffix = getAfterString(
          xhr.getResponseHeader('Content-Disposition'),
          '.',
        );
        const data = xhr.response; // 获取响应体数据
        createDownLink(data, getDownloadName(suffix, file));
        setDownloadProVisible({ ...downloadProVisible, [file.fileId]: false });
      };
      xhr.ontimeout = () => {
        setDownloadProVisible({ ...downloadProVisible, [file.fileId]: false });
        xhr.abort(); // 取消请求
      };
      // 下载进度条
      xhr.onprogress = (event: any) => {
        if (event.lengthComputable) {
          progressRef.current?.[file.fileId]?.setPercent(
            Math.round((event.loaded * 100) / event.total),
          );
        }
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

  const previewFile = async (fileId: any, data: any) => {
    const lxDefaultPreviewUrl = (id?: string) => {
      let url = '#/_preview';
      // 适配0代码文件预览
      if (window.location.pathname.indexOf('ncap-web') > -1) {
        url = `../#/_preview?appId=${appId}&pageId=${pageId}&fileId=${id}`;
      } else if (id) {
        url += `?fileId=${id}`;
      }
      return url;
    };
    if (typeof engineApis?.BannerModal?.open === 'function') {
      let fileIndex: number = 0;
      const fileData = fileList?.map((f, i) => {
        // 第三方系统上传接口可能没有fileId字段，保留一个previewUrl字段作为可预览
        if (
          f.fileId === fileId ||
          (f.fileId === undefined && data.previewUrl === f.previewUrl)
        ) {
          fileIndex = i;
        }
        return {
          fileId: f.fileId,
          appId: appId || window.appId,
          pageId,
          downloadClick: handleDownload,
          showDownLoad: !!downloadIcon?.showDownloadIcon,
          showDelete: !commonConfig?.disabled && !!deleteIcon?.deleteIconType,
          deleteClick: (f: any) => {
            if (typeof handleRemoveCallback?.current === 'function') {
              handleRemoveCallback?.current(f);
            }
          },
          file: f,
        };
      });
      engineApis.BannerModal.open({
        fileIndex,
        fileList: fileData,
        viewMode,
        modalWidth,
        modalHeight,
        appId,
        localPreviewUrl: lxDefaultPreviewUrl(),
        pageId,
      });
    } else {
      const link = document.createElement('a');
      link.href = lxDefaultPreviewUrl(fileId);
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }
  };

  const handlePreview = async (file: any) => {
    const { fileId = '-1' } = file;
    if (previewIcon?.showPreviewIcon) {
      previewFile(fileId, file);
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

  const getFileType = (fileName: string) => {
    const startIndex = fileName.lastIndexOf('.');
    if (startIndex !== -1)
      return fileName.substring(startIndex + 1, fileName.length).toLowerCase();
    return '';
  };

  const acceptData = () => {
    const { accept, acceptExtension } = uploadAccepType || {};
    let targetacceptExtension = '';
    if (acceptExtension) {
      const extensionList = acceptExtension.split(',');
      if (extensionList && extensionList.length > 0) {
        targetacceptExtension = extensionList
          .map((item: string) => {
            if (item.startsWith('.')) {
              return item;
            }
            return `.${item}`;
          })
          .join(',');
      }
    }
    let combinedAcceptType;
    if (accept && targetacceptExtension) {
      combinedAcceptType = `${accept},${targetacceptExtension}`;
    } else if (accept) {
      combinedAcceptType = accept;
    } else if (targetacceptExtension) {
      combinedAcceptType = targetacceptExtension;
    }
    return combinedAcceptType;
  };

  const handleBeforeUpload = (file: any) => {
    continueUpload = true;
    if (readOnly) {
      message.warn(getLocale?.('Upload.readonly'));
      return Upload.LIST_IGNORE;
    }
    if (singleFileMinSize && convertToBytes(singleFileMinSize) > file.size) {
      message.error(getLocale?.('Upload.minSize', { singleFileMinSize }));
      return Upload.LIST_IGNORE;
    }
    if (singleFileMaxSize && convertToBytes(singleFileMaxSize) < file.size) {
      message.error(getLocale?.('Upload.maxSize', { singleFileMaxSize }));
      return Upload.LIST_IGNORE;
    }
    const fileType = getFileType(file.name);
    const combinedAcceptType = acceptData();
    // 后缀名不区分大小写
    if (
      combinedAcceptType &&
      fileType &&
      !combinedAcceptType?.toLowerCase()?.split(',')?.includes(`.${fileType}`)
    ) {
      message.error(
        getLocale?.('Upload.format', { acceptType: combinedAcceptType }),
      );
      return Upload.LIST_IGNORE;
    }
    beforeUploadCounter += 1;
    allFilesLength = beforeUploadCounter + (fileList || []).length;
    continueUpload = allFilesLength <= numberLimit;
    if ((fileList || []).length >= numberLimit) {
      message.warn(getLocale?.('Upload.maxNum', { numberLimit }));
      return Upload.LIST_IGNORE;
    }
    if (allFilesLength > numberLimit) {
      message.warn(getLocale?.('Upload.limit', { numberLimit }));
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const commonConfig: any = {
    multiple: numberLimit > 1,
    listType: uploadStyle === 'picture-card' ? 'picture-card' : listType,
    disabled,
    action,
    accept: acceptData(),
    beforeUpload: (file: any) => handleBeforeUpload(file),
    fileList,
    onRemove: (file: any) => handleRemove(file),
    onChange: (e: any) => handleOnChange(e),
    showUploadList: uploadList,
    onPreview: (file: any) => handlePreview(file),
    onDownload: (file: any) => handleDownload(file),
    headers: {
      'X-B-TARGET-ID': pageId,
      'X-B-AUTH': 1,
      'APP-ID': appId,
      ...(headers || {}),
    },
    withCredentials: true,
    itemRender: (
      originNode: React.ReactElement,
      file: any,
      fileList: any[],
      actions: any,
    ) => (
      <UploadItem
        originNode={originNode}
        file={file}
        fileList={fileList}
        actions={actions}
        showUploadList={uploadList}
        onFileNameClick={onFileNameClick}
        listType={
          (uploadStyle === 'picture-card' ? 'picture-card' : listType) as any
        }
      />
    ),
  };

  if (readOnly && fileList && fileList?.length <= 0) {
    return renderReadOnly('--');
  }

  const renderUploadIcon = () => {
    if (uploadStyle === 'picture-card') {
      const hidden = fileList?.length === numberLimit;
      return hidden ? null : (
        <>
          <CommIcon
            icon={icon}
            placeholder={<PlusOutlined rev="" />}
            className=""
            getEngineApis={getEngineApis}
            $$componentItem={props.$$componentItem}
          />
          <div>{uploadText || '点击上传'}</div>
        </>
      );
    }

    return (
      <Button>
        <CommIcon
          icon={icon}
          placeholder={<UploadOutlined rev="" />}
          className=""
          getEngineApis={getEngineApis}
          $$componentItem={props.$$componentItem}
        />
        {uploadText || '点击上传'}
      </Button>
    );
  };

  // 覆写上传控件外层容器，添加点击拦截
  const coverLayout = (props: any) => {
    const events = props.disabled
      ? {}
      : {
          onClick:
            props.openFileDialogOnClick !== false
              ? async (
                  e:
                    | React.MouseEvent<HTMLDivElement>
                    | React.KeyboardEvent<HTMLDivElement>,
                ) => {
                  let checkResult: any;

                  const runNext = () => {
                    if (checkResult !== 0) {
                      props.onClick(e);
                    }
                  };

                  if (onCheckUpload) {
                    // 某些浏览器(Safari)可能出于安全限制，在跳出事件循环后，不再触发dom事件，此处通过添加setTimeout宏任务让当前事件循环保持
                    const loopWait = () => {
                      setTimeout(() => {
                        if (typeof checkResult === 'undefined') {
                          loopWait();
                        } else {
                          runNext();
                        }
                      }, 10);
                    };
                    loopWait();
                    checkResult = (await onCheckUpload()) ?? 1; // 避免onCheckUpload返回结果是undefined 导致loopWait的死循环，checkResult必须有一个非undefined的值
                  } else {
                    runNext();
                  }
                }
              : () => {},
        };
    return <div {...props} {...events} />;
  };

  // @ts-ignore
  return (
    <>
      {uploadStyle === 'draggable' ? (
        // @ts-ignore
        <div className={className}>
          <Dragger {...restProps} {...commonConfig} component={coverLayout}>
            <p className="ant-upload-drag-icon" ref={uploadDivRef}>
              {/* TODO: 占位图标？？ */}
              <CommIcon
                icon={icon}
                placeholder={
                  <CloudUploadOutlined style={{ fontSize: 45 }} rev="" />
                }
                getEngineApis={getEngineApis}
                $$componentItem={props.$$componentItem}
                className=""
              />
            </p>
            <p className="ant-upload-text">
              {uploadText || getLocale('Upload.text')}
            </p>
          </Dragger>
        </div>
      ) : (
        <div className={className}>
          {/* @ts-ignore */}
          <Upload // TODO: disable情况下需要添加禁用鼠标指针,待添加
            {...restProps}
            {...commonConfig}
            component={coverLayout}
          >
            {readOnly ? null : renderUploadIcon()}
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
        <Radio.Group
          onChange={(e) => setdDownloadWay(e.target.value)}
          value={downloadWay}
        >
          <Radio value="1">{getLocale?.('Upload.origin')}</Radio>
          <Radio value="2">{getLocale?.('Upload.waterMark')}</Radio>
        </Radio.Group>
      </Modal>
    </>
  );
});

export interface MyStdUploadProps {
  value?: any;
  visible?: boolean;
  onChange?: (e: any) => void;
  onValueRelease?: (value: any) => void;
  getCompPropMapState?: (id: string, type: string) => any;
  compId?: string;
  name?: string;
  fieldName: string;
  required?: any;
  hidden?: boolean;
  regexp?: any;
  message?: any;
  label?: any;
  labelCol?: any;
  wrapperCol?: any;
  selfSpan?: number;
  colSpan?: number;
  style?: React.CSSProperties;
  fileName?: string;
  action?: string;
  uploadProps?: any;
  multiple?: boolean;
  singleFileMode?: any;
  showWrapperContainer: boolean;
  wrapperContainer: any;
  titleTip?: any;
  tipIcon?: any;
  tipLocation?: any;
  tipContent?: any;
  tipPlacement?: any;
  colon?: boolean;
  headers?: any;
  isFormChild?: boolean | undefined;
  rules?: any[];
  tipSize?: string; // 文字提示
  tipWidth?: string; // 提示自定义的宽度
  tipHeight?: string; // 提示自定义的高度
  columns?: any; // 选择服务
}

const STDUPLOAD_WRAPPER_CLASSNAME = 'ued-stdupload-wrap';

const StdUpload = LingxiForwardRef<any, MyStdUploadProps>((props, ref) => {
  const {
    value: originValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible = true,
    onChange,
    onValueRelease,
    getCompPropMapState,
    compId,
    name,
    fieldName: rawFieldName,
    regexp,
    label,
    labelCol,
    wrapperCol,
    hidden,
    selfSpan,
    colSpan,
    fileName,
    action,
    multiple,
    showWrapperContainer,
    wrapperContainer: WrapperContainer,
    titleTip,
    tipIcon,
    tipLocation,
    tipContent,
    tipPlacement,
    isFormChild,
    tipSize,
    tipWidth,
    tipHeight,
    ...restProps
  } = props;

  const [uploadProps, setUploadProps] = useListenProps(props.uploadProps);

  const { formFieldsRef, required, readOnly, disabled, finalRules } =
    useCommonImperativeHandle(ref, props, {
      clearValue: null,
      setUploadProps: (_props: any) => {
        setUploadProps(_props);
      },
    });

  const formContext = useForm();

  const transValue = (val: any) => {
    let newValue = null;
    if (typeof val === 'string') {
      try {
        newValue = JSON.parse(val);
      } catch (error) {
        console.log(error);
      }
      return newValue;
    }
    if (typeof val === 'object') {
      newValue = val;
    }
    return val;
  };

  // FIX: 兼容旧逻辑 通过表单设置值时表单项的值需要预处理，否则会导致值和预想的值不一致
  if (formContext.inForm) {
    formContext.preproccessSetFormValues(props.fieldName, (v) => transValue(v));
  }

  const extraParamsData = useMemo(() => {
    const data = {
      ...(uploadProps?.data || {}),
    };
    if (restProps?.columns) {
      const { _source, _serviceId } = restProps?.columns || {};
      switch (_source) {
        case 'std': {
          data['ORCHESTRATION.appId'] = props.$$componentItem.appId;
          data['ORCHESTRATION.serviceVersionId'] = _serviceId;
          break;
        }
        default:
          break;
      }
    }
    return data;
  }, [uploadProps?.data, restProps?.columns, props?.$$componentItem?.appId]);

  const extraProps = useMemo(() => {
    const { method } = uploadProps || {};
    const extra: any = {
      name: fileName,
      method,
      data: extraParamsData,
      // defaultFileList,
    };
    if (action) {
      extra.action = action;
    }
    return extra;
  }, [fileName, uploadProps, action, extraParamsData]);

  const value = useMemo(() => {
    return transValue(originValue);
  }, [originValue]);

  return (
    <FormFields
      {...getFieldsProps(props)}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      ref={formFieldsRef}
      wrapperClassName={`${STDUPLOAD_WRAPPER_CLASSNAME} ${
        readOnly ? `${STDUPLOAD_WRAPPER_CLASSNAME}-readOnly` : ''
      }`}
      rules={finalRules}
      value={value}
      ignoreReadOnlyFlag
    >
      <FormUpload
        value={value}
        {...restProps}
        {...extraProps}
        readOnly={readOnly}
        disabled={disabled}
        appId={props.$$componentItem.appId}
        pageId={props.$$componentItem.pageId}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      />
    </FormFields>
  );
});

export default StdUpload;
