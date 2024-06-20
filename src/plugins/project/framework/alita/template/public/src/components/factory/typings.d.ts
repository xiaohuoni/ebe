declare module '*.less';
declare module '*.svg';
declare module '*.png';
// declare module '@lingxiteam/charts*';

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unused-vars
const __VERSION__: string;
// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unused-vars
const __BUILD_DATE__: string;
interface Window {
  px2hd?: (px: number) => number;
  LingxiAppFactory: {
    VERSION: string;
    BUILD_DATE: string;
  };
  wufengController: {
    getAction: (
      key: ActionType,
      params: WufengAction | WufengAction[],
    ) => Promise<any>;
    registerIcons: (key: string, e: any) => void;
  };
  appId: string;
  pageId: string;
}
