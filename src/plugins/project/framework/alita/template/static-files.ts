import { IParseResult, PostProcessor, ResultDir } from '../../../../../core';
import { createResultDir } from '../../../../../core/utils/resultHelper';
import { runFileGenerator } from '../../../../../core/utils/templateHelper';
import attrSpecPage from './files/attrSpecPage';
import constants from './files/constants';
import customComponent from './files/customComponent';
import customFuncMapping from './files/customFuncMapping';
import drawermap from './files/drawermap';
import env from './files/env';
import PCErrorBoundary from './files/ErrorBoundary/pcindex';
import PCErrorBoundaryLess from './files/ErrorBoundary/pcless';
import factory from './files/factory';
import favicon from './files/favicon';
import global from './files/global';
import globalless from './files/globalless';
import indexpage from './files/indexpage';
import indexpageless from './files/indexpageless';
import layout from './files/layout';
import modalindex from './files/modalindex';
import modalmap from './files/modalmap';
import modalmodal from './files/modalmodal';
import modaltypes from './files/modaltypes';
import overrides from './files/overrides';
import pcbannermodal from './files/pcbannermodal';
import pcbannermodalless from './files/pcbannermodalless';
import popover from './files/popover';
import popovermap from './files/popovermap';
import popoverwrapper from './files/popoverwrapper';
import proxy from './files/proxy';
import withPageHOC from './files/withPageHOC';

export function generateStaticFiles(
  parseResult: IParseResult,
  postProcessors: PostProcessor[],
  root = createResultDir('.'),
): ResultDir {
  const hasIndex = !!parseResult?.staticFiles?.pageIdMapping?.['/index'];
  const isMobile = parseResult?.staticFiles?.platform === 'h5';
  runFileGenerator(postProcessors, root, constants, parseResult?.staticFiles);
  runFileGenerator(
    postProcessors,
    root,
    attrSpecPage,
    parseResult?.staticFiles,
  );
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
      PCErrorBoundary,
      parseResult?.staticFiles,
    );
    runFileGenerator(
      postProcessors,
      root,
      PCErrorBoundaryLess,
      parseResult?.staticFiles,
    );
  }
  runFileGenerator(postProcessors, root, modalmap, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, drawermap, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, popovermap, parseResult?.staticFiles);
  runFileGenerator(postProcessors, root, overrides, parseResult?.staticFiles);
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

  runFileGenerator(postProcessors, root, favicon, parseResult?.staticFiles);
  runFileGenerator(
    postProcessors,
    root,
    customFuncMapping,
    parseResult?.staticFiles,
  );

  return root;
}
