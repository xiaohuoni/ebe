import { IProjectTemplate, ResultDir } from '../../../../../core';
import { generateStaticFiles } from './static-files';

const alitaTemplate: IProjectTemplate = {
  slots: {
    pages: {
      path: ['src', 'pages'],
    },
    modalPages: {
      path: ['src', 'pages', 'modal'],
    },
    drawerPages: {
      path: ['src', 'pages', 'drawer'],
    },
    popoverPages: {
      path: ['src', 'pages', 'popover'],
    },
    components: {
      path: ['src', 'components', 'businessComponent'],
    },
    packageJSON: {
      path: [],
      fileName: 'package',
    },
    appConfig: {
      path: ['config'],
      fileName: 'config',
    },
    pageview: {
      path: ['src', 'components', 'common', 'Pageview'],
    },
    app: {
      path: ['src'],
      fileName: 'app',
    },
  },

  generateTemplate(parseResult, postProcessors): ResultDir {
    return generateStaticFiles(parseResult, postProcessors);
  },
};

export default alitaTemplate;
