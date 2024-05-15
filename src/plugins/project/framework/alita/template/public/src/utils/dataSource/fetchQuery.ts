import http from "../service/commonFetch";

export const SERVICE_SOURCE = {
  // 服务来源
  APP: "app",
  // 应用内部 & 模型生成
  QUERY: "query",
  // 解析服务
  STD: "std",
  // 编排服务
  INNER: "inner",
  // 高代码服务
  PLATFORM: "platform",
  // 平台服务
  ATOM: "atom",
  // 外部服务(低代码运营平台的原子服务)
  RHIN: "rhin",
  // 业务运营服务
  SCENE: "scene",
  // 业务运营场景服务
  OBJECT: "object", // 业务对象生成服务
};

export interface DataSourceFetchQuery {
  method: "get" | "post";
  sceneCode?: string;
  busiObjectInstId?: number | string;
  actionId?: string | number;
  busiObjectId?: string;
  attrs: any;
}

export interface DataSourceFetchQueryService {
  service: {
    _capabilityCode?: string;
    _apiCode?: string;
    api: string;
    _source?: string;
    _serviceId?: string;
    versionCode?: string;
    serviceCode?: string;
    serviceMethod?: "get" | "post" | "put" | "delete";
  };
  params?: any;
}

/**
 * 查询对象服务
 */
export const fetchQueryObject = async (
  url: string,
  {
    busiObjectInstId,
    actionId,
    method,
    sceneCode,
    busiObjectId,
    attrs,
  }: DataSourceFetchQuery
) => {
  const requestConfig: any = {
    method,
  };
  const _sceneCode = sceneCode || "";
  // 组装对象服务入参
  const params = {
    actionId,
    busiObjectId,
    busiObjectInstId,
    attrs,
    sceneCode: _sceneCode || "",
  };
  switch (method) {
    case "get":
      requestConfig.params = params;
      break;
    default:
      requestConfig.data = params;
      break;
  }
  return http.commonFetch(method, url, params, {});
};

export const fetchQueryService = async (
  service: DataSourceFetchQueryService["service"],
  params: DataSourceFetchQueryService["params"]
) => {
  const {
    _capabilityCode,
    _apiCode,
    api,
    _source,
    _serviceId,
    versionCode,
    serviceCode,
    serviceMethod,
  } = service;
  let requestData: any = {};
  const url = api;
  let method = "post" as "get" | "post" | "put" | "delete";
  switch (_source) {
    case SERVICE_SOURCE.RHIN: {
      requestData = {
        apiCode: _apiCode,
        capabilityCode: _capabilityCode,
        serviceRequest: params,
      };
      break;
    }
    case SERVICE_SOURCE.STD: {
      requestData = {
        serviceCode,
        version: versionCode,
        serviceVersionId: _serviceId,
        parameters: params,
      };
      break;
    }
    case SERVICE_SOURCE.QUERY: {
      requestData = {
        serviceCode,
        params,
      };
      method = serviceMethod || "post";
      break;
    }
    case SERVICE_SOURCE.INNER:
    case SERVICE_SOURCE.PLATFORM: {
      requestData = params;
      method = serviceMethod || "post";
      if (Array.isArray(requestData) || typeof requestData !== "object") {
        if (Array.isArray(requestData)) {
          requestData = requestData.map((c) => {
            if (!Array.isArray(c) || typeof c !== "object") {
              return {
                ...c,
              };
            }
            return c;
          });
        }
      }
      break;
    }
    default:
      break;
  }
  return http.commonFetch(method, url, requestData, {
    _source,
    maybeNotStdResp: [SERVICE_SOURCE.INNER, SERVICE_SOURCE.PLATFORM].includes(
      _source || ""
    ),
  });
};
