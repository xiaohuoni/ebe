// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member

import security from '@/utils/Security';
import http from '@/utils/service/baseRequest';
import resolveApiPath from '@/utils/service/resolveApiPath';
import urlHelper from '@/utils/service/urlHelper';
import { batchDownloadFileByIdsFn, HTTPMehodFn, ReturnStringFn } from '../type';
interface ApiType {
  // 批量下载文件
  batchDownloadFileByIds: batchDownloadFileByIdsFn;
  routePreviewFileById: ReturnStringFn<1>;
  // 预览文件
  previewFileById: ReturnStringFn<2>;
  // 解压预览
  getZipFileNode: HTTPMehodFn;
  // 预览压缩包的文件
  viewZipFile: HTTPMehodFn;
  // 预览文件接口
  viewFile: HTTPMehodFn;
}
// TODO：记得删appID，测试时放着
const api: ApiType = {
  // 预览文件接口
  viewFile: (params, appCtx) =>
    urlHelper.get('app/filePreview/viewFile', params, appCtx),
  // 预览文件
  previewFileById: (fileId) =>
    resolveApiPath(
      security.httpEncryption.buildXSignUrl(`app/file/file/id/${fileId}`),
    ),
  // 获取压缩包解压后的文件结构
  getZipFileNode: (params, appCtx) =>
    urlHelper.get('app/filePreview/getZipFileNode', params, appCtx),
  // 预览压缩包的文件
  viewZipFile: (params, appCtx) =>
    http.post('app/filePreview/viewZipFile', appCtx, params),
  routePreviewFileById: (params = {}) => {
    const { fileId } = params;
    return `#/_preview?fileId=${fileId}`;
  },
  // 批量下载文件
  batchDownloadFileByIds: (fileIds, config) =>
    resolveApiPath(
      `/app/file/batchDownload?fileIds=${fileIds}${
        config?.zip ? '&zip=true' : ''
      }`,
    ),
};

export default api;
