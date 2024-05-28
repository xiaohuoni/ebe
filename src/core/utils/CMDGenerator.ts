// 命令源码化
import * as cmd from '../../cmd';
import {
  CMDGeneratorPrames,
  CompositeValueGeneratorOptions,
  IScope,
} from '../types';
import { getDebugData } from './debug';

const countCMD = (value: any | any[]) => {
  const debugData = getDebugData();
  debugData.cmdHash ??= [];
  debugData.cmdHash[value?.type] = true;
  if (value?.callback1) {
    value?.callback1.forEach((element: any) => {
      countCMD(element);
    });
  }
};

const CMDGenerator = (prames: CMDGeneratorPrames) => {
  if (!prames?.value?.type) {
    // 没有事件就抛弃
    return '';
  }
  countCMD(prames?.value);
  let str = '';

  // 指令入口临时调整
  const type = prames?.value?.type as keyof typeof cmd;

  if (typeof cmd[type] === 'function') {
    str = cmd[type](prames);
  } else {
    str = cmd.defaultCmd(prames);
  }

  // switch (prames?.value?.type) {
  //   case 'console':
  //     str = getConsole(prames);
  //     break;
  //   // TODO: ifelse 条件没写全，待补充，如 "operate": "notEmpty"
  //   // case 'ifelse':
  //   //   str = getIfelse(prames);
  //   //   break;
  //   // case 'resetCurrentForm':
  //   //   str = getResetCurrentForm(prames);
  //   //   break;
  //   case 'setDataSource':
  //     str = getSetDataSource(prames)
  //     break;
  //   case 'resetDataSource':
  //     str = getResetDataSource(prames)
  //     break;
  //   default:
  //     str = getDefault(prames);
  //     break;
  // }
  return str;
};

export const CMDGeneratorFunction = (
  value: any[],
  params: any,
  platform?: string,
  scope?: IScope,
  options: CompositeValueGeneratorOptions = {},
) => {
  const renderEvent = value.map((v1: any) => {
    // @ts-ignore
    return CMDGenerator({
      value: v1,
      params,
      platform,
      scope,
      config: options,
    });
  });

  return renderEvent.join('\n');
};
const asyncCMD = [''];
const callbackCheck = ['callback1', 'callback2', 'callback3', 'children'];
// 判断是否有退出事件
const checkIfCMDHasReturn = (cmddata: any[]) => {
  let result = false;

  const recursiveFind = (data: any[] | undefined) => {
    if (!data) return;
    data.forEach((item: any) => {
      if (!asyncCMD.includes(item.type)) {
        // 仅处理同步指令

        // 分析具体的退出事件：仅 存在配置了值的，退出事件，才列入检查范围，空退出事件不考虑
        if (
          item.type === 'return' &&
          !item.shielding &&
          item.options.returnValue
        ) {
          result = true;
          return;
        }
        callbackCheck.forEach((k) => {
          if (item[k]) {
            recursiveFind(item[k]);
          }
        });
        // 条件判断分支单独处理
        if (item.elseIfs) {
          item.elseIfs.forEach((k: any) => {
            recursiveFind(k.callback);
          });
        }
      }
    });
  };
  recursiveFind(cmddata);

  return result;
};

export const CMDGeneratorEvent = (
  value: any,
  nodeItem: any,
  scope?: IScope,
  options: CompositeValueGeneratorOptions = {},
  // TODO: 后续无用移除
  prefix: string = '',
  funcTop: string = '',
) => {
  if (!value || !value.params) {
    return '()=>{ console.log("这里找不到参数/？")}';
  }
  const isHasReturn = checkIfCMDHasReturn(value);
  let returnStartString = '';
  let returnEndString = '';
  if (isHasReturn && options.isTopHasPromise !== true) {
    returnStartString = `new Promise(async (resolve, reject) =>`;
    returnEndString = ')';
    // 如果顶层有退出事件，后续的事件不需要增加return
    options.isTopHasPromise = true;
  }
  const cmdFunctionString = CMDGeneratorFunction(
    value,
    value.params,
    nodeItem?.platform,
    scope,
    options,
  );
  let eventTop = '';
  if (options.isCustomEvent === true && !isHasReturn) {
    eventTop = 'async';
  } else if (options?.parentIsAsync) {
    eventTop = 'async';
  }
  const renderEvent = `${eventTop}(${prefix}${value.params
    .filter((obj: { name: any }, index: any, arr: any[]) => {
      // 删掉 name 重复的对象，如 Tree {title: '节点key(单选)',name: 'selectedKeys',value: '$selectedKeys[0]$',},{title: '节点keys(多选)',name: 'selectedKeys',value: '$selectedKeys$', },
      return arr.findIndex((o) => o.name === obj.name) === index;
    })
    .map((i: { name: any }) => i.name + ': any')
    .join(',')})=>${returnStartString}{ 
      ${funcTop}
      ${cmdFunctionString}
    }${returnEndString}`;
  return renderEvent;
};
