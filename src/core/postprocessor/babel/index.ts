import generator from '@babel/generator';
import { PostProcessor, PostProcessorFactory } from '../../types';
import deadCodeElimination from './deadCode';
import { parse } from './parse';
export interface ProcessorConfig {
  customFileTypeParser: Record<string, string>;
}

// TODO: 需不需要 ignore？
// const ignore = ['react'];

const factory: PostProcessorFactory<ProcessorConfig> = (
  config?: ProcessorConfig,
) => {
  const codeRemoveNoUse: PostProcessor = (
    content: string,
    fileType: string,
  ) => {
    if (fileType === 'tsx' || fileType === 'ts') {
      let ast = parse(content);
      deadCodeElimination(ast);
      return generator(ast, {
        retainLines: false,
        sourceMaps: false,
        decoratorsBeforeExport: true,
      }).code;
    }
    return content;
  };

  return codeRemoveNoUse;
};

export default factory;
