import { CMDGeneratorPrames } from '../../core/types';

export function closePopover(generateParams: CMDGeneratorPrames): string {
  const { compId } = generateParams.value?.options || {};

  return `
    FIXME: closePopover指令待添加
  `;
}
