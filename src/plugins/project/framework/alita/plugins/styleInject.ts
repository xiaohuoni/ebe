import { normalizeCSS } from 'css-string-utils';
import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../../../../core/types';
import { INJECT_STYLE_CHUNK_NAME } from './const';
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
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.CSS,
        name: COMMON_CHUNK_NAME.InternalDepsImport,
        content: normalizeCSS(customClass ?? ' ', classRoot),
        linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
        subModule: 'customClass',
      });
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: INJECT_STYLE_CHUNK_NAME.InjectStyleStart,
        content: `import './customClass.css'`,
        linkAfter: [
          COMMON_CHUNK_NAME.ExternalDepsImport,
          COMMON_CHUNK_NAME.InternalDepsImport,
          COMMON_CHUNK_NAME.ImportAliasDefine,
          COMMON_CHUNK_NAME.FileVarDefine,
          COMMON_CHUNK_NAME.FileUtilDefine,
        ],
      });
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;
