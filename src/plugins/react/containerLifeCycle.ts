import { PAGE_TYPES } from '../../constants';
import {
  CLASS_DEFINE_CHUNK_NAME,
  DEFAULT_LINK_AFTER,
} from '../../core/const/generator';
import { generateFunction } from '../../core/utils/jsExpression';
import {
  CUSTOM_ACTION_CHUNK_NAME,
  MODAL_CHUNK_NAME,
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
      if (!events) {
        return next;
      }

      // const onOk = ()=>{

      // }
      // const onCancel = ()=>{

      // }
      // React.useImperativeHandle(ref, () => ({
      //   onOk,
      //   onCancel,
      // }));
      // ConstructorStart
      if (events?.onOk || events?.onCancel) {
        next.chunks.push({
          type: ChunkType.STRING,
          fileType: cfg.fileType,
          name: MODAL_CHUNK_NAME.OnOk,
          content: events?.onOk
            ? `const onOk = ()=>{ ${generateFunction(
                events?.onOk,
                {
                  name: ir.platform,
                },
                { ir },
              )} }`
            : '',
          linkAfter: [
            ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
            CUSTOM_ACTION_CHUNK_NAME.ImperativeHandle,
          ],
        });
        next.chunks.push({
          type: ChunkType.STRING,
          fileType: cfg.fileType,
          name: MODAL_CHUNK_NAME.OnCancel,
          content: events?.onCancel
            ? `const onCancel = ()=>{ ${generateFunction(
                events?.onCancel,
                {
                  name: ir.platform,
                },
                { ir },
              )} }`
            : '',
          linkAfter: [
            ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
          ],
        });
        next.chunks.push({
          type: ChunkType.STRING,
          fileType: cfg.fileType,
          name: MODAL_CHUNK_NAME.ImperativeHandle,
          content: `React.useImperativeHandle(forwardedRef, () => ({
            ${events?.onOk ? 'onOk,' : ''}
            ${events?.onCancel ? 'onCancel,' : ''}
          }));`,
          linkAfter: [MODAL_CHUNK_NAME.OnOk, MODAL_CHUNK_NAME.OnCancel],
        });
      }
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: REACT_CHUNK_NAME.DidUpdateContent,
        content: events?.stateChange
          ? generateFunction(
              events?.stateChange,
              {
                name: ir.platform,
              },
              { ir },
            )
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
          ? generateFunction(
              events?.willUnmount,
              {
                name: ir.platform,
              },
              { ir },
            )
          : '',
        linkAfter: [REACT_CHUNK_NAME.WillUnmountStart],
      });

      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: REACT_CHUNK_NAME.DidMountContent,
        content: events?.useEffect
          ? generateFunction(
              events.useEffect,
              {
                name: ir.platform,
              },
              { ir },
            )
          : '',
        linkAfter: [REACT_CHUNK_NAME.DidMountStart],
      });
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;
