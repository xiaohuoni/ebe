import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ICodeStruct,
} from '../../../../../core/types';
import { getImportFrom, getImportsFrom } from '../../../../../utils/depsHelper';

const pluginFactory: BuilderComponentPluginFactory<unknown> = () => {
  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };
    next.ir.deps.push(getImportFrom('alita', 'history'));
    next.ir.deps.push(
      ...getImportsFrom('@lingxiteam/engine-app/es/components/MessageApi', [
        'Modal',
        'messageApi',
      ]),
    );
    next.ir.deps.push(
      ...getImportsFrom('@lingxiteam/engine-app', [
        'createApp',
        'getApis',
        'user',
      ]),
    );
    return next;
  };
  return plugin;
};

export default pluginFactory;
