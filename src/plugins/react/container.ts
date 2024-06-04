import changeCase from 'change-case';
import {
  CLASS_DEFINE_CHUNK_NAME,
  COMMON_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import { getGlobalDataExportNamesCode } from '../../utils/globalDataSource/template';
import { MOBILE_CHUNK_NAME } from '../project/framework/alita/plugins/const';
import {
  BOFRAMER_CHUNK_NAME,
  CUSTOM_ACTION_CHUNK_NAME,
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

const isBOFramer = (ir: IContainerInfo) => {
  return ir.containerType === 'BusiComp';
};

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
    if (next?.contextData?.options?.pageIdMapping[ir.pagePath]) {
      pageId =
        ir.pagePath || next?.contextData?.options?.pageIdMapping[ir.pagePath];
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
            attrDataMap={},customActionMapRef,routerData,lcdpApi, addActionTimer, clearActionTimer,
            injectData, sandBoxContext, refs, functorsMap,
            ${isBOFramer(ir) ? '' : 'state,'}
            style, urlParam, ${isModal ? 'forwardedRef,' : ''} 
            setComponentRef,
            ModalManagerRef,
            ExpSQLServiceModalRef,
            ExpBusiObjModalRef,
            ImportBusiObjModalRef,
            BannerModal,
            customActionId,
            lcdpParentRenderId,
            addToAwaitQueue,
            ${isModal ? 'onOk: fatherOnOk,' : ''}
            ${isModal ? 'closeModal' : ''}
        } = props;

        ${
          isBOFramer(ir)
            ? 'const [state, setState] = useListenProps(props.state)'
            : ''
        }
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

    if (shouldUsedGlobalData(ir.globalDataSource)) {
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: FileType.TSX,
        name: DATA_SOURCE_CHUNK_NAME.CallGlobalDataSource,
        content: `const globalDataSourceTool = useGlobalData({
          urlParam,
          routerData,
          state,
          lcdpApi,
        });
        const {
          ${getGlobalDataExportNamesCode(ir.globalDataSource)}
        } = globalDataSourceTool;
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
      name: PAGE_TOOL_CHUNK_NAME.PageTooL,
      content: `//通用的工具类方法 \n const useTools = useTool(refs, { addToAwaitQueue });\n const { getValue, setValue, setVisible, getVisible, callComponentMethod, setRequired, setDisabled, getDisabled, validateForm, getFormValue, resetForm, clearValue, setFormValues, asyncCallComponentMethod,validateAllForm,getAllFormValues, resetAllForm, updateNodeChildren } = useTools`,
      linkAfter: [
        DATA_SOURCE_CHUNK_NAME.CallGlobalDataSource,
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

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.DidUpdateStart,
      content: 'useEffect(() => {',
      linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorEnd],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.DidUpdateEnd,
      content: '  }, [state]);',
      linkAfter: [
        REACT_CHUNK_NAME.DidUpdateContent,
        REACT_CHUNK_NAME.DidUpdateStart,
      ],
    });

    ir.deps?.push(getImportFrom('@/hooks/useLifeCycle', 'useLifeCycle', false));

    // 生命周期引入
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.CallLifeCycleHooks,
      content: `
      // 获取生命周期
      const { useMount, useStateUpdate, useUnmounted } = useLifeCycle({
        monutDeps: [
          ${[
            'dataReadyComplete',
            shouldUsedGlobalData(ir.globalDataSource) &&
              'globalDataReadyComplete',
          ]
            .filter(Boolean)
            .join(',')}
        ],
        stateDeps: [state],
        mountCond: () => ${[
          'dataReadyComplete',
          shouldUsedGlobalData(ir.globalDataSource) &&
            'globalDataReadyComplete',
        ]
          .filter(Boolean)
          .join('&&')},
      })
      `,
      linkAfter: [REACT_CHUNK_NAME.DidUpdateEnd],
    });

    // 页面加载完成开始
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.UseMountStart,
      content: `
      // 页面加载完成
      useMount(() => {\n`,
      linkAfter: [LIFE_CYCLE_CHUNK_NAME.CallLifeCycleHooks],
    });

    // 页面加载完成结束
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.UseMountEnd,
      content: `\n})`,
      linkAfter: [
        LIFE_CYCLE_CHUNK_NAME.UseMountContent,
        LIFE_CYCLE_CHUNK_NAME.UseMountStart,
        MOBILE_CHUNK_NAME.NavBarEnd,
        CUSTOM_ACTION_CHUNK_NAME.DidMount,
      ],
    });

    // 页面状态变更开始
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.UseStateUpdateStart,
      content: `
      // 组件状态发生变化
      useStateUpdate(() => {\n`,
      linkAfter: [
        LIFE_CYCLE_CHUNK_NAME.UseMountEnd,
        LIFE_CYCLE_CHUNK_NAME.CallLifeCycleHooks,
      ],
    });

    // 页面状态变更结束
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.UseStateUpdateEnd,
      content: `\n})`,
      linkAfter: [
        LIFE_CYCLE_CHUNK_NAME.UseStateUpdateContent,
        LIFE_CYCLE_CHUNK_NAME.UseStateUpdateStart,
      ],
    });

    // 页面卸载开始
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.UseUnMountStart,
      content: `
        // 页面将要卸载
       useUnmounted(() => {\n`,
      linkAfter: [
        LIFE_CYCLE_CHUNK_NAME.UseStateUpdateEnd,
        LIFE_CYCLE_CHUNK_NAME.UseMountEnd,
        LIFE_CYCLE_CHUNK_NAME.CallLifeCycleHooks,
      ],
    });

    // 页面卸载结束
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.UseUnMountEnd,
      content: `\n})\n`,
      linkAfter: [
        LIFE_CYCLE_CHUNK_NAME.UseUnMountContent,
        LIFE_CYCLE_CHUNK_NAME.UseUnMountStart,
        CUSTOM_ACTION_CHUNK_NAME.WillUnmount,
      ],
    });

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleStart,
      content: `useImperativeHandle(ref, () => ({\n`,
      linkAfter: [
        LIFE_CYCLE_CHUNK_NAME.UseUnMountEnd,
        LIFE_CYCLE_CHUNK_NAME.UseStateUpdateEnd,
        LIFE_CYCLE_CHUNK_NAME.UseMountEnd,
        LIFE_CYCLE_CHUNK_NAME.CallLifeCycleHooks,
        REACT_CHUNK_NAME.DidUpdateEnd,
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
      ir.deps?.push(getImportFrom('../factory', 'Hoc', true));

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
    }

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: REACT_CHUNK_NAME.RenderLoading,
      content: `if (!dataReadyComplete) {
        return <Spin spinning/>
      }`,
      linkAfter: [
        LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleEnd,
        LIFE_CYCLE_CHUNK_NAME.UseUnMountEnd,
        LIFE_CYCLE_CHUNK_NAME.UseStateUpdateEnd,
        LIFE_CYCLE_CHUNK_NAME.UseMountEnd,
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
        LIFE_CYCLE_CHUNK_NAME.UseUnMountEnd,
        LIFE_CYCLE_CHUNK_NAME.UseStateUpdateEnd,
        LIFE_CYCLE_CHUNK_NAME.UseMountEnd,
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

    // const defaultState: any = {};
    // if (Array.isArray(ir?.compState)) {
    //   ir?.compState?.forEach((item) => {
    //     defaultState[item.code] = '';
    //   });
    // }
    let hasDataSource = false;
    if (ir.dataSource && ir.dataSource.length) {
      // import dataSource from './dataSource';
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
