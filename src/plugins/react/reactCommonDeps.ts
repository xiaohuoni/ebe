import { COMMON_CHUNK_NAME } from '../../core/const/generator';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../core/types';
import { getImportFrom, getImportsFrom } from '../../utils/depsHelper';
import { shouldUsedGlobalData } from '../../utils/globalDataSource/general';
import { isBOFramer } from '../../utils/schema/getBusiCompName';

const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IContainerInfo;

    next.chunks.push({
      type: ChunkType.STRING,
      fileType: FileType.TSX,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
// 注意: 出码模块正在调试
import React, { useImperativeHandle, useEffect, useRef } from 'react';
import moment from 'moment';
import Popover from '@/components/common/Popover';
import _ from 'lodash';
import ArrayUtil from '@/utils/array';
import { api } from '@/services/api';
import classNames from 'classnames';
`,

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
    // next.ir.deps.push(...getImportsFrom('react', ['useEffect']));
    next.ir.deps.push(
      ...getImportsFrom('@/utils/withPageHOC', ['PageProps', 'withPageHOC']),
    );
    next.ir.deps.push(
      ...getImportsFrom('@/utils/messageApi', ['messageApi', 'Spin']),
    );
    next.ir.deps.push(...getImportsFrom('@/utils/useTool', ['useTool']));
    next.ir.deps.push(
      getImportFrom('@/utils/customFuncMapping', 'customFuncMapping', false),
    );
    next.ir.deps.push(
      ...getImportsFrom('@/utils/customFuncMapping', ['createRenderId']),
    );
    next.ir.deps.push(
      ...getImportsFrom('@/utils/platform', [
        'previewFile',
        'saveBlobFile',
        'batchDownloadFileByIds',
        'downloadByFileCode',
      ]),
    );
    next.ir.deps.push(
      ...getImportsFrom('@/utils/historytool', ['historytool', 'HISTORYTYPES']),
    );

    if (shouldUsedGlobalData(ir.globalDataSource)) {
      next.ir.deps.push(
        getImportFrom('./useGlobalData', 'useGlobalData', false),
      );
    }

    next.ir.deps.push(getImportFrom('./useDataSource', 'useDataSource', false));

    next.ir.deps.push(getImportFrom('@/utils/uid', 'getUid', true));
    next.ir.deps.push(
      getImportFrom(
        '@/hooks/useTransSuperObjectParams',
        'useTransSuperObjectParams',
        false,
      ),
    );
    next.ir.deps.push(getImportFrom('@/utils/attrSpecPage', 'appInfo', true));

    if (isBOFramer(next.ir)) {
      next.ir.deps.push(
        getImportFrom('@/hooks/useLifeCycle', 'useShouldVisible', true),
      );
    }

    return next;
  };
  return plugin;
};

export default pluginFactory;
