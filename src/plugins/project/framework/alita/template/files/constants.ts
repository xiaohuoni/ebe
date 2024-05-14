import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const isMobile = config?.platform === 'h5';
  const file = createResultFile(
    'constants',
    'ts',
    `export const PLATFORM: 'pc' | 'h5' = '${isMobile ? 'h5' : 'pc'}';
export const APPID = '${config?.appId}';`,
  );

  return [['src'], file];
}
