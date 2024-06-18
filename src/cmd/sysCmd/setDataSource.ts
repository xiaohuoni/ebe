import { last } from 'lodash';
import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import {
  getDSFilterName,
  parseDSSetVal,
  transformValueDefined,
} from '../../core/utils/transformValueDefined';
import { GeneratorCallbackWithThenCatch } from '../utils';

// 数组操作类型 operateType
const ARRAY_OPERATE_TYPE = {
  ADD: 0, // 新增元素
  UPDATE: 1, // 更新元素
  DELETE: 2, // 删除元素
  REPLACE: 3, // 替换数据
};

/**
 * itemLocateKey 枚举，按照索引 字段  自定义函数
 */
const ITME_LOCAL_TYPE = {
  index: 'index', // 对应取值字段 itemIndex
  key: 'key', // 对应取值字段：key itemLocateKey  value itemLocateKeyValue
  custom: 'custom', // 对应取值字段： itemLocateCustomFunction: { code: code,  originCode }
};

const getTargetsPath = (config: any, targetDataSourcePaths: any[]) => {
  const pathMap: Record<string, string[]> = {};

  const allPathMap: Record<string, any> = {
    [config.id]: {
      attrId: config.id,
      code: config.name,
      name: config.description,
      type: config.type,
      initialData: config.rootOutParams,
      path: [],
    },
  };

  const loopCode = (list: any[], path: string[]) => {
    list?.forEach?.((item) => {
      allPathMap[item.attrId] = {
        ...item,
        path,
      };
      loopCode(item?.children || [], [...path, item.code]);
    });
  };
  loopCode(config.outParams || [], []);

  targetDataSourcePaths?.forEach((item) => {
    const { attrId } = item;
    const t = allPathMap[attrId];
    pathMap[attrId] = t.path;
    item.fieldType = t.type;
  });
  return {
    pathMap,
    allPathMap,
  };
};

const getArrayFilterCbCode = (item: any) => {
  let filterCode = '';
  let errorMsg = '';
  const {
    itemLocateType,
    itemIndex,
    itemLocateKey,
    itemLocateKeyValue,
    itemLocateCustomFunction,
    attrId,
  } = item;
  switch (itemLocateType) {
    case ITME_LOCAL_TYPE.key:
      if (!itemLocateKey) {
        errorMsg = `配置中缺少【行属性】`;
        break;
      }
      filterCode = `
        (row: any, index: number) => row.${itemLocateKey} == ${parse2Var(
        itemLocateKeyValue,
      )}
      `;
      break;
    case ITME_LOCAL_TYPE.custom:
      if (Array.isArray(itemLocateCustomFunction.originCode)) {
        filterCode = `
          (item_${attrId || ''}, index_${attrId}) => {
            ${itemLocateCustomFunction.originCode.join('\n')};
            return main(item_${attrId || ''}, index_${attrId});
          }
        `;
      } else {
        errorMsg = `配置中缺少【自定义配置】配置`;
      }

      break;
    case ITME_LOCAL_TYPE.index:
    default:
      if (itemIndex !== undefined) {
        filterCode = `
        (row: any, index: number) => index == Number(${parse2Var(itemIndex)})
        `;
      } else {
        errorMsg = `配置中缺少【索引编码】配置`;
      }
      break;
  }
  return {
    errorMsg,
    filterCode,
  };
};

const findNode = (list: any[], attrId: string) => {
  let result: any = null;

  const loop = (arr?: any[]) => {
    arr?.forEach((item) => {
      if (item.attrId === attrId) {
        result = item;
      } else {
        loop(item.children);
      }
    });
  };

  loop(list);
  return result;
};

/**
 * 检查是否存在该数据源
 */
const getDataSourceConfig = (
  generateParams: CMDGeneratorPrames,
  dataSourceName: string,
) => {
  const { value, config } = generateParams;
  const { options } = value;

  const { isGlobalData = false } = options;

  if (!isGlobalData) {
    const dataSourceConfig = config?.ir?.dataSource;
    const dsConfig = dataSourceConfig?.find((item) =>
      [item.name, getDSFilterName(item.name)].includes(dataSourceName),
    );
    return dsConfig;
  }

  if (
    !Object.keys(config?.ir?.globalDataSource || {}).includes(dataSourceName)
  ) {
    return null;
  }

  const { id } = config?.ir?.globalDataSource[dataSourceName];

  return config?.options?.models?.[id];
};

export function getSetDataSource(generateParams: CMDGeneratorPrames): string {
  const { value, platform, scope, config } = generateParams;
  const { options, callback1, callback2 } = value;

  const { isGlobalData } = options;
  // 检查数据源
  const dataSourceName = options?.dataSourceName;
  if (!dataSourceName) return `//【更新数据源】数据源名称不存在，请检查配置\n`;

  const dsConfig = getDataSourceConfig(generateParams, dataSourceName);
  if (!dsConfig) {
    if (isGlobalData) {
      return `//【更新全局数据源】全局数据源${dataSourceName}不存在，请检查配置\n`;
    }
    return `//【更新数据源】数据源${dataSourceName}不存在，请检查配置\n`;
  }

  // 页面数据源检查是否配置了该数据源
  const { onlySetPatch, targetDataSourcePaths = [] } = options;

  const dSSetVals = parseDSSetVal(options);
  let [payloadCode, topCode]: string[] = [];
  [payloadCode, topCode] = transformValueDefined(
    dSSetVals,
    options.dataSourceName,
    false,
  );

  if (targetDataSourcePaths.length === 0) {
    targetDataSourcePaths.push({
      attrId: `${dsConfig.id}`,
      onlySetPatch,
      operateType: options.operateType,
      itemLocateType: options.itemLocateType,
      itemLocateKey: options.itemLocateKey,
      itemLocateKeyValue: options.itemLocateKeyValue,
      itemIndex: options.itemIndex,
      itemLocateCustomFunction: options.itemLocateCustomFunction,
      fieldType: dsConfig.type,
      newData: options.newData,
    });
  }

  const getPath = (path: string[]) => {
    return parse2Var([`${dataSourceName}`, ...path].join('.'));
  };

  const { pathMap, allPathMap } = getTargetsPath(
    dsConfig,
    targetDataSourcePaths,
  );
  const lastItem = last<any>(targetDataSourcePaths);
  const { attrId, fieldType, operateType, newData } = lastItem;
  const path = pathMap[attrId];

  let updateParams = {
    path: getPath(path),
    value: payloadCode,
    predicate: '',
    operateType: '',
    type: parse2Var(
      ['objectArray', 'array'].includes(fieldType) ? 'array' : 'object',
    ),
    onlySetPatch,
  } as Record<string, any>;

  if (!isGlobalData) {
    updateParams.name = parse2Var(dataSourceName);
  } else {
    updateParams.globalData = 'globalData';
  }

  if (['objectArray', 'array'].includes(fieldType)) {
    updateParams.operateType = operateType;
    updateParams.path = getPath([...path]);
    if (
      [ARRAY_OPERATE_TYPE.UPDATE, ARRAY_OPERATE_TYPE.ADD].includes(operateType)
    ) {
      let node = findNode(dSSetVals, attrId);
      // 再去根节点查一下是否存在
      if (attrId === `${dsConfig.id}`) {
        node = { children: options.dataSourceSetValue, code: dataSourceName };
      }

      if (!node) {
        return `// FIXME: 更新数据源出错! ${dataSourceName}: 不存在的节点id[${attrId}]
          console.warn('不存在的节点id[${attrId}]');
        `;
      }
      [updateParams.value, topCode] = transformValueDefined(
        node.children,
        node.code,
        false,
      );
    }
    // 数组
    if (operateType === ARRAY_OPERATE_TYPE.DELETE) {
      let deleteCb = getArrayFilterCbCode(lastItem);
      if (deleteCb.errorMsg) {
        return `// FIXME: 更新数据源出错! ${dataSourceName}: ${deleteCb.errorMsg}
          console.warn('${deleteCb.errorMsg}');
        `;
      }
      updateParams.predicate = deleteCb.filterCode;
    } else if (lastItem.operateType === ARRAY_OPERATE_TYPE.REPLACE) {
      updateParams.value = parse2Var(newData);
    } else if (lastItem.operateType === ARRAY_OPERATE_TYPE.UPDATE) {
      const { errorMsg, filterCode } = getArrayFilterCbCode(lastItem);
      if (errorMsg) {
        return `// FIXME: 更新数据源出错! ${dataSourceName}: ${errorMsg}
          console.warn('${errorMsg}');
        `;
      }
      updateParams.predicate = filterCode;
    }
  }

  if (isGlobalData) {
    return (
      `${topCode}\n` +
      GeneratorCallbackWithThenCatch(
        `
    // 更新全局数据源 ${dataSourceName}
    ${config?.ir?.globalDataSource?.[dataSourceName]?.updateFunctionName}({
      ${Object.keys(updateParams)
        .filter((key) => updateParams[key as keyof typeof updateParams] !== '')
        .map(
          (key) => `${key}: ${updateParams[key as keyof typeof updateParams]}`,
        )}
    })`,
        generateParams,
        {
          topFuncAsync: topCode?.length > 0,
        },
      )
    );
  }

  return (
    `${topCode}\n` +
    GeneratorCallbackWithThenCatch(
      `
  // 更新数据源 ${dataSourceName}
  updateData({
    ${Object.keys(updateParams)
      .filter((key) => updateParams[key as keyof typeof updateParams] !== '')
      .map(
        (key) => `${key}: ${updateParams[key as keyof typeof updateParams]}`,
      )}
  })`,
      generateParams,
      {
        topFuncAsync: topCode?.length > 0,
      },
    )
  );
}
