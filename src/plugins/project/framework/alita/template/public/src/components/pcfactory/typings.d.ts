declare module '*.less';
declare module '*.svg';
declare module '*.png';
// declare module 'antd';
declare module 'react-soundplayer/components';
declare module 'react-soundplayer/addons';
declare module 'echarts/lib/echarts';

// eslint-disable-next-line no-underscore-dangle
declare const __VERSION__: string;
// eslint-disable-next-line no-underscore-dangle
declare const __BUILD_DATE__: string;

declare interface Window {
  wufengController: {
    getAction: (
      key: ActionType,
      params: WufengAction | WufengAction[],
    ) => Promise<any>;
    registerIcons: (key: string, e: any) => void;
  };
  appId: string;
  LingxiPCFactory: {
    VERSION: string;
    BUILD_DATE: string;
  };
}
