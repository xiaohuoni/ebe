import { CMDGeneratorPrames } from '../core/types';
import { CMDGeneratorFunction } from '../core/utils/CMDGenerator';
import { parse2Var } from '../core/utils/compositeType';
import {
  getDSFilterName,
  transformValueDefined,
} from '../core/utils/transformValueDefined';
import { filterObjectEmptyField } from '../plugins/project/framework/alita/plugins/dataSource/utils';

export function reloadDataSource({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  const { options, callback1, callback2 } = value;

  // 检查数据源
  const dataSourceName = options?.dataSourceName;
  if (!dataSourceName) return `//【刷新数据源】数据源名称不存在，请检查配置`;

  // 检查是否配置了该数据源
  const dataSourceConfig = config?.ir?.dataSource;
  const dsConfig = dataSourceConfig?.find((item) =>
    [item.name, getDSFilterName(item.name)].includes(dataSourceName),
  );
  if (!dsConfig)
    return `//【刷新数据源 数据源${dataSourceName}不存在，请检查配置`;

  const { source, id } = dsConfig;
  const { dataSourceReloadFilter } = options;

  const payloadCode = transformValueDefined(
    dataSourceReloadFilter,
    options.dataSourceName,
    true,
  );

  const callback1Code = CMDGeneratorFunction(
    callback1,
    {},
    platform,
    scope,
    config,
  );

  const callback2Code = CMDGeneratorFunction(
    callback2,
    {},
    platform,
    scope,
    config,
  );

  let callMethodCode = ``;

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
  } else if (source === 'object') {
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
  );
  `;
  } else {
    // 自定义
    callMethodCode = `reloadCustomDataSource(${parse2Var(
      dataSourceName,
    )}, ${payloadCode});`;
  }
  return [
    callMethodCode,
    callback1Code
      ? `then(() => {
      // 成功回调
      ${callback1Code}
    })`
      : '',

    callback2Code
      ? `catch(() => {
      // 成功回调
      ${callback2Code}
    })`
      : '',
  ]
    .filter(Boolean)
    .join('.');
}
