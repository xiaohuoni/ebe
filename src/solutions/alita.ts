import {
  createProjectBuilder,
  FileType,
  IProjectBuilder,
  IProjectBuilderOptions,
  LXProjectOptions,
} from '../core';
import esModule from '../core/plugins/common/esmodule';
import { babel, fixUndefinedVar, prettier } from '../core/postprocessor';
import { SchemaParser } from '../parser/SchemaParser';
import alita from '../plugins/project/framework/alita';
import reactContainer from '../plugins/react/container';
import containerLifeCycle from '../plugins/react/containerLifeCycle';
import customActionMap from '../plugins/react/customActionMap';
import reactJsx from '../plugins/react/jsx';
import reactCommonDeps from '../plugins/react/reactCommonDeps';

export type AlitaProjectBuilderOptions = IProjectBuilderOptions;

// options.appConfig.frontendHookList
// options.appConfig.frontendHookList[0]
// options.appConfig.frontendHookList[0].hookCode = "fetchSuccess"
// options.appConfig.frontendHookList[0].hookCompiledContent = "(function(data,_ref,_ref2,_ref3){var message=_ref.message,notification=_ref.notification,modal=_ref.modal;var url=_ref2.url,params=_ref2.params;var CryptoJS=_ref3.CryptoJS;console.log(\"\\u8BF7\\u6C42\\u6210\\u529F\");return data});"
// options.appConfig.frontendHookList[0].hookSourceContent ="/**\n * @param {object} data 响应业务数据\n * @param {object} message 全局消息提示\n * @param {object} notification 通知提示框\n * @param {object} modal 对话框\n * @param {string} url 请求地址\n * @param {object} params 请求参数\n * @param {object} CryptoJS 加密工具\n * @return {object} 返回请求成文功报\n*/\n(data, { message, notification, modal }, { url, params }, { CryptoJS }) => {\n    console.log('请求成功')\n    return data\n}\n"
// options.appConfig.frontendHookList[0].hookType = 'req'
const getFrontendHookList = (frontendHookList: any[]) => {
  const returnObject: any = {};
  frontendHookList.forEach((item) => {
    if (item?.hookCode && item.hookSourceContent) {
      // TODO: 根据不同的钩子有不同的模版，可以增加入参类型
      if (item.hookSourceContent.includes('\n(')) {
        returnObject[item?.hookCode] = item.hookSourceContent.replace(
          '\n(',
          `\n const ${item?.hookCode} = (`,
        );
      }
    }
  });

  return returnObject;
};

export default function createIceJsProjectBuilder(
  options?: AlitaProjectBuilderOptions,
): IProjectBuilder {
  return createProjectBuilder({
    inStrictMode: options?.inStrictMode,
    extraContextData: {
      ...options,
      options: {
        ...options?.options,
        frontendHookMap: getFrontendHookList(
          options?.options?.appConfig?.frontendHookList ?? [],
        ),
      } as LXProjectOptions,
    },
    template: alita.template,
    schemaParser: new SchemaParser(),
    plugins: {
      components: [
        customActionMap(),
        reactCommonDeps(),
        alita.plugins.styleInject(),
        reactContainer(),
        containerLifeCycle(),
        reactJsx({
          nodePlugins: [alita.hooks.hackNodeAttr],
          nodeTypeMapping: {
            Page: 'div',
            MobileModal: 'div',
            MobilePopover: 'div',
            Modal: 'div',
            Drawer: 'div',
            BusiComp: 'div',
          },
        }),
        // 最前面的代码，其实是最后生成的
        esModule({
          fileType: FileType.TSX,
        }),
      ],
      pages: [
        customActionMap(),
        reactCommonDeps(),
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
            Modal: 'div',
            Drawer: 'div',
            BusiComp: 'div',
          },
        }),
        // 最前面的代码，其实是最后生成的
        esModule({
          fileType: FileType.TSX,
        }),
      ],
      dataSources: [alita.plugins.dataSource()],
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
            '@lingxiteam/charts-common': '^3.7.1-alpha.10',
            '@lingxiteam/lcdp-ueditor-react': '^1.0.0-alpha.8',
            '@lingxiteam/load-framework': '0.2.1',
            '@lingxiteam/richtext': '0.5.1',
            '@paciolan/remote-component': '^2.12.1',
            classnames: '^2.2.6',
            echarts: '^5.1.2',
            'lcdp-message': '0.1.9',
            'qr-code-with-logo': '1.1.0',
            'rc-tween-one': '3.0.6',
            'react-player': '2.11.0',
            'react-quill': '^2.0.0',
            'react-resizable': '^3.0.4',
            'react-soundplayer': '^1.0.5',
            'size-sensor': ' ^1.0.1',
            antd: '4.24.13',
            lodash: '^4.17.21',
            qs: '^6.11.2',
            'copy-to-clipboard': '^3.3.1',
            '@lingxiteam/icons': '0.0.3',
            '@lingxiteam/types': '3.3.1-alpha.14',
            'crypto-js': '^4.2.0',
            jsencrypt: '^3.3.2',
            merge: '^2.1.1',
            uuid: '^9.0.1',
            dayjs: '1.11.3',
            '@ant-design/icons': '^4.2.2',
            'react-loadable': '^5.5.0',
            'react-pdf': '4.2.0',
            'es6-proxy-polyfill': '^2.1.1',
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
            '@lingxiteam/sys-action': '3.2.1-alpha.44',
            '@lingxiteam/engine-render-core': '3.2.1-alpha.44',
            '@lingxiteam/dform': '3.3.1-alpha.6',
            'antd-mobile-5': '5.26.0',
            'react-loadable': '^5.5.0',
            '@lingxiteam/antd-mobile-v2-theme': '^0.0.1',
            'crypto-js': '^4.2.0',
            jsencrypt: '^3.3.2',
            merge: '^2.1.1',
            uuid: '^9.0.1',
            dayjs: '1.11.3',
            'es6-proxy-polyfill': '^2.1.1',
          },
          devDependencies: {
            '@types/qs': '^6.9.6',
            '@types/lodash': '^4.14.162',
          },
        }),
      ],
      themeCss: [alita.plugins.themeCss()],
    },
    postProcessors: [babel(), fixUndefinedVar(), prettier()],
    // postProcessors: [],
  });
}
