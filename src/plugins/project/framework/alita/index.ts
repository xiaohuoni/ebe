import hackNodeAttr from './hooks/hackNodeAttr';
import app from './plugins/app';
import commonDeps from './plugins/commonDeps';
import config from './plugins/config';
import dataSource from './plugins/dataSource';
import mobileLayout from './plugins/mobileLayout';
import packageJSON from './plugins/packageJSON';
import pageview from './plugins/pageview';
import styleInject from './plugins/styleInject';
import template from './template';
import themeCss from './plugins/themeCss';

export default {
  template,
  plugins: {
    app,
    packageJSON,
    mobileLayout,
    commonDeps,
    config,
    pageview,
    styleInject,
    dataSource,
    themeCss,
  },
  hooks: {
    hackNodeAttr,
  },
};
