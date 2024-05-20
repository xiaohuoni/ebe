import service from '@/utils/service/commonFetch';
import { SERVICE_SOURCE_PARAMS } from '@lingxiteam/engine-utils';
import { RequestOptions } from '../../utils/service/baseRequest';

export default (
  _source: string,
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  params: Record<string, any>,
  extraParams?: Record<string, any>,
  options?: RequestOptions,
) => {
  let param = params;
  if (Array.isArray(param[SERVICE_SOURCE_PARAMS[_source]])) {
    param = param[SERVICE_SOURCE_PARAMS[_source]].map((p: any) => ({
      ...param,
      [SERVICE_SOURCE_PARAMS[_source]]: p,
    }));
  }
  return service.commonFetch(method, url, param, extraParams, options);
};
