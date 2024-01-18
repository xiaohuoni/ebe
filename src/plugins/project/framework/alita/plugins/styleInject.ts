import { INJECT_STYLE_CHUNK_NAME } from './const';
import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../../../../core/types';
import { getImportFrom } from '../../../../../utils/depsHelper';
import { normalizeCSS } from 'css-string-utils';
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
    // 只有在页面级别才生效
    if (ir.type !== 'Page') {
      return next;
    }
    let customClass = '';
    const classRoot = `__CustomClass_${ir.id}__`;
    const getComponentsMap = (root: any) => {
      root.components.forEach((info: any) => {
        if (info?.customClass) {
          customClass += `.${info.id} { ${info?.customClass} }`;
        }
        if (info.components) {
          getComponentsMap(info);
        }
      });
    };
    getComponentsMap(ir);

    if (customClass) {
      // import { styleInject } from '@/utils/styleInject';
      next.ir.deps.push(getImportFrom('@/utils/styleInject', 'styleInject'));
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: INJECT_STYLE_CHUNK_NAME.InjectStyleStart,
        content: `styleInject(`,
        linkAfter: [
          COMMON_CHUNK_NAME.ExternalDepsImport,
          COMMON_CHUNK_NAME.InternalDepsImport,
          COMMON_CHUNK_NAME.ImportAliasDefine,
          COMMON_CHUNK_NAME.FileVarDefine,
          COMMON_CHUNK_NAME.FileUtilDefine,
        ],
      });

      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: INJECT_STYLE_CHUNK_NAME.InjectStyleEnd,
        content: `,'${ir.id ?? 'id'}');`,
        linkAfter: [INJECT_STYLE_CHUNK_NAME.InjectStyleContent],
      });

      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: INJECT_STYLE_CHUNK_NAME.InjectStyleContent,
        content: `'${normalizeCSS(customClass ?? ' ', classRoot)}'`,
        linkAfter: [INJECT_STYLE_CHUNK_NAME.InjectStyleStart],
      });
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;
