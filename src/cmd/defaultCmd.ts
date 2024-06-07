import { CMDGeneratorPrames } from '../core/types';

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
export function getDefault({ value }: CMDGeneratorPrames) {
  const { type, dataId } = value;

  return `// ${type} ${dataId} 未支持转源码 \n console.error('${type} ${dataId}');\n`;
}
