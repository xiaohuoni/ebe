import { NodeGenerator, NodeGeneratorConfig } from '../types';
export declare function isPureString(v: string): boolean;
export declare function createNodeGenerator(cfg?: NodeGeneratorConfig): NodeGenerator<string>;
export declare function createReactNodeGenerator(cfg?: NodeGeneratorConfig): NodeGenerator<string>;
