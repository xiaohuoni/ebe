import { IContainerInfo } from '../../core';

// 业务组件id 和 组件名字的对应关系
const busiCompMaps: Record<string, string> = {};
// 存储组件名，防止组件重复
const busiCompNameSet = new Set();

export const getSafeTypeName = (name: any) => {
  return name
    .replaceAll(' ', '')
    .replaceAll('/', '')
    .replaceAll('-', '')
    .replaceAll('(', '')
    .replaceAll(')', '');
};
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
  let pageName = '';

  if (type === 'page') {
    id = node.busiCompId;
    pageName = node.pageName;
  }
  const otherType = busiCompMaps?.[id] ?? '';

  if (otherType) {
    return otherType;
  }

  if (!pageName) {
    console.error(`业务组件id (${id} )生成异常，未生成就先使用？`);
  }
  // 在前置数据中翻译了 pageName 所以直接用就行
  // 如果是两个字符以上的，首字母大写，因为英文会被拆成单个字母，原样拼回去即可
  // const name = pinyin(`${getSafeTypeName(pageName)}`, {
  //   type: 'array',
  //   toneType: 'none',
  // })
  //   .map((i) => (i.length > 1 ? changeCase.pascalCase(i) : i))
  //   .join('');
  const compName = getName(getSafeTypeName(pageName));

  busiCompMaps[id] = compName;
  busiCompNameSet.add(compName);

  return compName;
};

export const isBOFramer = (ir: IContainerInfo) => {
  return ir.containerType === 'BusiComp';
};
