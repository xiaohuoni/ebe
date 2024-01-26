import changeCase from 'change-case';
import {
  COMMON_CHUNK_NAME,
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import { REACT_CHUNK_NAME, MODAL_CHUNK_NAME } from './const';

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../core/types';
import { ensureValidClassName } from '../../core/utils/validate';
import { cleanDataSource } from '../../utils/schema/cleanDataSource';

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

    const isModal =
      ir.containerType === 'MobileModal' || ir.containerType === 'Modal';

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: CLASS_DEFINE_CHUNK_NAME.Start,
      content: `
        const ${type}: React.FC<PageProps> = ({ data, CMDGenerator, 
          attrDataMap={},
          injectData, refs, state, functorsMap, getStaticDataSourceService, getValue, componentItem, style, urlParam, ${
            isModal ? 'forwardedRef,' : ''
          } }) => {`,
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
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
        MODAL_CHUNK_NAME.ImperativeHandle,
      ],
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

    const defaultState: any = {};
    if (Array.isArray(ir?.compState)) {
      ir?.compState?.forEach((item) => {
        defaultState[item.code] = '';
      });
    }
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `export default withPageHOC(${type}, {
        pageId:'${
          next?.contextData?.options?.pageIdMapping[ir.pagePath] ??
          'pageId 未找到'
        }',
        hasLogin: ${!!!ir.ignoreLogin},
        dataSource: ${JSON.stringify(cleanDataSource(ir.dataSource ?? []))},
        defaultState:${JSON.stringify(defaultState)},
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
