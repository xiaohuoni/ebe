import { APPID } from '@/constants';
import resolveApiPath from '@/utils/service/resolveApiPath';
import security from '@/utils/Security';
// 根据文件编码获取地址
// getAppFileUrlByFileCode: (fileCode, appCtx) => resolveApiPath(security.httpEncryption.buildXSignUrl(
//   `app/file/appFileResource/downloadFileByFileCode?ZSMART-LOCALE=${appCtx.language}&appId=${appCtx.appId}&fileCode=${fileCode}&X-B-AUTH=1&X-B-TARGET-ID=${appCtx.pageId}`
// )),
export function getAppFileUrlByFileCode(fileCode: string) {
  return resolveApiPath(
    security.httpEncryption.buildXSignUrl(
      `app/file/appFileResource/downloadFileByFileCode?ZSMART-LOCALE=zh-cn&appId=${APPID}&fileCode=${fileCode}&X-B-AUTH=1&X-B-TARGET-ID=`,
    ),
  );
}
