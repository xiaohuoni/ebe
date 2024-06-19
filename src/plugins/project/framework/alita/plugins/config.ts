import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../../../core/types';
import { parse2Var } from '../../../../../core/utils/compositeType';

const pluginFactory: BuilderComponentPluginFactory<any> = (cfg) => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };
    const options = next.contextData.options;
    const isMobile = options?.platform === 'h5';

    const applicationIcon = next.contextData.options?.appInfo?.applicationIcon;

    const cfg = `import { defineConfig } from 'alita';
    import proxy from './proxy';
  ${
    isMobile
      ? ''
      : `const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ueditorReactPath = require.resolve('@lingxiteam/lcdp-ueditor-react/package.json');

`
  }
    export default defineConfig({
      appType: '${isMobile ? 'h5' : 'pc'}',
      mfsu: false,
      hash: false,
      npmClient: 'yarn',
      proxy,
      ${
        isMobile
          ? `mobileLayout: true,
      headScripts: [
        \`\${process.env.REACT_APP_REQUEST_PREFIX?.replace(/\\/+$/, '')}/app/env/info\`,
      ],
      hd: {
        px2rem: {
          selectorDoubleRemList: [/.adm-/, /\\:root/],
        },
      },
      theme: {
        '@hd': '2px',
      },
      alias: {
        zlib: require.resolve('browserify-zlib'),
      },`
          : `antd: {
        configProvider: {
          prefixCls: 'pcfactory',
        },
      },`
      }
      autoprefixer: {
        remove: false,
      },
      retainLog: process.env.COMPRESS === 'none',
      publicPath: process.env.PUBLIC_PATH || './',
      outputPath: 'build',
      keepalive: [],
      ${
        isMobile
          ? ''
          : ` copy: [
    {from: path.join(path.dirname(ueditorReactPath), 'ueditor-resource'), to: 'build/ueditor-resource/'}
  ],`
      }
      // info 文件配置
      scripts:[{src:"server/app/env/info.js"}],
      links: [
        ${
          applicationIcon
            ? parse2Var({
                rel: 'icon',
                href: './favicon.ico',
              })
            : ''
        } 
      ],      
    });
    `;

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TS,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: cfg,
      linkAfter: [],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
