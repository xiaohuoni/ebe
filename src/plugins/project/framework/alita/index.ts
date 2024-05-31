import hackNodeAttr from './hooks/hackNodeAttr';
import app from './plugins/app';
import config from './plugins/config';
import dataSource from './plugins/dataSource';
import mobileLayout from './plugins/mobileLayout';
import packageJSON from './plugins/packageJSON';
import pageview from './plugins/pageview';
import styleInject from './plugins/styleInject';
import themeCss from './plugins/themeCss';
import template from './template';

export default {
  template,
  plugins: {
    app,
    packageJSON,
    mobileLayout,
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
