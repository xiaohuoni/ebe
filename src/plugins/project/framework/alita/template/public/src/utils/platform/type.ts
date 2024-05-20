import { AppCtxType } from '@/utils/service/baseRequest';

export type HTTPMehodFn = (
  params: any,
  ctx: AppCtxType,
  ...e: any[]
) => Promise<any> | string;
