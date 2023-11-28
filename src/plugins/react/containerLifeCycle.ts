import {
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import { REACT_CHUNK_NAME } from './const';

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
    if ((ir.type === 'Page' || ir.type === 'BusiComp') && keys.length > 0) {
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

      // const chunks = keys.map<ICodeChunk | null>((e: any) => {
      //   // 过滤掉非法数据（有些场景下会误传入空字符串或 null)
      //   if (
      //     !isJSFunction(events[e]) &&
      //     !isJSExpressionFn(events[e]) &&
      //     !isJSExpression(events[e]) &&
      //     !isEventData(events[e])
      //   ) {
      //     return null;
      //   }
      //   if (e === 'stateChange') {
      //     return {
      //       type: ChunkType.STRING,
      //       fileType: cfg.fileType,
      //       name: REACT_CHUNK_NAME.DidUpdateContent,
      //       content: generateFunction(events[e], {
      //         name: ir.platform,
      //       }),
      //       linkAfter: [REACT_CHUNK_NAME.DidUpdateStart],
      //     };
      //   }
      //   if (e === 'willUnmount') {
      //     next.chunks.push({
      //       type: ChunkType.STRING,
      //       fileType: FileType.TSX,
      //       name: REACT_CHUNK_NAME.WillUnmountStart,
      //       content: 'return () => {',
      //       linkAfter: [REACT_CHUNK_NAME.DidMountContent],
      //     });

      //     next.chunks.push({
      //       type: ChunkType.STRING,
      //       fileType: FileType.TSX,
      //       name: REACT_CHUNK_NAME.WillUnmountEnd,
      //       content: '  };',
      //       linkAfter: [
      //         REACT_CHUNK_NAME.WillUnmountContent,
      //         REACT_CHUNK_NAME.WillUnmountStart,
      //       ],
      //     });

      //     return {
      //       type: ChunkType.STRING,
      //       fileType: cfg.fileType,
      //       name: REACT_CHUNK_NAME.WillUnmountContent,
      //       content: generateFunction(events[e], {
      //         name: ir.platform,
      //       }),
      //       linkAfter: [REACT_CHUNK_NAME.WillUnmountStart],
      //     };
      //   }
      //   if (e === 'useEffect') {
      //     return {
      //       type: ChunkType.STRING,
      //       fileType: cfg.fileType,
      //       name: REACT_CHUNK_NAME.DidMountContent,
      //       content: generateFunction(events[e], {
      //         name: ir.platform,
      //       }),
      //       linkAfter: [REACT_CHUNK_NAME.DidMountStart],
      //     };
      //   }
      //   // 如果不是已知的生命周期事件，先忽略
      //   return null;
      // });

      // next.chunks.push(...chunks.filter((x): x is ICodeChunk => x !== null));
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;
