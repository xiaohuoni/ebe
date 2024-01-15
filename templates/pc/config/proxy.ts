const BASE_URL = 'http://10.10.179.140:8048/HJF/';

const DEV_URL = process.env.LCDP_SERVICE_URL || `${BASE_URL}lcdp-app/server/`;

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
    target: `${DEV_URL}`,
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
