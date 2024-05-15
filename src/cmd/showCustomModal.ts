import { parse2Var } from '../core/utils/compositeType';
import { CMDGeneratorFunction } from '../core/utils/CMDGenerator';
import { CMDGeneratorPrames } from '../core/types';
export function showCustomModal({ value, platform, scope, config }: CMDGeneratorPrames): string {
  const { paramsObj, modalname, pageId } = value.options;
  const { callback1 } = value;
  const params = {
    pagePath: modalname || pageId,
    params: paramsObj || {},
  };
 const onOkString = Array.isArray(callback1) && callback1.length ? `onOk: (${callback1.params[0].name}) => {
    ${CMDGeneratorFunction(callback1, {}, platform, scope, config)}
  }` : '\n';
  return `ModalManagerRef?.current?.openModal({pagePath: '${params.pagePath}', lcdpParentRenderId: renderId, params: ${parse2Var(params.params)}, ${onOkString}})`;
}
