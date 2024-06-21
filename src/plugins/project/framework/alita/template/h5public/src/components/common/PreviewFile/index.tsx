import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
// @ts-ignore
import { Document, Page, pdfjs } from 'react-pdf';
// @ts-ignore
import { ImageViewer, SpinLoading } from 'antd-mobile-5';
import classnames from 'classnames';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
// import { getAppInst } from '@lingxiteam/engine-platform';
import { api } from '@/services/api';
import { addFileUrlSign } from '@/utils/engine-utils';
import { messageApi } from '@/utils/messageApi';
import security from '@/utils/Security';
import { LocaleFunction } from '@lingxiteam/types';
import DocViewer from '../DocViewer';
import './index.less';

interface PreviewFileProps {
  fileId: string;
  isEnableWaterMark?: boolean;
  file?: any;
  pdfInfo: any;
  onClose?: () => void;
  onLoaded?: (loaded: boolean) => void;
  getLocale: LocaleFunction;
  language: string;
}

const prefixCls = 'lcdp-preview';

// 部分格式后端可能不支持预览，或者本地可以直接预览的，不调用查询接口，直接转换预览
const LOCAL_PREVIEW = [
  {
    previewMode: 'VIDIO',
    mimeTypeReg: /^video\/(mp4|webm|ogg|x-ms-wmv|quicktime)$/i,
    suffix: /\.(mp4|mov)$/i,
    // 平台定制预览是否支持跨域地址
    cors: true,
  },
  {
    previewMode: 'IMG',
    mimeTypeReg: /^image\/(bmp|gif|jpeg|jpg|png|svg\+xml|tiff|webp|x-icon)$/i,
    suffix: /\.(jpg|jpeg|png|svg|heic|ico|bmp|tiff|tif)$/i,
    cors: true,
  },
  {
    previewMode: 'PDF',
    mimeTypeReg: /^application\/pdf$/i,
    suffix: /\.pdf$/i,
  },
  {
    previewMode: 'TXT',
    mimeTypeReg:
      /^(application|text)\/(json|javascript|x-javascript|plain|x-sh)$/i,
    suffix: /\.(less|scss|lock|ts|txt|js|jsx)$/i,
  },
  // {
  //   previewMode: 'HEIC',
  //   // mimeTypeReg: /^application\/octet-stream$/i,
  //   suffix: /\.(HEIC|heic)$/i,
  // },
];

const LOCAL_PREVIEW_PLUS = [
  {
    previewMode: 'WORD',
    mimeTypeReg:
      /^application\/vnd.openxmlformats-officedocument.wordprocessingml.document$/i,
    suffix: /\.docx$/i,
    cors: true,
  },
  {
    previewMode: 'EXCEL',
    mimeTypeReg:
      /^application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet$/i,
    suffix: /\.xlsx$/i,
    cors: true,
  },
  // {
  //   previewMode: 'MARKDOWN',
  //   // mimeTypeReg: /^application\/octet-stream$/i,
  //   suffix: /\.md$/i,
  // }
];
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
const PreviewFile: React.FC<PreviewFileProps> = (props) => {
  const {
    fileId: fileIdOrUrl,
    isEnableWaterMark = true,
    file,
    pdfInfo,
    onClose,
    onLoaded,
    getLocale,
    language,
  } = props;
  const [loading, setLoading] = useState(false);
  const [fileDataMap, setFileDataMap] = useState<any>({});
  const fileCacheMap = useRef<any>({});
  const [visible, setVisible] = useState(false);
  // 应用水印配置
  // const appInst = getAppInst({ appId });
  // const { watermarkInfo } = appInst || {};

  // 判断是否是网络地址，是的话不调用后端接口预览
  const isUrlFormat = (id: string) =>
    /^http(s)?:\/\/[^\s/$.?#].[^\s]*$/i.test(id);

  const getFilePreviewUrl = (id: string) =>
    /^\d+$/.test(id) ? api.previewFileById(id) : id;

  // 根据下载接口获取文件，判断文件类型是否可以预览
  const getFileData = (fileId: string): Promise<any> => {
    const url = isUrlFormat(fileId) ? fileId : getFilePreviewUrl(fileId);
    if (url) {
      const xhr = new XMLHttpRequest(); // ActiveXObject只存在于IE7及以下，无需兼容
      xhr.open('GET', url);
      xhr.responseType = 'blob'; // 设置接受类型
      const headers: any = {
        'X-B-AUTH': '1',
      };
      Object.keys(headers).forEach((header) => {
        xhr.setRequestHeader(header, headers[header]); // 设置请求头参数
      });
      xhr.setRequestHeader(
        'X-SIGN',
        security.createHttpSignStr(url, {
          method: 'GET',
          headers,
          body: '',
          search: '',
        }),
      );
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
          reject();
        };
        xhr.onloadend = () => {
          if (xhr.status === 404) {
            messageApi.error(getLocale('fileNotExist') ?? '文件资源不存在');
            onClose?.();
            reject();
          }
        };
        xhr.send();
      });
    }
    return Promise.resolve(null);
  };

  // 校验是否为指定格式
  // 部分格式后端不支持预览转换，由前端处理
  const checkPreview = async (fileInfo: any) => {
    const fileData = fileCacheMap?.current[fileInfo?.fileId];
    let fileBlob: File & {
      cors: boolean;
      name: string;
    } = fileData?.data;
    if (fileInfo?.fileId && !fileData) {
      try {
        fileBlob = await getFileData(fileInfo?.fileId);
      } catch (error) {
        console.error('预览文件时候错误error', error);
      }
    }
    let localPreview = LOCAL_PREVIEW;
    if (isUrlFormat(fileIdOrUrl)) {
      // 如果是预览远程的文件加上docx、xlcx、md等本地浏览
      localPreview = [...LOCAL_PREVIEW, ...LOCAL_PREVIEW_PLUS];
    }

    const target = localPreview.find((val) => {
      if (
        val.suffix?.test(fileInfo?.name || fileBlob?.name || '') ||
        val.mimeTypeReg?.test(fileBlob?.type || '')
      ) {
        fileInfo.previewMode = val.previewMode;
        if (fileBlob?.cors && !val.cors) {
          // 预览跨域文件地址且无法通过平台定制方式预览的，通过iframe展示
          fileInfo.previewMode = 'IFRAME';
        }
        return true;
      }
      return false;
    });
    if (target?.previewMode === 'TXT' && fileBlob instanceof Blob) {
      fileInfo.content = await fileBlob?.text();
    }
    if (target) {
      fileInfo.data = fileBlob;
      fileCacheMap.current[fileInfo?.fileId] = fileInfo;
      setFileDataMap((pre: any) => ({
        ...pre,
        [fileInfo?.fileId]: fileInfo,
      }));
    }
    return target;
  };

  const getFileInfo = useCallback(async () => {
    setLoading(true);
    try {
      const target = await checkPreview({
        fileId: fileIdOrUrl,
        name: file?.name,
      });
      if (target) {
        onLoaded?.(true);
        setLoading(false);
        return;
      }
      await getFile();
    } finally {
      setLoading(false);
    }
  }, [fileIdOrUrl]);

  const getFile = useCallback(async () => {
    setLoading(true);
    if (!fileIdOrUrl) return;
    let fileInfo = fileCacheMap?.current[fileIdOrUrl];

    try {
      const isUrl = isUrlFormat(fileIdOrUrl);
      // 当传入的fileIdOrUrl是合法的网络地址时，则视为外部地址，所有不支持浏览器直接预览
      if (!fileInfo && !isUrl) {
        fileInfo = await api.viewFile({ fileId: fileIdOrUrl });
      }
      if (fileInfo && fileInfo?.resultCode !== '-2') {
        if (
          fileInfo?.previewMode === 'IMG_PPT' &&
          fileInfo?.fileIdList.length > 0
        ) {
          fileInfo.totalPage = fileInfo?.fileIdList.length;
          setVisible(true);
        }
        setFileDataMap((pre: any) => ({
          ...pre,
          [fileIdOrUrl]: fileInfo,
        }));
        fileCacheMap.current[fileIdOrUrl] = fileInfo;
        onLoaded?.(true);
      } else if (!fileInfo?.previewMode) {
        // setResultInfo('当前文件不支持在线预览');
        messageApi.error(
          getLocale('fileNotSupportPreview') ?? '当前文件不支持在线预览',
        );
        onClose?.();
      }
    } catch (e: any) {
      // setResultInfo(e.resultMsg);
      messageApi.error(
        getLocale('fileNotSupportPreview') ?? '当前文件不支持在线预览',
      );
      onClose?.();
    } finally {
      setLoading(false);
    }
  }, [fileIdOrUrl]);

  const initFile = async () => {
    if ((file && file?.fileId) || fileIdOrUrl) {
      await getFileInfo();
      return;
    }
    getFile();
  };

  useEffect(() => {
    initFile();
  }, [getFile, file]);
  // 当前预览文件信息
  const data = useMemo(
    () => fileDataMap[fileIdOrUrl || file?.fileId],
    [file, fileIdOrUrl, fileDataMap],
  );

  // 签名每次会增加一个时间戳，需要缓存url
  const filePreviewUrl = useMemo(
    () =>
      getFilePreviewUrl(data?.data?.dataUrl || data?.data?.url || data?.fileId),
    [data?.fileId],
  );

  const renderPPT = () => {
    const imgs: string[] = [];
    (data?.fileIdList || []).forEach((imgId: any) => {
      imgs.push(getFilePreviewUrl(imgId));
    });
    return (
      <div className="ppt">
        <ImageViewer.Multi images={imgs} visible={visible} onClose={onClose} />
      </div>
    );
  };
  const renderContent = () => (
    <div className="content">
      <div className="code">{data?.content}</div>
    </div>
  );
  const renderPDF = (fileUrl: any) => {
    return (
      <div className="pdf-container">
        <Document
          file={fileUrl}
          loading={<SpinLoading style={{ '--size': '48px' }} />}
          onLoadSuccess={pdfInfo.onDocumentLoadSuccess}
          options={{
            cMapUrl: 'static/cmaps/',
            cMapPacked: true,
          }}
        >
          <Page
            pageNumber={pdfInfo.pageNum}
            scale={pdfInfo.scale}
            loading={<SpinLoading style={{ '--size': '48px' }} />}
          />
        </Document>
      </div>
    );
  };

  const render = () => {
    switch (data?.previewMode) {
      case 'IMG':
        return (
          <div className="preview_content">
            <ImageViewer image={filePreviewUrl} visible onClose={onClose} />
          </div>
        );
      case 'PDF':
        return renderPDF(filePreviewUrl);
      case 'WORD':
      case 'EXCEL':
        return (
          <DocViewer
            docData={data?.data}
            docUrl={data?.fileId}
            type={data?.previewMode}
          />
        );
      case 'HTML':
        // eslint-disable-next-line react/no-danger
        return (
          <div className="preview_html">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: addFileUrlSign(data?.content),
              }}
              style={{
                backgroundColor: '#fff',
                overflow: 'scroll',
                height: '100%',
                width: '100%',
              }}
            />
          </div>
        );
      case 'VIDIO':
        return (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video src={getFilePreviewUrl(data?.fileId)} loop autoPlay />
        );
      case 'IMG_PPT':
        return renderPPT();
      case 'TXT':
        return renderContent();
      case 'IFRAME':
        return (
          <iframe
            src={getFilePreviewUrl(data?.fileId)}
            key={data?.fileId}
            title={data?.name}
            className="iframe"
          />
        );
      default:
        // if (resultInfo) {
        //   return <Result status="error" title="" description={resultInfo} />;
        // }
        return null;
    }
  };

  // const mIsEnableWaterMark = useMemo(
  //   () => watermarkInfo?.isEnable === 'T' || isEnableWaterMark,
  //   [watermarkInfo, isEnableWaterMark]
  // );

  return (
    <>
      {/* {mIsEnableWaterMark && <Watermark config={watermarkInfo} appId="Watermark" />} */}
      <div
        className={classnames(`${prefixCls}-wrap`, {
          [`${prefixCls}-wrapPic`]: data?.previewMode === 'IMG' || loading,
        })}
      >
        {loading && <SpinLoading style={{ '--size': '48px' }} />}
        {render()}
      </div>
    </>
  );
};

export default PreviewFile;
