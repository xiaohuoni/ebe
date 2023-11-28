import { MOBILE_CHUNK_NAME } from './const';
import { REACT_CHUNK_NAME } from '../../../../react/const';
import { generateFunction } from '../../../../../core/utils/jsExpression';
import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../../../../core/types';
import { getImportFrom } from '../../../../../utils/depsHelper';

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
    if (ir?.busiComp) {
      Object.keys(ir.busiComp).forEach((key) => {
        const item = ir.busiComp[key];
        next.ir.deps.push(
          getImportFrom(
            `@/components/BusiComp${item?.id}`,
            `BusiComp${item?.id}`,
            false,
          ),
        );
      });
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;
