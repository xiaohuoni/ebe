import { generateCode, init as ebeInit, publishers } from 'ebe';
import { type ResultDir } from 'ebe/types/core';
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
        const pageData = JSON.parse(i.resultObject.attrMappingJson);
        pageData.pageId = i.resultObject?.pageId;
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
}

interface CodeOptions {
  appId: string;
  baseUrl: string;
  platform: string;
  services: CodeServices;
  onProgress: (data: { log: string; progress: number }) => void;
}
export const init = async () => {
  await ebeInit();
};
export const codeCreate = async ({
  appId,
  services,
  platform,
  baseUrl,
  onProgress,
}: CodeOptions) => {
  try {
    // 根据 appId 获取当前应用的全部页面
    const attrSpecPage = await services.qryAttrSpecPage({
      appId,
      pageNum: 1,
      pageSize: 999999,
    });

    // 根据 appId 获取当前应用的全部页面
    const { resultObject = [] } = await services.qryPageInstListByAppId({
      appId,
      terminalType: platform,
    });
    const { resultObject: frontendHookList = [] } =
      await services.queryFrontendHookList({
        appId,
      });

    // 根据 appId 获取当前应用的全部页面
    const themeCss = await services.getThemeCss({
      appId,
      terminalType: platform,
    });

    // 根据 appId 获取当前应用的使用的自定义组件
    const compAssetList = await services.qryPageCompAssetList({
      appId,
    });

    // 根据appId 获取全局数据源
    let globalDataInfo = await services.queryFrontendDatasourcePage({
      appId,
      pageSize: 10000,
    });

    const pageIdMapping: any = {};
    const appPageList = resultObject?.map((i: any) => {
      pageIdMapping[i.pagePath] = i.pageId;
      return i;
    });
    let lastPageId: any = '';
    // 根据 pageId 获得 dsl
    let data = [];

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
    const busiPages = busiData.map((i, index) => {
      const busiData = JSON.parse(
        i?.resultObject?.busiCompVersion?.sourceCodeJson,
      );
      busiData.busiCompId = i?.resultObject?.busiCompId;
      busiCompMapping[itemLists[index]] = busiData.id;
      return busiData;
    });
    // 合并页面，生成器那边支持页面类型和业务组件类型
    const pageDSLS = [...pages, ...busiPages];
    const options = {
      platform,
      appId,
      pageIdMapping,
      busiCompMapping,
      compAssetList: compAssetList?.resultObject || [],
      baseUrl,
      appConfig: {
        frontendHookList,
      },
      attrSpecPage: (attrSpecPage?.resultObject?.list || []).map(
        (i: any) => i.attrNbr,
      ),
      themeCss,
      models: globalDataInfo || {},
    };
    let cleanedTree = cleanTree(pageDSLS, ['path']); // 清理字段'b'和字段'e'
    cleanedTree = clearLXPagesDSL(cleanedTree);
    const result = await generateCode({
      solution: 'alita', // 出码方案
      options,
      schema: cleanedTree, // 编排搭建出来的 schema
      onProgress: (log: string) => {
        if (!log) {
          // 错误数据，不给返回
          return;
        }
        if (log.includes('出码生成完成')) {
          onProgress({
            log,
            progress: 100,
          });
          return;
        }
        const p = log.match(/(?<=\(整体进度: ).*?(?=\))/)?.[0] || '0';
        const pro = p.split('/') as string[];
        if (pro && pro[0] && pro[1]) {
          onProgress({
            log,
            progress: (parseInt(pro[0]) / parseInt(pro[1])) * 100,
          });
        }
      },
    });
    // console.log(result);
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
