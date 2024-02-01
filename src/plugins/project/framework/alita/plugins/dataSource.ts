import { COMMON_CHUNK_NAME } from '../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../../../core/types';

const pluginDataSource: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as any;
    if (!ir.dataSource) {
      return next;
    }
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.JSON,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: ir.dataSource,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
      subModule: 'dataSource',
    });
    return next;
  };
  return plugin;
};

export default pluginDataSource;
