import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    '.prettierignore',
    '',
    `node_modules
.umi
.umi-production
*.png
*.jpg
*.svg
.editorconfig
.env
.prettierignore
.gitkeep
.DS_Store
.npmrc
.eslintignore
.gitignore
 `,
  );

  return [[], file];
}
