import {
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import { CUSTOM_ACTION_CHUNK_NAME } from './const';
import { CMDGeneratorEvent } from '../../core/utils/CMDGenerator';
import { getEvents } from '../../utils/schema/parseDsl';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
  IScope,
} from '../../core/types';

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
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: CUSTOM_ACTION_CHUNK_NAME.Map,
        content: ir?.customFuctions
          .map((e) => {
            const value = e.setEvents.map((event: any) => {
              const { eName, eValue } = getEvents(event);
              return {
                id: `${eName}`,
                value: eValue,
              };
            });
            const item = value[0];
            customFuctionsIds.push(e.eventCode);
            // const { eName, eValue } = events;
            // schema.events[eName] = {
            //   id: `${eName}`,
            //   value: eValue,
            // };
            return `const ${e.eventCode} = ${CMDGeneratorEvent(
              item?.value,
              next?.contextData,
              {} as IScope,
              { ir },
            )}`;
          })
          .join(';'),
        linkAfter: [
          ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
        ],
      });
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: CUSTOM_ACTION_CHUNK_NAME.ImperativeHandle,
        content: `React.useImperativeHandle(customActionMapRef, () => ({
          ${customFuctionsIds.join(',')}
        }));`,
        linkAfter: [CUSTOM_ACTION_CHUNK_NAME.Map],
      });
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;