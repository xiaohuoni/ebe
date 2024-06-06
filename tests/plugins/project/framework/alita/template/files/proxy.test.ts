import getFile from '../../../../../../../src/plugins/project/framework/alita/template/files/proxy';
import { expectValueIgnoreWhitespace } from '../../../../../../utils';

describe('template files proxy', () => {
  test('should return the correct file proxy', () => {
    const config: any = {
      baseUrl: 'exe.com/',
    };
    const expectedFileContent = `const BASE_URL = 'exe.com/';

    const DEV_URL = process.env.LCDP_SERVICE_URL || \`\${BASE_URL}lcdp-app/server/\`;

    export default {
      '/portal': {
        target: BASE_URL,
        changeOrigin: true,
      },
      '/server': {
        target: DEV_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/server': ''
        },
      },
      '/app': {
        target: DEV_URL,
        changeOrigin: true,
        // pathRewrite: { '^/app': '' },
      },
      '/login': {
        target: DEV_URL,
        changeOrigin: true,
        // pathRewrite: { '^/login': '' },
      },
      '/lcdp': {
        target: \`\${DEV_URL}\`,
        changeOrigin: true,
      },
      '/img': {
        target: BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/img': ''
        },
      },
      '/engine': {
        target: BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/engine': 'engine'
        },
      },
    };
    `;

    const [directories, file] = getFile(config);

    expect(directories).toEqual(['config']);
    expect(file.name).toEqual('proxy');
    expect(file.ext).toEqual('ts');
    expectValueIgnoreWhitespace(file.content, expectedFileContent);
  });
});
