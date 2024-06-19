import http from '@/utils/service/baseRequest';
import urlHelper from '@/utils/service/urlHelper';

export async function getWaterMarkByAppId(appId: string) {
  return http.get(
    urlHelper.url('app/appPage/getWaterMarkByAppId', { appId }, { appId }),
    { appId },
  );
}
