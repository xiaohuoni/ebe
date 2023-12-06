import { security } from '@lingxiteam/assets';
import { request } from 'alita';
import appList from './a.json';
import page1 from './b1.json';
import page2 from './b2.json';
import bu from './bu.json';

const useMock = false;

export async function query(): Promise<any> {
  return request('/api/hello', { method: 'POST' });
}
export async function code(data): Promise<any> {
  console.log(data);
  return request('/code', { method: 'POST', data });
}

export async function findBusiCompById(params): Promise<any> {
  // busiCompId=1046689438983856129
  // 本地 mock 数据
  if (useMock) {
    return new Promise((resolve) => {
      resolve(bu);
    });
  }
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
    'X-B-Auth': 1,
    'X-B-Target-Id': params.pageId,
  };
  return request('/app/manager/busiComp/findBusiCompById', {
    params,
    headers: {
      ...headers,
      'X-SIGN': security.httpEncryption.createHttpSignStr(
        '/app/manager/busiComp/findBusiCompById',
        { method: 'GET', headers, body: {}, search: params },
      ),
    },
  });
}

export async function findAppPolymerizationInfo(params): Promise<any> {
  // 本地 mock 数据
  if (useMock) {
    return new Promise((resolve) => {
      resolve(appList);
    });
  }
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
  };
  // app/appPage/findAppPolymerizationInfo
  return request('/app/appPage/findAppPolymerizationInfo', {
    params,
    method: 'GET',
    headers: {
      ...headers,
      'X-SIGN': security.httpEncryption.createHttpSignStr(
        '/app/appPage/findAppPolymerizationInfo',
        { method: 'GET', headers, body: {}, search: params },
      ),
    },
  });
}

export async function getPageVersionById(params): Promise<any> {
  // 本地 mock 数据
  if (useMock) {
    return new Promise((resolve) => {
      resolve(params?.pageId === '1024143466269171712' ? page1 : page2);
    });
  }
  const headers: any = {
    'Content-Type': 'application/json',
    'APP-ID': params.appId,
    'X-B-Auth': 1,
    'X-B-Target-Id': params.pageId,
  };

  return request('/app/appPage/getPageVersionById', {
    params,
    headers: {
      ...headers,
      'X-SIGN': security.httpEncryption.createHttpSignStr(
        '/app/appPage/getPageVersionById',
        { method: 'GET', headers, body: {}, search: params },
      ),
    },
  });
}
