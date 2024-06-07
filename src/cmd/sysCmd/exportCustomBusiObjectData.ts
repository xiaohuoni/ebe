import { CMDGeneratorPrames } from '../../core/types';
import { CMDGeneratorEvent } from '../../core/utils/CMDGenerator';
import { parse2Var } from '../../core/utils/compositeType';
export function exportCustomBusiObjectData({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  const { callback1, callback2 } = value;

  const {
    busiObjectFilterParams,
    paramsObj,
    busiObjectId,
    busiObjectFields,
    tempParams,
    exportType,
    async,
    custFileName,
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
  return `
      // 自定义导出业务对象数据
      ExpBusiObjModalRef.current.openWithCustFields({
        busiObjectId: ${parse2Var(busiObjectId)},
        busiObjectFields: ${parse2Var(busiObjectFields)},
        tempParams: ${parse2Var(tempParams)},
        exportType: ${parse2Var(exportType)},
        async: ${parse2Var(async)},
        attrs:${attrs},
        custFileName: ${parse2Var(custFileName)},
        ${onSuccessStr}
        ${onFailStr}
      });
  `;
}

export default exportCustomBusiObjectData;
