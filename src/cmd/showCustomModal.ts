import { CMDGeneratorPrames } from '../core/types';
import { CMDGeneratorEvent } from '../core/utils/CMDGenerator';
import { parse2Var } from '../core/utils/compositeType';
export function showCustomModal({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  const { paramsObj, modalname, pageId } = value.options;
  const { callback1 } = value;
  const temParams = {
    ...paramsObj,
    // className: `dynamic_page_${pageId}, dynamic_pageView_${pageId}`
  };
  const params = {
    pagePath: modalname || pageId,
    params: temParams,
  };
  const onOkString =
    Array.isArray(callback1) && callback1.length
      ? // @ts-ignore
        `onOk: ${CMDGeneratorEvent(callback1, { platform }, scope, config)}`
      : '\n';
  return `// 打开弹窗\n ModalManagerRef?.current?.openModal({pagePath: '${
    params.pagePath
  }', lcdpParentRenderId: customActionId, params: ${parse2Var(
    params.params,
  )}, ${onOkString}})`;
}
