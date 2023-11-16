export declare const getImportFrom: (pkg: string, type: string, destructuring?: boolean, exportName?: string, version?: string, dependencyType?: string) => {
    package: string;
    type: string;
    exportName: string;
    version: string;
    dependencyType: string;
    destructuring: boolean;
};
export declare const getImportsFrom: (pkg: string, types: string[], destructuring?: boolean, _?: string, version?: string, dependencyType?: string) => {
    package: string;
    type: string;
    exportName: string;
    version: string;
    dependencyType: string;
    destructuring: boolean;
}[];
