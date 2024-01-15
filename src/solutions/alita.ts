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
      components: [
        reactCommonDeps(),
        reactContainer(),
        containerLifeCycle(),
        reactJsx({
          nodePlugins: [alita.hooks.hackNodeAttr],
          nodeTypeMapping: {
            Page: 'div',
            MobileModal: 'div',
            BusiComp: 'div',
            MobilePopover: 'div',
          },
        }),
        // 最前面的代码，其实是最后生成的
        esModule({
          fileType: FileType.TSX,
        }),
      ],
      pages: [
        reactCommonDeps(),
        alita.plugins.commonDeps(),
        alita.plugins.mobileLayout(),
        alita.plugins.styleInject(),
        reactContainer(),
        containerLifeCycle(),
        reactJsx({
          nodePlugins: [alita.hooks.hackNodeAttr],
          nodeTypeMapping: {
            Page: 'div',
            MobileModal: 'div',
            MobilePopover: 'div',
          },
        }),
        // 最前面的代码，其实是最后生成的
        esModule({
          fileType: FileType.TSX,
        }),
      ],
      pageview: [
        esModule({
          fileType: FileType.TSX,
        }),
        alita.plugins.pageview(),
      ],
      app: [alita.plugins.app()],
      appConfig: [alita.plugins.config()],
      packageJSON: [
        alita.plugins.packageJSON({
          dependenciesPc: {
            antd: '4.18.8',
            // TODO: 这些插件都需要装在开发项目中吗？
            '@lingxiteam/icons': '*',
            '@lingxiteam/assets': '3.3.1-alpha.11',
            '@lingxiteam/engine-pc': '3.3.1-alpha.13',
            '@lingxiteam/engine-assets': '3.3.1-alpha.13',
            '@lingxiteam/sys-action': '3.3.1-alpha.13',
            '@lingxiteam/engine-command': '3.3.1-alpha.13',
            '@lingxiteam/engine-meta': '3.3.1-alpha.13',
            '@lingxiteam/engine-platform': '3.3.1-alpha.13',
            '@lingxiteam/engine-plog': '3.3.1-alpha.13',
            '@lingxiteam/engine-sandbox': '3.3.1-alpha.13',
            '@lingxiteam/engine-utils': '3.3.1-alpha.13',
            '@lingxiteam/pcfactory': '3.3.1-alpha.4',
          },
          dependencies: {
            '@lingxiteam/cli': '^0.4.6',
            qs: '^6.11.2',
            '@lingxiteam/engine-app': '3.2.1-alpha.44',
            '@lingxiteam/engine-plog': '3.2.1-alpha.44',
            '@lingxiteam/engine-assets': '3.2.1-alpha.44',
            '@lingxiteam/engine-command': '3.2.1-alpha.44',
            '@lingxiteam/engine-meta': '3.2.1-alpha.44',
            '@lingxiteam/engine-platform': '3.2.1-alpha.44',
            '@lingxiteam/engine-sandbox': '3.2.1-alpha.44',
            '@lingxiteam/engine-utils': '3.2.1-alpha.44',
            '@lingxiteam/sys-action': '3.2.1-alpha.44',
            '@lingxiteam/engine-render-core': '3.2.1-alpha.44',
            '@lingxiteam/dform': '3.3.1-alpha.6',
            '@lingxiteam/factory': '3.3.1-alpha.4',
            'antd-mobile-5': '5.26.0',
            'react-loadable': '^5.5.0',
            '@lingxiteam/antd-mobile-v2-theme': '^0.0.1',
          },
        }),
      ],
    },
    postProcessors: [prettier()],
    // postProcessors: [],
  });
}
