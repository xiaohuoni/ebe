// 命令源码化
import {
  IScope,
  CompositeValueGeneratorOptions,
  CMDGeneratorPrames,
} from '../types';
import * as cmd from '../../cmd';
import { getDebugData } from './debug';
import { as } from 'fp-ts/lib/Option';

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
    console.warn('源码指令缺失');
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

  return renderEvent.join('');
};

export const CMDGeneratorEvent = (
  value: any,
  nodeItem: any,
  scope: IScope,
  options: CompositeValueGeneratorOptions = {},
  // TODO: 后续无用移除
  prefix: string = '',
) => {
  if (!value || !value.params) {
    console.log(value);
    return '()=>{ console.log("这里找不到参数/？")}';
  }
  const renderEvent = `(${prefix}${value.params
    .filter((obj: { name: any }, index: any, arr: any[]) => {
      // 删掉 name 重复的对象，如 Tree {title: '节点key(单选)',name: 'selectedKeys',value: '$selectedKeys[0]$',},{title: '节点keys(多选)',name: 'selectedKeys',value: '$selectedKeys$', },
      return arr.findIndex((o) => o.name === obj.name) === index;
    })
    .map((i: { name: any }) => i.name + ': any')
    .join(',')})=>{ ${CMDGeneratorFunction(
    value,
    value.params,
    nodeItem?.platform,
    scope,
    options,
  )}
    }`;

  // 统一对每个指令结束后增加换行
  return renderEvent + '\n';
};
