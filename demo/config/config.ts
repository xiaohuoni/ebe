import { defineConfig } from 'alita';
// // const BASE_URL = 'http://172.21.72.205:10000/'; // 开发环境
// // const BASE_URL = 'http://10.10.179.140:8896/HJE/'; // 开发环境
// // const BASE_URL = 'http://172.16.84.236:18896/QXYZ-TEST/';
// // const BASE_URL = 'http://10.10.193.65:9012/';
const BASE_URL = 'http://10.10.179.140:8047/HJF/'; // HJF环境
// // const BASE_URL = 'http://172.16.84.236:18896/QXYZ-TEST/'; // QXYZ-TEST
// // http://10.10.179.140:8896/HJE
// const DEV_URL = `${BASE_URL}lcdp-app/server/`;
// demo配置态HJF
const EDITOR_URL = 'http://10.10.179.140:8047/HJF/';
// demo配置态开发环境
// const EDITOR_URL = 'http://172.21.72.205:8088/';

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
    '/api': {
      target: EDITOR_URL,
      changeOrigin: false,
      onProxyReq: (proxyReq, req) => {
        if (req.method === 'POST' && req.body) {
          const bodyData = JSON.stringify(req.body);
          proxyReq.write(bodyData);
        }
      },
    },
  },
  headScripts: [`/api/lcdp/env/info.js`],
  define: {
    'process.env.LCDP_HTTP_SECURITY_MODE': 1.0,
    'process.env.BASE_URL': BASE_URL,
  },
});
