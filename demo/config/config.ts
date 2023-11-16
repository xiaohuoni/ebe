import { defineConfig } from 'alita';

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
    '/ebe': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: { '^/ebe': '' },
    },
  }
});
