import {
  BuilderComponentPlugin,
  BuilderComponentPluginFactory,
  ChunkType,
  FileType,
  ICodeStruct,
  IContainerInfo,
  IScope,
  NodeGeneratorConfig,
  NodePlugin,
} from '../../core/types';
import { createReactNodeGenerator } from '../../core/utils/nodeToJSX';
import { Scope } from '../../core/utils/Scope';
import { REACT_CHUNK_NAME } from './const';

export interface PluginConfig {
  fileType?: string;
  nodeTypeMapping?: Record<string, string>;
  nodePlugins?: NodePlugin[];
}

const pluginFactory: BuilderComponentPluginFactory<PluginConfig> = (
  config?,
) => {
  const cfg = {
    fileType: FileType.TSX,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    nodeTypeMapping: {} as Record<string, string>,
    ...config,
  };

  const { nodeTypeMapping } = cfg;

  const plugin: BuilderComponentPlugin = async (pre: ICodeStruct) => {
    const next: ICodeStruct = {
      ...pre,
    };

    const ir = next.ir as IContainerInfo;
    const generatorPlugins: NodeGeneratorConfig = {
      ...cfg,
      tagMapping: (v) => nodeTypeMapping[v] || v,
      ...next.contextData,
      ir,
    };
    const generator = createReactNodeGenerator(generatorPlugins);

    const scope: IScope = Scope.createRootScope();
    const jsxContent = generator(ir, scope);

    // next.ir.deps.push(getImportFrom('react', 'useRef'));
    next.chunks.push({
      type: ChunkType.STRING,
      fileType: cfg.fileType,
      name: REACT_CHUNK_NAME.RenderJSX,
      content: `${jsxContent}`,
      linkAfter: [REACT_CHUNK_NAME.RenderStart, REACT_CHUNK_NAME.RenderPre],
    });

    return next;
  };
  return plugin;
};

export default pluginFactory;
