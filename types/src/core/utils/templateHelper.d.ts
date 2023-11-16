import { ResultDir, ResultFile } from '../types';
type FuncFileGenerator = () => [string[], ResultFile];
export declare function insertFile(root: ResultDir, path: string[], file: ResultFile): void;
export declare function runFileGenerator(root: ResultDir, fun: FuncFileGenerator): void;
export {};
