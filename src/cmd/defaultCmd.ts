import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import { IScope } from '../core/types';

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
export function getDefault(
  item: any,
  params: any,
  platform?: string,
  scope?: IScope,
) {
  const isLoopChildren = scope && scope?.parentType === 'Loop';

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
}
