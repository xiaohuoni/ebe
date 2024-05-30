import { isArray } from 'lodash';
import { lingxiDslRules } from './constants';
import { IRulePrams, IRulesType } from './types';
export * from './types';

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
