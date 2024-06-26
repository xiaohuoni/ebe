import { security } from '@lingxiteam/assets';
import { request } from 'alita';

security.httpEncryption.start({
  mode: '1.0',
});

export async function query(): Promise<any> {
  return request('/api/hello', { method: 'POST' });
}
export async function code(data): Promise<any> {
  console.log(data);
  return request('/code', { method: 'POST', data });
}
export async function localgenerate(data): Promise<any> {
  return request('/localgenerate', { params: data });
}
export async function qryPageInstListByAppId(params): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
    'X-B-AUTH': 1,
  };

  return request('/api/lcdp/pageConfig/qryPageInstListByAppId', {
    headers,
    method: 'post',
    data: {
      ...params,
      orderType: 'DESC',
      qryType: 'F',
      sharedObjFilter: 'F',
    },
  });
}

export async function queryFrontendHookList(params): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
    'X-B-AUTH': 1,
  };

  return request('/api/lcdp/frontendHook/queryFrontendHookList', {
    params,
    headers,
    method: 'get',
  });
}
export async function findPageInstByVersionId(params): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
    'X-B-AUTH': 1,
  };

  return request('/api/lcdp/pageConfig/findPageInstByPageId', {
    params,
    headers,
    method: 'get',
  });
}
export async function qryPageCompAssetList(params): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
    'X-B-AUTH': 1,
  };

  return request('/api/lcdp/appPage/qryPageCompAssetList', {
    params,
    headers,
    method: 'get',
  });
}

export async function findBusiCompById(params): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
  };

  return request('/api/lcdp/manager/busiComp/findBusiCompById', {
    params,
    headers,
  });
}

export async function qryAttrSpecPage(params): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
  };

  return request('/api/lcdp/attr/qryAttrSpecPage', {
    method: 'post',
    data: params,
    headers,
  });
}

export async function getThemeCss(params): Promise<any> {
  const headers: any = {
    'Content-Type': 'text/css',
    'APP-ID': params.appId,
  };

  return request('/api/lcdp/appTheme/getThemeCss', {
    params,
    method: 'GET',
    headers,
  });
}

/**
 * 获取全局数据源
 * @param params
 */
export async function queryFrontendDatasourcePage(params: any) {
  // lcdp/frontend/datasource/queryFrontendDatasourcePage
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
  };

  return request('/api/lcdp/frontend/datasource/queryFrontendDatasourcePage', {
    data: params,
    headers,
    method: 'post',
  });
}

export async function findApplication(params: any): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
  };

  return request('/api/lcdp/application/findApplication', {
    method: 'get',
    params,
    headers,
  });
}

// 查询水印
export async function getWaterMarkByAppId(params: any): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
  };

  return request('/api/lcdp/appPage/getWaterMarkByAppId', {
    method: 'get',
    params,
    headers,
  });
}

// 翻译成英文
export async function translateToEnglish(params: any): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
  };

  return request('/api/lcdp/application/batchTranslateToEnglish', {
    method: 'post',
    data: params,
    headers,
  });
}
