import changeCase from 'change-case';
import {
  COMMON_CHUNK_NAME,
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import {
  REACT_CHUNK_NAME,
  MODAL_CHUNK_NAME,
  CUSTOM_ACTION_CHUNK_NAME,
  DATA_SOURCE_CHUNK_NAME,
} from './const';

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
  IScope,
} from '../../core/types';
import { ensureValidClassName } from '../../core/utils/validate';
import { getImportFrom } from '../../utils/depsHelper';
import { PAGE_TYPES } from '../../constants';

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
    let pageId = 'pageIdError';
    const getBusiCompPageId = (busiCompMapping: any[], id: string) => {
      const keys = Object.keys(busiCompMapping) as any;
      for (let i = 0; i <= keys.length; i++) {
        if (busiCompMapping[keys[i]] === id) {
          return keys[i];
        }
      }
      return 'pageIdError';
    };
    if (next?.contextData?.options?.pageIdMapping[ir.pagePath]) {
      pageId = next?.contextData?.options?.pageIdMapping[ir.pagePath];
    } else {
      pageId = getBusiCompPageId(
        next?.contextData?.options?.busiCompMapping,
        ir.id!,
      );
    }
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: CLASS_DEFINE_CHUNK_NAME.Start,
      content: `
        const pageId = '${pageId}';
        const ${type}: React.FC<PageProps> = ({
          attrDataMap={},customActionMapRef,routerData,lcdpApi,
          injectData, refs, state, functorsMap, getStaticDataSourceService, getValue, updateGlobalDataSource, componentItem, style, urlParam, ${
            isModal ? 'forwardedRef,' : ''
          } 
          parentEngineId = pageId
      }) => {`,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
      ],
    });

    if (ir.dataSource?.length) {
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: DATA_SOURCE_CHUNK_NAME.CallDataSource,
        content: `
          const { data, updateData, resetDataSource, reloadDataSource } = useDataSource({
            urlParam,
            routerData,
            state,
            lcdpApi,
          })
          const { getValue, setValue, setVisible, getVisible } = useTool(refs);
          `,
        linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start],
      });
    }

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
        CUSTOM_ACTION_CHUNK_NAME.ImperativeHandle,
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
    let hasDataSource = false;
    if (ir.dataSource && ir.dataSource.length) {
      // import dataSource from './dataSource';
      next.ir.deps.push(
        getImportFrom('./useDataSource', 'useDataSource', false),
      );
      hasDataSource = true;
    }
    // "customFuctions": [
    //   {
    //       "eventName": "选中节点",
    //       "externalCall": false,
    //       "implementation": "event",
    //       "remark": "",
    //       "eventCode": "select_node",
    //       "inParams": {},
    //       "setEvents
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `export default withPageHOC(${type}, {
        pageId,
        hasLogin: ${!!!ir.ignoreLogin},
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
