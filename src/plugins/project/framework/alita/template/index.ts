import { ResultDir, IProjectTemplate } from '../../../../../core';
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
  },

  generateTemplate(): ResultDir {
    return generateStaticFiles();
  },
};

export default alitaTemplate;
