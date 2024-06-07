import { SERVICE_SOURCE } from '../../constants';
import { CMDGeneratorPrames } from '../../core/types';
import { parse2Var } from '../../core/utils/compositeType';
import {
  GetReqParamValues,
  transformValueDefined,
} from '../../core/utils/transformValueDefined';
import { filterObjectEmptyField } from '../../plugins/project/framework/alita/plugins/dataSource/utils';
import { GeneratorCallbackWithThenCatch } from '../utils';
import { processCustomParams } from '../utils/requestUtil';

export function apiRequest(generateParams: CMDGeneratorPrames): string {
  const { value } = generateParams;
  const { options } = value;
  const { _source } = options || {};
  const root = options?.apiRequestSetParams
    ? options.apiRequestSetParams[0]
    : undefined;

  // 请求入参
  let paramsCode;
  let topCode = '';

  if (root && root.isRoot) {
    if (Array.isArray(root.value?.type) && root.value.type.length > 0) {
      paramsCode = GetReqParamValues(root.value);
    } else {
      [paramsCode, topCode] = transformValueDefined(root.children, '', false);
    }
  } else {
    [paramsCode, topCode] = transformValueDefined(
      options.apiRequestSetParams,
      '',
      false,
    );
  }

  const { sceneCode, valueType = 'object', rootValue } = options;
  if (valueType === 'root' && (!root || !root?.isRoot)) {
    paramsCode = parse2Var(rootValue);
  }

  const newOptions = processCustomParams(options, {}, `$(${paramsCode})$`);

  let param =
    options.url === '/app/object/run' ||
    _source === SERVICE_SOURCE.INNER ||
    _source === SERVICE_SOURCE.PLATFORM
      ? parse2Var(newOptions.params)
      : parse2Var(
          filterObjectEmptyField({
            ...newOptions.params,
            sceneCode,
          }),
        );

  let extparam = '{}';

  if (_source === SERVICE_SOURCE.INNER || _source === SERVICE_SOURCE.PLATFORM) {
    extparam = parse2Var({
      _source,
      maybeNotStdResp: true,
    });
  }

  // 批量逻辑
  if (options.url === '/app/object/batchInsert') {
    return (
      `${topCode}\n` +
      GeneratorCallbackWithThenCatch(
        `api.batchInsert(
        ${parse2Var(options._source || '')},
        ${parse2Var(options.method || 'post')},
        ${parse2Var(options.url)},
        ${param},
        ${extparam}
      )`,
        generateParams,
        {
          sync: options.sync,
          params: {
            callback1: [`reply_${options.id}`],
          },
          topFuncAsync: topCode.length > 0,
        },
      )
    );
  }

  return (
    `${topCode}\n` +
    GeneratorCallbackWithThenCatch(
      `api.commonFetch(
      ${parse2Var(options.method || 'post')},
      ${parse2Var(options.url)},
      ${param},
      ${extparam}
    )`,
      generateParams,
      {
        sync: options.sync,
        params: {
          callback1: [`reply_${options.id}`],
        },
        topFuncAsync: topCode.length > 0,
      },
    )
  );
}
