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
    'X-B-AUTH': 1,
    'X-B-TARGET-ID': params.pageId,
    'Xa-Type': '1.0',
  };

  return request('/api/lcdp/attr/qryAttrSpecPage', {
    method: 'post',
    data: params,
    headers,
  });
}

export async function getThemeCss(params): Promise<any> {
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
  };

  return request('/api/lcdp/appTheme/getThemeCss', {
    params,
    method: 'GET',
    headers,
  });
}
