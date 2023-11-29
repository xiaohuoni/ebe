import { defineConfig } from 'alita';
import proxy from './proxy';

export default defineConfig({
  appType: 'h5',
  mfsu: false,
  hash: false,
  npmClient: 'yarn',
  proxy,
  mobileLayout: true,
  autoprefixer: {
    remove: false,
  },
  headScripts: [
    `${process.env.REACT_APP_REQUEST_PREFIX?.replace(/\/+$/, '')}/app/env/info`,
  ],
  retainLog: process.env.COMPRESS === 'none',
  publicPath: process.env.PUBLIC_PATH || './',
  outputPath: 'build',
  keepalive: [],
  hd: {
    px2rem: {
      selectorDoubleRemList: [/.adm-/, /\:root/],
    },
  },
  theme: {
    '@hd': '2px',
  },
  alias: {
    zlib: require.resolve('browserify-zlib'),
  },
});
