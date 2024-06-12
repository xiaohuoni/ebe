import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import {
  getDSFilterName,
  transformValueDefined,
} from '../../core/utils/transformValueDefined';
import { filterObjectEmptyField } from '../../plugins/project/framework/alita/plugins/dataSource/utils';
import { GeneratorCallbackWithThenCatch } from '../utils';

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

  return config?.options?.models?.[id]?.frontendDatasourceContent;
};

export function reloadDataSource(generateParams: CMDGeneratorPrames): string {
  const { value, config } = generateParams;
  const { options } = value;
  // 检查数据源
  const dataSourceName = options?.dataSourceName;
  if (!dataSourceName) return `//【刷新数据源】数据源名称不存在，请检查配置`;

  const { isGlobalData = false } = options || {};
  const dsConfig = getDataSourceConfig(generateParams, dataSourceName);

  if (!dsConfig) {
    if (options?.isGlobalData) {
      return `//【刷新全局数据源】全局数据源${dataSourceName}不存在，请检查配置`;
    }
    return `//【刷新数据源】数据源${dataSourceName}不存在，请检查配置`;
  }

  const { source, id } = dsConfig;
  const { dataSourceReloadFilter } = options;

  const [payloadCode, topCode] = transformValueDefined(
    dataSourceReloadFilter,
    options.dataSourceName,
    true,
  );

  let callMethodCode = ``;
  const reloadFunctionName =
    config?.ir?.globalDataSource?.[options.dataSourceName]?.reloadFunctionName;

  // 生成服务
  if (source === 'service') {
    const {
      _capabilityCode,
      _apiCode,
      api,
      _source,
      _serviceId,
      versionCode,
      serviceCode,
      serviceMethod,
    } = dsConfig.config?.options?.service || {};
    if (isGlobalData) {
      callMethodCode = `
      ${reloadFunctionName}(
        ${parse2Var(
          filterObjectEmptyField({
            _capabilityCode,
            _apiCode,
            api,
            _source,
            _serviceId,
            versionCode,
            serviceCode,
            serviceMethod,
          }),
        )},
      ${payloadCode},
      globalData,
      )
      `;
    } else {
      callMethodCode = `reloadServiceDataSource(
        ${parse2Var(dataSourceName)},
        ${parse2Var(
          filterObjectEmptyField({
            _capabilityCode,
            _apiCode,
            api,
            _source,
            _serviceId,
            versionCode,
            serviceCode,
            serviceMethod,
          }),
        )},
      ${payloadCode}
    )
    `;
    }
  } else if (source === 'object') {
    if (isGlobalData) {
      callMethodCode = `
      ${reloadFunctionName}(
        ${parse2Var(dsConfig.config?.options?.url)},
        ${parse2Var({
          method: dsConfig.config?.options?.method,
          sceneCode: `$urlParam?.sceneCode ?? ''$`,
          busiObjectInstId: dsConfig.config?.options?.service?.appServiceId,
          actionId: id,
          busiObjectId: dsConfig.config?.options?.object?.busiObjectId,
        })},
        ${payloadCode},
        globalData,
      )
      `;
    } else {
      // 对象
      callMethodCode = `reloadObjectDataSource(
      ${parse2Var(dataSourceName)}, 
      ${parse2Var(dsConfig.config?.options?.url)}, 
      ${parse2Var({
        method: dsConfig.config?.options?.method,
        sceneCode: `$urlParam?.sceneCode ?? ''$`,
        busiObjectInstId: dsConfig.config?.options?.service?.appServiceId,
        actionId: id,
        busiObjectId: dsConfig.config?.options?.object?.busiObjectId,
      })},
    ${payloadCode}
  )
  `;
    }
  } else {
    if (isGlobalData) {
      callMethodCode = `
      ${reloadFunctionName}(
        ${payloadCode},
        globalData,
      )
      `;
    } else {
      // 自定义
      callMethodCode = `reloadCustomDataSource(${parse2Var(
        dataSourceName,
      )}, ${payloadCode});`;
    }
  }

  return (
    `${topCode}\n` +
    GeneratorCallbackWithThenCatch(callMethodCode, generateParams, {
      sync: options.sync,
      topFuncAsync: true,
    })
  );
}
