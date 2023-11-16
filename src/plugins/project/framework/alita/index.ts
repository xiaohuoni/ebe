import template from './template';
import packageJSON from './plugins/packageJSON';
import mobileLayout from './plugins/mobileLayout';
import commonDeps from './plugins/commonDeps';
import hackEngineApis from './hooks/hackEngineApis';

export default {
  template,
  plugins: {
    packageJSON,
    mobileLayout,
    commonDeps,
  },
  hooks:{
    hackEngineApis
  }
};
