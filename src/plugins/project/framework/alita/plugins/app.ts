import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../../../core/types';

// TODO: 这里的AppiD要删除
const pageId = '1106388573299146752';

// TODO: 应用钩子应该是i通用的，这里可以移动到 src/parser/SchemaParser.ts
// 然后从上层传下来
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
      returnObject[item?.hookCode] = item.hookSourceContent.replace(
        '\n(',
        `\n const ${item?.hookCode} = (`,
      );
    }
  });

  return returnObject;
};
const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const appId = next.contextData.options?.appId;
    const ir = next.ir as any;
    // 有进来两次？
    if (!ir.keepalive) {
      return next;
    }

    const options = next.contextData.options;
    const { fetchSuccess, fetchSendBefore, fetchFail, fetchResponse } =
      getFrontendHookList(options?.appConfig?.frontendHookList);

    const isMobile = options?.platform === 'h5';
    // 暂时只需要改 keepalive ，如果后面修改的多了，可以参考 pageview 或者 jsx 的插件的生命周期
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `import { history, RequestConfig } from 'alita';
      import type { Context } from 'alita';
      import { CryptoJS } from '@lingxiteam/engine-utils';
      import { isPlainObject, merge } from 'lodash';
      import { message, notification } from 'antd';
      // TODO: const { modal } = lcdpApi.antd;
const modal: any = {};
${
  isMobile
    ? `const titleList = [
  {
    pagePath: '/',
    title: '首页',
  },
];
const navList: never[] = [];
const navBar = {
  navList,
  hideNavBar: false,
  onLeftClick() {
    history.go(-1);
  },
};
const tabList: never[] = [];

const tabBar = {
  color: '#999999',
  selectedColor: '#00A0FF',
  borderStyle: 'red',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};`
    : ''
}
      export function getKeepAlive(keepalive: any) {
        return ${JSON.stringify(ir.keepalive)};
      }
${fetchSuccess}
${fetchSendBefore}
${fetchFail}
${fetchResponse}
 
// 请求中间件 就是发起请求和响应之后需要统一操作数据就写这
const middleware = async (ctx: Context, next: () => void) => {
  // 可以在这写一些请求前做的事情 操作ctx.req
  await next();
  const { res = {}, req = {} as any } = ctx;
  const resultObject = fetchSuccess(
    res,
    {
      message,
      notification,
      modal,
    },
    { url: req?.url, params: req?.options?.params }, // fetchInfo
    { CryptoJS },
  );
  ctx.res = resultObject || res;
};

const requestInterceptor = (url, options) => {
  try {
    let newUrl = url;
    // TODO: 这里要删除
    options.data.appId = ${appId};
    options.data.appId = ${pageId};
    const fetchSendBeforeResult =
      fetchSendBefore(url, options.method, options.data, {
        CryptoJS,
      }) ?? ({} as any);

    if (fetchSendBeforeResult === false) {
      return false;
    }
    if (fetchSendBeforeResult && isPlainObject(fetchSendBeforeResult)) {
      const { header, fetchOption, params } = fetchSendBeforeResult;
      if (header && isPlainObject(header)) {
        merge(options, { headers: header });
      }
      if (fetchOption && isPlainObject(fetchOption)) {
        merge(options, fetchOption);
      }
      if (params) {
        merge(options, { data: params });
      }
      if (fetchSendBeforeResult.url) {
        newUrl = fetchSendBeforeResult.url;
      }
    }

    return {
      url: newUrl,
      options,
    };
  } catch (e) {}

  return {
    url,
    options,
  };
};

const responseInterceptor = (response, options) => {
  let successResponse = '';
  let failResponse = '';
  fetchResponse(
    response,
    response.status,
    (success: string) => {
      successResponse = success;
    },
    (fail: string) => {
      failResponse = fail;
    },
    { url: response.url, params: options.data }, // fetchInfo
    { CryptoJS }, // utils
  );
  if (successResponse || failResponse) {
    return (
      successResponse ||
      (failResponse && Promise.reject(new Error(failResponse))) ||
      response
    );
  }
  return response;
};
export const request: RequestConfig = {
  timeout: 300000,
  middlewares: [middleware],
  prefix: 'server/',
  method: 'get',
  // TODO: 这里先写死，如果用到PageId 
  headers: {
    'APP-ID': ${appId},
    "X-B-AUTH": 1,
    "X-B-TARGET-ID": ${pageId},
    "Zsmart-Locale": "zh-CN"
  },
  errorHandler: (error) => {
    const eMsg = error instanceof Error ? error.message : error;
    fetchFail(
      eMsg,
      {
        message,
        notification,
        modal,
      },
      // TODO: 如何取到 fetchInfo
      {} as any,
      { CryptoJS },
      error?.response?.status,
    );
  },
  requestInterceptors: [requestInterceptor],
  responseInterceptors: [responseInterceptor],
};
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
