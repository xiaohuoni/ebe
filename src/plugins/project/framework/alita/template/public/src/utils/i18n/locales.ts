import { localeMonitor } from './localeMonitor';
import pcLocale from './locale/pc';
import antdEnUS from 'antd/es/locale/en_US';
import antdZhCN from 'antd/es/locale/zh_CN';
import antdZhHK from 'antd/es/locale/zh_HK';

export const setLocaleChange = ({ getLocale, language }: Record<string, any>) => {
  // 这里进行多语言切换
};

// 这里处理了个监听逻辑， 过多的静态方法需要监听语言变更时刷新locale，
localeMonitor.addListener(setLocaleChange);

export default {
  'en-US': async () => {
    const { enUS } = await pcLocale.other();
    return {
      antd: antdEnUS,
      lowcode: enUS,
    };
  },
  'zh-CN': async () => {
    const zhCN = await pcLocale.zhCN();
    return ({
      antd: antdZhCN,
      lowcode: zhCN,
    });
  },
  'zh-HK': async () => {
    const { zhHK } = await pcLocale.other();
    return ({
      antd: antdZhHK,
      lowcode: zhHK,
    });
  },
};
