import zhCN from './zh_CN';

export default {
  zhCN: () => Promise.resolve(zhCN),
  other: () =>
    import(/* webpackChunkName: 'other-pc-locale' */ './otherLocale'),
};
