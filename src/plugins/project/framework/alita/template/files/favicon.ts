import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const applicationIcon = config?.appInfo?.applicationIcon?.replace(
    /^data:image\/png;base64,/,
    '',
  );
  const file = createResultFile('favicon', 'ico', applicationIcon, {
    base64: true,
  });
  return [['public'], file];
}
