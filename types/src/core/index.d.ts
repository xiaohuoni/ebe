import { createProjectBuilder } from './generator/ProjectBuilder';
import { createModuleBuilder } from './generator/ModuleBuilder';
import * as globalUtils from './utils';
import * as CONSTANTS from './const';
declare const _default: {
    createProjectBuilder: typeof createProjectBuilder;
    createModuleBuilder: typeof createModuleBuilder;
    solutions: {};
    solutionParts: {};
    publishers: {
        disk: import("./types").PublisherFactory<import("./publisher/disk").IDiskFactoryParams, import("./publisher/disk").IDiskPublisher>;
        zip: import("./types").PublisherFactory<import("./publisher/zip").ZipFactoryParams, import("./publisher/zip").ZipPublisher>;
    };
    plugins: {
        common: {
            /**
             * 处理 ES Module
             * @deprecated please use esModule
             */
            esmodule: import("./types").BuilderComponentPluginFactory<import("./plugins/common/esmodule").PluginConfig>;
            esModule: import("./types").BuilderComponentPluginFactory<import("./plugins/common/esmodule").PluginConfig>;
            requireUtils: import("./types").BuilderComponentPluginFactory<unknown>;
        };
    };
    postprocessor: {
        prettier: import("./types").PostProcessorFactory<import("./postprocessor/prettier").ProcessorConfig>;
    };
    utils: typeof globalUtils;
    chunkNames: {
        COMMON_CHUNK_NAME: {
            ExternalDepsImport: string;
            InternalDepsImport: string;
            ImportAliasDefine: string;
            FileVarDefine: string;
            FileUtilDefine: string;
            FileMainContent: string;
            FileExport: string;
            StyleDepsImport: string;
            StyleCssContent: string;
            HtmlContent: string;
            CustomContent: string;
        };
        CLASS_DEFINE_CHUNK_NAME: {
            Start: string;
            ConstructorStart: string;
            ConstructorContent: string;
            ConstructorEnd: string;
            StaticVar: string;
            StaticMethod: string;
            InsVar: string;
            InsVarMethod: string;
            InsMethod: string;
            InsPrivateMethod: string;
            End: string;
        };
    };
    defaultLinkAfter: {
        COMMON_DEFAULT_LINK_AFTER: {
            [x: string]: string[];
        };
    };
    constants: typeof CONSTANTS;
};
export default _default;
export * from './types';
export * from './const';
export * from './analyzer/componentAnalyzer';
export * from './generator/ChunkBuilder';
export * from './generator/CodeBuilder';
export * from './generator/ModuleBuilder';
export * from './generator/ProjectBuilder';
