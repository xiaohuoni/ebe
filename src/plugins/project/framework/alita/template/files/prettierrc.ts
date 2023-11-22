import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    '.prettierrc',
    'js',
    `
    const prettier = require('alita/prettier');

    module.exports = {
      ...prettier,
    };
    
 `,
  );

  return [[], file];
}
