import { defineConfig } from 'alita';
const BASE_URL = 'http://172.21.72.205:10000/'; // 开发环境
// const BASE_URL = 'http://10.10.179.140:8048/HJF/'; // HJF环境
// const BASE_URL = 'http://172.16.84.236:18896/QXYZ-TEST/'; // QXYZ-TEST
// http://10.10.179.140:8896/HJE
const DEV_URL = `${BASE_URL}lcdp-app/server/`;

process.env.LCDP_HTTP_SECURITY_MODE = '1.0';
export default defineConfig({
  appType: 'pc',
  keepalive: [/list/],
  aconsole: {
    console: {},
    inspx: {},
  },
  // antd:{},
  mfsu: false,
  hash: false,
  npmClient: 'yarn',
  proxy: {
    // 统一网关代理
    '/app': {
      target: DEV_URL,
      changeOrigin: true,
      // pathRewrite: { '^/app': '' },
    },
  },
  headScripts: [`/app/env/info.js`],
  define: {
    'process.env.LCDP_HTTP_SECURITY_MODE': 1.0,
    'process.env.BASE_URL': BASE_URL,
  },
});
