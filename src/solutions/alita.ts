import {
  IProjectBuilder,
  IProjectBuilderOptions,
  createProjectBuilder,
  FileType,
} from '../core';
import alita from '../plugins/project/framework/alita';
import { SchemaParser } from '../parser/SchemaParser';
import { prettier } from '../core/postprocessor';
import esModule from '../core/plugins/common/esmodule';
import reactCommonDeps from '../plugins/react/reactCommonDeps';
import reactContainer from '../plugins/react/container';
import containerLifeCycle from '../plugins/react/containerLifeCycle';
import reactJsx from '../plugins/react/jsx';

export type AlitaProjectBuilderOptions = IProjectBuilderOptions;

export default function createIceJsProjectBuilder(
  options?: AlitaProjectBuilderOptions,
): IProjectBuilder {
  return createProjectBuilder({
    inStrictMode: options?.inStrictMode,
    extraContextData: { ...options },
    template: alita.template,
    schemaParser: new SchemaParser(),
    plugins: {
      // components: [esModule({ fileType: FileType.TSX })],
      pages: [
        reactCommonDeps(),
        alita.plugins.commonDeps(),
        alita.plugins.mobileLayout(),
        reactContainer(),
        containerLifeCycle(),
        reactJsx({
          nodePlugins: [alita.hooks.hackEngineApis],
          nodeTypeMapping: {
            Page: 'div',
          },
        }),
        // 最前面的代码，其实是最后生成的
        esModule({ fileType: FileType.TSX }),
      ],

      packageJSON: [
        alita.plugins.packageJSON({
          dependencies: {
            '@lingxiteam/cli': '^0.4.6',
            '@lingxiteam/engine-app': '^3.2.1-alpha.44',
            'antd-mobile-5': '5.26.0',
            'react-loadable': '^5.5.0',
          },
        }),
      ],
    },
    postProcessors: [prettier()],
    // postProcessors: [],
  });
}
