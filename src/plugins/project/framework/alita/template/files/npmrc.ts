import { LXProjectOptions, ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    '.npmrc',
    '',
    `# registry=https://registry.npmmirror.com/
registry=http://npm.iwhalecloud.com:8081/repository/npm-taobao/`,
  );

  return [[], file];
}
