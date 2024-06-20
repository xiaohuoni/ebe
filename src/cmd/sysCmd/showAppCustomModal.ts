import { CMDGeneratorPrames } from '../../core/types';
import { CMDGeneratorEvent } from '../../core/utils/CMDGenerator';
import { parse2Var } from '../../core/utils/compositeType';
export function showAppCustomModal({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  const { paramsObj, modalname, pageId, id } = value.options;
  const { callback1, callback2 } = value;
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
        `onOk: ${CMDGeneratorEvent(
          callback1,
          { platform, params: [`okData_${id}`] },
          scope,
          config,
        )},`
      : '\n';

  const onCancelString =
    Array.isArray(callback2) && callback2.length
      ? // @ts-ignore
        `onCancel: ${CMDGeneratorEvent(
          callback2,
          { platform, params: [`okData_${id}`] },
          scope,
          config,
        )}`
      : '\n';

  const Drawer = config?.ir?.global?.pageTypeMap?.Drawer || {};
  let pagePathEnglishMapping =
    config?.ir?.global?.pagePathEnglishMapping?.Drawer || {};
  const isDrawer = Drawer[pageId];
  if (!isDrawer) {
    pagePathEnglishMapping =
      config?.ir?.global?.pagePathEnglishMapping?.Modal || {};
  }
  const pagePath = pagePathEnglishMapping[params.pagePath] ?? params.pagePath;
  return `// 打开${isDrawer ? '推拉窗' : '弹窗'}\n ModalManagerRef?.current?.${
    isDrawer ? 'openDrawer' : 'openModal'
  }({pagePath: '${pagePath}', lcdpParentRenderId: customActionId, params: ${parse2Var(
    params.params,
  )}, ${onOkString}${onCancelString}})`;
}
