import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'attrSpecPage',
    'ts',
    `export const attrSpecPage = ${JSON.stringify(config?.attrSpecPage || [])}`,
  );

  return [['src', 'utils'], file];
}
