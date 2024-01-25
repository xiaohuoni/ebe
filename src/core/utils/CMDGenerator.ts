// 命令源码化
import { IScope } from '../types';
import { isJSVar } from './deprecated';
import { generateVarString } from './compositeType';
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
//     },
//   ];
//   eventDataconsole2.params = [] || [];
//   CMDGenerator(eventDataconsole2, {}, 'console', {
//     id: 'console',
//     name: 'console',
//     type: 'console',
//     platform: 'h5',
//   });
function getConsoleFunction(item: any, platform?: string) {
  return `// ${item?.type} ${item?.dataId} \n console.log(${item?.options?.value
    .map((v: string) => {
      if (isJSVar(v)) {
        return generateVarString(v);
      }
      return `'${v}'`;
    })
    .filter(Boolean)
    .join(',')});\n`;
}

const CMDGenerator = (
  item: any,
  params: any,
  platform: string,
  scope: IScope,
) => {
  if (!item?.type) {
    // 没有事件就抛弃
    return '';
  }
  const isLoopChildren = scope && scope?.parentType === 'Loop';
  // 先尝试人工实现，再整理
  if (item?.type === 'console') {
    return getConsoleFunction(item);
  }
  let suffix = '';
  if (count[item.type]) {
    count[item.type] += 1;
    suffix = count[item.type];
  } else {
    count[item.type] = 1;
  }

  return `const eventData${item.type}${suffix}: any = [${JSON.stringify(
    item,
  )},];eventData${item.type}${suffix}.params = ${JSON.stringify(
    // const a = [1,2,3]; a.parames = { a:1 } 不知道为什么这么设计的，但是实际上它是这样的数组结构
    // @ts-ignore
    params,
  )} || [];CMDGenerator(eventData${item.type}${suffix}, {${params
    .concat(
      isLoopChildren
        ? [
            // @ts-ignore
            { name: scope?.parent?.props?.itemKey ?? 'item' },
            // @ts-ignore
            { name: scope?.parent?.props?.indexKey ?? 'i' },
            { name: 'item' },
            { name: 'i' },
          ]
        : [],
    )
    .map((i: { name: any }) => i.name)
    .filter(Boolean)
    .join(',')}}, '${item.type}', { id: '${item.type}',name: '${
    item.type
  }',type: '${item.type}',platform: '${platform}',});`;
};
export const CMDGeneratorLifeCycle = (
  value: any[],
  platform: any,
  scope?: IScope,
) => {
  const renderEvent = value.map((v1: any) => {
    // @ts-ignore
    return CMDGenerator(v1, value.params, platform, scope);
  });

  return renderEvent.join('');
};

export const CMDGeneratorEvent = (value: any, nodeItem: any, scope: IScope) => {
  const renderEvent = `(${value.params
    .map((i: { name: any }) => i.name + ': any')
    .join(',')})=>{ ${CMDGeneratorLifeCycle(value, nodeItem?.platform, scope)}
    }`;

  return renderEvent;
};
