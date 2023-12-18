import { ResultDir, IParseResult } from '../../../../../core';
import { createResultDir } from '../../../../../core/utils/resultHelper';
import { runFileGenerator } from '../../../../../core/utils/templateHelper';
import constants from './files/constants';
import editorconfig from './files/editorconfig';
import env from './files/env';
import gitignore from './files/gitignore';
import global from './files/global';
import globalless from './files/globalless';
import indexpage from './files/indexpage';
import indexpageless from './files/indexpageless';
import modalindex from './files/modalindex';
import modalmodal from './files/modalmodal';
import modaltypes from './files/modaltypes';
import npmrc from './files/npmrc';
import popover from './files/popover';
import popoverwrapper from './files/popoverwrapper';
import prettierignore from './files/prettierignore';
import prettierrc from './files/prettierrc';
import proxy from './files/proxy';
import stylelintrc from './files/stylelintrc';
import tsconfig from './files/tsconfig';
import typings from './files/typings';
import withPageHOC from './files/withPageHOC';

export function generateStaticFiles(
  parseResult: IParseResult,
  root = createResultDir('.'),
): ResultDir {
  const hasIndex = !!parseResult?.staticFiles?.pageIdMapping?.['/index'];
  runFileGenerator(root, constants);
  runFileGenerator(root, editorconfig);
  runFileGenerator(root, env);
  runFileGenerator(root, gitignore);
  runFileGenerator(root, global);
  runFileGenerator(root, globalless);
  // index 定义了就不生成默认的 index
  if (!hasIndex) {
    runFileGenerator(root, indexpage);
    runFileGenerator(root, indexpageless);
  }
  runFileGenerator(root, modalindex);
  runFileGenerator(root, modalmodal);
  runFileGenerator(root, modaltypes);
  runFileGenerator(root, npmrc);
  runFileGenerator(root, popover);
  runFileGenerator(root, popoverwrapper);
  runFileGenerator(root, npmrc);
  runFileGenerator(root, prettierignore);
  runFileGenerator(root, prettierrc);
  runFileGenerator(root, proxy, parseResult?.staticFiles);
  runFileGenerator(root, stylelintrc);
  runFileGenerator(root, tsconfig);
  runFileGenerator(root, typings);
  runFileGenerator(root, withPageHOC);
  return root;
}
