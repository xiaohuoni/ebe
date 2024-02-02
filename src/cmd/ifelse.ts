import { isJSVar } from '../core/utils/deprecated';
import { generateVarString } from '../core/utils/compositeType';
import {
  IScope,
  CompositeValueGeneratorOptions,
  CMDGeneratorPrames,
} from '../core/types';
import { CMDGeneratorFunction } from '../core/utils/CMDGenerator';

// const eventDataifelse5: any = [
//   {
//     type: 'ifelse',
//     condition: [
//       {
//         condId: '290724',
//         options: {
//           useManual: true,
//           useObject: false,
//           context: '$key$',
//           operate: '==',
//           manualValue: 'del',
//         },
//         conditionType: 'checkContextValue',
//         objType: 'system',
//         objId: 'sys',
//       },
//     ],
//     dataId: 170599562924835360,
//     elseIfs: [
//       {
//         dataName: 'elseIf',
//         dataId: 170599564198584200,
//         condition: [
//           {
//             options: {
//               useManual: true,
//               useObject: false,
//               context: '$key$',
//               operate: '==',
//               manualValue: 'ktpz',
//             },
//             condId: '6309089',
//             conditionType:
//               'checkContextValue',
//             objType: 'system',
//             objId: 'sys',
//           },
//         ],
//         value: 'elseIf',
//         desc: '考题配置',
//         children: [
//           {
//             dataName: 'action',
//             dataId: 170599582405819780,
//             todoOptions: [
//               'historyType',
//               'pathname',
//               'searchParams',
//               'routerData',
//             ],
//             options: {
//               compId: 'history',
//               compName: 'system',
//               id: '437399',
//               pageJsonId: '0314043',
//               type: 'push',
//               pathname: '/kaotipeizhi6839',
//               selectedType: 'page',
//               pageId: '1040511037455740928',
//               modalPath: '/kaotipeizhi6839',
//               paramsObj: {
//                 bizId: '$item.id$',
//               },
//               paramsObjKeyValueMap: {
//                 bizId: '$item.id$',
//               },
//             },
//             actionObjId: 'history',
//             actionObjName: 'system',
//             value: 'history',
//             children: [],
//             elseIfs: [],
//             line_number: 6,
//           },
//         ],
//         elseIfs: [],
//         callback: [
//           {
//             type: 'history',
//             dataId: 170599582405819780,
//             options: {
//               compId: 'history',
//               compName: 'system',
//               id: '437399',
//               pageJsonId: '0314043',
//               type: 'push',
//               pathname: '/kaotipeizhi6839',
//               selectedType: 'page',
//               pageId: '1040511037455740928',
//               modalPath: '/kaotipeizhi6839',
//               paramsObj: {
//                 bizId: '$item.id$',
//               },
//               paramsObjKeyValueMap: {
//                 bizId: '$item.id$',
//               },
//             },
//             line_number: 6,
//           },
//         ],
//       },
//       {
//         dataName: 'elseIf',
//         dataId: 170599564466547300,
//         condition: [
//           {
//             options: {
//               useManual: true,
//               useObject: false,
//               context: '$key$',
//               operate: '==',
//               manualValue: 'ktyl',
//             },
//             condId: '7018615',
//             conditionType:
//               'checkContextValue',
//             objType: 'system',
//             objId: 'sys',
//           },
//         ],
//         value: 'elseIf',
//         desc: '考题预览',
//         children: [
//           {
//             dataName: 'action',
//             dataId: 170599584893539780,
//             todoOptions: [
//               'historyType',
//               'pathname',
//               'searchParams',
//               'routerData',
//             ],
//             options: {
//               compId: 'history',
//               compName: 'system',
//               id: '8851886',
//               pageJsonId: '0314043',
//               type: 'push',
//               pathname: '/kaoshitimu9180',
//               selectedType: 'page',
//               pageId: '1040532731008397312',
//               modalPath: '/kaoshitimu9180',
//               paramsObj: {
//                 bizId: '$item.id$',
//               },
//               paramsObjKeyValueMap: {
//                 bizId: '$item.id$',
//               },
//             },
//             actionObjId: 'history',
//             actionObjName: 'system',
//             value: 'history',
//             children: [],
//             elseIfs: [],
//             line_number: 7,
//           },
//         ],
//         elseIfs: [],
//         callback: [
//           {
//             type: 'history',
//             dataId: 170599584893539780,
//             options: {
//               compId: 'history',
//               compName: 'system',
//               id: '8851886',
//               pageJsonId: '0314043',
//               type: 'push',
//               pathname: '/kaoshitimu9180',
//               selectedType: 'page',
//               pageId: '1040532731008397312',
//               modalPath: '/kaoshitimu9180',
//               paramsObj: {
//                 bizId: '$item.id$',
//               },
//               paramsObjKeyValueMap: {
//                 bizId: '$item.id$',
//               },
//             },
//             line_number: 7,
//           },
//         ],
//       },
//     ],
//     line_number: 2,
//     callback1: [
//       {
//         type: 'apiRequest',
//         dataId: 170599572431928220,
//       },
//     ],
//   },
// ];
// eventDataifelse5.params =
//   [
//     {
//       title: '菜单项key',
//       name: 'key',
//       value: '$key$',
//     },
//     {
//       title: '菜单项页面地址',
//       name: 'url',
//       value: '$url$',
//     },
//     {
//       title: '菜单项数据',
//       name: 'node',
//       value: '$node.data$',
//       attrType: 'object',
//     },
//   ] || [];
// CMDGenerator(
//   eventDataifelse5,
//   {
//     key,
//     url,
//     node,
//     rowData,
//     rowIndex,
//     item,
//     i,
//   },
//   'ifelse',
//   {
//     id: 'ifelse',
//     name: 'ifelse',
//     type: 'ifelse',
//     platform: 'pc',
//   },
// );

//         condition: [
//           {
//             options: {
//               useManual: true,
//               useObject: false,
//               context: '$key$',
//               operate: '==',
//               manualValue: 'ktpz',
//             },
//             condId: '6309089',
//             conditionType:
//               'checkContextValue',
//             objType: 'system',
//             objId: 'sys',
//             connector: '&&'
//           },
//         ],
const getVarStr = (str: string) => {
  if (isJSVar(str)) {
    return generateVarString(str);
  }
  return `'${str}'`;
};
const getCondition = (condition: any[]) => {
  return condition
    .map((c) => {
      return `${c?.connector ?? ''} ${getVarStr(c?.options?.context)} ${
        c?.options?.operate
      } ${getVarStr(c.options?.manualValue)}`;
    })
    .filter(Boolean)
    .join(' ');
};

const getElseIfs = ({
  value: elseIfs,
  params,
  platform,
  scope,
  config = {},
}: CMDGeneratorPrames) => {
  return elseIfs
    .filter(Boolean)
    .map((c: any) => {
      const { condition, callback = [] } = c;
      return `else if(${getCondition(condition)}){ ${CMDGeneratorFunction(
        callback,
        params,
        platform,
        scope,
        config,
      )} }`;
    })
    .join(' ');
};

export function getIfelse({
  value,
  params,
  platform,
  scope,
  config = {},
}: CMDGeneratorPrames): string {
  const { condition, callback1 = [], elseIfs } = value;
  return `if(${getCondition(condition)}){${CMDGeneratorFunction(
    callback1,
    params,
    platform,
    scope,
    config,
  )}} ${getElseIfs({ value: elseIfs, params, platform, scope, config })} `;
}
