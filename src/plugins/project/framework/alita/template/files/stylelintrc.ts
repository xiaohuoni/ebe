import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    '.stylelintrc',
    'js',
    `
    module.exports = {
      extends: require.resolve('alita/stylelint'),
    };
 `,
  );

  return [[], file];
}
