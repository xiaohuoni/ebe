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
    case 'ifelse':
      str = getIfelse(prames);
      break;
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
) => {
  const renderEvent = `(${value.params
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
