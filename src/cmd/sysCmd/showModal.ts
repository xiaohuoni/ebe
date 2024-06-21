import { CMDGeneratorPrames } from '../../core/types';
import { CMDGeneratorEvent } from '../../core/utils/CMDGenerator';
import { parse2Var } from '../../core/utils/compositeType';
import { getImportFrom } from '../../utils/depsHelper';
export function showModal({
  value,
  platform,
  scope,
  config,
}: CMDGeneratorPrames): string {
  const { content, title, okText, cancelText, type } = value.options;
  const { callback1, callback2 } = value;

  const onOkString =
    Array.isArray(callback1) && callback1.length
      ? // @ts-ignore
        `onOk: ${CMDGeneratorEvent(callback1, { platform }, scope, config)},`
      : '\n';
  const onCancelString =
    Array.isArray(callback2) && callback2.length
      ? // @ts-ignore
        `onCancel: ${CMDGeneratorEvent(callback2, { platform }, scope, config)}`
      : '\n';

  config?.ir?.deps?.push(getImportFrom('@/utils/messageApi', 'Modal', true));

  return `//消息框提示 \n Modal.${type}({type: '${type}', title: ${parse2Var(
    title,
  )}, content: ${parse2Var(content)}, okText: ${parse2Var(
    okText || '确定',
  )}, cancelText: ${parse2Var(
    cancelText || '取消',
  )}, ${onOkString}${onCancelString}})`;
}
