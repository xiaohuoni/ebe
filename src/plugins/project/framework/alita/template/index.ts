import { IProjectTemplate, ResultDir } from '../../../../../core';
import { generateStaticFiles } from './static-files';

const alitaTemplate: IProjectTemplate = {
  slots: {
    pages: {
      path: ['src', 'pages'],
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
    themeCss: {
      path: ['src'],
      fileName: 'overrides',
    },
  },

  generateTemplate(parseResult, postProcessors): ResultDir {
    return generateStaticFiles(parseResult, postProcessors);
  },
};

export default alitaTemplate;
