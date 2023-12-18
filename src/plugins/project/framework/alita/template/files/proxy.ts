import { ResultFile, LXProjectOptions } from '../../../../../../core';
import { createResultFile } from '../../../../../../core/utils/resultHelper';

export default function getFile(
  config?: LXProjectOptions,
): [string[], ResultFile] {
  const file = createResultFile(
    'proxy',
    'ts',
    `const BASE_URL = '${config?.baseUrl ?? 'http://xxx.xx.xx.xxx:8888/;'}'; 
${
  !config?.baseUrl
    ? "throw new Error('请配置正确的代理地址，并移除本行代码');"
    : ''
}
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
