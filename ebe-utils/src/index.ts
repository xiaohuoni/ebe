import { generateCode, init as ebeInit, publishers } from '@lingxiteam/ebe';
import { type ResultDir } from '@lingxiteam/ebe/types/core';
import { lingxiDslRules } from './constants';
import { IRulePrams, IRulesType } from './types';

export * from './types';

const isArray = (arr: any[]) => {
  if (Array.isArray) {
    return Array.isArray(arr);
  } else {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }
};

export const clearAppInfo = (
  appInfo: Record<string, any>,
  includes: string[] = ['appId', 'appCode', 'appName', 'applicationIcon'],
) =>
  Object.keys(appInfo || {}).reduce((pre, key) => {
    if (includes.includes(key)) {
      pre[key] = appInfo[key];
    }
    return pre;
  }, {} as Record<string, any>);

export const clearProps = (data: any, diff: any) => {
  const clearedProps = { ...data };
  Object.keys(diff).forEach((key) => {
    if (typeof diff[key] === 'object' && !isArray(diff[key])) {
      clearedProps[key] = clearProps(clearedProps[key], diff[key]);
    } else if (isArray(diff[key]) && isArray(clearedProps[key])) {
      delete clearedProps[key];
    } else if (typeof diff[key] === 'function') {
      if (diff[key](clearedProps)) {
        delete clearedProps[key];
      }
    } else if (diff[key] === clearedProps[key]) {
      delete clearedProps[key];
    }
  });
  return clearedProps;
};
export const getNewDataByRules = (
  value: any,
  rule: (props: IRulePrams) => any,
  path: string[],
) => {
  const newValue = { ...value };
  let newData = newValue;
  const rootObj = rule?.({
    paths: path,
    value: newValue,
    key: 'root',
    diffraction: (diffObj) => {
      return clearProps(newValue, diffObj);
    },
  });
  if (rootObj && rootObj !== true) {
    newData = rootObj;
  } else {
    // 只支持两层
    Object.keys(newValue).forEach((newKey) => {
      const res = rule?.({
        paths: [...path, newKey],
        value: newValue[newKey],
        key: newKey,
      });
      if (res === true) {
        delete newValue[newKey];
      } else if (res) {
        newValue[newKey] = res;
      }
    });
    newData = newValue;
  }
  return newData;
};
export const removeObjectByRules = (
  data: any,
  rules: IRulesType,
  paths: string[] = [],
): any => {
  const newData: any = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key];
      const rule = rules[key];
      const path = [...paths, key];
      if (
        rule &&
        rule.rule &&
        rule.rule({ paths: [key], value, key }) === true
      ) {
        continue;
      }
      const loopRule = rule && rule.loopRule;
      const loop = rule && rule.loop;
      if (loopRule && loop) {
        newData[key] = value.map((item: any) => {
          const loopKey = loopRule(item);
          const loopRuleObj = loop[loopKey];
          if (loopKey === 'item') {
            return removeObjectByRules(item, loopRuleObj as any, path);
          }
          if (loopRuleObj && loopRuleObj?.rule) {
            return getNewDataByRules(item, loopRuleObj?.rule, path);
          }
          return item;
        });
      } else if (typeof value === 'object' && value !== null && rule?.rule) {
        newData[key] = getNewDataByRules(value, rule?.rule, path);
      } else {
        newData[key] = value;
      }
    }
  }

  return newData;
};
// 删除 defaultVersionId 字段 ，
// components 中的 compName 值为 View 时
// 当 props 中的 conten 字段等于 $$ 时 删除 conten
// const dsRules: IRulesType = {
//   defaultVersionId: {
//     rule: () => true,
//   },
//   components: {
//     loopRule: (item) => item.compName,
//     loop: {
//       View: {
//         rule: ({ diffraction }) => {
//           return diffraction?.({
//             props: {
//               conten: '$$',
//             },
//           });
//         },
//       },
//     },
//   },
// };

export const treeForEach = (
  tree: any,
  callback: (item: any, root: boolean) => void,
  options = { children: 'components' },
) => {
  callback(tree, true);

  const loop = (children: any[]) => {
    children?.forEach((item) => {
      callback(item, false);
      if (Array.isArray(item?.[options.children])) {
        loop(item?.[options.children]);
      }
    });
  };

  const list = tree[options.children];
  loop(list);
};

export const getPageDsls = (resultObjects: any[]) => {
  return resultObjects
    .filter(Boolean)
    .map((i) => {
      try {
        const pageData = JSON.parse(i.attrMappingJson);
        pageData.pageId = i?.pageId;
        return pageData;
      } catch (error) {
        console.error(error, '该页面信息出错', i);
        return null;
      }
    })
    .filter(Boolean);
};
export function findAllItem<T = any>(
  target: T[],
  callback: (item: T, index: number, list: T[]) => boolean,
  itemHash: any,
) {
  const list = target;
  // Makes sures is always has an positive integer as length.
  // eslint-disable-next-line
  const length = list.length >>> 0;
  // eslint-disable-next-line
  const thisArg = arguments[1];
  for (let i = 0; i < length; ) {
    const element = list[i] as any;
    if (callback.call(thisArg, element, i, list)) {
      itemHash[element?.props?.busiCompId ?? ''] = 1;
    }
    i += 1;
    if (element?.components) {
      findAllItem(element?.components, callback, itemHash);
    }
  }
}
export function findItem<T = any>(
  target: T[],
  callback: (item: T, index: number, list: T[]) => boolean,
) {
  const list = target;
  // Makes sures is always has an positive integer as length.
  // eslint-disable-next-line
  const length = list.length >>> 0;
  // eslint-disable-next-line
  const thisArg = arguments[1];
  for (let i = 0; i < length; ) {
    const element = list[i];
    if (callback.call(thisArg, element, i, list)) {
      return element;
    }
    i += 1;
  }
  return null;
}
export const cleanTree = (tree: any, fields: any): any => {
  let fieldSet = new Set(fields); // 使用set结构可以提高查询速度

  if (Array.isArray(tree)) {
    return tree.map((item) => cleanTree(item, fields));
  } else if (typeof tree === 'object' && tree !== null) {
    return Object.entries(tree).reduce((newTree, [key, value]) => {
      if (!fieldSet.has(key)) {
        // @ts-ignore
        newTree[key] = cleanTree(value, fields);
      }
      return newTree;
    }, {});
  } else {
    return tree;
  }
};

export const clearLXPagesDSL = (pages: any[]) => {
  return pages.map((page) => {
    return removeObjectByRules(page, lingxiDslRules);
  });
};

interface CodeServices {
  qryAttrSpecPage: (data: any) => Promise<any>;
  qryPageInstListByAppId: (data: any) => Promise<any>;
  queryFrontendHookList: (data: any) => Promise<any>;
  getThemeCss: (data: any) => Promise<any>;
  qryPageCompAssetList: (data: any) => Promise<any>;
  queryFrontendDatasourcePage: (data: any) => Promise<any>;
  findPageInstByVersionId: (data: any) => Promise<any>;
  findBusiCompById: (data: any) => Promise<any>;
  findApplication: (params: { appId: string }) => Promise<any>;
  translateToEnglish: (params: {
    appId: string;
    chinese: string[];
    rule: string;
  }) => Promise<any>;
}
export const getSafeTypeName = (name: any) => {
  return name
    .replaceAll(' ', '')
    .replaceAll('/', '')
    .replaceAll('-', '')
    .replaceAll('(', '')
    .replaceAll(')', '');
};
interface CodeOptions {
  appId: string;
  baseUrl: string;
  platform: string;
  services: CodeServices;
  onProgress: (data: { log: string; progress: number }) => void;
  needTranslatePagePathToEnglish?: boolean;
}
let workerJsUrl = '';

export const setWorkerJsUrl = (url: string) => {
  workerJsUrl = url;
};

export const init = async () => {
  await ebeInit({ workerJsUrl });
};
export const fetchData = async ({
  appId,
  services,
  platform,
  baseUrl,
  onProgress,
  needTranslatePagePathToEnglish,
}: CodeOptions) => {
  const appInfo = await services.findApplication({ appId });
  onProgress({
    log: '获取应用信息',
    progress: 1,
  });
  // 根据 appId 获取当前应用的全部页面
  const attrSpecPage = await services.qryAttrSpecPage({
    appId,
    pageNum: 1,
    pageSize: 999999,
  });
  onProgress({
    log: '获取当前应用的全部页面',
    progress: 2,
  });
  // 根据 appId 获取当前应用的全部页面
  const resultObject = await services.qryPageInstListByAppId({
    appId,
    terminalType: platform,
  });
  const frontendHookList = await services.queryFrontendHookList({
    appId,
  });

  let themeCss: any = '';
  try {
    // 这个接口没有数据就直接等到死，无语！！！
    // 根据 appId 获取当前应用的全部页面
    themeCss = await Promise.race([
      new Promise((resolve, reject) => {
        services
          .getThemeCss({
            appId,
            terminalType: platform,
          })
          .then((res) => {
            resolve(res);
          });
      }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('');
        }, 5000);
      }),
    ]);
    console.log('====获取主题成功', themeCss);
  } catch (error) {
    console.error('====获取主题失败', error);
  }

  // 根据 appId 获取当前应用的使用的自定义组件
  onProgress({
    log: '获取当前应用的使用的自定义组件',
    progress: 3,
  });
  const temCompAssetList = await services.qryPageCompAssetList({
    appId,
  });
  // 兼容下割接数据，数组前面的自定义组件是新的
  const compAssetList = temCompAssetList.reduce(
    (acc: any[], current: { compCode: any }) => {
      const codes = acc.map((item) => item.compCode);
      if (!codes.includes(current.compCode)) {
        acc.push(current);
      }
      return acc;
    },
    [],
  );
  // 根据appId 获取全局数据源
  onProgress({
    log: '获取全局数据源',
    progress: 4,
  });
  let globalDataInfo = await services.queryFrontendDatasourcePage({
    appId,
    pageSize: 10000,
  });

  const dataSourceList = globalDataInfo?.list || [];
  const globalDataMap: Record<string, any> = {};
  dataSourceList.forEach((item: any) => {
    const { frontendDatasourceContent, ...restItem } = item;

    try {
      globalDataMap[item.frontendDatasourceMainId] = {
        ...restItem,
        frontendDatasourceContent: JSON.parse(frontendDatasourceContent),
      };
    } catch (err) {}
    return null;
  });
  const pageIdMapping: any = {};
  const appPageList = resultObject?.map((i: any) => {
    pageIdMapping[i.pagePath] = i.pageId;
    return i;
  });
  let lastPageId: any = '';
  // 根据 pageId 获得 dsl
  let data = [];
  onProgress({
    log: '获取所有页面dsl',
    progress: 5,
  });
  data = await Promise.all(
    appPageList.map((i: any) => {
      lastPageId = i.pageId;
      return services.findPageInstByVersionId({
        appId,
        pageId: i.pageId,
      });
    }),
  );

  const pages = getPageDsls(data);
  // busiCompId 过滤重复
  const itemHash: any = {};
  // 找到所有页面使用到的 业务组件
  findAllItem(pages, (item) => item.compName === 'BOFramer', itemHash);

  const itemLists = Object.keys(itemHash);
  // 请求所有业务组件的 dsl
  onProgress({
    log: '获取所有业务组件dsl',
    progress: 6,
  });
  const busiData = await Promise.all(
    itemLists.map((i) =>
      services.findBusiCompById({
        busiCompId: i,
        appId,
        pageId: lastPageId,
      }),
    ),
  );
  const busiCompMapping: any = {};
  // 过滤为空
  const busiPages: any[] = busiData.filter(Boolean).map((i, index) => {
    // 业务组件为空，返回一个 fallback
    const busiData = JSON.parse(
      i?.busiCompVersion?.sourceCodeJson ||
        '{"id":"100101","pageContainerType":"BusiComp","pageName":"错误组件","pagePath":"","objType":"app","busiCompCode":"Custom","callbacks":["onChange"],"compState":"","events":[],"actions":[],"pageDynamicFlag":true,"setEvents":[{"dataName":"event","dataId":"798407","path":[],"value":"useEffect","params":[],"children":[]}],"layout":"BaseLayout","searchParams":[{"name":"业务主键","code":"bizId"},{"name":"业务场景","code":"sceneCode"},{"name":"业务数据","code":"bizData"}],"catalogItemId":"-1","platformType":"LowCode","editorVersion":"3.6.1.04251034","createdEditorVersion":"0.2.1130.05051011","busiCompObjectRelDTOList":[],"platform":"pc","appId":"1064722784465846272","components":[{"id":"Icon_2609852","label":"图标","compName":"Icon","type":"Icon","compType":1,"compLib":"@/components","props":{"name":"图标","mode":"normal","rotate":0,"basicStatus":1,"icon":{"theme":"outlined","type":"smile","isIconFont":false},"popoverSetting":{"page":{"pagePath":"/ceshiqipao2781","pageId":"1049616591121936384","pageName":"测试气泡1206","options":[{"name":"业务主键","code":"bizId"},{"name":"业务场景","code":"sceneCode"},{"name":"业务数据","code":"bizData"}],"tipType":"1","trigger":"click"}}},"style":{},"isContainer":false,"isBusiObjContainer":false,"cmdgroup":["basic"],"platform":"pc","icon":"Icon","description":"","image":"","groupsName":"通用","isInlineBlock":true,"setEvents":[],"isLabelDropBoxChild":false,"components":[],"path":["965041"]}],"path":[]}',
    );
    busiData.busiCompId = i?.busiCompId;
    busiCompMapping[itemLists[index]] = busiData.id;
    return busiData;
  });
  /**
   * 新增中文转英文功能
  ● API：translateToEnglish  GET 请求，参数：chinese 

  rule
  ● 支持多种生成规则
  ○ UPPER_CAMEL 驼峰首字母大写
  ○ LOWER_CAMEL 驼峰首字母小写
  ○ UPPER_UNDERSCORE 下划线大写
  ○ LOWER_UNDERSCORE 下划线小写
   */
  // 获取翻译，尝试三次
  const getTranslateName = async (
    appId: string,
    chinese: string[],
    rule: string,
    count = 0,
  ): Promise<Record<string, string>> => {
    const translateName = await services?.translateToEnglish?.({
      appId,
      chinese,
      rule,
    });
    if (translateName && typeof translateName === 'object') {
      return translateName;
    } else if (count < 3) {
      console.error(`翻译错误：${chinese}，第${count + 1}重新尝试`);
      return await getTranslateName(appId, chinese, rule, count + 1);
    } else {
      console.error(`翻译错误：尝试无效`);
      return {};
    }
  };

  const chinese = busiPages?.map((item) => getSafeTypeName(item.pageName));
  let translateNames: any = {};
  if (chinese.length > 0) {
    translateNames = await getTranslateName(appId, chinese, 'UPPER_CAMEL');
  }
  // 翻译业务组件的名字
  for (let key = 0; key < busiPages.length; key++) {
    onProgress({
      log: '翻译业务组件名称',
      progress: 6 + key / busiPages.length,
    });
    busiPages[key]._pageName = busiPages[key].pageName;
    console.log(
      '====翻译成功',
      translateNames?.[getSafeTypeName(busiPages[key].pageName)] ||
        busiPages[key].pageName,
    );
    busiPages[key].pageName =
      translateNames?.[getSafeTypeName(busiPages[key].pageName)] ||
      busiPages[key].pageName;
  }
  let pagePathEnglishMapping: any = {};
  if (needTranslatePagePathToEnglish) {
    const pagePathEnglishSet: any = {};

    const getName = (name: string, type: string, index = 0): string => {
      const compName = `${name}${index === 0 ? '' : index}`;
      pagePathEnglishSet[type] ??= new Set();
      // 名称重复，不同页面类型，名称允许重复
      if (!pagePathEnglishSet[type].has(compName)) {
        const saleName = `/${getSafeTypeName(compName)}`;
        pagePathEnglishSet[type].add(saleName);
        return saleName;
      }
      return getName(`${compName}`, type, index + 1);
    };

    const pagesChinese = pages?.map((item) => getSafeTypeName(item.pageName));
    let pagesTranslateNames: any = {};
    if (pagesChinese.length > 0) {
      pagesTranslateNames = await getTranslateName(
        appId,
        pagesChinese,
        'UPPER_CAMEL',
      );
    }
    // 翻译页面的名字
    for (let key = 0; key < pages.length; key++) {
      onProgress({
        log: '翻译页面路径',
        progress: 7 + key / pages.length,
      });
      // 如果页面路径翻译失败，就不处理路径
      // index 保留不处理
      if (pages[key].pagePath !== '/index') {
        pagePathEnglishMapping[pages[key].pageContainerType] ??= {};
        const safeTranslateName = getName(
          pagesTranslateNames?.[getSafeTypeName(pages[key].pageName)] ||
            pages[key].pageName,
          pages[key].pageContainerType,
        );
        pagePathEnglishMapping[pages[key].pageContainerType][
          pages[key].pagePath
        ] = safeTranslateName;
        pages[key]._pagePath = pages[key].pagePath;
        pages[key].pagePath = safeTranslateName;
      }
    }
  }
  // 合并页面，生成器那边支持页面类型和业务组件类型
  const pageDSLS = [...pages, ...busiPages];
  const getPlatform = (platFormtype: string) => {
    switch (platFormtype) {
      case 'h5':
      case 'APP':
      case 'app':
        return 'h5';
      default:
        return 'pc';
    }
  };
  const options = {
    platform: getPlatform(platform),
    appId,
    pageIdMapping,
    busiCompMapping,
    compAssetList: compAssetList || [],
    baseUrl,
    appConfig: {
      frontendHookList,
    },
    attrSpecPage: (attrSpecPage?.list || []).map((i: any) => i.attrNbr),
    themeCss,
    models: globalDataMap,
    appInfo: clearAppInfo(appInfo),
    // 英文路径的对应关系
    pagePathEnglishMapping,
  };
  onProgress({
    log: '清理无用数据',
    progress: 8,
  });
  let cleanedTree = cleanTree(pageDSLS, ['path']); // 清理字段'b'和字段'e'
  cleanedTree = clearLXPagesDSL(cleanedTree);
  return {
    options,
    cleanedTree,
  };
};
export const codeCreate = async ({
  appId,
  services,
  platform,
  baseUrl,
  onProgress,
  needTranslatePagePathToEnglish = false,
}: CodeOptions) => {
  try {
    const { cleanedTree, options } = await fetchData({
      appId,
      services,
      platform,
      baseUrl,
      onProgress,
      needTranslatePagePathToEnglish,
    });
    console.log(cleanedTree);
    console.log(options);
    const result = await generateCode({
      solution: 'alita', // 出码方案
      options,
      schema: cleanedTree, // 编排搭建出来的 schema
      onProgress: (log: string) => {
        if (!log || typeof log !== 'string') {
          // 错误数据，不给返回
          return;
        }
        if (log?.includes('出码生成完成')) {
          onProgress({
            log,
            progress: 100,
          });
          return;
        }

        const p = log.match(/(?<=\(总进度: ).*?(?=\%)/)?.[0] || '0';
        if (p) {
          onProgress({
            log,
            progress: parseFloat(p),
          });
        }
      },
      workerJsUrl,
    });
    console.log(result);
    // 出码结果(默认是递归结构描述的，可以传 flattenResult: true 以生成扁平结构的结果)
    publishers.zip().publish({
      project: result as ResultDir, // 上一步生成的 project
      projectSlug: appId, // 项目标识
    });
    return {
      success: true,
    };
  } catch (error) {
    return {
      msg: error,
      success: false,
    };
  }
};
