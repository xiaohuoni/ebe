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
import containerHook from '../plugins/react/containerHook';
// import containerLifeCycle from '../plugins/react/containerLifeCycle';
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
      pages: [
        containerHook(),
        customActionMap(),
        reactCommonDeps(),
        alita.plugins.mobileLayout(),
        alita.plugins.styleInject(),
        reactContainer(),
        // TODO: 临时注释，后续稳定后移除
        // containerLifeCycle(),
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
        alita.plugins.dataSource(),
        alita.plugins.globalData(),
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
          useEbeSetup: options?.useEbeSetup !== false,
          dependenciesPc: {
            '@lingxiteam/charts-common': '^3.7.1-alpha.10',
            '@lingxiteam/lcdp-ueditor-react': '^1.0.0-alpha.15',
            '@lingxiteam/load-framework': '0.2.1',
            '@lingxiteam/richtext': '0.5.1',
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
            'copy-to-clipboard': '^3.3.1',
            '@lingxiteam/icons': '0.0.3',
            '@lingxiteam/types': '3.3.1-alpha.14',
            merge: '^2.1.1',
            uuid: '^9.0.1',
            dayjs: '1.11.3',
            '@ant-design/icons': '^4.2.2',
            'react-loadable': '^5.5.0',
            'react-pdf': '4.2.0',
            moment: '^2.30.1',
            'es6-proxy-polyfill': '^2.1.1',
          },
          dependencies: {
            '@lingxiteam/cli': '^0.4.6',
            'antd-mobile-5': '5.26.0',
            'react-loadable': '^5.5.0',
            merge: '^2.1.1',
            uuid: '^9.0.1',
            dayjs: '1.11.3',
            'browserify-zlib': '^0.2.0',
            'es6-proxy-polyfill': '^2.1.1',
            '@lingxiteam/antd-mobile-plus': '0.5.0',
            '@lingxiteam/antd-mobile-v2-theme': '0.0.1',
            '@lingxiteam/charts': '0.0.8',
            '@lingxiteam/charts-common': '3.7.1',
            '@lingxiteam/dform': '3.8.1-alpha.4',
            '@lingxiteam/load-framework': '0.2.1',
            '@paciolan/remote-component': '2.12.1',
            'ag-grid-community': '30.0.2',
            'ag-grid-react': '30.0.2',
            echarts: '^5.1.2',
            'lcdp-message': '0.1.9',
            'rc-field-form': '^1.27.0',
            'rc-tween-one': '3.0.6',
            'react-player': '2.9.0',
            'react-soundplayer': '^1.0.5',
            'rmc-tabs': '~1.2.0',
            '@alitajs/f2': '^0.1.1',
            '@lingxiteam/icons': '0.0.3',
            'rc-animate': '^2.4.4',
            ahooks: '^3.7.7',
            '@js-preview/excel': '^1.4.5',
            'docx-preview': '0.1.20',
            'react-pdf': '4.2.0',
            'copy-to-clipboard': '^3.3.1',
            'pdfjs-dist': '2.1.266',
          },
          devDependencies: {
            'copy-webpack-plugin': '5.1.1',
            '@types/qs': '^6.9.6',
            '@types/lodash': '^4.14.162',
          },
        }),
      ],
      models: [alita.plugins.models()],
    },
    postProcessors: [
      babel(),
      fixUndefinedVar({
        // 只需要处理pages/components目录
        includes: [/^src\/(pages|components)/],
      }),
      prettier(),
    ],
    // postProcessors: [],
    printUtil: options?.printUtil,
  });
}
