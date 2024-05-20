import changeCase from 'change-case';
import {
  CLASS_DEFINE_CHUNK_NAME,
  COMMON_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import {
  CUSTOM_ACTION_CHUNK_NAME,
  DATA_SOURCE_CHUNK_NAME,
  MODAL_CHUNK_NAME,
  PAGE_TOOL_CHUNK_NAME,
  REACT_CHUNK_NAME,
} from './const';

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../core/types';
import { ensureValidClassName } from '../../core/utils/validate';
import { getImportFrom } from '../../utils/depsHelper';

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
      pageId = ir.pagePath || next?.contextData?.options?.pageIdMapping[ir.pagePath];
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
        // 生成一个Id，用来记录当前页面所有的自定义事件
        const renderId = '${pageId}';
        const ${type} = React.forwardRef<unknown, PageProps>(({
          attrDataMap={},customActionMapRef,routerData,lcdpApi,
          injectData, refs, state, functorsMap, getStaticDataSourceService, updateGlobalDataSource, componentItem, style, urlParam, ${isModal ? 'forwardedRef,' : ''
        } 
          setComponentRef,
          ModalManagerRef,
          ExpSQLServiceModalRef,
          lcdpParentRenderId,
          ${isModal ? 'onOk: fatherOnOk,' : ''}
          ${isModal ? 'closeModal' : ''}
      }, ref) => {`,
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
      name: DATA_SOURCE_CHUNK_NAME.CallDataSource,
      content: `
        const useDataSourceTool = useDataSource({
          urlParam,
          routerData,
          state,
          lcdpApi,
        });
        const {
          data,
          updateData,
          resetDataSource,
          reloadCustomDataSource,
          dataSnapshot,
          reloadServiceDataSource,
          reloadObjectDataSource,
          loading: dataLoading,
          dataReadyComplete
        } = useDataSourceTool;
        `,
      linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: PAGE_TOOL_CHUNK_NAME.PageTooL,
      content: `const useTools = useTool(refs);\n const { getValue, setValue, setVisible, getVisible, callComponentMethod, setRequired, setDisabled, getDisabled } = useTools`,
      linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: CLASS_DEFINE_CHUNK_NAME.End,
      content: '})',
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
      hasDataSource = true;
    }
    next.ir.deps.push(
      getImportFrom('./useDataSource', 'useDataSource', false),
    );

    next.ir.deps.push(
      getImportFrom('@/utils/uid', 'getUid', true),
    );
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
        renderId,
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
