import changeCase from 'change-case';
import pinyin from 'pinyin';

// 业务组件id 和 组件名字的对应关系
const busiCompMaps: Record<string, string> = {};
// 存储组件名，防止组件重复
const busiCompNameSet = new Set();

/**
 * 通过label或者名字生成的组件名可能会重复，如果重复直接通过索引累加
 * @param name
 * @param index
 * @returns
 */
const getName = (name: string, index = 0): string => {
  const compName = `${name}${index === 0 ? '' : index}`;
  // 名称重复
  if (!busiCompNameSet.has(compName)) {
    return compName;
  }
  return getName(`${compName}`, index + 1);
};

/**
 * 获取业务组件名字
 * @param node
 * @param type 页面类型 page 组件类型 component 调用方可能是创建组件也可能时页面导入。
 * @returns
 */
export const getBusiCompName = (
  node: any,
  type: 'component' | 'page' = 'component',
) => {
  let id = node?.props?.busiCompId;
  let pageName = node?.label;

  if (type === 'page') {
    id = node.busiCompId;
    pageName = node.pageName;
  }

  const otherType = busiCompMaps?.[id] ?? '';

  if (otherType) {
    return otherType;
  }

  const name = pinyin(`${pageName}`, {
    style: 'normal',
  })
    .map((i) => [changeCase.pascalCase(i[0])])
    .join('')
    .replaceAll('/', '')
    .replaceAll('(', '')
    .replaceAll(')', '');

  const compName = getName(name);

  busiCompMaps[id] = compName;
  busiCompNameSet.add(compName);

  return compName;
};
