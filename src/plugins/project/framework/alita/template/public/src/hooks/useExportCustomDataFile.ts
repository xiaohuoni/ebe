import { api } from '@/services/api';
import { SERVICE_SOURCE } from '@/services/type';
import { handleParseGroups } from '@/utils/engine-utils/exportCustomUtils';
import { messageApi } from '@/utils/messageApi';
import { exportFileShowProgress } from '@/utils/platform';
import { LocaleFunction } from '@lingxiteam/types';

const SERVICE_CUSTOM_EXPORT_TYPE: any = {
  query: 'customQuery', // 解析服务
  std: 'orchestrationService', // 编排服务
  rhin: 'externalQuery', // 外部服务(低代码运营平台的原子服务)
  object: 'objectService', // 业务对象生成服务
  inner: 'internalService', // 高代码服务
  platform: 'platformService', // 平台服务
};

const filterSimpleType = (arr: any[], parCode = '') => {
  let l = arr.filter(
    (i) => !['object', 'array', 'objectArray'].includes(i.attrType),
  );
  if (parCode) {
    // 编排服务导出字段的中文名，优先取描述，没有描述时再取编码
    l = l.map((c) => ({ ...c, parentCode: parCode, name: c.name || c.code }));
  }
  return l;
};

const generateArrayNode = (attrs: any[], parentCode?: string) => {
  let resList: any[] = [];
  const attrParMap: any = {};
  if (Array.isArray(attrs)) {
    attrs.forEach((attr) => {
      const code = parentCode ? `${parentCode}.${attr.code}` : attr.code;
      attrParMap[code] = attr;
      if (attr.children?.length) {
        if (['array', 'objectArray'].includes(attr.attrType)) {
          // 如果array类型的子元素是对象，则视为对象数组，取出对象的字段
          const children =
            attr.attrType === 'array' && attr.children[0]?.attrType === 'object'
              ? attr.children[0]?.children
              : attr.children;
          resList = resList.concat(filterSimpleType(children, code) || []);
        } else if (attr.attrType === 'object') {
          const [res, attrMap] = generateArrayNode(attr.children, code) || [];
          resList = resList.concat(res);
          Object.assign(attrParMap, attrMap);
        }
      }
    });
  }
  return [resList, attrParMap];
};

const getResponseAttr = (response: {
  code: string;
  attrType: string;
  children: any[];
}) => {
  let list: any[] = [];
  const attrParMap: any = {};
  const responseType = response.code === 'root' ? response.attrType : 'object';
  if (response.code === 'root') {
    attrParMap.root = response;
  }
  const responseAttrs = response.children;
  if (responseType === 'object') {
    const [res, attrMap] = generateArrayNode(responseAttrs, '');
    list = list.concat(res);
    Object.assign(attrParMap, attrMap);
  } else if (['objectArray', 'array'].includes(responseType)) {
    const children =
      response.attrType === 'array' &&
      response.children[0]?.attrType === 'object'
        ? response.children[0]?.children
        : responseAttrs;
    list = filterSimpleType(children, '');
  }
  return { list, attrParMap };
};

interface ExportItem {
  // 服务类型
  source: any;
  // 导出字段列表
  objectFields: string[];
  // 配置态记录的导出字段的标题映射即excel表头的名称，
  // 部分服务如：外部和内部，运行态不进行字段查询，无法获取到字段标题
  nameMap: Record<string, string>;
  // 导出字段的父节点字段，不以根节点root开头
  parentCode?: string;
  // 表头分组
  customGroup: any[];
  // 导出时入参
  apiRequestSetParams?: any[];
  exportType?: 'custom' | 'field' | 'temp';
  objectFieldsCustom?: {
    attrName: string;
    attrCode: string;
    fieldData: any[];
    // 动态列导出字段对应的父节点，以根节点root开头
    exportNode?: string;
    [key: string]: any;
  };
  // 导出模板参数
  objectFieldsTemp?: {
    fileCode: string;
    maxRowSize: number;
    rows: any[];
  };
  // 是否是模板导出,由 exportType与objectFieldsTemp决定
  isTemp?: boolean;
  // 服务信息
  serviceData?: any;
  // 导出excel的子表表名
  custSheetName?: string;
  id: string;
  // 是否是动态导出,由 exportType与objectFieldsCustom决定
  isCustom?: boolean;
  // 由apiRequestSetParams转化而来
  parameters: any;
  // 由serviceData中获取对应的服务id
  objValue: string;
  // 导出服务入参中的服务类型
  objType: typeof SERVICE_CUSTOM_EXPORT_TYPE;
}

interface ExportCustomDataFileOptions {
  getLocale: LocaleFunction;
}

const useExportCustomDataFile = ({
  getLocale,
}: ExportCustomDataFileOptions) => {
  const exportFile = async (
    sheetList: any[] = [],
    options: { async: 'async' | 'sync' | undefined; custFileName: string },
  ) => {
    const { async, custFileName = '' } = options;

    const selectedKeyMap: any = {};
    // 组装多个sheet项所需参数
    const createSheetItem = async (
      item: ExportItem,
      selectedKeyMap: Record<string, any>,
      index: any,
    ) => {
      const {
        custSheetName,
        id,
        serviceData,
        objectFields,
        nameMap,
        parentCode,
        exportType,
        objectFieldsCustom,
        objectFieldsTemp, // 模板文件参数
        parameters,
        customGroup,
      } = item;
      const {
        _source,
        busiObjectId,
        _serviceId,
        serviceCode,
        serviceVersionId,
        _capabilityCode,
        busiApiId,
        productId,
      } = serviceData;

      let objValue;
      let parCode = parentCode;
      let fields = objectFields;
      let nameDescMap = nameMap;
      if (!selectedKeyMap[_source]) {
        selectedKeyMap[_source] = [];
      }

      // 动态列导出字段
      if (exportType === 'custom' && objectFieldsCustom) {
        fields = [];
        nameDescMap = {};
        const {
          attrName = '',
          attrCode = '',
          fieldData = [],
          exportNode = '',
        } = objectFieldsCustom;
        // 动态列导出数据的父节点，去除root前缀，保持跟选择字段的parentCode一致
        parCode = exportNode.replace(/^root\./, '');
        const recursive = (arr: any[], parent?: string) => {
          if (Array.isArray(arr)) {
            arr.forEach((k) => {
              const code = parent ? `${parent}.${k[attrCode]}` : k[attrCode];
              fields.push(code);
              nameDescMap[code] = k[attrName];
              if (k?.children) {
                recursive(k.children, code);
              }
            });
          }
        };
        recursive(fieldData, parCode);
      }

      // 构造批量导出获取字段详情的入参
      switch (_source) {
        case SERVICE_SOURCE.OBJECT: {
          objValue = busiObjectId;
          selectedKeyMap[_source].push(busiObjectId);
          break;
        }
        case SERVICE_SOURCE.INNER:
        case SERVICE_SOURCE.PLATFORM: {
          objValue = _serviceId;
          selectedKeyMap[_source].push(_serviceId);
          break;
        }
        case SERVICE_SOURCE.STD: {
          objValue = serviceVersionId;
          selectedKeyMap[_source].push(serviceVersionId);
          break;
        }
        case SERVICE_SOURCE.RHIN: {
          objValue = _capabilityCode;
          selectedKeyMap[_source].push({
            busiApiId,
            productId,
          });
          break;
        }
        default: {
          objValue = serviceCode;
          selectedKeyMap[_source].push(serviceCode);
        }
      }

      return {
        custSheetName: custSheetName || `sheet${index + 1}`,
        customGroup,
        id,
        parameters,
        objType: SERVICE_CUSTOM_EXPORT_TYPE[_source],
        objValue,
        objectFields: fields,
        nameMap: nameDescMap,
        // 是否是自定义字段
        isCustom: !!(exportType === 'custom' && objectFieldsCustom),
        isTemp: !!(exportType === 'temp' && objectFieldsTemp),
        parentCode: parCode,
        source: _source,
        objectFieldsCustom,
        objectFieldsTemp,
      };
    };

    // 根据配置态勾选的导出项，进行导出参数的组装
    const getExportColumns = (
      item: ExportItem,
      resultList: any,
    ): Record<string, any> => {
      const {
        source,
        objectFields,
        nameMap,
        parentCode,
        isCustom,
        isTemp,
        objectFieldsTemp,
        customGroup,
      } = item;
      let columns: Record<string, any> = {};
      // 记录最新的字段和名称映射，分组表头组装时需要
      const colNameMap = { ...nameMap };
      switch (source) {
        case SERVICE_SOURCE.OBJECT: {
          const cols: any[] = [];
          resultList.forEach((item: any) => {
            const data = { ...item };
            objectFields.forEach((field, index) => {
              if (field === data.attrCode) {
                colNameMap[data.attrCode] = data.attrName || data.attrCode;
                if (isCustom) {
                  // 动态列导出的时候以动态列配置的字段名称解析结果为准
                  data.attrName = nameMap[data.attrCode] || data.attrName;
                }
                data.sort = index;
                cols.push(data);
              }
            });
          });
          columns.pickRows = cols;
          break;
        }
        case SERVICE_SOURCE.STD: {
          const { list, attrParMap } = resultList;
          let parent: any;
          let parentChildren: any[] = [];
          const listMap: any = {};
          list.forEach((item: any) => {
            const code = item.parentCode
              ? `${item.parentCode}.${item.code}`
              : item.code;
            listMap[code] = item;
          });
          // 编排类服务需要前端排序
          objectFields.forEach((field, index) => {
            if (listMap[field]) {
              const data = { ...listMap[field] };
              if (!parent) {
                parent = attrParMap[data.parentCode];
                parent.children = [];
                parentChildren = parent.children;
                const parentList = data.parentCode.split('.');
                if (parentList?.length) {
                  parentList.pop();
                  // 找到所有根节点,支持多层级对象下的数组节点的导出
                  parent = parentList.reduce((p: any, _: any, i: number) => {
                    const code = parentList
                      .slice(0, parentList?.length - i)
                      .join('.');
                    const attr = attrParMap[code];
                    const newParent = {
                      ...attr,
                      children: [p],
                    };
                    return newParent;
                  }, parent);
                }
              }
              colNameMap[data.code] = data.name || data.code;
              if (isCustom) {
                // 动态列导出的时候以动态列配置的字段名称解析结果为准
                data.name = nameMap[field];
              }
              data.sort = index;
              parentChildren.push(data);
            }
          });
          columns.pickColumns = parent ? [parent] : [];
          break;
        }
        case SERVICE_SOURCE.RHIN:
        case SERVICE_SOURCE.INNER:
        case SERVICE_SOURCE.PLATFORM: {
          // 外部集成类由于无法在运行态调用接口获取字段参数，只能在配置态记录对应字段名称
          let cols: any[] = [];
          const list: any[] = [];
          objectFields.forEach((c, index) => {
            const fields = c?.split('.');
            list.push({
              code: fields?.length > 1 ? fields[fields.length - 1] : c,
              name: nameMap[c],
              sort: index,
            });
          });
          // 高代码服务和平台服务的字段使用配置时记录的名称映射
          if (
            parentCode ||
            source === SERVICE_SOURCE.INNER ||
            source === SERVICE_SOURCE.PLATFORM
          ) {
            const exportNode = (parentCode || '').split('.');
            cols = exportNode.reverse().reduce((p, n, i) => {
              const code = exportNode
                .slice(1, exportNode?.length - i)
                .join('.');
              if (i === 0) {
                return [
                  {
                    code: n,
                    attrType: 'objectArray',
                    name: nameMap[code],
                    children: p,
                  },
                ];
              }
              return [
                {
                  code: n,
                  attrType: 'object',
                  name: nameMap[code] || n,
                  children: p,
                },
              ];
            }, list);
          } else {
            cols = list;
          }
          if (parentCode) {
            Object.keys(colNameMap).forEach((col) => {
              if (col.includes(parentCode)) {
                const key: string = col.split('.').pop() || '';
                colNameMap[key] = colNameMap[col];
              }
            });
          }
          columns.pickColumns = cols;
          break;
        }
        // SQL查询类服务
        default: {
          const fields = objectFields.map((c) => {
            const code = c?.split('.') || [];
            if (code?.length > 1) {
              return code.pop();
            }
            return c;
          });
          const cols: any[] = [];
          resultList.forEach((item: any) => {
            const data = { ...item };
            fields.forEach((field, index) => {
              if (field === data.code) {
                if (isCustom) {
                  // 动态列导出的时候以动态列配置的字段名称解析结果为准
                  data.name = nameMap[data.code] || data.name;
                }
                data.sort = index;
                cols.push(data);
              }
            });
          });
          columns.pickColumns = cols;
          break;
        }
      }
      if (!isCustom && customGroup && Object.keys(customGroup)?.length > 0) {
        // 多级出参中会记录父节点，获取分组时需要去掉父节点部分，只保留数据编码
        let list: any[] = objectFields;
        if (parentCode) {
          list = list.map((col) => {
            const code = col?.split('.');
            if (code?.length > 1) {
              return code.pop();
            }
            return code;
          });
        }
        // 配置了表头分组规则的，进行头部分组组装
        columns.groups = handleParseGroups({
          list,
          groupMap: customGroup,
          nameMap: colNameMap,
        });
      }
      if (
        isTemp &&
        objectFieldsTemp &&
        Object.keys(objectFieldsTemp)?.length > 0
      ) {
        columns = {
          ...columns,
          ...objectFieldsTemp,
        };
      }
      return columns;
    };

    // 获取到的服务出参列表
    const selectedRowMap: any = {};

    const exportSheetList = sheetList.map((c, i) =>
      createSheetItem(c, selectedKeyMap, i),
    );
    const columnsReq = Object.keys(selectedKeyMap).map((type) => {
      if (!selectedKeyMap[type] || !selectedKeyMap[type]?.length) {
        return undefined;
      }
      // 获取不同类型服务的出参列表
      let req;
      if (type === SERVICE_SOURCE.QUERY) {
        // SQL类型
        req = api
          .getSqlQueryColumnsList({
            serviceCodes: selectedKeyMap[type].join(','),
          })
          .then((res: any) => {
            const m: any = {};
            (res || []).forEach((c: any) => (m[c.serviceCode] = c.rowColumns));
            return m;
          });
      }
      if (type === SERVICE_SOURCE.OBJECT) {
        // 对象类型
        req = api
          .queryBusiObjectRowColumnsList({
            busiObjectIds: selectedKeyMap[type].join(','),
          })
          .then((res: any) => {
            const m: any = {};
            (res || []).forEach((c: any) => (m[c.busiObjectId] = c.rowColumns));
            return m;
          });
      }
      if (type === SERVICE_SOURCE.STD) {
        // 编排类服务
        req = api
          .queryServiceResponseColumnsList({
            serviceVersionIds: (selectedKeyMap[type] || []).join(','),
          })
          .then((res: any) => {
            const m: any = {};
            (res || []).forEach(
              (c: any) => (m[c.serviceVersionId] = getResponseAttr(c.response)),
            );
            return m;
          });
      }
      if (req) {
        req?.then((r: any) => {
          selectedRowMap[type] = r;
        });
      }
      return req;
    });

    let hide: any = () => {};
    hide = messageApi('loading', '正在导出中，请稍候...', 0);
    await Promise.all(columnsReq);
    const sheetItemList = await Promise.all(exportSheetList);
    const serviceExecuteParams = sheetItemList.map((sheet: ExportItem) => {
      const { parameters, objValue, objType, custSheetName, source } = sheet;
      const resultList = (selectedRowMap[source] || {})[objValue] || [];
      const columns = getExportColumns(sheet, resultList);
      return {
        objValue,
        objType,
        parameters,
        sheetName: custSheetName,
        ...columns,
      };
    });

    const fileName = `${custFileName}.xlsx`;
    const downloadIndex = `${fileName}_${Math.random()}`;

    return exportFileShowProgress({
      downloadIndex,
      messageApi,
      fileName,
      methodType: 'POST',
      fileOrigin: 'multiExport',
      async,
      params: {
        serviceExecuteParams,
        fileName,
      },
      getLocale,
    });
  };

  return {
    exportCustomDataFile: (
      sheetList: any[] = [],
      options: { async: 'async' | 'sync' | undefined; custFileName: string },
    ) => {
      const closeMessage = messageApi('loading', '正在导出中，请稍候...', 0);
      return exportFile(sheetList, options).finally(() => {
        closeMessage?.();
      });
    },
  };
};

export default useExportCustomDataFile;
