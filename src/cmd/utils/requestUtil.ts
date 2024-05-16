import { cloneDeep } from "lodash";

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


/**
 * 生成唯一id
 * @param prefix
 * @param id
 * @param slength
 * @returns
 */
export const createId = (prefix?: string, id?: string, slength: number = 8) => {
  let uid = id;
  if (!uid) {
    uid = `${Math.random()}`.slice(slength);
  }
  return prefix ? `${prefix}_${uid}` : uid;
};


export const processCustomParams = (
  _options: Record<string, any>,
  extraData: Record<string, any>,
  oParams: any // oParams是通过解析apiRequestSetParams得到的结果
) => { 
  const options = cloneDeep(_options);
  const {
    params,
    paramsObj,
    serviceCode,
    versionCode,
    apiRequestSetParams,
    sceneCode,
    linkCode,
    sceneVersion,
    _source,
    _serviceId,
    busiObjectId,
    _apiCode,
    rootValue,
    _capabilityCode,
  } = options;
  const _p = params !== 'object' ? params : paramsObj;
  // 根节点赋值直接替换整个参数
  const _params = (apiRequestSetParams?.length || rootValue ? oParams : _p) || {};
  switch (_source) {
    case SERVICE_SOURCE.ATOM:
      options.params = {
        providerId: _serviceId,
        serviceProviderRequest: _params,
      };
      break;
    case SERVICE_SOURCE.QUERY:
      options.params = {
        serviceCode,
        params: _params,
      };
      break;
    case SERVICE_SOURCE.STD:
      options.params = {
        serviceCode,
        version: versionCode,
        serviceVersionId: _serviceId,
        parameters: _params,
      };
      break;
    case SERVICE_SOURCE.RHIN:
      options.params = {
        capabilityCode: _capabilityCode,
        apiCode: _apiCode,
        serviceRequest: _params,
      };
      break;
    case SERVICE_SOURCE.SCENE:
      options.params = {
        serviceCode,
        sceneVersion,
        sceneCode,
        linkCode,
        serviceRequest: _params,
      };
      break;
    case SERVICE_SOURCE.OBJECT:
      options.params = {
        ...extraData, // 对象服务可能会配置扩展服务， 需要传入
        busiObjectId,
        busiObjectInstId: createId(),
        attrs: _params,
        sceneCode,
      };

      break;
    case SERVICE_SOURCE.SUPER:
      options.params = {
        ...extraData,
        ..._params,
      };
      break;
    default:
      options.params = _params;
  }
  return options;
}