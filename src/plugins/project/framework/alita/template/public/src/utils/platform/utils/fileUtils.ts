import engineServices from '@/services/api/engine';
import fileServices from '@/services/api/file';
import {
  BatchDownloadFileByIdsType,
  ExportFileShowProgressType,
  LocaleFunction,
  PreviewFileType,
  SaveBlobFileType,
} from '@lingxiteam/types';
import { isErrorStatus } from '../../service/defaultResponseInterceptor';
import { HTTPMehodFn } from '../type';

import security from '@/utils/Security';

type ExportPathMapType = Record<'sql' | 'object' | 'multiExport', string>;
type ExportApiMapType = Record<'sql' | 'object' | 'multiExport', HTTPMehodFn>;

const exportPathMap: ExportPathMapType = {
  sql: engineServices.exportSqlDatasApiPath(),
  object: engineServices.exportInstsApiPath(),
  multiExport: engineServices.exportMultiServiceResultPath(),
};

const exportServiceMap: ExportApiMapType = {
  sql: engineServices.exportSqlDatasByAsync,
  object: engineServices.exportInstsByAsync,
  multiExport: engineServices.exportMultiServiceResultByAsync,
};

/**
 * 文件保存方法
 * @param data
 * @param filename
 */
const saveBlobFile: SaveBlobFileType = ({ data, fileName }) => {
  if (typeof (window as any).chrome !== 'undefined') {
    // chrome
    const link = document.createElement('a');
    let href = window.URL.createObjectURL(new Blob([data]));
    const format = typeof fileName === 'string' && fileName.split('.').pop();
    if (/(csv|xls)$/.test(format as string) && typeof data === 'string') {
      href = `data:text/${format};charset=utf-8,\ufeff${encodeURIComponent(
        data,
      )}`;
    }
    link.href = href; // eslint-disable-line
    link.download = fileName;
    link.click();
  } else if (typeof (window as any).navigator.msSaveBlob !== 'undefined') {
    // ie
    const blob = new Blob([data], {
      type: 'application/force-download',
    }); // eslint-disable-line
    (window as any).navigator.msSaveBlob(blob, fileName);
  } else {
    // firefox
    const file = new File([data], fileName, {
      type: 'application/force-download',
    }); // eslint-disable-line
    window.open(URL.createObjectURL(file));
  }
};

const getFileName = (fileContentStr: string, newFileName?: string) => {
  let fileName: string = '';
  let suffix: string = '';
  if (fileContentStr) {
    fileName =
      fileContentStr.split('filename=').pop()?.replace(/\"/g, '') || '';
    const result = fileContentStr.match(
      /(?:.*filename\*|filename)=(?:([^'"]*)''|("))([^;]+)\2(?:[;`\n]|$)/,
    );
    if (result && result[3]) {
      fileName = result[3].replace(/['"]/g, '').replace(/[+]/g, '%20');
    }
    suffix = fileName.split('.').pop() || '';
    fileName = decodeURIComponent(fileName);
  }

  if (newFileName) {
    if (!/\./.test(newFileName)) {
      fileName = `${newFileName}.${suffix}`;
    } else {
      fileName = newFileName;
    }
  }
  return fileName;
};

const downloadByXMLHttpRequest = (params: {
  appId: string;
  pageId: string;
  newFileName?: string;
  onError?: any;
  messageApi?: any;
  methodPath: string;
  downloadIndex?: string;
  getLocale: LocaleFunction;
}) => {
  const {
    appId,
    pageId,
    newFileName,
    onError,
    messageApi,
    methodPath,
    downloadIndex,
    getLocale = (
      key: string,
      placeholder: string,
      kv?: Record<string, string>,
    ) => placeholder,
  } = params;

  if (window.XMLHttpRequest) {
    const xhr = new XMLHttpRequest(); // ActiveXObject只存在于IE7及以下，无需兼容
    xhr.open('GET', methodPath, true);
    xhr.responseType = 'blob'; // 设置接受类型
    const headers: any = {
      'Content-Type': 'application/json',
      'X-B-TARGET-ID': pageId,
      'X-B-AUTH': '1',
      'APP-ID': appId,
    };
    Object.keys(headers).forEach((header) => {
      xhr.setRequestHeader(header, headers[header]); // 设置请求头参数
    });
    xhr.setRequestHeader(
      'X-SIGN',
      security.createHttpSignStr(methodPath, {
        method: 'GET',
        headers,
        body: '',
        search: '',
      }),
    );
    xhr.withCredentials = true;
    xhr.onprogress = (evt) => {
      // 展示下载进度条
      if (evt.lengthComputable && messageApi?.loading) {
        const percentComplete = Math.round((evt.loaded * 100) / evt.total);
        if (typeof messageApi?.openProgressMsg === 'function') {
          messageApi.openProgressMsg(
            downloadIndex,
            newFileName,
            percentComplete,
            getLocale('download', '下载'),
            { getLocale },
          );
        }
      }
    };
    xhr.onload = async () => {
      const data = xhr.response; // 获取响应体数据
      if (xhr.status === 200) {
        const fileName: string = getFileName(
          xhr.getResponseHeader('Content-Disposition') || '',
          newFileName,
        );
        saveBlobFile({
          data,
          fileName,
        });
      } else if (isErrorStatus(xhr.status)) {
        // @ts-ignore
        const errMessage = getServiceErrorStatusMsg(xhr.status, getLocale);
        console.error(errMessage.resultMsg);
        // monitt.send({
        //   msg: errMessage.resultMsg,
        //   logLevel: 'errorMsg',
        //   errCode: errMessage.resultCode,
        //   error: data,
        // });
      } else {
        const errMessage = data;
        let errorMessage = '';
        try {
          errorMessage =
            JSON.parse(errMessage)?.message ||
            getLocale('downloadFail', '下载失败');
        } catch {
          errorMessage = getLocale('downloadFail', '下载失败');
        }
        console.error(errMessage.resultMsg);
        // monitt.send({
        //   msg: errorMessage,
        //   logLevel: 'errorMsg',
        //   errCode: ErrorCode.internalServerError,
        //   error: data,
        // });
        if (typeof onError === 'function') {
          onError(errorMessage);
        }
      }
      if (typeof messageApi?.closeProgressMsg === 'function') {
        messageApi.closeProgressMsg(downloadIndex);
      }
    };
    xhr.ontimeout = () => {
      xhr.abort(); // 取消请求
    };
    xhr.send();
  }
};

/**
 * 批量文件下载
 * @param appId
 * @param pageId
 * @param fileId
 * @param newFileName
 * @param onError
 * @param messageApi
 * @param zip
 */
const batchDownloadFileByIds: BatchDownloadFileByIdsType = (params) => {
  const { fileIds, zip } = params;

  downloadByXMLHttpRequest({
    methodPath: fileServices.batchDownloadFileByIds(fileIds, { zip }),
    downloadIndex: `${fileIds}_${Math.random()}`,
    ...params,
  });
};

// 异步导出文件并显示进度
const exportFileShowProgressAsync: ExportFileShowProgressType = async (
  exportParams,
) => {
  const {
    fileOrigin,
    fileName,
    params = {},
    onSuccess,
    onFail,
    messageApi,
    downloadIndex,
    appId,
    pageId,
    getLocale,
  } = exportParams;
  let timeoutId: number | null = null;
  let percent = 0;
  let isStop = false;
  const serviceApi = exportServiceMap[fileOrigin as keyof ExportApiMapType];
  const applyId = await serviceApi(params, { appId, pageId });
  const messageConfig = {
    title: fileName ? `${getLocale('derive', '导出')}-${fileName}` : undefined,
    key: downloadIndex,
    onCancel: () => {
      if (timeoutId) {
        isStop = true;
        clearTimeout(timeoutId);
      }
    },
    getLocale,
  };
  const requestProgress = async (isPolled = true) => {
    try {
      const { fileId, statusCd, requestJson, responseJson, failReason } =
        await engineServices.getImportExportApply(
          { applyId },
          { appId, pageId },
        );
      // 点击取消时候刚好触发了下一次接口，接口未回调时
      if (isStop) return -1;
      let requestObj: {
        descriptor?: {
          [key: string]: any;
        };
      } = {};
      let responseObj: {
        total?: number;
        currentCount?: number;
      } = {};
      try {
        requestObj = JSON.parse(requestJson) || {};
        responseObj = JSON.parse(responseJson) || {};
      } catch (e) {
        console.log(e);
      }
      let showLoading: boolean = false;
      const { total = 0, currentCount = 0 } = responseObj;
      if (!responseJson || (percent === 100 && statusCd === 1)) {
        // 上一次导出进程还未结束，无法返回进度
        // 已经导出完全但进程还未结束
        showLoading = true;
      } else {
        percent = +((+currentCount / +total) * 100).toFixed(2);
      }
      if (messageApi?.showProgressNotification) {
        messageApi.showProgressNotification({
          ...messageConfig,
          message: showLoading
            ? undefined
            : getLocale(
                'exportFile.process.message',
                `总记录${total}条，已生成数据${currentCount}条，剩余${
                  total - currentCount
                }条完成到处。`,
                {
                  total: `${total}`,
                  currentCount: `${currentCount}`,
                  count: `${total - currentCount}`,
                },
              ),
          percent,
          showLoading,
          loadingText: getLocale(
            percent === 100
              ? 'export.process.downloading'
              : 'export.process.handling',
            percent === 100
              ? '正在等待下载，请稍后...'
              : '正在处理中，请稍后...',
          ),
          getLocale,
        });
      }
      if (statusCd === 1 && isPolled) {
        polledRequest();
      } else if (statusCd === 10) {
        onSuccess?.();
        if (messageApi?.showProgressNotification) {
          messageApi.showProgressNotification({
            ...messageConfig,
            percent: 100,
            btn: () => null,
            duration: 1,
          });
        }
        if (fileId) {
          const newFileName: string | undefined =
            fileName || requestObj?.descriptor?.filename;
          batchDownloadFileByIds({
            fileIds: fileId,
            newFileName,
            onError: (errorMessage: any) => {
              messageApi.error(errorMessage);
            },
            messageApi,
            appId,
            pageId,
            getLocale,
          });
        }
      } else if (statusCd === -1) {
        messageApi.showProgressNotification({
          ...messageConfig,
          type: 'error',
          percent,
          message:
            failReason ||
            getLocale('exportFile.fail', '导出失败，稍后请重试。'),
          btn: () => null,
          duration: 2,
        });
        onFail?.();
      }
      return statusCd;
    } catch (e) {
      onFail?.();
      return -1;
    }
  };
  const polledRequest = (requestFlag = false) => {
    if (applyId && (timeoutId || requestFlag)) {
      timeoutId = window.setTimeout(async () => {
        await requestProgress();
      }, 1500);
    }
  };
  const status = await requestProgress(false);
  if (status === 1) {
    // 如果未导出则定时轮询
    polledRequest(true);
  }
};

/**
 * 文件预览
 * @param fileId
 * @param param1
 */
const previewFile: PreviewFileType = (params) => {
  const { fileId, appId, pageId } = params;

  const link = document.createElement('a');
  link.href = fileServices.routePreviewFileById({
    fileId,
    appId,
    pageId,
  });
  link.setAttribute('target', '_blank');
  document.body.appendChild(link);
  link.click();
  if (document.body.contains(link)) {
    document.body.removeChild(link);
  }
};

// 导出文件显示进度条
const exportFileShowProgress: ExportFileShowProgressType = async (
  exportParams,
) => {
  const {
    fileOrigin,
    methodType = 'POST',
    fileName,
    params = {},
    onSuccess,
    onFail,
    messageApi,
    downloadIndex,
    appId,
    pageId,
    async,
    getLocale = (k, placeholder) => placeholder,
  } = exportParams;

  const _downloadIndex = downloadIndex || `${fileName}_${Math.random()}`;
  if (async === 'async') {
    await exportFileShowProgressAsync({
      ...exportParams,
      downloadIndex: _downloadIndex,
    });
    return;
  }

  if (fileOrigin && window.XMLHttpRequest) {
    const xhr = new XMLHttpRequest(); // ActiveXObject只存在于IE7及以下，无需兼容
    const methodPath = exportPathMap[fileOrigin as keyof ExportPathMapType];
    xhr.open(methodType, methodPath, true);
    xhr.responseType = 'blob'; // 设置接受类型
    const headers: any = {
      'Content-Type': 'application/json',
      'X-B-TARGET-ID': pageId,
      'X-B-AUTH': '1',
      'APP-ID': appId,
    };
    Object.keys(headers).forEach((header) => {
      xhr.setRequestHeader(header, headers[header]); // 设置请求头参数
    });
    xhr.setRequestHeader(
      'X-SIGN',
      security.createHttpSignStr(methodPath, {
        method: methodType as
          | 'GET'
          | 'OPTIONS'
          | 'HEAD'
          | 'POST'
          | 'PUT'
          | 'DELETE'
          | 'TRACE'
          | 'CONNECT',
        headers,
        body: JSON.stringify(params) || '',
        search: '',
      }),
    );
    xhr.withCredentials = true;
    xhr.onprogress = (evt) => {
      // 展示下载进度条
      if (
        evt.lengthComputable &&
        typeof messageApi?.openProgressMsg === 'function'
      ) {
        const percentComplete = Math.round((evt.loaded * 100) / evt.total);
        messageApi.openProgressMsg(
          _downloadIndex,
          fileName,
          percentComplete,
          getLocale('derive', '导出'),
          { getLocale },
        );
      }
    };
    xhr.onload = async () => {
      const data = xhr.response; // 获取响应体数据
      if (xhr.status === 200) {
        saveBlobFile({
          data,
          fileName: getFileName(
            xhr.getResponseHeader('Content-Disposition') || '',
            fileName,
          ),
        });
        if (typeof onSuccess === 'function') {
          onSuccess();
        }
      } else if (typeof onFail === 'function') {
        onFail();
      } else {
        messageApi?.error?.(getLocale('deriveFail', '导出失败'));
      }
      if (typeof messageApi?.closeProgressMsg === 'function') {
        messageApi.closeProgressMsg(_downloadIndex);
      }
    };
    xhr.ontimeout = () => {
      if (typeof messageApi?.closeProgressMsg === 'function') {
        messageApi.closeProgressMsg(_downloadIndex);
      }
      xhr.abort(); // 取消请求
    };
    xhr.send(JSON.stringify(params));
  }
};

export {
  previewFile,
  exportFileShowProgress,
  batchDownloadFileByIds,
  saveBlobFile,
};
