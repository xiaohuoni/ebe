import { AppCtxType } from '@/utils/service/baseRequest';

export type batchDownloadFileByIdsFn = (
  fileIds: string,
  config: { zip?: boolean; },
) => string;
export type ReturnStringFn<N = 0> = N extends 0
  ? () => string
  : N extends 1
  ? (params: any) => string
  : N extends 2
  ? (params: any, ctx: AppCtxType) => string
  : N extends 3
  ? (params: any, ctx: AppCtxType, e: any) => string
  : never;
export type HTTPMehodFn = (
  params: any,
  ctx?: AppCtxType,
  ...e: any[]
) => Promise<any> | string;
