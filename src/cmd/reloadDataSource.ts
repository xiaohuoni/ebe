import { CMDGeneratorPrames } from '../core/types';
import { parse2Var } from '../core/utils/compositeType';
import {
  getDSFilterName,
  transformValueDefined,
} from '../core/utils/transformValueDefined';
import { filterObjectEmptyField } from '../plugins/project/framework/alita/plugins/dataSource/utils';
import { GeneratorCallbackWithThenCatch } from './utils';

export function reloadDataSource(generateParams: CMDGeneratorPrames): string {
  const { value, config } = generateParams;
  const { options } = value;

  // TODO: 全局数据源
  if (options?.isGlobalData)
    return `//【刷新全局数据源】全局数据源指令暂不支持`;

  // 检查数据源
  const dataSourceName = options?.dataSourceName;
  if (!dataSourceName) return `//【刷新数据源】数据源名称不存在，请检查配置`;

  // 检查是否配置了该数据源
  const dataSourceConfig = config?.ir?.dataSource;
  const dsConfig = dataSourceConfig?.find((item) =>
    [item.name, getDSFilterName(item.name)].includes(dataSourceName),
  );
  if (!dsConfig)
    return `//【刷新数据源 数据源${dataSourceName}不存在，请检查配置\n`;

  const { source, id } = dsConfig;
  const { dataSourceReloadFilter } = options;

  const payloadCode = transformValueDefined(
    dataSourceReloadFilter,
    options.dataSourceName,
    true,
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
  )
  `;
  } else {
    // 自定义
    callMethodCode = `reloadCustomDataSource(${parse2Var(
      dataSourceName,
    )}, ${payloadCode});`;
  }

  return GeneratorCallbackWithThenCatch(callMethodCode, generateParams, {
    sync: options.sync,
  });
}
