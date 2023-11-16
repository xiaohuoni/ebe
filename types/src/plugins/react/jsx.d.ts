import { BuilderComponentPluginFactory, NodePlugin } from '../../core/types';
export interface PluginConfig {
    fileType?: string;
    nodeTypeMapping?: Record<string, string>;
    nodePlugins?: NodePlugin[];
}
declare const pluginFactory: BuilderComponentPluginFactory<PluginConfig>;
export default pluginFactory;
