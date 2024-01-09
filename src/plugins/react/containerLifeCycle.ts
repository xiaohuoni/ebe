import {
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import { REACT_CHUNK_NAME } from './const';
import { PAGE_TYPES } from '../../constants';
import { generateFunction } from '../../core/utils/jsExpression';

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeChunk,
  ICodeStruct,
  IContainerInfo,
} from '../../core/types';
import {
  isJSFunction,
  isJSExpression,
  isEventData,
} from '../../core/utils/deprecated';
import { isJSExpressionFn } from '../../core/utils/common';

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

    const keys = Object.keys(ir.events ?? {});
    // 只有在页面级别设置的生命周期才生效
    if (
      PAGE_TYPES.includes(ir.type) ||
      (ir.type === 'BusiComp' && keys.length > 0)
    ) {
      const { events } = ir;
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: REACT_CHUNK_NAME.DidUpdateContent,
        content: events?.stateChange
          ? generateFunction(events?.stateChange, {
              name: ir.platform,
            })
          : '',
        linkAfter: [REACT_CHUNK_NAME.DidUpdateStart],
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
        fileType: cfg.fileType,
        name: REACT_CHUNK_NAME.WillUnmountContent,
        content: events?.willUnmount
          ? generateFunction(events?.willUnmount, {
              name: ir.platform,
            })
          : '',
        linkAfter: [REACT_CHUNK_NAME.WillUnmountStart],
      });

      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: REACT_CHUNK_NAME.DidMountContent,
        content: events?.useEffect
          ? generateFunction(events.useEffect, {
              name: ir.platform,
            })
          : '',
        linkAfter: [REACT_CHUNK_NAME.DidMountStart],
      });
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;
