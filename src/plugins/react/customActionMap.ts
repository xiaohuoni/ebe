import {
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';

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
import createEventFile from '../../core/utils/createEventFile';
import { getImportFrom } from '../../utils/depsHelper';
import { getSaleEventName } from '../../utils/getSaleEventName';
import { getEvents } from '../../utils/schema/parseDsl';
import {
  CUSTOM_ACTION_CHUNK_NAME,
  DATA_SOURCE_CHUNK_NAME,
  PAGE_TOOL_CHUNK_NAME,
} from './const';

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

      const paramsName = 'context';

      const content = await createEventFile(
        { containerInfo: ir, paramsName },
        async ({ deconstructionContextCode }) => {
          const eventCodeString = ir?.customFuctions
            ?.map((e) => {
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
                // originDynamicActionSource 可能是带 try catch 的，我们只需要中间执行的代码
                let startStrLength = 5;
                let startIndex = e.originDynamicActionSource.indexOf('try {');
                // 如果没带 try catch ，匹配函数中间的字符串
                if (startIndex === -1) {
                  startStrLength = 6;
                  startIndex = e.originDynamicActionSource.indexOf(') => {');
                }
                let endIndex =
                  e.originDynamicActionSource.indexOf('} catch (err) {');
                if (endIndex === -1) {
                  endIndex = e.originDynamicActionSource.lastIndexOf('}');
                }
                // 裁剪字符串，只要中间实际的函数内容
                const extractedString = e.originDynamicActionSource.substring(
                  startIndex === -1 ? 0 : startIndex + startStrLength,
                  endIndex === -1
                    ? e.originDynamicActionSource.length
                    : endIndex,
                );
                return `const ${eventName} = (options: any)=>{ try { ${extractedString}} catch (err) {
          console.log(err);
        }}`;
              }

              return `const ${eventName} = ${CMDGeneratorEvent(
                item?.value,
                {
                  platform: ir.platform,
                },
                {} as IScope,
                { ir, isCustomEvent: true, options: next.contextData.options },
              )}`;
            })
            .join(';');

          return `
          const useCustomAction = (${paramsName}: any) => {
            ${deconstructionContextCode}
            ${eventCodeString}
            const customActionMap = {
              ${customFuctionsIds.join(',')}
            };

            return customActionMap;
          }
          
          export default useCustomAction;
        `;
        },
      );

      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: CUSTOM_ACTION_CHUNK_NAME.Map,
        subModule: 'customAction',
        content,
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
        name: CUSTOM_ACTION_CHUNK_NAME.ImperativeHandle,
        content: `\n // 定义页面的自定义事件 \n  const customActionMap = useCustomAction(context)`,
        linkAfter: [
          PAGE_TOOL_CHUNK_NAME.useMergeContextCallHook,
          ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
          DATA_SOURCE_CHUNK_NAME.CallDataSource,
          PAGE_TOOL_CHUNK_NAME.PageTooL,
        ],
      });
    }
    // else {
    //   next.chunks.push({
    //     type: ChunkType.STRING,
    //     fileType: cfg.fileType,
    //     name: CUSTOM_ACTION_CHUNK_NAME.Map,
    //     subModule: 'customAction',
    //     content: `const useCustomAction = (context: any) => { return {}; }\n export default useCustomAction;`,
    //     linkAfter: [
    //       ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
    //     ],
    //   });
    // }
    return next;
  };
  return plugin;
};

export default pluginFactory;
