import { PAGE_TYPES } from '../../constants';
import { CLASS_DEFINE_CHUNK_NAME } from '../../core/const/generator';
import { generateFunction } from '../../core/utils/jsExpression';
import { LIFE_CYCLE_CHUNK_NAME, MODAL_CHUNK_NAME } from './const';

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
            ? `const onOk = async ()=>{ ${generateFunction(
                events?.onOk,
                {
                  name: ir.platform,
                },
                { ir },
              )} }`
            : '',
          linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
        });
        next.chunks.push({
          type: ChunkType.STRING,
          fileType: cfg.fileType,
          name: MODAL_CHUNK_NAME.OnCancel,
          content: events?.onCancel
            ? `const onCancel = async ()=>{ ${generateFunction(
                events?.onCancel,
                {
                  name: ir.platform,
                },
                { ir },
              )} }`
            : '',
          linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
        });
        next.chunks.push({
          type: ChunkType.STRING,
          fileType: cfg.fileType,
          name: LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleContent,
          content: [
            events?.onOk ? 'onOk' : '',
            events?.onCancel ? 'onCancel' : '',
            ir?.customFuctions?.length ? 'customActionMap' : '',
          ]
            .filter(Boolean)
            .join(','),
          linkAfter: [LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleStart],
        });
      } else {
        // 拼接useImperativeHandle
        if (ir?.customFuctions && ir?.customFuctions.length > 0) {
          next.chunks.push({
            type: ChunkType.STRING,
            fileType: cfg.fileType,
            name: LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleContent,
            content: `
              customActionMap,
            `,
            linkAfter: [LIFE_CYCLE_CHUNK_NAME.UseImperativeHandleStart],
          });
        }
      }

      // 页面生命周期
      if (events?.stateChange) {
        next.chunks.push({
          type: ChunkType.STRING,
          fileType: cfg.fileType,
          name: MODAL_CHUNK_NAME.PageStateChange,
          content: `const stateChange = async ()=>{ ${generateFunction(
            events?.stateChange,
            {
              name: ir.platform,
            },
            { ir },
          )} }`,
          linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
        });
      }
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: LIFE_CYCLE_CHUNK_NAME.UseStateUpdateContent,
        content: events?.stateChange ? 'stateChange()' : '',
        linkAfter: [LIFE_CYCLE_CHUNK_NAME.UseStateUpdateStart],
      });

      if (events?.willUnmount) {
        next.chunks.push({
          type: ChunkType.STRING,
          fileType: cfg.fileType,
          name: MODAL_CHUNK_NAME.PageWillUnmount,
          content: `const willUnmount = async ()=>{ ${generateFunction(
            events?.willUnmount,
            {
              name: ir.platform,
            },
            { ir },
          )} }`,
          linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
        });
      }
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: LIFE_CYCLE_CHUNK_NAME.UseUnMountContent,
        content: events?.willUnmount ? 'willUnmount()' : '',
        linkAfter: [LIFE_CYCLE_CHUNK_NAME.UseUnMountStart],
      });

      if (events?.useEffect) {
        next.chunks.push({
          type: ChunkType.STRING,
          fileType: cfg.fileType,
          name: MODAL_CHUNK_NAME.PageDidMount,
          content: `const didMount = async ()=>{ ${generateFunction(
            events?.useEffect,
            {
              name: ir.platform,
            },
            { ir },
          )} }`,
          linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
        });
      }
      next.chunks.push({
        type: ChunkType.STRING,
        fileType: cfg.fileType,
        name: LIFE_CYCLE_CHUNK_NAME.UseMountContent,
        content: events?.useEffect ? 'didMount()' : '',
        linkAfter: [LIFE_CYCLE_CHUNK_NAME.UseMountStart],
      });
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;
