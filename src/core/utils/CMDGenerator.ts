// 命令源码化

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
      return v;
    })
    .filter(Boolean)
    .join(',')})`;
}

const CMDGenerator = (item: any, params: any, platform: string) => {
  // 先尝试人工实现，再整理
  if (item.type === 'console') {
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
    .map((i: { name: any }) => i.name)
    .filter(Boolean)
    .join(',')}}, '${item.type}', { id: '${item.type}',name: '${
    item.type
  }',type: '${item.type}',platform: '${platform}',});`;
};
export const CMDGeneratorLifeCycle = (value: any[], config: any) => {
  const renderEvent = value.map((v1: any) => {
    // @ts-ignore
    return CMDGenerator(v1, value.params, config.name);
  });

  return renderEvent;
};

export const CMDGeneratorEvent = (
  value: any,
  nodeItem: any,
  eventName: any,
) => {
  const renderEvent = `(${value.params
    .map((i: { name: any }) => i.name + ': any')
    .join(',')})=>{ ${CMDGenerator(value[0], value.params, nodeItem?.platform)}
        
        const eventData: any = [${JSON.stringify(
          value[0],
        )},];eventData.params = ${JSON.stringify(
    value.params,
  )} || [];CMDGenerator(eventData, {${value.params
    .map((i: { name: any }) => i.name)
    .join(',')}}, '${eventName}', { id: '${nodeItem?.id}',name: '${
    nodeItem?.id
  }',type: '${nodeItem?.type}',platform: '${nodeItem?.platform}',});}`;

  return renderEvent;
};
