import antdEnUS from 'antd-mobile-5/es/locales/en-US';
import antdZhCN from 'antd-mobile-5/es/locales/zh-CN';
import antdZhHK from 'antd-mobile-5/es/locales/zh-HK';
import locale from './locale/app';
import { localeMonitor } from './localeMonitor';

export const setLocaleChange = ({
  getLocale,
  language,
}: Record<string, any>) => {
  // 这里进行多语言切换
};

// 这里处理了个监听逻辑， 过多的静态方法需要监听语言变更时刷新locale，
localeMonitor.addListener(setLocaleChange);

export default {
  'en-US': {
    antd: antdEnUS,
    lowcode: locale.enUS,
  },
  'zh-CN': {
    antd: antdZhCN,
    lowcode: locale.zhCN,
  },
  'zh-HK': {
    antd: antdZhHK,
    lowcode: locale.zhHK,
  },
};
