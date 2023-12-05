import { defineConfig } from 'alita';
// const BASE_URL = 'http://172.21.72.205:10000/'; // 开发环境
const BASE_URL = 'http://10.10.179.140:8896/HJE/'; // HJE环境
const DEV_URL = `${BASE_URL}lcdp-app/server/`;

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
});
