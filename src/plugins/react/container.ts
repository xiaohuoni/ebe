import changeCase from 'change-case';
import {
  COMMON_CHUNK_NAME,
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import { REACT_CHUNK_NAME } from './const';

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../core/types';
import { ensureValidClassName } from '../../core/utils/validate';

const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IContainerInfo;

    // 将模块名转换成 PascalCase 的格式，并添加特定后缀，防止命名冲突
    const type = ensureValidClassName(
      `${changeCase.pascalCase(ir.moduleName)}$$${ir.containerType}`,
    );

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: CLASS_DEFINE_CHUNK_NAME.Start,
      content: `
      const ${type}: React.FC<PageProps> = ({ data, CMDGenerator, injectData, refs}) => {`,
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
      name: CLASS_DEFINE_CHUNK_NAME.End,
      content: '}',
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
        REACT_CHUNK_NAME.RenderEnd,
        REACT_CHUNK_NAME.DidMountEnd,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
      content: ' ',
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorEnd,
      content: '',
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorEnd],
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.DidMountStart,
      content: '  useEffect(() => {',
      linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End]],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.DidMountEnd,
      content: '  }, []);',
      linkAfter: [
        REACT_CHUNK_NAME.DidMountContent,
        REACT_CHUNK_NAME.DidMountStart,
        REACT_CHUNK_NAME.WillUnmountEnd,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.DidUpdateStart,
      content: 'useEffect(() => {',
      linkAfter: [REACT_CHUNK_NAME.DidMountEnd],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.DidUpdateEnd,
      content: '  });',
      linkAfter: [
        REACT_CHUNK_NAME.DidUpdateContent,
        REACT_CHUNK_NAME.DidUpdateStart,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.WillUnmountStart,
      content: 'return () => {',
      linkAfter: [REACT_CHUNK_NAME.DidMountContent],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.WillUnmountEnd,
      content: '  };',
      linkAfter: [
        REACT_CHUNK_NAME.WillUnmountContent,
        REACT_CHUNK_NAME.WillUnmountStart,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.RenderStart,
      content: 'return (',
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
        REACT_CHUNK_NAME.DidMountEnd,
        REACT_CHUNK_NAME.DidUpdateEnd,
        REACT_CHUNK_NAME.WillUnmountEnd,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.RenderEnd,
      content: ')',
      linkAfter: [
        REACT_CHUNK_NAME.RenderStart,
        REACT_CHUNK_NAME.RenderPre,
        REACT_CHUNK_NAME.RenderJSX,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `export default withPageHOC(${type}, {
        // TODO: appId
        appId:'1024143353417228288',
        dataSource: ${JSON.stringify(ir.dataSource)},
      });`,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
        CLASS_DEFINE_CHUNK_NAME.End,
      ],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
