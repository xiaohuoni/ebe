import { ResultDir } from '../../../../../core';

import { createResultDir } from '../../../../../core/utils/resultHelper';
import { runFileGenerator } from '../../../../../core/utils/templateHelper';
import editorconfig from './files/editorconfig';
import env from './files/env';
import gitignore from './files/gitignore';
import npmrc from './files/npmrc';
import prettierignore from './files/prettierignore';
import prettierrc from './files/prettierrc';
import proxy from './files/proxy';
import stylelintrc from './files/stylelintrc';
import tsconfig from './files/tsconfig';
import typings from './files/typings';

export function generateStaticFiles(root = createResultDir('.')): ResultDir {
  runFileGenerator(root, editorconfig);
  runFileGenerator(root, env);
  runFileGenerator(root, gitignore);
  runFileGenerator(root, npmrc);
  runFileGenerator(root, prettierignore);
  runFileGenerator(root, prettierrc);
  runFileGenerator(root, proxy);
  runFileGenerator(root, stylelintrc);
  runFileGenerator(root, tsconfig);
  runFileGenerator(root, typings);
  return root;
}
