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
export const APPID = '${config?.appId}';

// 数组操作类型 operateType
export const ARRAY_OPERATE_TYPE = {
  ADD: 0,
  // 新增元素
  UPDATE: 1,
  // 更新元素
  DELETE: 2,
  // 删除元素
  REPLACE: 3, // 替换数据
} as const;
`,
  );

  return [['src'], file];
}
