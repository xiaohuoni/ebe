import { COMMON_CHUNK_NAME } from '../../../../../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../../../../../core/types';
import { generate } from './generate';

const pluginDataSource: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as any;

    const dataSource = JSON.parse(ir.dataSource);

    // if (dataSource.length === 0) {
    //   return next;
    // }

    const { code, type } = generate(dataSource || []);

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TS,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: type,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
      subModule: 'dataSourceType',
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TS,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: code,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport],
      subModule: 'useDataSource',
    });
    return next;
  };
  return plugin;
};

export default pluginDataSource;
