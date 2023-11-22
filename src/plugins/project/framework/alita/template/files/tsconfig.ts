import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'tsconfig',
    'json',
    `
    {
      "compilerOptions": {
        "jsx": "react"
      },
      "extends": "./src/.umi/tsconfig.json"
    }
 `,
  );

  return [[], file];
}
