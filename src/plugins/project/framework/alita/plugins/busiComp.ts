import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  FileType,
  ICodeStruct,
  IContainerInfo,
} from '../../../../../core/types';
import { getImportFrom } from '../../../../../utils/depsHelper';
import { getBusiCompName } from '../../../../../utils/schema/getBusiCompName';

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
        const name = getBusiCompName({}, item);
        next.ir.deps.push(getImportFrom(`@/components/${name}`, name, false));
      });
    }
    return next;
  };
  return plugin;
};

export default pluginFactory;
