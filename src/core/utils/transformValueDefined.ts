import { get, setWith } from "lodash";
import TreeParser from "./TreeParser";
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray";
import { isJSVar } from "./deprecated";
import { parse2Var } from "./compositeType";

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
      targetVal = parse2Var(valueCode);
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
      let valueStr = parse2Var(type[1]);
      if (valueCode) {
        valueStr = `${valueStr}?.${valueCode}`;
      }
      targetVal = valueStr;
      break;
    }
    default:
      targetVal = JSON.stringify('');
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
) => {

  const parser = new TreeParser();

  // TODO: 这段代码需要确认下是否需要
  if (dataSourceName) {
    const orderFields: string[] = paramsConfig.filter((it: any) => ['orderByAsc', 'orderByDesc'].includes(it.code));
    // 若内置排序字段，都没有值，则才取数据源初始排序值
    if (!orderFields.length) {
      parser.appendProperty('orderByAsc', `data?.${getDSFilterName(dataSourceName)}?.orderByAsc`, '');
      parser.appendProperty('orderByDesc', `data?.${getDSFilterName(dataSourceName)}?.orderByDesc`, '');
    }
  }

  const code = parser.stringify({
    type: 'object',
    children: paramsConfig,
    code: dataSourceName,
  }, ({ item }, stop) => {
    
    if (item?.value?.type?.length) {
      if (item.type === 'object' ) {
        stop();
      }
      return GetReqParamValues(item.value);
    }
  });

  return code;
};
