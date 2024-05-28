import zhCN from './zh_CN';

export default {
  zhCN: () => Promise.resolve(zhCN),
  other: () => import(/* webpackChunkName: 'other-app-locale' */'./otherLocale'),
};
