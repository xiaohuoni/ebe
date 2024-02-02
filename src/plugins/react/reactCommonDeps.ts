import { COMMON_CHUNK_NAME } from '../../core/const/generator';

import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
} from '../../core/types';
import { getImportFrom, getImportsFrom } from '../../utils/depsHelper';

const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
// 注意: 出码模块正在调试
import React from 'react';
// 默认都加，应该用到再加
import Popover from '@/components/Popover';`,
      linkAfter: [],
    });
    // next.ir.deps.push(
    //   ...getImportsFrom('@lingxiteam/engine-command', [
    //     'checkIfCMDHasReturn',
    //     'checkIfRefValue',
    //     'checkIfRefValueByObject',
    //     'CMDParse',
    //     'CONDrun',
    //   ]),
    // );

    // next.ir.deps.push(getImportFrom('@lingxiteam/engine-meta', 'Meta', false));
    // next.ir.deps.push(
    //   getImportFrom('@lingxiteam/engine-plog', 'monitt', false),
    // );
    next.ir.deps.push(...getImportsFrom('react', ['useEffect']));
    next.ir.deps.push(
      ...getImportsFrom('@/utils/withPageHOC', ['PageProps', 'withPageHOC']),
    );
    // next.ir.deps.push(
    //   getImportFrom('@lingxiteam/engine-sandbox', 'Sandbox', false),
    // );
    // next.ir.deps.push(
    //   getImportFrom('@lingxiteam/engine-utils', 'transformValueDefined'),
    // );
    // next.ir.deps.push(
    //   ...getImportsFrom('@lingxiteam/types', [
    //     'SandBoxContext',
    //     '$$compDefine',
    //   ]),
    // );
    return next;
  };
  return plugin;
};

export default pluginFactory;
