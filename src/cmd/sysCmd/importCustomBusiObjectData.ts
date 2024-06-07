import { CMDGeneratorPrames } from '../../core/types';
import { CMDGeneratorEvent } from '../../core/utils/CMDGenerator';
import { parse2Var } from '../../core/utils/compositeType';

export function importCustomBusiObjectData({
  value,
  config,
  platform,
  scope,
}: CMDGeneratorPrames): string {
  const { callback1, callback2, options } = value;
  const {
    busiObjectId,
    busiObjectFields,
    showOnly,
    name,
    customGroup,
    exception,
  } = options || {};

  const busiObjectFieldsStr = parse2Var(
    busiObjectFields?.map?.((field: any) => field),
  );
  // 指令添加上下文事件生成
  callback1.params = [
    { name: `resultObject_${options.id}` },
    { name: `resultMsg_${options.id}` },
  ];
  callback2.params = [
    { name: `resultObject_${options.id}` },
    { name: `resultMsg_${options.id}` },
  ];
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

  return `// 自定义导入业务对象数据
  ImportBusiObjModalRef.current.openWithCustFields({
    busiObjectId: ${parse2Var(busiObjectId)},
    busiObjectFields:  ${busiObjectFieldsStr},
    showOnly: ${parse2Var(showOnly)},
    fileName:  ${parse2Var(name)},
    // 配置态设置的表头分组
    customGroup:  ${parse2Var(customGroup)},
    // 异常配置
    exception:  ${parse2Var(exception)},
    ${onSuccessStr}
    ${onFailStr}
  });
  `;
}

export default importCustomBusiObjectData;
