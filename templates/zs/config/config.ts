import { defineConfig } from 'alita';
import proxy from './proxy';

export default defineConfig({
  appType: 'pc',
  mfsu: false,
  hash: false,
  npmClient: 'yarn',
  proxy,
  antd: {
    configProvider: {
      prefixCls: 'pcfactory',
    },
  },
  autoprefixer: {
    remove: false,
  },
  retainLog: process.env.COMPRESS === 'none',
  publicPath: process.env.PUBLIC_PATH || './',
  outputPath: 'build',
  keepalive: [],
  scripts: [{ src: 'server/app/env/info.js' }],
  links: [
    {
      rel: 'stylesheet',
      href: 'server/app/appTheme/getThemeCss?appId=871672424566726656&terminalType=pc',
    },
  ],
});
