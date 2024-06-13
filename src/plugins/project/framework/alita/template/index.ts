import { IProjectTemplate, ResultDir } from '../../../../../core';
import { generateStaticFiles } from './static-files';

const alitaTemplate: IProjectTemplate = {
  slots: {
    pages: {
      path: ['src', 'pages'],
    },
    modalPages: {
      path: ['src', 'components', 'modal'],
    },
    drawerPages: {
      path: ['src', 'components', 'drawer'],
    },
    popoverPages: {
      path: ['src', 'components', 'popover'],
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
