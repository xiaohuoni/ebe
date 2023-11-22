import { ResultFile } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
    'proxy',
    'ts',
    `
    const BASE_URL = 'http://172.21.72.205:10000/'; // 开发环境

    const DEV_URL = process.env.LCDP_SERVICE_URL || \`\${BASE_URL}lcdp-app/server/\`;
    
    export default {
      '/portal': {
        target: BASE_URL,
        changeOrigin: true,
      },
      '/server': {
        target: DEV_URL,
        changeOrigin: true,
        pathRewrite: { '^/server': '' },
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
        pathRewrite: { '^/img': '' },
      },
      '/engine': {
        target: BASE_URL,
        changeOrigin: true,
        pathRewrite: { '^/engine': 'engine' },
      },
    };
 `,
  );

  return [['config'], file];
}
