import changeCase from 'change-case';
import {
  CLASS_DEFINE_CHUNK_NAME,
  COMMON_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import { getGlobalDataVars } from '../../utils/globalDataSource/template';
import {
  BOFRAMER_CHUNK_NAME,
  DATA_SOURCE_CHUNK_NAME,
  LIFE_CYCLE_CHUNK_NAME,
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
import { shouldUsedGlobalData } from '../../utils/globalDataSource/general';
import { getContextInfo } from '../../utils/pageVarConfig';
import { isBOFramer } from '../../utils/schema/getBusiCompName';
import { MOBILE_CHUNK_NAME } from '../project/framework/alita/plugins/const';

const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IContainerInfo;

    // 将模块名转换成 PascalCase 的格式
    const type = ensureValidClassName(changeCase.pascalCase(ir.moduleName));

    const isModal =
      ir.containerType === 'MobileModal' ||
      ir.containerType === 'Modal' ||
      ir.containerType === 'Drawer';
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
    // pageIdMapping？干嘛用的，在这里画蛇添足？
    if (next?.contextData?.options?.pageIdMapping[ir.pagePath]) {
      pageId =
        ir.pagePath ||
        ir.pageId ||
        next?.contextData?.options?.pageIdMapping[ir.pagePath];
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
        const ${type} = React.forwardRef<unknown, PageProps>((props, ref) => {
          const {
            basicContext,
            ${isBOFramer(ir) ? '' : 'state,'}
            style,
        } = props;

        ${
          isBOFramer(ir)
            ? `
            const [state, setState] = useListenProps(props.state);
            const { visible, hiddenStyle } = useShouldVisible({
              visible: props.visible,
              style: props.style
            })
            `
            : ''
        }
        // 获取页面信息
        const pageInfo = useGetPageInfo(props);
          `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
      ],
    });

    if (isBOFramer(ir)) {
      ir.deps?.push(
        getImportFrom('@/hooks/useListenProps', 'useListenProps', false),
      );
    }

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: DATA_SOURCE_CHUNK_NAME.CallDataSource,
      content: `
       // 加载数据源管理 
        const useDataSourceTool = useDataSource({
          urlParam: pageInfo.urlParam,
          routerData: pageInfo.routerData,
          state,
          lcdpApi: pageInfo.lcdpApi,
        });
        `,
      linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start],
    });

    if (shouldUsedGlobalData(ir.globalDataSource)) {
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: DATA_SOURCE_CHUNK_NAME.CallGlobalDataSource,
        content: `
        // 全局数据源
        const globalDataSourceTool = useGlobalData({
          urlParam: pageInfo.urlParam,
          routerData: pageInfo.routerData,
          state,
          lcdpApi: pageInfo.lcdpApi,
        });
        `,
        linkAfter: [
          DATA_SOURCE_CHUNK_NAME.CallDataSource,
          CLASS_DEFINE_CHUNK_NAME.Start,
        ],
      });
    }

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: PAGE_TOOL_CHUNK_NAME.UseSuperObjectHook,
      content: `
       // 提交业务对象 
        const useTransSuperObjectParamsTools = useTransSuperObjectParams({
          refs: basicContext.refs,
          dataSnapshot: useDataSourceTool.dataSnapshot,
          data: useDataSourceTool.data,
          sceneCode: pageInfo.urlParam?.sceneCode,
        });`,
      linkAfter: [
        DATA_SOURCE_CHUNK_NAME.CallGlobalDataSource,
        DATA_SOURCE_CHUNK_NAME.CallDataSource,
        CLASS_DEFINE_CHUNK_NAME.Start,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: PAGE_TOOL_CHUNK_NAME.PageTooL,
      content: `//通用的工具类方法 \n const useTools = useTool(basicContext.refs, { addToAwaitQueue: pageInfo.addToAwaitQueue });\n`,
      linkAfter: [
        PAGE_TOOL_CHUNK_NAME.UseSuperObjectHook,
        DATA_SOURCE_CHUNK_NAME.CallGlobalDataSource,
        DATA_SOURCE_CHUNK_NAME.CallDataSource,
        CLASS_DEFINE_CHUNK_NAME.Start,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: PAGE_TOOL_CHUNK_NAME.CallUsePageFormHook,
      content: `// 页面表单方法 \n const pageFormUtils = usePageForm(basicContext.refs);\n`,
      linkAfter: [
        PAGE_TOOL_CHUNK_NAME.UseSuperObjectHook,
        DATA_SOURCE_CHUNK_NAME.CallGlobalDataSource,
        DATA_SOURCE_CHUNK_NAME.CallDataSource,
        CLASS_DEFINE_CHUNK_NAME.Start,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: PAGE_TOOL_CHUNK_NAME.useMergeContextCallHook,
      content: `
      // 合并上下文
      const { context, getEngineApis } = useMergeContext(props, {
        state,
        customActionId: props.customActionId,
        lcdpParentRenderId: props.lcdpParentRenderId,
        ${isModal ? 'fatherOnOk: props.onOk,' : ''}
        ${isModal ? 'closeModal: props.closeModal,' : ''}
        ...useTools,
        ...pageInfo,
        ...basicContext,
        ...useDataSourceTool,
        ...pageFormUtils,
        ${
          shouldUsedGlobalData(ir.globalDataSource)
            ? '...globalDataSourceTool,'
            : ''
        }
        ...useTransSuperObjectParamsTools,
      });

      ${
        getContextInfo({
          platform: ir.platform ?? 'pc',
          paramsName: 'context',
          includeVars: getGlobalDataVars(ir.globalDataSource),
          excludeVars: ['state'],
        }).deconstructionCode
      }
      `,
      linkAfter: [
        PAGE_TOOL_CHUNK_NAME.CallUsePageFormHook,
        PAGE_TOOL_CHUNK_NAME.PageTooL,
        PAGE_TOOL_CHUNK_NAME.UseSuperObjectHook,
        DATA_SOURCE_CHUNK_NAME.CallGlobalDataSource,
        DATA_SOURCE_CHUNK_NAME.CallDataSource,
        CLASS_DEFINE_CHUNK_NAME.Start,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: CLASS_DEFINE_CHUNK_NAME.End,
      content: '})',
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
        REACT_CHUNK_NAME.RenderEnd,
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
        MODAL_CHUNK_NAME.PageStateChange,
        MODAL_CHUNK_NAME.PageWillUnmount,
        MODAL_CHUNK_NAME.PageDidMount,
        MODAL_CHUNK_NAME.OnCancel,
        MODAL_CHUNK_NAME.OnOk,
      ],
    });

    if (ir.platform === 'h5' && ir.type === 'Page') {
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: REACT_CHUNK_NAME.DidMountStart,
        content: '\nuseEffect(() => {',
        linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorEnd],
      });

      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: REACT_CHUNK_NAME.DidMountEnd,
        content: '  }, []);\n',
        linkAfter: [
          MOBILE_CHUNK_NAME.NavBarStart,
          REACT_CHUNK_NAME.DidMountContent,
          REACT_CHUNK_NAME.DidMountStart,
        ],
      });
    }

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleStart,
      content: `useImperativeHandle(ref, () => ({\n`,
      linkAfter: [
        REACT_CHUNK_NAME.DidMountEnd,
        PAGE_TOOL_CHUNK_NAME.CallContainerHook,
        PAGE_TOOL_CHUNK_NAME.useMergeContextCallHook,
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorEnd],
        MODAL_CHUNK_NAME.OnCancel,
        MODAL_CHUNK_NAME.OnOk,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleEnd,
      content: `\n}));`,
      linkAfter: [
        BOFRAMER_CHUNK_NAME.SetMapState,
        LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleContent,
        LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleStart,
      ],
    });

    if (isBOFramer(ir)) {
      ir.deps?.push(getImportFrom('@/components/factory', 'Hoc', true));

      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: BOFRAMER_CHUNK_NAME.SetMapState,
        content: `
          setCompPropMapState: (mapState: Record<string, any>) => {
            setState({ ...state, ...mapState });
          },
          // 兼容setCompPropMapState("boframeId","params", {})
          setParams: (mapState: Record<string, any>) => {
            setState({ ...state, ...mapState });
          },
        `,
        linkAfter: [
          LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleContent,
          LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleStart,
        ],
      });

      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: BOFRAMER_CHUNK_NAME.ControlVisible,
        content: `
          if (!visible) {
            return null;
          }
        `,
        linkAfter: [
          BOFRAMER_CHUNK_NAME.SetMapState,
          LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleContent,
          LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleStart,
        ],
      });
    }

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.RenderLoading,
      content: `if (!dataReadyComplete) {
        return <Spin spinning/>
      }`,
      linkAfter: [
        BOFRAMER_CHUNK_NAME.ControlVisible,
        LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleEnd,
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
        REACT_CHUNK_NAME.DidUpdateEnd,
      ],
    });
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.RenderStart,
      content: 'return (',
      linkAfter: [
        REACT_CHUNK_NAME.RenderLoading,
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
        REACT_CHUNK_NAME.DidUpdateEnd,
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

    let exportCode = `withPageHOC(${type}, {
      renderId,
      hasLogin: ${!!!ir.ignoreLogin},
    })`;

    if (ir.containerType === 'BusiComp') {
      exportCode = `Hoc(${exportCode}, { type: "BOFramer", // 容器组件\n isContainer: true })`;
    }

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `export default ${exportCode}`,
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
