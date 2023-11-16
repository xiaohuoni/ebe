import { ResultDir } from '../../../../../core';

import { createResultDir } from '../../../../../core/utils/resultHelper';
import { runFileGenerator } from '../../../../../core/utils/templateHelper';

import gitignore from './files/gitignore';

export function generateStaticFiles(root = createResultDir('.')): ResultDir {
  runFileGenerator(root, gitignore);
  return root;
}
