import resolveApiPath from '@/utils/service/resolveApiPath';
import http from '@/utils/service/baseRequest';
import { ReturnStringFn, HTTPMehodFn } from '../type';

interface ApiType {
  exportSqlDatasApiPath: ReturnStringFn,
  exportInstsApiPath: ReturnStringFn,
  exportMultiServiceResultPath: ReturnStringFn,
  // 导出sql（异步）
  exportSqlDatasByAsync: HTTPMehodFn,
  // 自定义导出（异步）
  exportMultiServiceResultByAsync: HTTPMehodFn,
  // 导出业务对象（异步）
  exportInstsByAsync: HTTPMehodFn,
}

const api: ApiType = {
  exportSqlDatasApiPath: () => resolveApiPath('app/sql/exportSqlDatas'),
  exportInstsApiPath: () => resolveApiPath('app/object/exportInsts'),
  exportMultiServiceResultPath: () => resolveApiPath('app/object/exportMultiServiceResult'),
  // 导出sql（异步）
  exportSqlDatasByAsync: (params, appCtx) => http.post('app/sql/exportSqlDatasByAsync', appCtx, params),
  // 自定义导出（异步）
  exportMultiServiceResultByAsync: (params, appCtx) => http.post('app/object/exportMultiServiceResultByAsync', appCtx, params),
  // 导出业务对象（异步）
  exportInstsByAsync: (params, appCtx) => http.post('app/object/exportInstsByAsync', appCtx, params),

};


export default api;
