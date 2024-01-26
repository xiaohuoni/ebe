// 命令源码化
import { IScope } from '../types';
import { getConsole, getDefault, getIfelse } from '../../cmd';

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
  let str = '';
  switch (item?.type) {
    case 'console':
      str = getConsole(item, params, platform, scope);
      break;
    case 'ifelse':
      str = getIfelse(item, params, platform, scope);
      break;
    default:
      str = getDefault(item, params, platform, scope);
      break;
  }
  return str;
};

export const CMDGeneratorFunction = (
  value: any[],
  params: any,
  platform?: string,
  scope?: IScope,
) => {
  const renderEvent = value.map((v1: any) => {
    // @ts-ignore
    return CMDGenerator(v1, params, platform, scope);
  });

  return renderEvent.join('');
};

export const CMDGeneratorEvent = (value: any, nodeItem: any, scope: IScope) => {
  const renderEvent = `(${value.params
    .map((i: { name: any }) => i.name + ': any')
    .join(',')})=>{ ${CMDGeneratorFunction(
    value,
    value.params,
    nodeItem?.platform,
    scope,
  )}
    }`;

  return renderEvent;
};
