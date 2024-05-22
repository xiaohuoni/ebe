import { IParseResult, PostProcessor, ResultDir } from '../../../../../core';
import { createResultDir } from '../../../../../core/utils/resultHelper';
import { runFileGenerator } from '../../../../../core/utils/templateHelper';
import attrSpecPage from './files/attrSpecPage';
import constants from './files/constants';
import customComponent from './files/customComponent';
import env from './files/env';
import factory from './files/factory';
import global from './files/global';
import globalless from './files/globalless';
import indexpage from './files/indexpage';
import indexpageless from './files/indexpageless';
import layout from './files/layout';
import modalindex from './files/modalindex';
import modalmodal from './files/modalmodal';
import modaltypes from './files/modaltypes';
import pcbannermodal from './files/pcbannermodal';
import pcbannermodalless from './files/pcbannermodalless';
import pcmodalindex from './files/pcmodalindex';
import pcmodalmodal from './files/pcmodalmodal';
import popover from './files/popover';
import popoverwrapper from './files/popoverwrapper';
import proxy from './files/proxy';
import withPageHOC from './files/withPageHOC';

// TODO:为了标记无用文件，注释先保留着，后续清理
// import useSetState from './files/useSetState';
// import styleInject from './files/styleInject';
// import stylelintrc from './files/stylelintrc';
// import tsconfig from './files/tsconfig';
// import typings from './files/typings';
// import prettierignore from './files/prettierignore';
// import prettierrc from './files/prettierrc';
// import npmrc from './files/npmrc';
// import context from './files/context';
// import useTool from './files/useTool';
// import messageApi from './files/messageApi';
// import historytool from './files/historytool';
// import editorconfig from './files/editorconfig';
// import gitignore from './files/gitignore';

export function generateStaticFiles(
  parseResult: IParseResult,
  postProcessors: PostProcessor[],
  root = createResultDir('.'),
): ResultDir {
  const hasIndex = !!parseResult?.staticFiles?.pageIdMapping?.['/index'];
  const isMobile = parseResult?.staticFiles?.platform === 'h5';
  runFileGenerator(postProcessors, root, constants, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, attrSpecPage, parseResult?.staticFiles);
  runFileGenerator(
    postProcessors,
    root,
    customComponent,
    parseResult?.staticFiles,
  );
  runFileGenerator(postProcessors, root, env, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, factory, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, global, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, globalless, parseResult?.staticFiles);
  // index 定义了就不生成默认的 index
  if (!hasIndex) {
    runFileGenerator(postProcessors, root, indexpage, parseResult?.staticFiles);
    runFileGenerator(
      postProcessors,
      root,
      indexpageless,
      parseResult?.staticFiles,
    );
  }
  runFileGenerator(postProcessors, root, layout, parseResult?.staticFiles);

  runFileGenerator(postProcessors, root, popover, parseResult?.staticFiles);
  if (isMobile) {
    runFileGenerator(
      postProcessors,
      root,
      popoverwrapper,
      parseResult?.staticFiles,
    );
    runFileGenerator(
      postProcessors,
      root,
      modalindex,
      parseResult?.staticFiles,
    );
    runFileGenerator(
      postProcessors,
      root,
      modalmodal,
      parseResult?.staticFiles,
    );
    runFileGenerator(
      postProcessors,
      root,
      modaltypes,
      parseResult?.staticFiles,
    );
  } else {
    runFileGenerator(
      postProcessors,
      root,
      pcmodalindex,
      parseResult?.staticFiles,
    );
    runFileGenerator(
      postProcessors,
      root,
      pcmodalmodal,
      parseResult?.staticFiles,
    );
  }
  runFileGenerator(postProcessors, root, proxy, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, withPageHOC, parseResult?.staticFiles);
  runFileGenerator(
    postProcessors,
    root,
    pcbannermodal,
    parseResult?.staticFiles,
  );
  runFileGenerator(
    postProcessors,
    root,
    pcbannermodalless,
    parseResult?.staticFiles,
  );

  return root;
}
