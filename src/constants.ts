export const LINGXI_PROJECT_VERSION = '3.3.1-alpha.4';
export const LINGXI_TYPES_VERSION = '3.3.1-alpha.1';
export const PAGE_TYPES = [
  'Page',
  'MobileModal',
  'MobilePopover',
  'Modal',
  'Drawer',
  'Popover',
];
export const MODAL_TYPES = ['Modal', 'Drawer', 'Popover'];

export const SERVICE_SOURCE = {
  // 服务来源
  APP: 'app',
  // 应用内部 & 模型生成
  QUERY: 'query',
  // 解析服务
  STD: 'std',
  // 编排服务
  INNER: 'inner',
  // 高代码服务
  PLATFORM: 'platform',
  // 平台服务
  ATOM: 'atom',
  // 外部服务(低代码运营平台的原子服务)
  RHIN: 'rhin',
  // 业务运营服务
  SCENE: 'scene',
  // 业务运营场景服务
  OBJECT: 'object', // 业务对象生成服务
};

// 循环容器组件
export const LOOPCOMPONENTS = [
  'Loop',
  'DynamicList',
  'LoadMore',
  'BlockSelect',
  'DformList',
  'LoopList',
  'GridView',
];

// 循环容器标记属性的key字段
export const LoopMarkSymbol = Symbol('LoopMarkSymbol');
