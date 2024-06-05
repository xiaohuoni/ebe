import { parse2Var } from './compositeType';
import TreeParser from './TreeParser';

const getVarName = (type: string[], topVarSuffix = '') => {
  return [...type.slice(1), topVarSuffix].filter(Boolean).join('_');
};

const creatorId = () => {
  let id = 1;
  return () => {
    // 避免id过长，当id长度超过9999时，从0开始计算
    if (id > 9999) {
      id = 0;
    }
    id += 1;
    return `${id}`;
  };
};

const createId = creatorId();

export const getDSFilterName = (name: string) => `${name}Filter`;
export const GetReqParamValues = (
  value: { type: string[]; code: string },
  context?: { topVarSuffix?: string },
) => {
  const { type = [], code: valueCode } = value;
  let targetVal: string = 'undefined';
  switch (type[0]) {
    case 'globaldatasource':
    case 'datasource': {
      const prefix = type[0] === 'globaldatasource' ? 'globalData' : 'data';
      const [dsName, place] = [type[1], type[2]];
      const dataSourceName =
        place === 'filterData' ? getDSFilterName(dsName) : dsName;
      targetVal = valueCode
        ? `${prefix}?.${dataSourceName}?.${valueCode}`
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

    case 'Dform':
    case 'form':
      {
        const [typeCode, compId, methodName] = type;
        if (methodName === 'getFieldsValue') {
          const varName = getVarName(type, context?.topVarSuffix);
          const varValue = `const ${varName} = await getFormValue(${parse2Var(
            compId,
          )})`;

          if (valueCode) {
            return [`${varName}?.${valueCode}`, varValue];
          }

          return [varName, varValue];
        }
        if (methodName === 'validateFields') {
          const varName = getVarName(type, context?.topVarSuffix);
          const varValue = `const ${varName} = await validateForm(${parse2Var(
            compId,
          )})`;

          if (valueCode) {
            return [`${varName}?.${valueCode}`, varValue];
          }

          return [varName, varValue];
        }
      }
      break;
    default:
      targetVal = JSON.stringify('');
      // childParams[code] = '';
      break;
  }
  return [targetVal];
};

export const parseDSSetVal = (options: any) => {
  const { dataSourceSetValue, onlySetPatch, targetDataSourcePaths } =
    options || {};
  if (dataSourceSetValue?.length) {
    // 根据节点路径过滤出需要设置的对象值
    if (targetDataSourcePaths?.length > 0) {
      const attrs: string[] = targetDataSourcePaths.map(
        (item: { attrId: any }) => item.attrId,
      );
      const handleList = (list: any[]) => {
        if (list?.length > 0) {
          list.forEach((item) => {
            if (attrs.includes(item.attrId)) {
              // 如果为最后一个
              if (
                attrs.findIndex((str) => str === item.attrId) ===
                attrs.length - 1
              ) {
                item?.children?.forEach?.((child: { value: { type: any } }) => {
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
      dataSourceSetValue.forEach((d: { value: { type: string | any[] } }) => {
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
  paramsConfig: any[] = [],
  dataSourceName: string,
  isOrder: boolean = false,
) => {
  const parser = new TreeParser({
    alias: {
      getType: (item) =>
        item.attrType && item.attrType !== 'field' ? 'attrType' : 'type',
    },
  });

  const topVarSuffix = createId();

  // TODO: 这段代码需要确认下是否需要
  if (dataSourceName && isOrder) {
    const orderFields: string[] = paramsConfig.filter((it: any) =>
      ['orderByAsc', 'orderByDesc'].includes(it.code),
    );
    // 若内置排序字段，都没有值，则才取数据源初始排序值
    if (!orderFields.length) {
      parser.appendProperty(
        'orderByAsc',
        `data?.${getDSFilterName(dataSourceName)}?.orderByAsc`,
        '',
      );
      parser.appendProperty(
        'orderByDesc',
        `data?.${getDSFilterName(dataSourceName)}?.orderByDesc`,
        '',
      );
    }
  }

  const topSet = new Set();

  const code = parser.stringify(
    {
      type: 'object',
      children: paramsConfig,
      code: dataSourceName,
    },
    ({ item }, stop) => {
      if (item?.value?.type?.length) {
        if (item.type === 'object') {
          stop();
        }
        const [targetVal, top] = GetReqParamValues(item.value, {
          topVarSuffix: topVarSuffix,
        });

        if (top) {
          topSet.add(top);
        }
        return targetVal;
      }
    },
  );

  return [code, [...topSet].join(';')];
};
