import { CMDGeneratorPrames } from '../core/types';
import { CMDGeneratorEvent } from '../core/utils/CMDGenerator';
import { parse2Var } from '../core/utils/compositeType';
import { GeneratorCallbackWithThenCatch } from './utils';

export function exportSQLServiceData({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames) {
  const { callback1, callback2 } = value;
  const {
    busiObjectFilterParams,
    paramsObj,
    custFileName,
    sqlServiceCode,
    sqlServiceFields,
    tempParams,
    exportType,
    async,
  } = value.options || {};
  let attrs: any;
  if (busiObjectFilterParams === 'object') {
    attrs = parse2Var(paramsObj);
  } else {
    attrs = parse2Var(busiObjectFilterParams);
  }
  const onSuccessStr =
    Array.isArray(callback1) && callback1.length
      ? // @ts-ignore
        `onSuccess: ${CMDGeneratorEvent(
          callback1,
          { platform },
          scope,
          config,
        )},`
      : '\n';

  const onFailStr =
    Array.isArray(callback2) && callback2.length
      ? // @ts-ignore
        `onFail: ${CMDGeneratorEvent(callback2, { platform }, scope, config)},`
      : '\n';

  return GeneratorCallbackWithThenCatch(
    `
  // 导出SQL查询服务
    new Promise<any>((resolve, reject) => {
      ExpSQLServiceModalRef.current.openWithCustFields({
        sqlServiceCode: ${parse2Var(sqlServiceCode)},
        sqlServiceFields: ${parse2Var(sqlServiceFields)},
        tempParams: ${parse2Var(tempParams)},
        exportType: ${parse2Var(exportType)},
        async: ${parse2Var(async)},
        attrs:${attrs},
        custFileName: ${parse2Var(custFileName)},
        ${onSuccessStr}
        ${onFailStr}
      });
    })
  `,
    {
      value,
      platform,
      scope,
      config,
    },
  );
}
