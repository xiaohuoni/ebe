import { ResultDir } from '../../../../../core';
import { createResultDir } from '../../../../../core/utils/resultHelper';
import { runFileGenerator } from '../../../../../core/utils/templateHelper';
import app from './files/app';
import constants from './files/constants';
import editorconfig from './files/editorconfig';
import env from './files/env';
import gitignore from './files/gitignore';
import global from './files/global';
import globalless from './files/globalless';
import indexpage from './files/indexpage';
import indexpageless from './files/indexpageless';
import npmrc from './files/npmrc';
import prettierignore from './files/prettierignore';
import prettierrc from './files/prettierrc';
import proxy from './files/proxy';
import stylelintrc from './files/stylelintrc';
import tsconfig from './files/tsconfig';
import typings from './files/typings';
import withPageHOC from './files/withPageHOC';

export function generateStaticFiles(root = createResultDir('.')): ResultDir {
  runFileGenerator(root, app);
  runFileGenerator(root, constants);
  runFileGenerator(root, editorconfig);
  runFileGenerator(root, env);
  runFileGenerator(root, gitignore);
  runFileGenerator(root, global);
  runFileGenerator(root, globalless);
  runFileGenerator(root, indexpage);
  runFileGenerator(root, indexpageless);
  runFileGenerator(root, npmrc);
  runFileGenerator(root, prettierignore);
  runFileGenerator(root, prettierrc);
  runFileGenerator(root, proxy);
  runFileGenerator(root, stylelintrc);
  runFileGenerator(root, tsconfig);
  runFileGenerator(root, typings);
  runFileGenerator(root, withPageHOC);
  return root;
}
