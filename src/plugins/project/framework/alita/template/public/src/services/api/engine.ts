import http from '@/utils/service/baseRequest';
import resolveApiPath from '@/utils/service/resolveApiPath';
import { HTTPMehodFn, ReturnStringFn } from '../type';
import urlHelper from '@/utils/service/urlHelper';

interface ApiType {
  exportSqlDatasApiPath: ReturnStringFn;
  exportInstsApiPath: ReturnStringFn;
  exportMultiServiceResultPath: ReturnStringFn;
  // 导出sql（异步）
  exportSqlDatasByAsync: HTTPMehodFn;
  // 自定义导出（异步）
  exportMultiServiceResultByAsync: HTTPMehodFn;
  // 导出业务对象（异步）
  exportInstsByAsync: HTTPMehodFn;
  // 根据 busiObjectId 获取业务对象字段
  queryBusiObjectRowColumns: HTTPMehodFn,
  // 导出失败数据文件
  getFailedWorkBook: HTTPMehodFn,
  // 获取业务对象导入模板
  getWorkBookTemplate: HTTPMehodFn,
  // 导入业务对象属性
  importInsts: string,
}

const api: ApiType = {
  exportSqlDatasApiPath: () => resolveApiPath('app/sql/exportSqlDatas'),
  exportInstsApiPath: () => resolveApiPath('app/object/exportInsts'),
  exportMultiServiceResultPath: () =>
    resolveApiPath('app/object/exportMultiServiceResult'),
  // 导出sql（异步）
  exportSqlDatasByAsync: (params, appCtx) =>
    http.post('app/sql/exportSqlDatasByAsync', appCtx, params),
  // 自定义导出（异步）
  exportMultiServiceResultByAsync: (params, appCtx) =>
    http.post('app/object/exportMultiServiceResultByAsync', appCtx, params),
  // 导出业务对象（异步）
  exportInstsByAsync: (params, appCtx) =>
    http.post('app/object/exportInstsByAsync', appCtx, params),
  // 根据 busiObjectId 获取业务对象字段
  queryBusiObjectRowColumns: (params, appCtx) => urlHelper.get('app/object/queryBusiObjectRowColumns', params, appCtx),
  // 导出失败数据文件
  getFailedWorkBook: (params, appCtx) => http.post('app/object/getFailedWorkBook', appCtx, params),
  // 获取业务对象导入模板
  getWorkBookTemplate: (params, appCtx) => http.post('app/object/getWorkBookTemplate', appCtx, params, { responseType: 'blob' }),  // 导入业务对象属性
  importInsts: resolveApiPath('app/object/importInsts'),
};

export default api;
