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
    const {
      fetchSuccess,
      fetchSendBefore,
      fetchFail,
      fetchResponse,
      appDidInit,
    } = options?.frontendHookMap;

    const isMobile = options?.platform === 'h5';
    // 暂时只需要改 keepalive ，如果后面修改的多了，可以参考 pageview 或者 jsx 的插件的生命周期
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `import { defaultResponense } from '@/utils/service/defaultResponseInterceptor';
      import { CryptoJS } from '@lingxiteam/engine-utils';
      import type {
        RequestInterceptor,
        ResponseInterceptor,
        Context,
        RequestConfig,
      } from 'alita';
      import { message, Modal as modal, notification } from 'antd';
      import { isPlainObject, merge } from 'lodash';
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
${fetchSuccess ?? ''}
${fetchSendBefore ?? ''}
${fetchFail ?? ''}
${fetchResponse ?? ''}
 
// 请求中间件 就是发起请求和响应之后需要统一操作数据就写这
const middleware = async (ctx: Context, next: () => void) => {
  // 可以在这写一些请求前做的事情 操作ctx.req
  await next();
  
  ${
    !!fetchSuccess
      ? `const { res = {}, req = {} as any } = ctx;
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
  ctx.res = resultObject || res;`
      : ''
  }
};
${
  !!fetchSendBefore
    ? `const requestInterceptor:RequestInterceptor = (url, options) => {
  try {
    let newUrl = url;
    // TODO: 这里要删除
    options.data.appId = '${appId}';
    options.data.pageId = '${pageId}';
    const fetchSendBeforeResult =
    (fetchSendBefore(url, options.method, options.data, {
      CryptoJS,
    }) as any) ?? ({} as any);

    // TODO: 返回 false 时取消请求
    // if (fetchSendBeforeResult === false) {
    //   return false;
    // }
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
};`
    : ''
}

${
  !!fetchResponse
    ? `const responseInterceptor:ResponseInterceptor = (response, options) => {
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
    ) as Promise<Response>;
  }
  return response;
};`
    : ''
}

export const request: RequestConfig = {
  timeout: 300000,
  middlewares: [middleware],
  prefix: 'server/',
  method: 'get',
  // TODO: 这里先写死，如果用到PageId 
  headers: {
    'APP-ID': '${appId}',
    "X-B-AUTH": 1,
    "X-B-TARGET-ID": '${pageId}',
    "Zsmart-Locale": "zh-CN"
  },
  errorHandler: (error) => {
    ${
      !!fetchFail
        ? `const eMsg = error instanceof Error ? error.message : error;
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
    );`
        : ''
    }
  },
  requestInterceptors: [${!!fetchSendBefore ? 'requestInterceptor' : ''}],
  responseInterceptors: [${
    !!fetchResponse ? 'responseInterceptor, ' : ''
  }defaultResponense],
};
      
${
  appDidInit
    ? `
${appDidInit}
export async function render(oldRender: () => void) {
  appDidInit({info:'TODO: 出码之后的应用信息'});
  oldRender();
}
`
    : ''
}`,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
