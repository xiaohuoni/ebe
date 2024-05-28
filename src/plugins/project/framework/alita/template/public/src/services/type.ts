import { AppCtxType } from '@/utils/service/baseRequest';

export type batchDownloadFileByIdsFn = (
  fileIds: string,
  config: { zip?: boolean },
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

export const SERVICE_SOURCE = {
  // 服务来源
  APP: 'app',
  // 应用内部 & 模型生成
  QUERY: 'query',
  // 解析服务
  STD: 'std',
  // 编排服务
  INNER: 'inner',
  // 高代码服务
  PLATFORM: 'platform',
  // 平台服务
  ATOM: 'atom',
  // 外部服务(低代码运营平台的原子服务)
  RHIN: 'rhin',
  // 业务运营服务
  SCENE: 'scene',
  // 业务运营场景服务
  OBJECT: 'object', // 业务对象生成服务
  SUPER: 'super', // 动态查询通用服务
};

export const SERVICE_SOURCE_PARAMS = {
  [SERVICE_SOURCE.ATOM]: 'serviceProviderRequest',
  [SERVICE_SOURCE.QUERY]: 'params',
  [SERVICE_SOURCE.STD]: 'parameters',
  [SERVICE_SOURCE.RHIN]: 'serviceRequest',
  [SERVICE_SOURCE.SCENE]: 'serviceRequest',
  [SERVICE_SOURCE.OBJECT]: 'attrs',
};
