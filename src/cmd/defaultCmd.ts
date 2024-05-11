import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import { IScope, CMDGeneratorPrames } from '../core/types';

// 同名的事件增加后缀
const count = {} as any;

// const eventDataconsole2: any = [
//     {
//       type: 'console',
//       dataId: 170426857862397150,
//       options: {
//         compId: 'console',
//         compName: 'system',
//         id: '264355',
//         pageJsonId: '181337953',
//         value: ['124','$functorsMap.SUM(10,20,30)$'],
//       },
//       path: [170426857550391230],
//       line_number: 1,
//       callback1: [],
//       callback2: [],
//     },
//   ];
//   eventDataconsole2.params = [] || [];
//   CMDGenerator(eventDataconsole2, {}, 'console', {
//     id: 'console',
//     name: 'console',
//     type: 'console',
//     platform: 'h5',
//   });
export function getDefault({
  value,
  params,
  platform,
  scope,
  config = {},
}: CMDGeneratorPrames) {
  const { options, type, dataId } = value;

  const consoleValue = options?.value ? Array.isArray(options?.value) ? options?.value : [options?.value] : []

  return `// ${type} ${dataId} 未支持转源码 \n console.error('${type} ${dataId}');\n`;
  const isLoopChildren = scope && scope?.parentType === 'Loop';

  let suffix = '';
  if (count[value.type]) {
    suffix = count[value.type];
    count[value.type] += 1;
  } else {
    count[value.type] = 1;
  }

  const otherParams = [{ name: 'item' }, { name: 'i' }];
  if (
    // @ts-ignore
    scope?.parent?.props?.itemKey &&
    // @ts-ignore
    scope?.parent?.props?.itemKey !== 'item'
  ) {
    // @ts-ignore
    otherParams.push({ name: scope?.parent?.props?.itemKey });
  }
  if (
    // @ts-ignore
    scope?.parent?.props?.indexKey &&
    // @ts-ignore
    scope?.parent?.props?.indexKey !== 'i'
  ) {
    // @ts-ignore
    otherParams.push({ name: scope?.parent?.props?.indexKey });
  }

  return `const eventData${value.type}${suffix}: any = [${JSON.stringify(
    value,
  )},];eventData${value.type}${suffix}.params = ${JSON.stringify(
    // const a = [1,2,3]; a.parames = { a:1 } 不知道为什么这么设计的，但是实际上它是这样的数组结构
    // @ts-ignore
    params,
  )} || [];CMDGenerator(eventData${value.type}${suffix}, {${params
    .concat(isLoopChildren ? otherParams : [])
    .filter((obj: { name: any }, index: any, arr: any[]) => {
      // 删掉 name 重复的对象，如 Tree {title: '节点key(单选)',name: 'selectedKeys',value: '$selectedKeys[0]$',},{title: '节点keys(多选)',name: 'selectedKeys',value: '$selectedKeys$', },
      return arr.findIndex((o) => o.name === obj.name) === index;
    })
    .map((i: { name: any }) => {
      const name = i.name.trim();
      // 如 树形控件 Tree '{ node }' 返回 node
      return name.startsWith('{') && name.endsWith('}')
        ? name.slice(1, -1).trim()
        : name;
    })
    .filter(Boolean)
    .join(',')}}, '${value.type}', { id: '${value.type}',name: '${
    value.type
  }',type: '${value.type}',platform: '${platform}',});`;
}
