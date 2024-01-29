import { IProjectSchema } from './page';
import { ResultDir, ResultFile } from './files';
import type { ProjectBuilderInitOptions } from '../generator/ProjectBuilder';
import { IScopeBindings } from '../utils/ScopeBindings';
import { IParseResult } from './intermediate';
import { IContainerInfo } from './';

export enum FileType {
  CSS = 'css',
  SCSS = 'scss',
  LESS = 'less',
  HTML = 'html',
  JS = 'js',
  MJS = 'mjs',
  JSX = 'jsx',
  TS = 'ts',
  MTS = 'mts',
  TSX = 'tsx',
  JSON = 'json',
  MD = 'md',
}

export enum ChunkType {
  AST = 'ast',
  STRING = 'string',
  JSON = 'json',
}

export enum PluginType {
  COMPONENT = 'component',
  UTILS = 'utils',
  I18N = 'i18n',
}

export type ChunkContent = string | any;
export type CodeGeneratorFunction<T> = (content: T) => string;

export interface ICodeChunk {
  type: ChunkType;
  fileType: string;
  name: string;
  subModule?: string;
  content: ChunkContent;
  linkAfter: string[];
  ext?: Record<string, unknown>;
}

export interface IBaseCodeStruct {
  chunks: ICodeChunk[];
  depNames: string[];
}

export interface ICodeStruct extends IBaseCodeStruct {
  ir: any;
  contextData: IContextData;
}

/** 上下文数据，用来在插件之间共享一些数据 */
export interface IContextData extends IProjectBuilderOptions {
  /**
   * 其他自定义数据
   * （三方自定义插件也可以在此放一些数据，建议起个长一点的名称，用自己的插件名做前缀，以防冲突）
   */
  [key: string]: any;

  /**
   * 是否使用了 Ref 的 API (this.$/this.$$)
   * */
  useRefApi?: boolean;
}

export type BuilderComponentPlugin = (
  initStruct: ICodeStruct,
) => Promise<ICodeStruct>;

export type BuilderComponentPluginFactory<T> = (
  config?: T,
) => BuilderComponentPlugin;

export interface IChunkBuilder {
  run: (
    ir: any,
    initialStructure?: ICodeStruct,
  ) => Promise<{ chunks: ICodeChunk[][] }>;
  getPlugins: () => BuilderComponentPlugin[];
  addPlugin: (plugin: BuilderComponentPlugin) => void;
}

export interface ICodeBuilder {
  link: (chunkDefinitions: ICodeChunk[]) => string;
  generateByType: (type: string, content: unknown) => string;
}

export interface ICompiledModule {
  files: ResultFile[];
}

export interface IModuleBuilder {
  generateModule: (input: unknown) => Promise<ICompiledModule>;
  generateModuleCode: (schema: IProjectSchema | string) => Promise<ResultDir>;
  linkCodeChunks: (
    chunks: Record<string, ICodeChunk[]>,
    fileName: string,
  ) => ResultFile[];
  addPlugin: (plugin: BuilderComponentPlugin) => void;
}

/**
 * 引擎对外接口
 *
 * @export
 * @interface ICodeGenerator
 */
export interface ICodeGenerator {
  /**
   * 出码接口，把 Schema 转换成代码文件系统描述
   *
   * @param {(IProjectSchema)} schema 传入的 Schema
   * @returns {ResultDir}
   * @memberof ICodeGenerator
   */
  toCode: (schema: IProjectSchema) => Promise<ResultDir>;
}

export interface ISchemaParser {
  validate: (schema: IProjectSchema) => boolean;
  parse: (
    schema: IProjectSchema | string,
    options?: LXProjectOptions,
  ) => IParseResult;
}

export interface IProjectTemplate {
  slots: Record<string, IProjectSlot>;
  generateTemplate: (
    data: IParseResult,
    postProcessors: PostProcessor[],
  ) => ResultDir | Promise<ResultDir>;
}

export interface IProjectSlot {
  path: string[];
  fileName?: string;
}

export interface IProjectPlugins {
  [slotName: string]: BuilderComponentPlugin[];
}

export interface LXProjectOptions {
  platform: string;
  appId: string;
  pageIdMapping: any;
  busiCompMapping?: any;
  baseUrl?: string;
}
export interface IProjectBuilderOptions {
  /** 是否处于严格模式 (默认：否) */
  inStrictMode?: boolean;

  /**
   * 是否要容忍对 JSExpression 求值时的异常
   * 默认：true
   * 注：如果容忍异常，则会在求值时包裹 try-catch 块，
   *     catch 到异常时默认会抛出一个 CustomEvent 事件里面包含异常信息和求值的表达式
   */
  tolerateEvalErrors?: boolean;

  /**
   * 容忍异常的时候的的错误处理语句块
   * 默认：无
   * 您可以设置为一个语句块，比如：
   *  window.dispatchEvent(new CustomEvent('lowcode-eval-error', { error, expr }))
   *
   * 一般可以结合埋点监控模块用来监控求值异常
   *
   * 其中：
   * - error: 异常信息
   * - expr: 求值的表达式
   */
  evalErrorsHandler?: string;

  /**
   * Hook which is used to customize original options, we can reorder/add/remove plugins/processors
   * of the existing solution.
   */
  customizeBuilderOptions?(
    originalOptions: ProjectBuilderInitOptions,
  ): ProjectBuilderInitOptions;

  // TODO: 一些平台需要的数据
  options?: LXProjectOptions;
}

export interface IProjectBuilder {
  generateProject: (schema: IProjectSchema | string) => Promise<ResultDir>;
}

/** 项目级别的前置处理器 */
export type ProjectPreProcessor = (
  schema: IProjectSchema,
) => Promise<IProjectSchema> | IProjectSchema;

export interface ProjectPostProcessorOptions {
  parseResult?: IParseResult;
  template?: IProjectTemplate;
}

/** 项目级别的后置处理器 */
export type ProjectPostProcessor = (
  result: ResultDir,
  schema: IProjectSchema,
  originalSchema: IProjectSchema | string,
  options: ProjectPostProcessorOptions,
) => Promise<ResultDir> | ResultDir;

/** 模块级别的后置处理器的工厂方法 */
export type PostProcessorFactory<T> = (config?: T) => PostProcessor;

/** 模块级别的后置处理器 */
export type PostProcessor = (
  content: string,
  fileType: string,
  name?: string,
) => string;

// TODO: temp interface, need modify
export interface IPluginOptions {
  fileDirDepth: number;
}

export type BaseGenerator<I, T, C> = (
  input: I,
  scope: IScope,
  config?: C,
  next?: BaseGenerator<I, T, C>,
) => T;
type CompositeTypeGenerator<I, T> =
  | BaseGenerator<I, T, CompositeValueGeneratorOptions>
  | Array<BaseGenerator<I, T, CompositeValueGeneratorOptions>>;

export type NodeGenerator<T> = (nodeItem: IProjectSchema, scope: IScope) => T;

export interface HandlerSet<T> {
  string?: CompositeTypeGenerator<string, T>;
  boolean?: CompositeTypeGenerator<boolean, T>;
  number?: CompositeTypeGenerator<number, T>;
}

export interface CompositeValueGeneratorOptions {
  handlers?: HandlerSet<string>;
  nodeGenerator?: NodeGenerator<string>;
  tolerateEvalErrors?: boolean;
  // 指令需要操作 import
  ir?: IContainerInfo;
}

/**
 * 作用域定义，维护作用域内定义，支持作用域链上溯
 */
export interface IScope {
  // 父级作用域（如果是根作用域则为 null）
  readonly parent: IScope | null;

  // 作用域内定义的变量/函数等 bindings
  readonly bindings?: IScopeBindings;

  // TODO: 需要有上下文信息吗？ 描述什么内容
  createSubScope: (ownIndentifiers: string[]) => IScope;

  parentType?: string;
}

export interface CMDGeneratorPrames {
  value: any | any[];
  params?: any;
  platform?: string;
  scope?: IScope;
  config?: CompositeValueGeneratorOptions;
}
