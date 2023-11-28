import template from './template';
import busiComp from './plugins/busiComp';
import packageJSON from './plugins/packageJSON';
import mobileLayout from './plugins/mobileLayout';
import commonDeps from './plugins/commonDeps';
import config from './plugins/config';
import hackNodeAttr from './hooks/hackNodeAttr';

export default {
  template,
  plugins: {
    packageJSON,
    mobileLayout,
    commonDeps,
    config,
    busiComp,
  },
  hooks: {
    hackNodeAttr,
  },
};
