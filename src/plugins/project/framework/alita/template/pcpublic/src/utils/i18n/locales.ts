import antdEnUS from 'antd/es/locale/en_US';
import antdZhCN from 'antd/es/locale/zh_CN';
import antdZhHK from 'antd/es/locale/zh_HK';
import pcLocale from './locale/pc';
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
    lowcode: pcLocale.enUS,
  },
  'zh-CN': {
    antd: antdZhCN,
    lowcode: pcLocale.zhCN,
  },
  'zh-HK': {
    antd: antdZhHK,
    lowcode: pcLocale.zhHK,
  },
};
