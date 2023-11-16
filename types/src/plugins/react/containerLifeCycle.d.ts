import { BuilderComponentPluginFactory } from '../../core/types';
export interface PluginConfig {
    fileType?: string;
    exportNameMapping?: Record<string, string>;
    normalizeNameMapping?: Record<string, string>;
    exclude?: string[];
}
declare const pluginFactory: BuilderComponentPluginFactory<PluginConfig>;
export default pluginFactory;
