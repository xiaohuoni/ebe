import {
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import { groupDepsByPack } from '../../core/plugins/common/esmodule';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
  IScope,
} from '../../core/types';
import { CMDGeneratorEvent } from '../../core/utils/CMDGenerator';
import { getImportFrom } from '../../utils/depsHelper';
import { getEvents } from '../../utils/schema/parseDsl';
import { CUSTOM_ACTION_CHUNK_NAME, REACT_CHUNK_NAME } from './const';

const getSaleEventName = (eventName: any) => {
  const sale =
    /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(eventName) &&
    !/^(?:abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)$/.test(
      eventName,
    );
  return sale ? eventName : `event_${eventName}`;
};
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
    if (ir?.customFuctions && ir?.customFuctions.length > 0) {
      const customFuctionsIds: string[] = [];
      // 写到独立文件

      const eventCodeString = ir?.customFuctions
        .map((e) => {
          const value = e.setEvents?.map((event: any) => {
            const { eName, eValue } = getEvents(event);
            return {
              id: `${eName}`,
              value: eValue,
            };
          });
          const item = value?.[0];
          const eventName = getSaleEventName(e.eventCode);
          customFuctionsIds.push(eventName);
          // TODO: setEvents 不存在，应该要执行 dynamicActionSource？
          if (!item) {
            if (!e.originDynamicActionSource) {
              return `// 编排时为空
          const ${eventName} = (options: any)=>{}`;
            }
            const startIndex = e.originDynamicActionSource.indexOf('try {');
            const endIndex =
              e.originDynamicActionSource.indexOf('} catch (err) {');
            const extractedString = e.originDynamicActionSource.substring(
              startIndex,
              endIndex,
            );
            return `export const ${eventName} = (options: any)=>{${extractedString}} catch (err) {
          console.log(err);
        }}`;
          }
          // const { eName, eValue } = events;
          // schema.events[eName] = {
          //   id: `${eName}`,
          //   value: eValue,
          // };
          return `const ${eventName} = ${CMDGeneratorEvent(
            item?.value,
            next?.contextData,
            {} as IScope,
            { ir },
          )}`;
        })
        .join(';');
      const deps = ir.deps;
      const packs = groupDepsByPack(deps!);
      // TODO: 命令的 import 来源，应该是固定的，现在是生成所有的，又通过 noused 方案去掉了
      const importString = Object.keys(packs)
        .map((pkg: string) => {
          const ips = packs[pkg];
          if (!ips || ips.length === 0) {
            return '';
          }
          // TODO: 简单处理，应该判断 destructuring
          return `import {${packs[pkg]
            .map((i: any) => i.exportName)
            .join(',')}} from '${pkg}';`;
        })
        .join('\n');
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: CUSTOM_ACTION_CHUNK_NAME.Map,
        subModule: 'customAction',
        content:
          `${importString}

          const useCustomAction = (context: any) => { const { 

            getValue,
    setValue,
    getVisible,
    setVisible,
    getRequired,
    setRequired,
    callComponentMethod,
    setDisabled,
    getDisabled,
    getFormValue,
    validateForm,
    resetForm,
    clearValue,
    setFormValues,
    asyncCallComponentMethod,
    validateAllForm,
    getAllFormValues,
    resetAllForm,
    
             data,
            updateData,
            resetDataSource,
            reloadCustomDataSource,
            dataSnapshot,
            reloadServiceDataSource,
            reloadObjectDataSource,
            ModalManagerRef,
            functorsMap,
            ExpBusiObjModalRef,
            ExpSQLServiceModalRef,
            ImportBusiObjModalRef,
            lcdpApi,
            urlParam,
            state
           } = context; ` +
          eventCodeString +
          `\n return {\n${customFuctionsIds
            .map((i) => i)
            .join(',')} \n}}; export default useCustomAction;`,
        linkAfter: [
          ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
        ],
      });
      // 在文件头引入
      next.ir.deps.push(
        getImportFrom('./customAction', 'useCustomAction', false),
      );
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: CUSTOM_ACTION_CHUNK_NAME.DidMount,
        content: `// 挂载自定义事件
        customFuncMapping.add(customActionId, customActionMap);`,
        linkAfter: [
          REACT_CHUNK_NAME.DidMountStart,
          REACT_CHUNK_NAME.DidMountContent,
        ],
      });
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: CUSTOM_ACTION_CHUNK_NAME.WillUnmount,
        content: `// 页面销毁移除
        customFuncMapping.remove(customActionId);`,
        linkAfter: [
          REACT_CHUNK_NAME.WillUnmountStart,
          REACT_CHUNK_NAME.WillUnmountContent,
        ],
      });
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: CUSTOM_ACTION_CHUNK_NAME.ImperativeHandle,
        content: `\n //定义页面的自定义事件 \n  const customActionMap = useCustomAction({ ...useTools, ...useDataSourceTool, ...sandBoxContext.current})`,
        linkAfter: [
          ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
        ],
      });
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;
