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

    const themeCssText = next.contextData.options?.themeCss;

    if (!themeCssText) {
      return next;
    }

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.CSS,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: themeCssText,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
