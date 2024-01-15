import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../../../core/types';

const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as any;
    // 有进来两次？
    if (!ir.keepalive) {
      return next;
    }

    const options = next.contextData.options;
    const isMobile = options?.platform === 'h5';
    // 暂时只需要改 keepalive ，如果后面修改的多了，可以参考 pageview 或者 jsx 的插件的生命周期
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `import { history } from 'alita';
${
  isMobile
    ? `const titleList = [
  {
    pagePath: '/',
    title: '首页',
  },
];
const navList: never[] = [];
const navBar = {
  navList,
  hideNavBar: false,
  onLeftClick() {
    history.go(-1);
  },
};
const tabList: never[] = [];

const tabBar = {
  color: '#999999',
  selectedColor: '#00A0FF',
  borderStyle: 'red',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};`
    : ''
}
      export function getKeepAlive(keepalive: any) {
        return ${JSON.stringify(ir.keepalive)};
      }
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
