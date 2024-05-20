import api from '@/services/api/file';
import { RotateLeftOutlined, RotateRightOutlined, DownOutlined } from '@ant-design/icons';
import { Cascader, message, Spin } from 'antd';
import classnames from 'classnames';
import pageIcon from '../../assets/pageicon';
import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
// @ts-ignore
import { Page, Document, pdfjs } from 'react-pdf';
// @ts-ignore
import pdfworker from 'react-pdf/dist/pdf.worker.entry';
import './index.less';
// @ts-ignore
import { useCreation, addFileUrlSign } from '@/utils/engine-utils';

import security from "@/utils/Security";

import { LocaleFunction } from '@lingxiteam/types';
import { LOCAL_PREVIEW, CAN_SCALE, parseFileInfo, PREVIEW_MODE, isUrlFormat } from './utils';

interface PreviewFileProps {
  appId: string;
  fileIdOrUrl: string;
  pageId: string;
  file?: any;
  showDownLoad?: boolean;
  downloadClick?: (file: any) => void;
  showDelete?: boolean;
  deleteClick?: (url: string) => void;
  windowWidth?: number,
  getLocale: LocaleFunction;
  language: string;
}

type fileItem = {
  fileId?: string;
  name?: string;
  filePath?: string;
  fullFilePath?: string[];
  [key: string]: any;
};

pdfjs.GlobalWorkerOptions.workerSrc = pdfworker;
const prefix = 'lcdp-previewFile';
const PreviewFile: React.FC<PreviewFileProps> = (props) => {
  const {
    fileIdOrUrl,
    pageId,
    file,
    downloadClick,
    showDownLoad,
    showDelete,
    deleteClick,
    getLocale,
    language,
  } = props;
  const { appId } = props;
  // const api = getApis({ appId, language, pageId });
  const [fileDataMap, setFileDataMap] = useState<any>({});
  const [loading, setLoading] = useState(false);
  // 预览失败信息
  const [resultInfo, setResultInfo] = useState<any>();
  const [windowWidth, setWindowWidth] = useState<number>(props?.windowWidth || window.innerWidth);
  const tip = getLocale('notSupportPreview', '该文件不支持当前窗口预览');
  const timeId = useRef<any>(null);
  const [curPreviewFile, setCurPreviewFile] = useState<fileItem>();
  // 当前预览文件信息
  const { currentFileData, fileData } = useMemo(() => {
    // 当前预览文件ID，ZIP预览时会切换当前预览的文件
    const { fileId } = curPreviewFile || {};
    let curData = fileId ? fileDataMap[fileId] : undefined;
    if (curData?.previewMode === PREVIEW_MODE.ZIP && curData.zipChildFileId) {
      curData = fileDataMap[curData.zipChildFileId] || curData;
    }
    // 当前打开文件的Id
    const curFileId = fileIdOrUrl || file?.fileId;
    return {
      currentFileData: curData,
      fileData: fileDataMap[curFileId],
    };
  }, [file, fileIdOrUrl, fileDataMap, curPreviewFile]);

  // 是否支持放大缩小、旋转、切换页面
  const pageSwitch = useMemo(() => CAN_SCALE.includes(currentFileData?.previewMode), [currentFileData?.previewMode]);

  const fileCacheMap = useCreation(() => fileDataMap, [fileDataMap]);

  const { pageNum, setPageNum, scale, setScale, rotation, setRotation, updateCurrentFileData } = useCreation(() => {
    const updateData = (key: string, newVal: any | ((preVal: any) => any)) => {
      const id = currentFileData?.fileId;
      setFileDataMap((pre: any) => ({
        ...pre,
        [id]: {
          ...(pre[id] || {}),
          [key]: typeof newVal === 'function' ? newVal(pre[id]?.[key]) : newVal,
        },
      }));
    };
    return ({
      // pdf/ppt/doc等文件会转成多张图片，切换文件页码
      pageNum: currentFileData?.pageNum || 1,
      setPageNum: (newVal: any) => updateData('pageNum', newVal || 1),
      // 放大缩小比例
      scale: currentFileData?.scale || 0.7,
      setScale: (newVal: any) => updateData('scale', newVal || 0.7),
      rotation: currentFileData?.rotation,
      setRotation: (angle?: number) => updateData('rotation', (rotation: any) => ((rotation || 0) + angle) % 360),
      updateCurrentFileData: updateData,
    });
  }, [currentFileData]);

  const throttle = (fn: any) => (v?: any) => {
    if (!timeId?.current) {
      timeId.current = setTimeout(() => {
        fn(v);
        clearTimeout(timeId.current);
        timeId.current = null;
      }, 500);
    }
  };

  const handleOnResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const onResizeThrottle = useCallback(() => {
    return throttle(handleOnResize)();
  }, []);

  useEffect(() => {
    const resize = () => {
      onResizeThrottle();
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (timeId.current) {
        clearTimeout(timeId.current);
      }
    };
  }, []);

  const getFilePreviewUrl = (id: string) => /^\d+$/.test(id) ? api.previewFileById(id) : id;

  // 签名每次会增加一个时间戳，需要缓存url
  const filePreviewUrl = useMemo(() => {
    let url = currentFileData?.serverFileUrl || currentFileData?.data?.dataUrl || currentFileData?.data?.url;

    if (url) return url;
    if (currentFileData?.serverFileId) {
      url = getFilePreviewUrl(currentFileData?.serverFileId);
      currentFileData.serverFileUrl = url;
    } else {
      url = getFilePreviewUrl(currentFileData?.fileId);
    }
    return url;
  },
    [currentFileData?.fileId]);

  // 下载当前文件
  const mydownloadClick = () => {
    if (file) {
      downloadClick && downloadClick(file);
    }
  };

  const renderIMG = (src: string) => {
    return (
      <img
        width={windowWidth * 0.5 * scale}
        src={src}
        alt=""
      />
    );
  };

  // 根据下载接口获取文件，判断文件类型是否可以预览
  const getFileData = (fileId: string): Promise<any> => {
    const url = isUrlFormat(fileId) ? fileId : getFilePreviewUrl(fileId);
    if (url) {
      const xhr = new XMLHttpRequest(); // ActiveXObject只存在于IE7及以下，无需兼容
      xhr.open('GET', url);
      xhr.responseType = 'blob'; // 设置接受类型

      const headers: any = {
        'X-B-TARGET-ID': pageId,
        'X-B-AUTH': '1',
        'APP-ID': props?.appId,
      };
      Object.keys(headers).forEach(header => {
        xhr.setRequestHeader(header, headers[header]); // 设置请求头参数
      });
      xhr.setRequestHeader('X-SIGN', security.httpEncryption.createHttpSignStr(url, { method: 'GET', headers, body: '', search: '' }));
      xhr.withCredentials = true;
      return new Promise((resolve, reject) => {
        xhr.onload = () => {
          const data = xhr.response; // 获取响应体数据
          if (xhr.status === 200) {
            const position = xhr.getResponseHeader('Content-Disposition');
            const filename = position?.match(/filename\*?=[^;]*/)?.[0];
            if (filename) {
              data.name = filename;
            }
            data.url = url;
            try {
              const reader = new FileReader();
              reader.addEventListener('load', () => {
                data.dataUrl = reader.result;
                resolve(data);
              });
              reader.readAsDataURL(data);
            } catch (e) {
              resolve(data);
            }
          }
        };
        xhr.onerror = () => {
          const previewUrl = new URL(url);
          if (previewUrl.origin !== window.location.origin) {
            // 非同源的根据url后缀判断
            resolve({
              name: url,
              cors: true,
            });
          }
          setResultInfo(tip);
          reject();
        };
        xhr.onloadend = () => {
          if (xhr.status === 404) {
            setResultInfo(getLocale('fileNotExist', '文件资源不存在'));
            reject();
          }
        };
        xhr.send();
      });
    }
    return Promise.resolve(null);
  };

  // 获取zip压缩文件目录
  const getZipFileDir = async (fileItem: fileItem) => {
    try {
      const id = fileItem?.fileId;
      if (!id) return undefined;
      setLoading(true);
      const zipDir = await api.getZipFileNode({ sourceFileId: id });
      return {
        ...fileItem,
        zipDir,
      };
    } catch (e) {
      return undefined;
    } finally {
      setLoading(false);
    }
  };

  // 校验是否为指定格式
  // 部分格式后端不支持预览转换，由前端处理
  const checkPreview = async (fileItem: fileItem) => {
    let fileInfo: fileItem = fileItem;
    // 切换文件时优先从缓存取，若无则重新加载
    const fileData = fileCacheMap[fileInfo?.fileId!];
    let fileBlob: File & {
      cors: boolean,
      name: string;
    } = fileData?.data;
    if (fileInfo?.fileId && !fileData) {
      try {
        fileBlob = await getFileData(fileInfo?.fileId);
      } catch (error) {
        console.error('预览文件时候错误error', error);
      }
    }
    let target = LOCAL_PREVIEW.find((val) => {
      if (val.suffix?.test(fileInfo?.name || fileBlob?.name || fileInfo?.fileId || '') || val.mimeTypeReg?.test(fileBlob?.type || '')) {
        fileInfo.previewMode = val.previewMode;
        if (fileBlob?.cors && !val.cors) {
          // 预览跨域文件地址且无法通过平台定制方式预览的，通过iframe展示
          fileInfo.previewMode = PREVIEW_MODE.IFRAME;
        }
        return true;
      }
      return false;
    });
    if (target?.previewMode === PREVIEW_MODE.TXT && fileBlob instanceof Blob) {
      if (fileBlob?.text) {
        // 兼容ie11
        fileInfo.content = await fileBlob.text();
      } else {
        target = undefined;
      }
    }
    if (target?.previewMode === PREVIEW_MODE.ZIP && !fileData) {
      // ZIP 预览需要特殊处理,先获取zip文件的目录结构，在分层进行预览
      const zipInfo = await getZipFileDir(fileInfo);
      if (!zipInfo) return undefined;
      fileInfo = zipInfo;
    }
    if (target && fileInfo) {
      fileInfo.data = fileBlob;
      setFileDataMap((pre: any) => ({
        ...pre,
        [fileInfo?.fileId!]: {
          ...(pre[fileInfo?.fileId!] || {}),
          ...fileInfo,
        },
      }));
    }
    return target;
  };

  const getFileInfo = async (fileItem: fileItem) => {
    setLoading(true);
    try {
      const target = await checkPreview({ fileId: fileItem.fileId, name: fileItem?.name });
      if (target) {
        setLoading(false);
        return;
      }
      await getFile(fileItem);
    } finally {
      setLoading(false);
    }
  };

  const viewFile = async (fileItem: fileItem, viewSource?: string) => {
    if (!fileItem) return undefined;
    switch (viewSource) {
      // 来源压缩包子文件预览处理
      case PREVIEW_MODE.ZIP: {
        const { zipSourceFileId, filePath } = fileItem || {};
        // 预览zip 子文件
        const fileInfo = await api.viewZipFile({ filePath, sourceFileId: zipSourceFileId });
        return fileInfo;
      }
      default: {
        // 常规文件预览处理
        const id = fileItem.fileId;
        if (!id) return undefined;
        let fileInfo = fileCacheMap[id];
        const isUrl = isUrlFormat(id);
        // 当传入的fileIdOrUrl是合法的网络地址时，则视为外部地址，所有不支持浏览器直接预览
        if (!fileInfo && !isUrl) {
          fileInfo = await api.viewFile({ fileId: id, appId, pageId });
        }
        return fileInfo;
      }
    }
  };

  // 根据平台预览接口获取转换后的文件格式
  const getFile = async (fileItem: fileItem, viewSource?: string) => {
    setLoading(true);
    let fileInfo: any = null;
    try {
      fileInfo = await viewFile(fileItem, viewSource);
      if (fileInfo && fileInfo?.resultCode !== '-2') {
        const id = fileItem?.fileId;
        if (id) {
          // 根据预览接口返回参数补充文件参数
          fileInfo = parseFileInfo(fileItem, fileInfo);
          setFileDataMap((pre: any) => ({
            ...pre,
            [id]: {
              // 切换文件的时候使用上一次的旋转
              rotation: pre?.[fileInfo?.fileId]?.rotation,
              ...fileInfo,
            },
          }));
        }
      } else if (!fileInfo?.previewMode) {
        setResultInfo(tip);
      }
    } catch (e: any) {
      const { resultCode } = e;
      if (resultCode === '-2') {
        if (!fileInfo?.previewMode) {
          setResultInfo(tip);
        }
      } else {
        setResultInfo(e.resultMsg);
      }
    } finally {
      setLoading(false);
    }
    return fileInfo;
  };

  const initFile = async (curFile: fileItem) => {
    setCurPreviewFile(curFile);
    if (curFile?.fileId) {
      await getFileInfo(curFile);
    }
  };

  useEffect(() => {
    const curFile: fileItem = {
      ...(file || {}),
      fileId: file?.fileId || fileIdOrUrl,
    };
    initFile(curFile);
  }, [file, fileIdOrUrl]);

  const renderPPT = () => {
    return (
      <div className="preview_content ppt">
        {renderIMG(getFilePreviewUrl(currentFileData?.fileIdList[pageNum - 1]))}
      </div>
    );
  };
  const renderContent = () => (
    <div className="preview_content txt">
      <div className="code">{currentFileData?.content}</div>
    </div>
  );

  const renderPDF = (fileUrl: string) => {
    return (
      <div className="pdf-container">
        <Document
          file={fileUrl}
          loading={
            <div className="pdf-loading">
              <Spin size="large" />
            </div>
          }
          options={{
            cMapUrl: 'cmaps/',
            cMapPacked: true,
          }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNum}
            width={windowWidth * 0.5}
            scale={scale}
            loading={
              <div className="pdf-loading">
                <Spin size="large" />
              </div>
            }
          />
        </Document>
      </div>
    );
  };

  const render = () => {
    switch (currentFileData?.previewMode) {
      case PREVIEW_MODE.IMG:
        return renderIMG(filePreviewUrl);
      case PREVIEW_MODE.PDF:
        return renderPDF(filePreviewUrl);
      case PREVIEW_MODE.HTML:
        // eslint-disable-next-line react/no-danger
        return (
          <div className="preview_content">
            <iframe
              ref={(r) => {
                if (r?.contentDocument?.write) {
                  // r.contentDocument?.write(addFileUrlSign(currentFileData?.content));
                  // r.contentDocument?.close?.();
                  // contentDocument.write 会直接往内存里面写，如果数据量较大会导致浏览器内存溢出，用其他方法修改下
                  const content = addFileUrlSign(currentFileData?.content);
                  const blob = new Blob([content], { type: 'text/html' });
                  const url = URL.createObjectURL(blob);
                  r.src = url;
                }
              }}
              title={getLocale('preview', '预览')}
              style={{
                backgroundColor: '#fff',
                overflow: 'auto',
                height: '80vh',
                width: '50vw',
              }}
            />
          </div>
        );
      case PREVIEW_MODE.VIDEO:
        return (
          <div className="preview_content">
            <video
              src={getFilePreviewUrl(currentFileData?.fileId)}
              loop
              height="100%"
              width={windowWidth * 0.8}
              autoPlay={!loading}
              muted
            />
          </div>
        );
      case PREVIEW_MODE.PPT:
        return renderPPT();
      case PREVIEW_MODE.TXT:
        return renderContent();
      case PREVIEW_MODE.IFRAME:
        return (
          <div className="preview_content">
            <iframe
              src={getFilePreviewUrl(currentFileData?.fileId)}
              key={currentFileData?.fileId}
              title={currentFileData?.name}
              className="iframe"
            />
          </div>);
      default: {
        let info = resultInfo;
        let tips = '';
        if (PREVIEW_MODE.ZIP === currentFileData?.previewMode) {
          info = getLocale('zipPreviewTitle', '当前预览内容为压缩包，不支持直接预览');
          tips = getLocale('zipPreviewTips', '请在下方选择压缩包内文件进行预览');
        }
        if (info) {
          return (
            <div className="error">
              <div className="error-title">{info}</div>
              {tips && <div className={`${prefix}-error-tips`}>{tips}</div>}
            </div>
          );
        }
        return null;
      }
    }
  };

  const onDocumentLoadSuccess = (params: any) => {
    const { numPages } = params || {};
    updateCurrentFileData('totalPage', numPages);
  };

  // 预览zip包里面的文件
  const handlePreviewZipFile = async (val: any[], selectOptions: any[]) => {
    if (val) {
      const filePath = [...val].pop();
      // 防止多次点击同一个文件
      if (filePath === currentFileData?.fullFilePath) return;
      const zipSourceFileId = file?.id || fileIdOrUrl;
      const fileItem: fileItem = {
        filePath,
        fullFilePath: val,
        fullFilePathName: selectOptions.map(opt => (opt.fileName)),
        zipSourceFileId,
        // zip包内的文件部分后端转换后，不一定能返回fileId，根据zip的fileId和filePath临时生成一个用来渲染
        fileId: `${zipSourceFileId}_${filePath}`,
      };
      let fileInfo = fileItem;
      try {
        // 预览当前文件
        fileInfo = await getFile(fileItem, PREVIEW_MODE.ZIP);
      } catch (e) {
        //
      }
      setFileDataMap((pre: any) => ({
        ...pre,
        [zipSourceFileId]: {
          ...(pre[zipSourceFileId] || {}),
          zipChildFileId: fileInfo?.fileId,
        },
      }));
      setCurPreviewFile(fileInfo);
    }
  };

  const renderDisBtn = () => {
    return (
      <div className="pdf-disbtn" onClick={(e) => e.stopPropagation()}>
        {fileData?.previewMode === PREVIEW_MODE.ZIP && (
          <Cascader
            placement="topLeft"
            onChange={handlePreviewZipFile}
            fieldNames={{
              label: 'fileName',
              value: 'filePath',
              children: 'children',
            }}
            value={currentFileData?.fullFilePath}
            dropdownClassName={`${prefix}-dropdown`}
            options={fileData?.zipDir ? [fileData.zipDir] : []}
          >
            <div className={classnames(`${prefix}-zip-select`, `${prefix}-group`)}>
              <span className={`${prefix}-zip-select-label`}>
                {currentFileData?.fileId !== fileData?.fileId && currentFileData?.fullFilePathName ?
                  currentFileData?.fullFilePathName?.join('/') : getLocale('zipPreviewPlaceholder', '请选择包内文件进行预览')}
              </span>
              <DownOutlined rev="" />
            </div>
          </Cascader>
        )}
        {pageSwitch && (
          <>
            <div className={`${prefix}-group`}>
              <div
                className="pdf-bt"
                onClick={() => {
                  if (pageNum > 1) setPageNum(pageNum - 1);
                }}
              >
                <img src={pageIcon.leftIcon} alt="" />
              </div>
              <div className="pdf-bt-text">{`${pageNum}/${currentFileData?.totalPage || 1}`}</div>
              <div
                className="pdf-bt"
                onClick={() => {
                  if (pageNum < (currentFileData?.totalPage || 1)) setPageNum(pageNum + 1);
                }}
              >
                <img src={pageIcon.rightIcon} alt="" />
              </div>
            </div>
            <div className={`${prefix}-group`}>
              <div
                className="pdf-bt"
                onClick={() => {
                  if (scale <= 0.1) {
                    message.info(getLocale('scaleMin'));
                    return;
                  }
                  const newScale = (scale * 10 - 0.1 * 10) / 10;
                  setScale(newScale);
                }}
              >
                <img src={pageIcon.zoomOutIcon} alt="" />
              </div>
              <div className="pdf-bt-text">{`${Math.round(scale * 100)}%`}</div>
              <div
                className="pdf-bt"
                onClick={() => {
                  if (scale >= 2) {
                    message.info(getLocale('scaleMax'));
                    return;
                  }
                  const newScale = (scale * 10 + 0.1 * 10) / 10;
                  setScale(newScale);
                }}
              >
                <img src={pageIcon.zoomInIcon} alt="" />
              </div>
            </div>
            <div className={`${prefix}-group`}>
              <div
                className="pdf-bt"
                onClick={() => {
                  setRotation(-90);
                }}
              >
                <RotateLeftOutlined rev="" />
              </div>
              <div
                className="pdf-bt"
                onClick={() => {
                  setRotation(90);
                }}
              >
                <RotateRightOutlined rev="" />
              </div>
            </div>
          </>
        )}
        {(showDownLoad || showDelete) && (
          <div className={`${prefix}-group`}>
            {showDownLoad && (
              <div className="pdf-bt" onClick={mydownloadClick}>
                <img src={pageIcon.downloadIcon} alt="" />
              </div>
            )}
            {showDelete && (
              <div
                className="pdf-bt"
                onClick={() => {
                  if (typeof deleteClick === 'function') {
                    deleteClick(file);
                  }
                }}
              >
                <img src={pageIcon.deleteIcon} alt="" />
              </div>
            )}
          </div>)}
      </div>);
  };


  return (
    <div
      className={classnames(`${prefix}-wrap`, {
        [`${prefix}-wrapPic`]: currentFileData?.previewMode === PREVIEW_MODE.IMG || loading,
      })}
    >
      <Spin size="large" spinning={loading} />
      <div
        className="content"
        onClick={(e) => e.stopPropagation()}
        style={currentFileData?.previewMode ? {
          transform: `rotate(${rotation || 0}deg)`,
        } : undefined}
      >
        {!loading && render()}
      </div>
      {renderDisBtn()}
    </div>
  );
};

PreviewFile.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  getLocale: (_l, t) => t ?? '',
};

export default PreviewFile;
