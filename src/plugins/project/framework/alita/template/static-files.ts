import { ResultDir, IParseResult, PostProcessor } from '../../../../../core';
import { createResultDir } from '../../../../../core/utils/resultHelper';
import { runFileGenerator } from '../../../../../core/utils/templateHelper';
import constants from './files/constants';
import editorconfig from './files/editorconfig';
import env from './files/env';
import factory from './files/factory';
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
  postProcessors: PostProcessor[],
  root = createResultDir('.'),
): ResultDir {
  const hasIndex = !!parseResult?.staticFiles?.pageIdMapping?.['/index'];
  runFileGenerator(postProcessors, root, constants);
  runFileGenerator(postProcessors, root, editorconfig);
  runFileGenerator(postProcessors, root, env);
  runFileGenerator(postProcessors, root, factory, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, gitignore);
  runFileGenerator(postProcessors, root, global);
  runFileGenerator(postProcessors, root, globalless);
  // index 定义了就不生成默认的 index
  if (!hasIndex) {
    runFileGenerator(postProcessors, root, indexpage);
    runFileGenerator(postProcessors, root, indexpageless);
  }
  runFileGenerator(postProcessors, root, modalindex);
  runFileGenerator(postProcessors, root, modalmodal);
  runFileGenerator(postProcessors, root, modaltypes);
  runFileGenerator(postProcessors, root, npmrc);
  runFileGenerator(postProcessors, root, popover);
  runFileGenerator(postProcessors, root, popoverwrapper);
  // runFileGenerator(postProcessors, root, npmrc);
  runFileGenerator(postProcessors, root, prettierignore);
  runFileGenerator(postProcessors, root, prettierrc);
  runFileGenerator(postProcessors, root, proxy, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, stylelintrc);
  runFileGenerator(postProcessors, root, tsconfig);
  runFileGenerator(postProcessors, root, typings);
  runFileGenerator(postProcessors, root, withPageHOC);
  return root;
}
