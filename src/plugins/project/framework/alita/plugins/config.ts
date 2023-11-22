import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../../../core/types';

const pluginFactory: BuilderComponentPluginFactory<any> = (cfg) => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const packageJson = `import { defineConfig } from 'alita';
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
        \`\${process.env.REACT_APP_REQUEST_PREFIX?.replace(/\\/+$/, '')}/app/env/info\`,
      ],
      retainLog: process.env.COMPRESS === 'none',
      publicPath: process.env.PUBLIC_PATH || './',
      outputPath: 'build',
      keepalive: [],
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
      },
    });
    `;

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TS,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: packageJson,
      linkAfter: [],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
