import http, { AppCtxType } from '@/utils/service/baseRequest';
import urlHelper from '@/utils/service/urlHelper';

// 根据appId查询应用实例
// findAppConfig: (params, appCtx) => http.get(urlHelper.url('app/app/findAppConfig', params, appCtx), appCtx),
export async function findAppConfig(
  params: { [key: string]: any },
  appCtx: AppCtxType,
) {
  return http.get(
    urlHelper.url('app/appPage/findAppPolymerizationInfo', params, appCtx),
    appCtx,
  );
}
