import { IProjectTemplate, ResultDir } from '../../../../../core';
import { generateStaticFiles } from './static-files';

const alitaTemplate: IProjectTemplate = {
  slots: {
    pages: {
      path: ['src', 'pages'],
    },
    components: {
      path: ['src', 'components'],
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
      path: ['src', 'components', 'Pageview'],
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
