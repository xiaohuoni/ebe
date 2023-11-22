import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    '.npmrc',
    '',
    `
    registry=https://registry.npmjs.org/
    `,
  );

  return [[], file];
}
