import template from './template';
import app from './plugins/app';
import packageJSON from './plugins/packageJSON';
import mobileLayout from './plugins/mobileLayout';
import commonDeps from './plugins/commonDeps';
import config from './plugins/config';
import pageview from './plugins/pageview';
import hackNodeAttr from './hooks/hackNodeAttr';

export default {
  template,
  plugins: {
    app,
    packageJSON,
    mobileLayout,
    commonDeps,
    config,
    pageview,
  },
  hooks: {
    hackNodeAttr,
  },
};
