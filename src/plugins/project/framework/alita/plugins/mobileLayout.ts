import { MOBILE_CHUNK_NAME } from './const';
import { REACT_CHUNK_NAME } from '../../../../../plugins/react/const';
import { generateFunction } from '../../../../../core/utils/jsExpression';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../../../../core/types';
import { getImportFrom } from '../../../../../utils/depsHelper';

export interface PluginConfig {
  fileType?: string;
  exportNameMapping?: Record<string, string>;
  normalizeNameMapping?: Record<string, string>;
  exclude?: string[];
}

const pluginFactory: BuilderComponentPluginFactory<PluginConfig> = (
  config?,
) => {
  const cfg = {
    fileType: FileType.TSX,
    exportNameMapping: {},
    normalizeNameMapping: {},
    ...config,
  };

  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IContainerInfo;
    const cfg = next.contextData.options;
    const isMobile = cfg?.platform === 'h5';
    // 只有在页面级别才生效
    if (ir.type !== 'Page' || !isMobile) {
      return next;
    }
    next.ir.deps.push(getImportFrom('alita', 'setPageNavBar'));
    // hideNavBar
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: MOBILE_CHUNK_NAME.NavBarStart,
      content: `setPageNavBar({
        pagePath: '${ir.pagePath}',
        navBar: {`,
      linkAfter: [
        REACT_CHUNK_NAME.DidMountContent,
        REACT_CHUNK_NAME.DidMountStart,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: MOBILE_CHUNK_NAME.NavBarEnd,
      content: `      }
    })`,
      linkAfter: [MOBILE_CHUNK_NAME.NavBarContent],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: MOBILE_CHUNK_NAME.NavBarContent,
      content: `pageTitle: '${ir.pageTitle ?? ir.pageName}',hideNavBar:${
        ir.hideNavBar
      },`,
      linkAfter: [MOBILE_CHUNK_NAME.NavBarStart],
    });

    const { events } = ir as any;

    // 生命周期。其实就是额外 setPageNavBar
    if (events && events?.onLeftClick) {
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: MOBILE_CHUNK_NAME.NavBarContent,
        content: `onLeftClick:()=>{${generateFunction(
          events.onLeftClick,
          {
            name: ir.platform,
          },
          { ir },
        )}}`,
        linkAfter: [MOBILE_CHUNK_NAME.NavBarStart],
      });
    }

    return next;
  };
  return plugin;
};

export default pluginFactory;
