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
      packageJSON: [alita.plugins.packageJSON({
        packageName:'app-pc',
        dependencies:{
          antd: "4.18.8",
          // TODO: 这些插件都需要装在开发项目中吗？
          "@lingxiteam/icons":"*",
          "@lingxiteam/assets":"3.3.1-alpha.7",
          "@lingxiteam/engine-pc":"3.2.1-alpha.44",
          "@lingxiteam/engine-assets":"3.2.1-alpha.44",
          "@lingxiteam/sys-action":"3.2.1-alpha.44",
          "@lingxiteam/engine-command":"3.2.1-alpha.44",
          "@lingxiteam/engine-meta":"3.2.1-alpha.44",
          "@lingxiteam/engine-platform":"3.2.1-alpha.44",
          "@lingxiteam/engine-plog":"3.2.1-alpha.44",
          "@lingxiteam/engine-sandbox":"3.2.1-alpha.44",
          "@lingxiteam/engine-utils":"3.2.1-alpha.44",
        }
      })],
    },
    postProcessors: [prettier()],
    // postProcessors: [],
  });
}
