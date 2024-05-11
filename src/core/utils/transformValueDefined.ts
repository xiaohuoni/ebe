import { get, setWith } from "lodash";

export const getDSFilterName = (name: string) => `${name}Filter`;
export const GetReqParamValues = (value: { type: string[]; code: string }) => {
  const { type = [], code: valueCode } = value;
  let targetVal: string = 'undefined';
  switch (type[0]) {
    case 'globaldatasource':
    case 'datasource': {
      const [dsName, place] = [type[1], type[2]];
      const dataSourceName =
        place === 'filterData' ? getDSFilterName(dsName) : dsName;
      targetVal = valueCode
        ? `${dataSourceName}?.${valueCode}`
        : `${valueCode}`;
      break;
    }
    case '$function$':
    case 'EMPTY_DATA':
    case 'functionLib':
    case 'functorsMap':
    case 'customize': {
      if (typeof valueCode === 'string' && /^\$.*\$$/.test(valueCode)) {
        targetVal = valueCode.slice(1, valueCode.length - 1);
      } else {
        targetVal = valueCode;
      }
      break;
    }
    case 'page': {
      switch (type[1]) {
        case 'url': {
          targetVal = `urlParam?.${valueCode}`;
          break;
        }
        default:
          break;
      }
      break;
    }
    case 'context': {
      let valueStr = type[1];
      if (/^\$.*\$$/.test(valueStr)) {
        valueStr = valueStr.slice(1, valueStr.length - 1);
      }
      if (valueCode) {
        valueStr = `${valueStr} === null || ${valueStr} === void 0 ? void 0 : ${valueStr}.${valueCode}`;
      }
      targetVal = valueStr;
      break;
    }
    default:
      targetVal = '';
      // childParams[code] = '';
      break;
  }
  return targetVal;
};

export const parseDSSetVal = (options: any) => {
  const { dataSourceSetValue, onlySetPatch, targetDataSourcePaths } = options || {};
  if (dataSourceSetValue?.length) {
    // 根据节点路径过滤出需要设置的对象值
    if (targetDataSourcePaths?.length > 0) {
      const attrs: string[] = targetDataSourcePaths.map((item: { attrId: any; }) => item.attrId);
      const handleList = (list: any[]) => {
        if (list?.length > 0) {
          list.forEach(item => {
            if (attrs.includes(item.attrId)) {
              // 如果为最后一个
              if (attrs.findIndex(str => str === item.attrId) === attrs.length - 1) {
                item?.children?.forEach?.((child: { value: { type: any; }; }) => {
                  if (onlySetPatch && !child?.value?.type) {
                    // @ts-ignore
                    delete child.value;
                  }
                });
              } else {
                handleList(item?.children || []);
              }
            } else {
              delete item.value;
            }
          });
        }
      };
      handleList(dataSourceSetValue);
    } else {
      dataSourceSetValue.forEach((d: { value: { type: string | any[]; }; }) => {
        if (d?.value?.type?.length === 0) {
          // @ts-ignore
          delete d.value;
        } else if (onlySetPatch && !d?.value?.type) {
          // @ts-ignore
          delete d.value;
        }
      });
    }
  }
  return dataSourceSetValue;
}; 

export const transformValueDefined = (
  paramsConfig = [],
  dataSourceName: string,
  deep: boolean = false
) => {
  let reqParams: string = '{';


  const getReqParams = (configs: any[] = [], path: string[] = [], top: boolean = false) => {
    let result = ``;
    for (let index = 0; index < configs?.length; index += 1) {
      const _conf: any = configs[index];
      const {
        code,
        value = {},
        attrType,
        type: dataType,
        children,
      } = _conf;
      // attrType为服务入参属性类型 包含 对象(object)、数组（array）、属性（field），type为数据类型，对于程序统一用type进行类型判断
      const _dataType = attrType && attrType !== 'field' ? attrType : dataType;

      let _vals;
      try {
        // 属性节点有配置值，解析该属性值
        if (value.type?.length) {
          _vals = GetReqParamValues(value);
          // 类型转换
          if (
            ['objectArray', 'array'].includes(_dataType)
          ) {
            _vals = !_vals ? '[]' : `[${_vals}]`;
          }

          result += `${code}: ${_vals},`;
          // setWith(reqParams, [...path, code], _vals);
        } else if (
          (children?.length && _dataType === 'object') ||
          (children?.length &&
            _dataType === 'objectArray' &&
            _conf.associatedObjectCode) || deep
        ) {
          // 节点没有配置值并为对象时遍历该对象属性
          const t = getReqParams(children, [...path, code]);
          result += `${code}: {${t},`;
        }
      } catch (err: any) {
      }
    }
    return `${result}${top ? '' : '}'}`;
  };

  // 刷新数据源时，有dataSourceName
  if (dataSourceName) {
    const orderFields: string[] = paramsConfig.filter((it: any) => ['orderByAsc', 'orderByDesc'].includes(it.code));
    // 若内置排序字段，都没有值，则才取数据源初始排序值
    if (!orderFields.length) {
      reqParams += `
        orderByAsc: data.${getDSFilterName(dataSourceName)},
        orderByDesc: data.${getDSFilterName(dataSourceName)},
      `;
    }
  }

  reqParams += `${getReqParams(paramsConfig)}`;

  return reqParams;
};
