// 命令源码化
import {
  IScope,
  CompositeValueGeneratorOptions,
  CMDGeneratorPrames,
} from '../types';
import {
  getConsole,
  getDefault,
  getIfelse,
  getResetCurrentForm,
} from '../../cmd';

const CMDGenerator = (prames: CMDGeneratorPrames) => {
  if (!prames?.value?.type) {
    // 没有事件就抛弃
    return '';
  }
  let str = '';
  switch (prames?.value?.type) {
    case 'console':
      str = getConsole(prames);
      break;
    // TODO: ifelse 条件没写全，待补充，如 "operate": "notEmpty"
    // case 'ifelse':
    //   str = getIfelse(prames);
    //   break;
    case 'resetCurrentForm':
      str = getResetCurrentForm(prames);
      break;
    default:
      str = getDefault(prames);
      break;
  }
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

  return renderEvent;
};
