import type { IProjectSchema, ResultDir } from './core';
import type { FlattenFile } from './core/types/file';
export declare const DEFAULT_WORKER_JS = "https://cdn.jsdelivr.net/npm/ebe@latest/lib/worker.js";
export declare const DEFAULT_TIMEOUT_IN_MS: number;
export declare function init({ workerJsUrl, }?: {
    workerJsUrl?: string;
}): Promise<void>;
export type Result = ResultDir | FlattenFile[];
export declare function generateCode(options: {
    solution: 'alita';
    schema: IProjectSchema;
    flattenResult?: boolean;
    workerJsUrl?: string;
    timeoutInMs?: number;
}): Promise<Result>;
