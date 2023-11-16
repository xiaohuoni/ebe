import hackEngineApis from './hooks/hackEngineApis';
declare const _default: {
    template: import("../../../../core").IProjectTemplate;
    plugins: {
        packageJSON: import("../../../../core").BuilderComponentPluginFactory<any>;
        mobileLayout: import("../../../../core").BuilderComponentPluginFactory<import("./plugins/mobileLayout").PluginConfig>;
        commonDeps: import("../../../../core").BuilderComponentPluginFactory<unknown>;
    };
    hooks: {
        hackEngineApis: typeof hackEngineApis;
    };
};
export default _default;
