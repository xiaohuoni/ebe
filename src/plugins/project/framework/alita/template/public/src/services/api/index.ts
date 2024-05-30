import security from '@/utils/Security';
import serviceApi from '@/utils/service/commonFetch';
import resolveApiPath from '@/utils/service/resolveApiPath';
import urlHelper from '../../utils/service/urlHelper';
import batchInsert from './batchInsert';
import { getAppFileUrlByFileCode } from './getAppFileUrlByFileCode';

export const api = {
  batchInsert,
  resolveApiPath,
  getAppFileUrlByFileCode,
  commonFetch: serviceApi.commonFetch,
  getSqlQueryColumns: (params) =>
    urlHelper.get('app/sql/getSqlQueryColumns', params),
  batchGetAppStaticAttr: (params: any) =>
    urlHelper.get('app/appAttr/batchGetAppStaticAttr', params),
  uploadSingleFile: () => resolveApiPath('app/file/uploadSingleFile'),
  getAppFileUrlById: (params: any, appCtx = {} as any) => {
    const { pageId, appId, language } = appCtx;

    let url = `app/file/download?ZSMART-LOCALE=${language}&appId=${appId}`;

    if (pageId) {
      url = `${url}&X-B-AUTH=1&X-B-TARGET-ID=${pageId}`;
    }

    let urlParam = '';
    if (Object.prototype.toString.call(params) === '[object Object]') {
      Object.keys(params).forEach((key) => {
        urlParam += `&${key}=${params[key]}`;
      });
    } else {
      urlParam = `&fileId=${params}`;
    }

    return resolveApiPath(
      security.createHttpSignWithUrl(`${url}${urlParam}`),
    );
  },
};
