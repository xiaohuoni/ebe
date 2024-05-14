import resolveApiPath from '@/utils/service/resolveApiPath';
import { security } from '@lingxiteam/assets';
import { getAppFileUrlByFileCode } from './getAppFileUrlByFileCode';

export const api = {
  resolveApiPath,
  getAppFileUrlByFileCode,
  service: {
    uploadSingleFile: () => resolveApiPath('app/file/uploadSingleFile'),
    getAppFileUrlById: (params: any, appCtx: any) => {
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
        security.httpEncryption.buildXSignUrl(`${url}${urlParam}`),
      );
    },
  },
};
