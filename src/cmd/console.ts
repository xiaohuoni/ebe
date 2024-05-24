import { CMDGeneratorPrames } from '../core/types';
import { generateVarString } from '../core/utils/compositeType';
import { isJSVar } from '../core/utils/deprecated';

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
export function getConsole({ value }: CMDGeneratorPrames): string {
  const { options, type, dataId } = value;

  const consoleValue = options?.value
    ? Array.isArray(options?.value)
      ? options?.value
      : [options?.value]
    : [];
  return `// 打印日志\n console.log(${consoleValue
    ?.map((v: string) => {
      if (isJSVar(v)) {
        return generateVarString(v);
      }

      // v可能是data.b + '222';
      // if (v.includes('\n')) {
        // return `\`${v}\``;
      // } else {
        return `\`${v}\``;
      // }
    })
    .filter(Boolean)
    .join(',')});`;
}
